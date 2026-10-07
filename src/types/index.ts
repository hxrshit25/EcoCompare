export type ProductCategory = 
  | 'Electronics'
  | 'Clothing'
  | 'Personal Care'
  | 'Food & Beverages'
  | 'Home & Kitchen'
  | 'Stationery'
  | 'Transportation'
  | 'Packaging'
  | 'Cleaning & Household';

export interface MaterialComponent {
  name: string;
  percentage: number;
  isRecycled?: boolean;
  isRenewable?: boolean;
  color?: string;
}

export interface LifecycleStage {
  stage: 'Raw Materials' | 'Manufacturing' | 'Transportation' | 'Usage' | 'End of Life';
  impactKgCO2: number;
  percentage: number;
  notes: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  verified: boolean;
  tier?: string;
  description: string;
}

export interface GreenwashingClaim {
  id: string;
  claim: string;
  status: 'Verified' | 'Potentially Misleading' | 'Needs Evidence';
  analysis: string;
}

export interface GreenAlternative {
  productId: string;
  name: string;
  brand: string;
  price: number;
  greenScore: number;
  carbonReductionPercent: number;
  plasticReductionPercent?: number;
  lifespanMultiplier?: number;
  reason: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subcategory?: string;
  imageUrl: string;
  image?: string; // alias for scalable architecture
  price: number;
  currency?: string; // '₹' Indian Rupee
  isFeatured?: boolean;
  description?: string; // alias for scoreExplanation
  
  // Scoring dimensions (0 - 100)
  greenScore: number; // 0-100 computed
  grade: 'A+' | 'A' | 'B' | 'C' | 'D' | 'E';
  
  subscores: {
    carbonImpact: number;    // Weight: 25%
    materials: number;       // Weight: 15%
    durability: number;      // Weight: 15%
    recyclability: number;   // Weight: 15%
    packaging: number;       // Weight: 10%
    repairability: number;   // Weight: 10%
    certifications: number;  // Weight: 10%
  };

  scoreExplanation: string;
  
  // Environmental Impact
  carbonFootprintKg: number; // kg CO2e
  carbonFootprint?: number;  // alias
  conventionalCarbonKg: number; // benchmark conventional alternative
  waterFootprintLiters: number;
  waterUsage?: number;       // alias
  energyUsage: 'Low' | 'Medium' | 'High';
  wasteGeneration: 'Low' | 'Medium' | 'High';
  expectedLifespanYears: number;
  lifespan?: number;         // alias
  durability?: number;       // alias to subscores.durability
  recyclability?: number;    // alias to subscores.recyclability
  repairability?: number;    // alias to subscores.repairability
  
  // Manufacturing & Composition
  manufacturingCountry: string;
  renewableEnergyPercent: number;
  materialsBreakdown: MaterialComponent[];
  materials?: MaterialComponent[]; // alias
  lifecycleStages: LifecycleStage[];
  packagingType: string;
  packaging?: string;        // alias
  packagingPlasticFree: boolean;
  
  // Certifications & Claims
  certifications: CertificationItem[];
  greenwashingClaims: GreenwashingClaim[];
  
  // Alternatives & Highlights
  greenerAlternatives: GreenAlternative[];
  keyStrengths: string[];
  areasToImprove: string[];

  // Data Credibility & Source Tracking
  sustainabilityStatus?: 'Verified' | 'Estimated' | 'Not Available';
  dataSource?: string;
  dataConfidence?: 'High' | 'Medium' | 'Preliminary';
  createdAt?: string;
  updatedAt?: string;
}

export interface PriorityWeights {
  environmentalImpact: number; // 1 to 5
  price: number;              // 1 to 5
  durability: number;         // 1 to 5
  materials: number;          // 1 to 5
  recyclability: number;      // 1 to 5
}

export interface CalculatorInputs {
  productsPerMonth: number;
  singleUsePlasticsPerWeek: number;
  clothingPurchasesPerYear: number;
  electricityKwhMonthly: number;
  commuteKmWeekly: number;
  reusableHabitFrequency: 'Rarely' | 'Sometimes' | 'Often' | 'Always';
  foodDiet: 'Heavy Meat' | 'Average Omnivore' | 'Flexitarian' | 'Plant-forward' | 'Strict Vegan';
}

export interface CalculatorResult {
  currentScore: number;
  potentialScore: number;
  estimatedAnnualCO2Kg: number;
  potentialCO2SavedKg: number;
  annualPlasticAvoidedUnits: number;
  topRecommendations: {
    category: string;
    action: string;
    estimatedImpactKgCO2: number;
    recommendedProduct?: string;
  }[];
}

export interface ComparisonHistoryEntry {
  id: string;
  timestamp: string;
  productIds: string[];
  productNames: string[];
  recommendedProductId: string;
}

export interface EducationalTopic {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  summary: string;
  keyPoints: string[];
  example: string;
  takeaway: string;
}
