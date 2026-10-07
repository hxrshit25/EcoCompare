import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { CalculatorInputs } from '../types';
import { runSustainabilityCalculator } from '../utils/scoring';
import { 
  Calculator, 
  Leaf, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  Droplets, 
  ShoppingBag, 
  Car, 
  Coffee,
  CheckCircle2
} from 'lucide-react';

export const CalculatorView: React.FC = () => {
  const { setActiveView } = useApp();

  const [inputs, setInputs] = useState<CalculatorInputs>({
    productsPerMonth: 8,
    singleUsePlasticsPerWeek: 6,
    clothingPurchasesPerYear: 14,
    electricityKwhMonthly: 420,
    commuteKmWeekly: 120,
    reusableHabitFrequency: 'Sometimes',
    foodDiet: 'Average Omnivore'
  });

  const results = useMemo(() => {
    return runSustainabilityCalculator(inputs);
  }, [inputs]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
          <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Interactive Consumer Telemetry</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white">
          What&apos;s Your Environmental Impact?
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Input your typical monthly habits to calculate your estimated annual emissions footprint and see how swapping to circular products accelerates your score.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xs space-y-6">
          <h2 className="text-base font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-slate-800">
            Consumer Consumption Profile
          </h2>

          {/* Slider 1: Retail Products */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <ShoppingBag className="w-4 h-4 text-emerald-600" />
                <span>Physical Products Purchased Monthly:</span>
              </span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{inputs.productsPerMonth} items/mo</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={inputs.productsPerMonth}
              onChange={(e) => setInputs({ ...inputs, productsPerMonth: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Slider 2: Single-use plastics */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-sky-600" />
                <span>Single-Use Plastic Bottles / Containers Weekly:</span>
              </span>
              <span className="font-bold text-sky-600 dark:text-sky-400">{inputs.singleUsePlasticsPerWeek} units/wk</span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              value={inputs.singleUsePlasticsPerWeek}
              onChange={(e) => setInputs({ ...inputs, singleUsePlasticsPerWeek: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Slider 3: Clothing per year */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>New Garment / Apparel Purchases Annually:</span>
              </span>
              <span className="font-bold text-teal-600 dark:text-teal-400">{inputs.clothingPurchasesPerYear} garments/yr</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              value={inputs.clothingPurchasesPerYear}
              onChange={(e) => setInputs({ ...inputs, clothingPurchasesPerYear: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Slider 4: Electricity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>Household Monthly Electricity (kWh):</span>
              </span>
              <span className="font-bold text-amber-600 dark:text-amber-400">{inputs.electricityKwhMonthly} kWh/mo</span>
            </div>
            <input
              type="range"
              min="100"
              max="1200"
              step="20"
              value={inputs.electricityKwhMonthly}
              onChange={(e) => setInputs({ ...inputs, electricityKwhMonthly: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Slider 5: Commute */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-indigo-600" />
                <span>Weekly Commute Distance (km by personal transit):</span>
              </span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{inputs.commuteKmWeekly} km/wk</span>
            </div>
            <input
              type="range"
              min="0"
              max="400"
              step="10"
              value={inputs.commuteKmWeekly}
              onChange={(e) => setInputs({ ...inputs, commuteKmWeekly: Number(e.target.value) })}
              className="w-full accent-emerald-600 cursor-pointer"
            />
          </div>

          {/* Select: Diet */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
              Dietary Profile:
            </label>
            <select
              value={inputs.foodDiet}
              onChange={(e: any) => setInputs({ ...inputs, foodDiet: e.target.value })}
              className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-600"
            >
              <option value="Heavy Meat">Heavy Meat Diet (Daily beef & pork)</option>
              <option value="Average Omnivore">Average Omnivore (Moderate poultry & meat)</option>
              <option value="Flexitarian">Flexitarian (Primarily plant, occasional meat)</option>
              <option value="Plant-forward">Plant-forward / Vegetarian</option>
              <option value="Strict Vegan">Strict Vegan</option>
            </select>
          </div>

          {/* Select: Reusable Habit Frequency */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 dark:text-gray-300 block">
              Frequency of Using Reusable Bags, Cups & Water Bottles:
            </label>
            <select
              value={inputs.reusableHabitFrequency}
              onChange={(e: any) => setInputs({ ...inputs, reusableHabitFrequency: e.target.value })}
              className="w-full bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-emerald-600"
            >
              <option value="Rarely">Rarely (Almost never carry reusables)</option>
              <option value="Sometimes">Sometimes (Occasionally remember bottle or bag)</option>
              <option value="Often">Often (Usually bring reusable bottle & coffee tumbler)</option>
              <option value="Always">Always (Dedicated zero-waste kit)</option>
            </select>
          </div>

        </div>

        {/* Right Output Dashboard Column */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Score Results Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white shadow-xl border border-emerald-800/40 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Score Comparison
              </span>
              <span className="text-xs text-slate-400">Annual Projection</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400 font-medium">Current Score</div>
                <div className="text-4xl font-black text-white mt-1">{results.currentScore}</div>
                <div className="text-[11px] text-amber-400 mt-1 font-semibold">
                  {results.currentScore >= 75 ? 'Good' : 'Needs Optimization'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="text-xs text-emerald-300 font-medium">Potential Score</div>
                <div className="text-4xl font-black text-emerald-400 mt-1">{results.potentialScore}</div>
                <div className="text-[11px] text-emerald-300 mt-1 font-bold flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+{results.potentialScore - results.currentScore} pts feasible</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                <span className="text-slate-300">Estimated Annual Footprint:</span>
                <span className="font-bold text-white">{results.estimatedAnnualCO2Kg.toLocaleString()} kg CO₂e</span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                <span className="text-emerald-300">Potential CO₂ Reduction:</span>
                <span className="font-bold text-emerald-400">-{results.potentialCO2SavedKg.toLocaleString()} kg CO₂e</span>
              </div>

              <div className="flex justify-between items-center py-1.5">
                <span className="text-sky-300">Annual Plastics Diverted:</span>
                <span className="font-bold text-sky-400">~{results.annualPlasticAvoidedUnits.toLocaleString()} single-use units</span>
              </div>
            </div>
          </div>

          {/* Personalized Suggestions */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>High-Impact Swaps for You</span>
            </h3>

            <div className="space-y-3">
              {results.topRecommendations.map((rec, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-slate-950/60 border border-gray-100 dark:border-slate-800 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">{rec.category}</span>
                    <span className="font-bold text-gray-900 dark:text-white">-{rec.estimatedImpactKgCO2} kg CO₂</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{rec.action}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveView('explore')}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
            >
              <span>Explore Recommended Circular Swaps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
