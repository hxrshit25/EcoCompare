import { Product, PriorityWeights, CalculatorInputs, CalculatorResult } from '../types';

export function calculateGrade(score: number): 'A+' | 'A' | 'B' | 'C' | 'D' | 'E' {
  if (score >= 90) return 'A+';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  if (score >= 50) return 'D';
  return 'E';
}

export function computeGreenScore(subscores: Product['subscores']): number {
  const score = (
    subscores.carbonImpact * 0.25 +
    subscores.materials * 0.15 +
    subscores.durability * 0.15 +
    subscores.recyclability * 0.15 +
    subscores.packaging * 0.10 +
    subscores.repairability * 0.10 +
    subscores.certifications * 0.10
  );
  return Math.round(score * 10) / 10;
}

export interface MetricComparisonResult {
  metricKey: string;
  label: string;
  unit?: string;
  values: { productId: string; rawValue: number | string; status: 'best' | 'average' | 'worst' }[];
}

export function evaluateMetricComparison(
  products: Product[],
  extractor: (p: Product) => number,
  lowerIsBetter: boolean
): Record<string, 'best' | 'average' | 'worst'> {
  if (products.length <= 1) {
    return { [products[0]?.id || '']: 'best' };
  }

  const values = products.map(p => ({ id: p.id, val: extractor(p) }));
  const numericValues = values.map(v => v.val);
  const minVal = Math.min(...numericValues);
  const maxVal = Math.max(...numericValues);

  const bestVal = lowerIsBetter ? minVal : maxVal;
  const worstVal = lowerIsBetter ? maxVal : minVal;

  const result: Record<string, 'best' | 'average' | 'worst'> = {};
  values.forEach(v => {
    if (v.val === bestVal) {
      result[v.id] = 'best';
    } else if (v.val === worstVal && minVal !== maxVal) {
      result[v.id] = 'worst';
    } else {
      result[v.id] = 'average';
    }
  });

  return result;
}

export function generateSmartRecommendation(products: Product[], priorities: PriorityWeights) {
  if (products.length === 0) return null;

  // Normalized weights (1 - 5 scale)
  const totalWeight = priorities.environmentalImpact + priorities.price + priorities.durability + priorities.materials + priorities.recyclability;
  const wEnv = priorities.environmentalImpact / totalWeight;
  const wPrice = priorities.price / totalWeight;
  const wDur = priorities.durability / totalWeight;
  const wMat = priorities.materials / totalWeight;
  const wRec = priorities.recyclability / totalWeight;

  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price)) || 1;

  const scoredProducts = products.map(p => {
    // Price score (lower price = higher score 0 to 100)
    const priceScore = maxPrice === minPrice ? 100 : Math.max(0, 100 - ((p.price - minPrice) / (maxPrice - minPrice)) * 100);
    
    // Weighted aggregate score
    const weightedScore = (
      p.greenScore * wEnv +
      priceScore * wPrice +
      p.subscores.durability * wDur +
      p.subscores.materials * wMat +
      p.subscores.recyclability * wRec
    );

    return { product: p, score: weightedScore, priceScore };
  });

  scoredProducts.sort((a, b) => b.score - a.score);

  const recommended = scoredProducts[0].product;

  // Categorical Champions
  const bestForEnvironment = [...products].sort((a, b) => b.greenScore - a.greenScore)[0];
  const lowestCarbon = [...products].sort((a, b) => a.carbonFootprintKg - b.carbonFootprintKg)[0];
  const mostDurable = [...products].sort((a, b) => b.subscores.durability - a.subscores.durability)[0];
  const mostRecyclable = [...products].sort((a, b) => b.subscores.recyclability - a.subscores.recyclability)[0];
  const bestValue = [...products].sort((a, b) => (b.greenScore / b.price) - (a.greenScore / a.price))[0];

  // Calculate carbon difference vs worst carbon product in comparison
  const highestCarbon = [...products].sort((a, b) => b.carbonFootprintKg - a.carbonFootprintKg)[0];
  const carbonDelta = Math.max(0, Number((highestCarbon.carbonFootprintKg - recommended.carbonFootprintKg).toFixed(1)));
  const percentLowerCarbon = highestCarbon.carbonFootprintKg > 0 
    ? Math.round((carbonDelta / highestCarbon.carbonFootprintKg) * 100)
    : 0;

  return {
    recommended,
    bestOverall: recommended,
    bestForEnvironment,
    lowestCarbon,
    mostDurable,
    mostRecyclable,
    bestValue,
    carbonDelta,
    percentLowerCarbon,
    comparisonBenchmarkProduct: highestCarbon,
    reasoning: generateReasoningText(recommended, priorities, percentLowerCarbon, carbonDelta)
  };
}

function generateReasoningText(
  product: Product, 
  priorities: PriorityWeights, 
  percentLowerCarbon: number, 
  carbonDelta: number
): string {
  if (priorities.price > 4) {
    return `${product.name} achieves the strongest balance of accessible price and verified sustainable construction, providing top durability without premium markup.`;
  }
  if (priorities.durability > 4) {
    return `${product.name} leads with a ${product.expectedLifespanYears}-year design life and modular repairability, avoiding repeat replacements over time.`;
  }
  if (percentLowerCarbon > 0) {
    return `${product.name} emits ${percentLowerCarbon}% less lifecycle carbon (${carbonDelta} kg CO₂e saved) while maintaining superior materials and ethical manufacturing standards.`;
  }
  return `${product.name} is the top recommendation based on its comprehensive Green Score of ${product.greenScore}/100 and clean material composition.`;
}

export function runSustainabilityCalculator(inputs: CalculatorInputs): CalculatorResult {
  // Baseline consumption formulas
  const baseProductCarbon = inputs.productsPerMonth * 12 * 9.5; // ~9.5kg per retail product avg
  const plasticCarbon = inputs.singleUsePlasticsPerWeek * 52 * 0.12; // ~0.12kg CO2e per bottle/wrapper
  const clothingCarbon = inputs.clothingPurchasesPerYear * 18.0; // ~18kg CO2e per garment
  const electricityCarbon = inputs.electricityKwhMonthly * 12 * 0.385; // ~0.385kg CO2e/kWh US avg
  const commuteCarbon = inputs.commuteKmWeekly * 52 * 0.192; // ~0.192kg CO2e/km gasoline car avg

  const dietMultiplier = {
    'Heavy Meat': 1.45,
    'Average Omnivore': 1.0,
    'Flexitarian': 0.72,
    'Plant-forward': 0.55,
    'Strict Vegan': 0.42
  }[inputs.foodDiet];

  const foodCarbon = 2100 * dietMultiplier;

  const reusableFactor = {
    'Rarely': 1.15,
    'Sometimes': 0.95,
    'Often': 0.75,
    'Always': 0.55
  }[inputs.reusableHabitFrequency];

  const totalAnnualCarbonKg = Math.round((baseProductCarbon + plasticCarbon + clothingCarbon + electricityCarbon + commuteCarbon + foodCarbon) * reusableFactor);

  // Score from 0 to 100 (national avg US ~14,000kg, ideal target < 3,000kg)
  const currentScore = Math.max(15, Math.min(95, Math.round(100 - ((totalAnnualCarbonKg - 2500) / 12000) * 80)));
  
  // Potential with green swaps: -38% average feasible reduction
  const potentialScore = Math.min(96, Math.round(currentScore + 28));
  const potentialCO2SavedKg = Math.round(totalAnnualCarbonKg * 0.38);
  const annualPlasticAvoidedUnits = Math.round(inputs.singleUsePlasticsPerWeek * 52 * 0.85);

  const topRecommendations = [
    {
      category: 'Everyday Reusables',
      action: 'Replace disposable bottles & bags with 100% circular stainless steel and silicone alternatives',
      estimatedImpactKgCO2: Math.round(plasticCarbon * 0.85 + 45),
      recommendedProduct: 'Hydro Flask Trail Pro 32oz'
    },
    {
      category: 'Electronics Lifespan',
      action: 'Choose modular repairable tech to extend laptop and phone replacement cycles by 4+ years',
      estimatedImpactKgCO2: 180,
      recommendedProduct: 'Framework Modular Laptop 13'
    },
    {
      category: 'Circular Fashion',
      action: 'Switch 4 apparel purchases per year to GOTS organic and recycled circular fibers',
      estimatedImpactKgCO2: 72,
      recommendedProduct: 'Patagonia NetPlus® Down Puffer'
    }
  ];

  return {
    currentScore,
    potentialScore,
    estimatedAnnualCO2Kg: totalAnnualCarbonKg,
    potentialCO2SavedKg,
    annualPlasticAvoidedUnits,
    topRecommendations
  };
}
