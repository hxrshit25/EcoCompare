import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. ELECTRONICS
  {
    id: 'fairphone-5',
    name: 'Fairphone 5 Modular 5G Smartphone',
    brand: 'Fairphone',
    category: 'Electronics',
    subcategory: 'Smartphones',
    imageUrl: '',
    price: 58999,
    currency: '₹',
    isFeatured: true,
    greenScore: 94.5,
    grade: 'A+',
    subscores: {
      carbonImpact: 92,
      materials: 94,
      durability: 98,
      recyclability: 93,
      packaging: 96,
      repairability: 100,
      certifications: 95
    },
    scoreExplanation: 'Fairphone 5 achieves an A+ (94.5/100) due to exceptional 10/10 repairability with 10 swappable modules, fair-mined artisan cobalt & gold bonuses, and an 8-year guaranteed software lifespan that avoids early obsolescence.',
    carbonFootprintKg: 32.5,
    conventionalCarbonKg: 84.0,
    waterFootprintLiters: 1250,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 8.0,
    manufacturingCountry: 'Taiwan (Solar-powered assembly)',
    renewableEnergyPercent: 100,
    materialsBreakdown: [
      { name: 'Fairly Mined Gold & Cobalt', percentage: 22, isRenewable: false, color: '#f59e0b' },
      { name: 'Post-Consumer Recycled Plastics', percentage: 48, isRecycled: true, color: '#10b981' },
      { name: '100% Recycled Aluminium Frame', percentage: 20, isRecycled: true, color: '#06b6d4' },
      { name: 'Copper & Trace Glass', percentage: 10, isRecycled: false, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 17.5, percentage: 54, notes: 'Direct trade with certified fair ASM mines in DRC' },
      { stage: 'Manufacturing', impactKgCO2: 8.2, percentage: 25, notes: '100% renewable electricity in final device assembly' },
      { stage: 'Transportation', impactKgCO2: 2.8, percentage: 9, notes: 'Sea and rail transit prioritized over air freight' },
      { stage: 'Usage', impactKgCO2: 2.5, percentage: 8, notes: 'Ultra-low standby battery draw with Android 14' },
      { stage: 'End of Life', impactKgCO2: 1.5, percentage: 4, notes: 'Electronic waste neutral: 1 retired phone recycled per unit sold' }
    ],
    packagingType: '100% Plastic-free FSC unbleached carton printed with soy ink',
    packagingPlasticFree: true,
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold Ecolabel', issuer: 'Global Electronics Council', verified: true, tier: 'Tier 1', description: 'Highest electronic circularity and low toxicity verification.' },
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Exemplary legal accountability and environmental standards.' },
      { id: 'fairtrade-gold', name: 'Fairtrade Gold Standard', issuer: 'Fairtrade International', verified: true, description: 'Premium living wages paid to small-scale miners.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% E-waste Neutral per device sold', status: 'Verified', analysis: 'Audited by Close the Loop; pays for 1 phone recycled in Ghana per phone sold.' },
      { id: 'c2', claim: '70% Fair and Recycled focus materials', status: 'Verified', analysis: '14 key supply chain materials tracked and independently audited via C2C.' },
      { id: 'c3', claim: 'Completely carbon zero lifecycle', status: 'Potentially Misleading', analysis: 'Raw extraction and global transit still generate 32.5 kg CO₂e; neutralized via offsets rather than absolute zero.' }
    ],
    greenerAlternatives: [
      { productId: 'framework-laptop-13', name: 'Framework Laptop 13', brand: 'Framework', price: 89999, greenScore: 92.0, carbonReductionPercent: 48, reason: 'Complementary modular PC ecosystem' }
    ],
    keyStrengths: ['Spare parts available directly with screwdriver', '8-year OS updates guarantee', 'Worker satisfaction living wage bonus'],
    areasToImprove: ['Camera sensor package still relies on non-recycled rare earths'],
    sustainabilityStatus: 'Verified',
    dataSource: 'ISO 14040 Life Cycle Assessment (Fraunhofer IZM Audit)',
    dataConfidence: 'High'
  },
  {
    id: 'framework-laptop-13',
    name: 'Framework Laptop 13 (AMD Ryzen™ 7040)',
    brand: 'Framework Computer',
    category: 'Electronics',
    subcategory: 'Laptops',
    imageUrl: '',
    price: 89999,
    currency: '₹',
    isFeatured: true,
    greenScore: 92.0,
    grade: 'A+',
    subscores: {
      carbonImpact: 88,
      materials: 90,
      durability: 96,
      recyclability: 92,
      packaging: 94,
      repairability: 100,
      certifications: 90
    },
    scoreExplanation: 'Scored 92/100 due to industry-leading modular expansion card architecture, hot-swappable ports, 10/10 iFixit score, and replaceable mainboards that prevent buying new laptops every 3 years.',
    carbonFootprintKg: 148.0,
    conventionalCarbonKg: 310.0,
    waterFootprintLiters: 4200,
    energyUsage: 'Medium',
    wasteGeneration: 'Low',
    expectedLifespanYears: 10.0,
    manufacturingCountry: 'Taiwan',
    renewableEnergyPercent: 78,
    materialsBreakdown: [
      { name: 'Post-Consumer Recycled Aluminium', percentage: 50, isRecycled: true, color: '#06b6d4' },
      { name: 'Recycled PC & ABS Polymers', percentage: 30, isRecycled: true, color: '#10b981' },
      { name: 'Silicon Mainboard Components', percentage: 15, isRecycled: false, color: '#64748b' },
      { name: 'Copper & Solders', percentage: 5, isRecycled: false, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 86.0, percentage: 58, notes: 'Aluminium milled with hydropower; high recycled alloy content' },
      { stage: 'Manufacturing', impactKgCO2: 38.0, percentage: 26, notes: 'Modular click-together assembly minimizes glue adhesives' },
      { stage: 'Transportation', impactKgCO2: 11.5, percentage: 8, notes: 'Direct-to-consumer compact envelope shipping' },
      { stage: 'Usage', impactKgCO2: 8.5, percentage: 6, notes: 'Energy Star 8.0 compliant low idle draw' },
      { stage: 'End of Life', impactKgCO2: 4.0, percentage: 2, notes: 'Chassis can house next-gen Intel or AMD boards for 10+ years' }
    ],
    packagingType: '100% Recycled Molded paper pulp with zero foam cushions',
    packagingPlasticFree: true,
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold Certified', issuer: 'GEC', verified: true, description: 'Certified top repairability, modularity, and eco-design.' },
      { id: 'energy-star', name: 'ENERGY STAR® 8.0', issuer: 'EPA', verified: true, description: 'Meets stringent energy efficiency criteria across all power modes.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '10/10 Perfect Repairability Score', status: 'Verified', analysis: 'Confirmed by independent teardown authorities (iFixit).' },
      { id: 'c2', claim: 'Infinite Lifespan Laptop', status: 'Potentially Misleading', analysis: 'Chassis supports multiple upgrades, but battery and thermal compounds degrade after 4-6 years.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Replaceable mainboard upgrades', 'Standard Philips screws only', 'QR code guides for every part'],
    areasToImprove: ['Display panel adhesive could be replaced with magnetic clips'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Framework LCA Whitepaper & iFixit Score Registry',
    dataConfidence: 'High'
  },
  {
    id: 'apple-iphone-15-eco',
    name: 'Apple iPhone 15 (100% Recycled Cobalt)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Smartphones',
    imageUrl: '',
    price: 69900,
    currency: '₹',
    isFeatured: false,
    greenScore: 88.5,
    grade: 'A',
    subscores: {
      carbonImpact: 86,
      materials: 92,
      durability: 94,
      recyclability: 89,
      packaging: 96,
      repairability: 78,
      certifications: 88
    },
    scoreExplanation: 'Features 100% recycled cobalt in battery, 75% recycled aluminium in chassis, 100% recycled gold in mainboard plating, and assembly powered by 100% renewable electricity supplier contracts.',
    carbonFootprintKg: 56.0,
    conventionalCarbonKg: 89.0,
    waterFootprintLiters: 1100,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 6.0,
    manufacturingCountry: 'India / China (100% Clean Energy)',
    renewableEnergyPercent: 100,
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Enclosure', percentage: 42, isRecycled: true, color: '#06b6d4' },
      { name: '100% Recycled Cobalt Battery', percentage: 28, isRecycled: true, color: '#10b981' },
      { name: 'Ceramic Shield Glass', percentage: 18, isRecycled: false, color: '#64748b' },
      { name: '100% Recycled Rare Earth Magnets', percentage: 12, isRecycled: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 36.0, percentage: 64, notes: 'Recycled cobalt and low-carbon aluminium smelters' },
      { stage: 'Manufacturing', impactKgCO2: 10.5, percentage: 19, notes: 'Supplier Clean Energy Program contracts' },
      { stage: 'Transportation', impactKgCO2: 4.8, percentage: 9, notes: 'Air cargo packaging density optimized by 38%' },
      { stage: 'Usage', impactKgCO2: 3.5, percentage: 6, notes: 'A16 Bionic 4nm energy efficiency' },
      { stage: 'End of Life', impactKgCO2: 1.2, percentage: 2, notes: 'Daisy & Dave disassembly robot material recovery' }
    ],
    packagingType: '100% Fiber-based compact box with zero exterior plastic wrap',
    packagingPlasticFree: true,
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'Global Electronics Council', verified: true, description: 'Audited environmental performance and low hazardous chemical footprint.' },
      { id: 'energy-star', name: 'Energy Star Certified', issuer: 'EPA', verified: true, description: 'Exceeds global battery charger efficiency standards.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Recycled Rare Earth Elements', status: 'Verified', analysis: 'Audited by Bureau Veritas across all Taptic Engine magnets.' }
    ],
    greenerAlternatives: [
      { productId: 'fairphone-5', name: 'Fairphone 5 Modular 5G', brand: 'Fairphone', price: 58999, greenScore: 94.5, carbonReductionPercent: 42, reason: 'Superior modular repairability with user swappable components' }
    ],
    keyStrengths: ['100% recycled cobalt battery', 'Supplier clean energy transition', 'Long iOS update longevity'],
    areasToImprove: ['Display and battery parts pairing requires authorized software tools'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Apple Product Environmental Report (ISO 14040/14044 LCA)',
    dataConfidence: 'High'
  },
  {
    id: 'samsung-galaxy-s24-eco',
    name: 'Samsung Galaxy S24 (Recycled Armor Aluminum)',
    brand: 'Samsung',
    category: 'Electronics',
    subcategory: 'Smartphones',
    imageUrl: '',
    price: 74999,
    currency: '₹',
    isFeatured: false,
    greenScore: 87.0,
    grade: 'A',
    subscores: {
      carbonImpact: 84,
      materials: 90,
      durability: 95,
      recyclability: 88,
      packaging: 94,
      repairability: 76,
      certifications: 86
    },
    scoreExplanation: 'Contains minimum 50% recycled cobalt in battery, recycled discarded fishing nets in speaker modules, and guarantees 7 generations of Android OS upgrades for long-term circularity.',
    carbonFootprintKg: 62.0,
    conventionalCarbonKg: 94.0,
    waterFootprintLiters: 1180,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 7.0,
    manufacturingCountry: 'India / Vietnam',
    renewableEnergyPercent: 82,
    materialsBreakdown: [
      { name: 'Recycled Armor Aluminum', percentage: 40, isRecycled: true, color: '#06b6d4' },
      { name: 'Recycled Cobalt & Rare Earths', percentage: 25, isRecycled: true, color: '#10b981' },
      { name: 'Corning Gorilla Glass Victus 2', percentage: 20, isRecycled: true, color: '#64748b' },
      { name: 'Ocean-Bound Polyamide', percentage: 15, isRecycled: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 41.0, percentage: 66, notes: 'Recycled glass & aluminium smelting reductions' },
      { stage: 'Manufacturing', impactKgCO2: 12.0, percentage: 19, notes: 'Samsung Eco-Management 2030 certified clean facilities' },
      { stage: 'Transportation', impactKgCO2: 4.8, percentage: 8, notes: 'Optimized bulk pallet distribution' },
      { stage: 'Usage', impactKgCO2: 3.2, percentage: 5, notes: 'Adaptive refresh rate reduces battery cycles' },
      { stage: 'End of Life', impactKgCO2: 1.0, percentage: 2, notes: 'Galaxy Upcycling trade-in program' }
    ],
    packagingType: '100% Recycled Paper Packaging with vegetable oil ink',
    packagingPlasticFree: true,
    certifications: [
      { id: 'ul-ecologo', name: 'UL ECOLOGO® Certified', issuer: 'UL Solutions', verified: true, description: 'Validated environmental standards for mobile phones.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Ocean-bound plastic in internal keys', status: 'Verified', analysis: 'Audited by Underwriters Laboratories; min 20% ocean plastic in side key brackets.' }
    ],
    greenerAlternatives: [
      { productId: 'fairphone-5', name: 'Fairphone 5 Modular 5G', brand: 'Fairphone', price: 58999, greenScore: 94.5, carbonReductionPercent: 47, reason: 'Zero glue assembly with modular screwdrivers' }
    ],
    keyStrengths: ['7-year OS updates guarantee', 'Recycled ocean plastics utilized', 'IP68 water resistance durability'],
    areasToImprove: ['Battery replacement requires heat dissolution'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Samsung Electronics Sustainability Report & UL Environmental Declaration',
    dataConfidence: 'High'
  },
  {
    id: 'ecosolix-solar-bank',
    name: 'EcoSolix 24,000mAh Solar LiFePO4 Power Bank',
    brand: 'EcoSolix',
    category: 'Electronics',
    subcategory: 'Power Banks',
    imageUrl: '',
    price: 4499,
    currency: '₹',
    isFeatured: false,
    greenScore: 89.2,
    grade: 'A',
    subscores: {
      carbonImpact: 90,
      materials: 88,
      durability: 95,
      recyclability: 82,
      packaging: 92,
      repairability: 78,
      certifications: 88
    },
    scoreExplanation: 'LiFePO4 battery chemistry guarantees 3,000 charge cycles (6x standard Lithium-ion) with non-toxic iron phosphate cathode, foldout high-efficiency monocrystalline solar panels.',
    carbonFootprintKg: 18.2,
    conventionalCarbonKg: 44.0,
    waterFootprintLiters: 860,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 7.0,
    manufacturingCountry: 'India / Germany',
    renewableEnergyPercent: 85,
    materialsBreakdown: [
      { name: 'Lithium Iron Phosphate (LiFePO4)', percentage: 40, isRenewable: false, color: '#06b6d4' },
      { name: 'Ocean-Bound Recycled Plastic Shell', percentage: 38, isRecycled: true, color: '#10b981' },
      { name: 'Monocrystalline Silicon Panels', percentage: 14, isRenewable: false, color: '#3b82f6' },
      { name: 'Copper & Solder', percentage: 8, isRecycled: false, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 11.2, percentage: 61, notes: 'Cobalt-free LiFePO4 chemistry eliminates artisanal cobalt footprint' },
      { stage: 'Manufacturing', impactKgCO2: 4.8, percentage: 26, notes: 'Solar-powered assembly line clean-room' },
      { stage: 'Transportation', impactKgCO2: 1.1, percentage: 6, notes: 'Bulk sea and road transit' },
      { stage: 'Usage', impactKgCO2: 0.8, percentage: 5, notes: 'Net-positive solar electricity generated over lifecycle' },
      { stage: 'End of Life', impactKgCO2: 0.3, percentage: 2, notes: 'Closed-loop battery return bounty program' }
    ],
    packagingType: '100% Recycled kraft carton with botanical soy inks',
    packagingPlasticFree: true,
    certifications: [
      { id: 'climate-neutral', name: 'Climate Neutral Certified', issuer: 'The Change Climate Project', verified: true, description: '100% cradle-to-customer emissions audited and neutralized.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Cobalt-Free Cathode Chemistry', status: 'Verified', analysis: 'Utilizes certified LiFePO4 without cobalt or nickel oxides.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['3,000+ lifecycle recharge rating', 'No conflict cobalt in battery', 'High-speed solar recharge'],
    areasToImprove: ['Battery replacement requires heat gun to dislodge sealant'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Manufacturer ISO 14040 Life Cycle Assessment',
    dataConfidence: 'High'
  },

  // 2. HOME & KITCHEN (Appliances, Water Bottles, Food Storage)
  {
    id: 'ifb-ecowash-machine',
    name: 'IFB Senorita Eco 5-Star Smart Inverter Washing Machine',
    brand: 'IFB Appliances',
    category: 'Home & Kitchen',
    subcategory: 'Home Appliances',
    imageUrl: '',
    price: 34990,
    currency: '₹',
    isFeatured: false,
    greenScore: 91.2,
    grade: 'A+',
    subscores: {
      carbonImpact: 92,
      materials: 88,
      durability: 96,
      recyclability: 91,
      packaging: 88,
      repairability: 94,
      certifications: 94
    },
    scoreExplanation: 'BEE 5-Star rated with Brushless Inverter Motor consuming 45% less electricity. Features Aqua Energie filter saving 35% water per wash load and 10-year motor warranty with modular replacement parts in India.',
    carbonFootprintKg: 198.0,
    conventionalCarbonKg: 460.0,
    waterFootprintLiters: 3200,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 12.0,
    manufacturingCountry: 'India (Goa Clean Facility)',
    renewableEnergyPercent: 75,
    materialsBreakdown: [
      { name: 'Recycled Stainless Steel Drum', percentage: 48, isRecycled: true, color: '#06b6d4' },
      { name: 'Reinforced Polymer Outer Tub', percentage: 32, isRecycled: true, color: '#10b981' },
      { name: 'Brushless Copper Inverter Motor', percentage: 15, isRecycled: false, color: '#f59e0b' },
      { name: 'Control Electronics', percentage: 5, isRecycled: false, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 95.0, percentage: 48, notes: 'Indian domestic recycled steel used in chassis' },
      { stage: 'Manufacturing', impactKgCO2: 38.0, percentage: 19, notes: 'Zero Liquid Discharge certified factory' },
      { stage: 'Transportation', impactKgCO2: 12.0, percentage: 6, notes: 'Domestic rail container logistics' },
      { stage: 'Usage', impactKgCO2: 48.0, percentage: 24, notes: 'BEE 5-Star low kWh per kg of laundry cycle' },
      { stage: 'End of Life', impactKgCO2: 5.0, percentage: 3, notes: '91% recyclable metallic components at scrap centers' }
    ],
    packagingType: '100% Recycled corrugated cardboard with minimal EPS edge protectors',
    packagingPlasticFree: false,
    certifications: [
      { id: 'bee-5star', name: 'BEE 5-Star Energy Rating', issuer: 'Bureau of Energy Efficiency (India)', verified: true, description: 'Highest energy efficiency classification in India.' },
      { id: 'iso-14001', name: 'ISO 14001 Environmental Management', issuer: 'TÜV NORD', verified: true, description: 'Audited low-waste manufacturing processes.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '35% Water Reduction per cycle', status: 'Verified', analysis: 'Audited against standard non-inverter agitator machines via BEE testing labs.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['10-year motor warranty with readily available local spare parts', 'Aqua Energie water conservation system', 'High domestic Indian repairability'],
    areasToImprove: ['EPS corner foam packaging can be transitioned to molded paper pulp'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Bureau of Energy Efficiency (BEE India) Audit Registry',
    dataConfidence: 'High'
  },
  {
    id: 'milton-thermosteel-bottle',
    name: 'Milton Thermosteel Duo Deluxe 1000ml Insulated Bottle',
    brand: 'Milton',
    category: 'Home & Kitchen',
    subcategory: 'Reusable Bottles & Cookware',
    imageUrl: '',
    price: 899,
    currency: '₹',
    isFeatured: false,
    greenScore: 93.0,
    grade: 'A+',
    subscores: {
      carbonImpact: 94,
      materials: 96,
      durability: 98,
      recyclability: 96,
      packaging: 92,
      repairability: 82,
      certifications: 90
    },
    scoreExplanation: 'Double-wall vacuum insulated 304 food-grade stainless steel bottle. Replaces ~320 single-use plastic bottles annually, keeping beverages hot/cold for 24 hours with a lifetime structural lifespan.',
    carbonFootprintKg: 4.8,
    conventionalCarbonKg: 28.5,
    waterFootprintLiters: 180,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 15.0,
    manufacturingCountry: 'India',
    renewableEnergyPercent: 70,
    materialsBreakdown: [
      { name: '18/8 304 Grade Stainless Steel', percentage: 92, isRecycled: true, color: '#06b6d4' },
      { name: 'Food Grade Silicone Ring', percentage: 5, isRenewable: true, color: '#10b981' },
      { name: 'BPA-Free Polypropylene Lid', percentage: 3, isRecycled: false, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 3.2, percentage: 66, notes: 'Recycled steel content smelted with domestic green power' },
      { stage: 'Manufacturing', impactKgCO2: 1.0, percentage: 21, notes: 'Deep-drawing and vacuum seal annealing' },
      { stage: 'Transportation', impactKgCO2: 0.3, percentage: 7, notes: 'Domestic road and rail shipping' },
      { stage: 'Usage', impactKgCO2: 0.1, percentage: 2, notes: 'Negligible hand wash emissions' },
      { stage: 'End of Life', impactKgCO2: 0.2, percentage: 4, notes: '100% infinite recyclability in metal recycling stream' }
    ],
    packagingType: '100% Recycled kraft paper unbleached box',
    packagingPlasticFree: true,
    certifications: [
      { id: 'bis-isi', name: 'BIS ISI Certified Steel', issuer: 'Bureau of Indian Standards', verified: true, description: 'Food safety and non-toxic metallurgy verification.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '24 Hours Temperature Retention', status: 'Verified', analysis: 'Tested under NABL accredited temperature drop tests.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Eliminates 300+ plastic bottles per year', 'Indestructible stainless steel build', 'BPA-free non-toxic internal chamber'],
    areasToImprove: ['Replacement silicone rings should be offered as standalone accessories'],
    sustainabilityStatus: 'Verified',
    dataSource: 'BIS Standards & Life Cycle Assessment Model',
    dataConfidence: 'High'
  },
  {
    id: 'hydro-flask-trail',
    name: 'Hydro Flask Trail Series Ultralight 32oz',
    brand: 'Hydro Flask',
    category: 'Home & Kitchen',
    subcategory: 'Reusable Bottles & Cookware',
    imageUrl: '',
    price: 3499,
    currency: '₹',
    isFeatured: true,
    greenScore: 92.5,
    grade: 'A+',
    subscores: {
      carbonImpact: 92,
      materials: 94,
      durability: 96,
      recyclability: 95,
      packaging: 94,
      repairability: 82,
      certifications: 92
    },
    scoreExplanation: 'Ultralight titanium-thin tapered stainless steel walls save 25% metal weight while providing pro-grade vacuum insulation. Climate Neutral certified with full cradle-to-grave emissions offset.',
    carbonFootprintKg: 5.2,
    conventionalCarbonKg: 29.0,
    waterFootprintLiters: 210,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 12.0,
    manufacturingCountry: 'USA / Asia',
    renewableEnergyPercent: 80,
    materialsBreakdown: [
      { name: 'Pro-Grade 18/8 Stainless Steel', percentage: 92, isRecycled: true, color: '#06b6d4' },
      { name: 'BPA-Free Polypropylene & Food Silicone Ring', percentage: 8, isRecycled: false, color: '#10b981' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 3.4, percentage: 65, notes: 'Thin-wall spinning reduces steel mass by 25%' },
      { stage: 'Manufacturing', impactKgCO2: 1.1, percentage: 21, notes: 'Solvent-free powder coating process' },
      { stage: 'Transportation', impactKgCO2: 0.4, percentage: 8, notes: 'Air and ocean consolidated freight' },
      { stage: 'Usage', impactKgCO2: 0.1, percentage: 2, notes: 'Hand washable' },
      { stage: 'End of Life', impactKgCO2: 0.2, percentage: 4, notes: 'Metal easily recycled at curb' }
    ],
    packagingType: 'Recycled paper hanger tag with soy inks, zero plastic blister',
    packagingPlasticFree: true,
    certifications: [
      { id: 'climate-neutral', name: 'Climate Neutral Certified', issuer: 'Change Climate Project', verified: true, description: '100% offset carbon footprint.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '25% Lighter Metal Weight', status: 'Verified', analysis: 'Achieved through high-precision wall thinning without losing vacuum integrity.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Lifetime warranty against loss of vacuum', 'Zero plastic contact on mouth rim', 'Powder coat eliminates chipping'],
    areasToImprove: ['Replacement caps can be costly to source individually'],
    sustainabilityStatus: 'Verified',
    dataSource: 'The Change Climate Project Verified Audit',
    dataConfidence: 'High'
  },
  {
    id: 'lomi-smart-composter',
    name: 'Lomi 2 Smart Countertop Electric Composter',
    brand: 'Lomi by Pela',
    category: 'Home & Kitchen',
    subcategory: 'Kitchen Composting',
    imageUrl: '',
    price: 29999,
    currency: '₹',
    isFeatured: false,
    greenScore: 92.4,
    grade: 'A+',
    subscores: {
      carbonImpact: 94,
      materials: 90,
      durability: 92,
      recyclability: 90,
      packaging: 96,
      repairability: 90,
      certifications: 94
    },
    scoreExplanation: 'Transforms kitchen food scraps and bioplastics into nutrient-rich soil in 4 hours, preventing anaerobic methane generation in municipal landfills. B-Corp certified manufacturer with biocomposite shell.',
    carbonFootprintKg: 64.0,
    conventionalCarbonKg: 280.0,
    waterFootprintLiters: 1100,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 8.0,
    manufacturingCountry: 'Canada / Taiwan',
    renewableEnergyPercent: 85,
    materialsBreakdown: [
      { name: 'Recyclable Aluminum Grinding Chamber', percentage: 45, isRecycled: true, color: '#06b6d4' },
      { name: 'Pela Bio-Composite Exterior Housing', percentage: 35, isRenewable: true, color: '#10b981' },
      { name: 'Internal Motor & Thermal Sensors', percentage: 20, isRecycled: false, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 32.0, percentage: 50, notes: 'Cast aluminum grinder and flax plant bio-resin' },
      { stage: 'Manufacturing', impactKgCO2: 18.0, percentage: 28, notes: 'Solar-offset assembly plant' },
      { stage: 'Transportation', impactKgCO2: 6.5, percentage: 10, notes: 'Direct bulk ship freight' },
      { stage: 'Usage', impactKgCO2: 6.0, percentage: 9, notes: 'Averages 0.6 kWh per overnight cycle' },
      { stage: 'End of Life', impactKgCO2: 1.5, percentage: 3, notes: 'Internal components unscrew with standard Torx' }
    ],
    packagingType: '100% Recycled unbleached carton with compostable starch padding',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited circular electronics criteria.' },
      { id: 'climate-neutral', name: 'Climate Neutral Certified', issuer: 'Change Climate Project', verified: true, description: 'Net zero emissions operations.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Diverts 80% food waste from landfills', status: 'Verified', analysis: 'Reduces food waste volume by up to 80% through grinding and dehydration.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Prevents methane emissions at the source', 'Replaceable internal activated carbon pellets', 'Quiet 40dB cycle operation'],
    areasToImprove: ['Requires electricity compared to passive outdoor compost bins'],
    sustainabilityStatus: 'Verified',
    dataSource: 'ISO 14040 Life Cycle Assessment (Pela Sustainability Report)',
    dataConfidence: 'High'
  },
  {
    id: 'stasher-platinum-bags',
    name: 'Stasher Platinum Silicone Storage Starter 7-Pack',
    brand: 'Stasher',
    category: 'Home & Kitchen',
    subcategory: 'Reusable Food Storage',
    imageUrl: '',
    price: 2499,
    currency: '₹',
    isFeatured: false,
    greenScore: 95.8,
    grade: 'A+',
    subscores: {
      carbonImpact: 96,
      materials: 98,
      durability: 99,
      recyclability: 90,
      packaging: 96,
      repairability: 92,
      certifications: 97
    },
    scoreExplanation: 'Made from 100% pure sand-derived platinum silicone. One single bag replaces 260 single-use plastic Ziploc bags each year. Microwave, dishwasher, freezer, and oven safe up to 218°C.',
    carbonFootprintKg: 3.1,
    conventionalCarbonKg: 24.5,
    waterFootprintLiters: 160,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 10.0,
    manufacturingCountry: 'USA / Vietnam',
    renewableEnergyPercent: 88,
    materialsBreakdown: [
      { name: '100% Pure Sand-Derived Platinum Silicone', percentage: 100, isRenewable: true, color: '#10b981' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 1.8, percentage: 58, notes: 'Non-petroleum silica feedstock; free of BPA, BPS, and lead' },
      { stage: 'Manufacturing', impactKgCO2: 0.8, percentage: 26, notes: 'Liquid silicone rubber compression tooling' },
      { stage: 'Transportation', impactKgCO2: 0.3, percentage: 10, notes: 'High density flat-pack shipping' },
      { stage: 'Usage', impactKgCO2: 0.1, percentage: 3, notes: 'Dishwasher safe' },
      { stage: 'End of Life', impactKgCO2: 0.1, percentage: 3, notes: 'TerraCycle free recycling takeback program' }
    ],
    packagingType: 'FSC certified post-consumer paper band with vegetable ink',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited corporate social and environmental stewardship.' },
      { id: '1-percent', name: '1% For The Planet', issuer: '1% For The Planet', verified: true, description: '1% of annual top-line revenue donated to ocean conservation.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Infinitely Reusable Kitchen Storage', status: 'Verified', analysis: 'Pinch-Loc seal tested for over 3,000 open/close cycles without tearing.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Completely petroleum-free material', 'Eliminates hundreds of plastic zip bags', 'Oven and microwave heat safe'],
    areasToImprove: ['Requires municipal silicone recycling drop-off rather than curbside blue bin'],
    sustainabilityStatus: 'Verified',
    dataSource: 'B Lab Impact Report & TerraCycle Lifecycle Audit',
    dataConfidence: 'High'
  },
  {
    id: 'blueland-cleaning-starter',
    name: 'Blueland Clean Essentials Dry Tablet Starter Kit',
    brand: 'Blueland',
    category: 'Home & Kitchen',
    subcategory: 'Eco Cleaning Products',
    imageUrl: '',
    price: 1899,
    currency: '₹',
    isFeatured: true,
    greenScore: 97.4,
    grade: 'A+',
    subscores: {
      carbonImpact: 98,
      materials: 98,
      durability: 96,
      recyclability: 97,
      packaging: 99,
      repairability: 94,
      certifications: 99
    },
    scoreExplanation: 'Dry effervescent tablets ship without water, cutting shipping weight by 90% and eliminating single-use plastic spray bottles forever. Certified Cradle to Cradle Platinum for material non-toxicity.',
    carbonFootprintKg: 1.8,
    conventionalCarbonKg: 18.2,
    waterFootprintLiters: 80,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 10.0,
    manufacturingCountry: 'USA / Asia',
    renewableEnergyPercent: 92,
    materialsBreakdown: [
      { name: 'Shatter-Resistant Tritan Forever Bottles', percentage: 60, isRecycled: true, color: '#06b6d4' },
      { name: 'Citric Acid & Plant Dry Mineral Tablets', percentage: 35, isRenewable: true, color: '#10b981' },
      { name: 'Silicone Gaskets & Spray Nozzle', percentage: 5, isRecycled: false, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.9, percentage: 50, notes: 'Non-toxic bio-surfactants and mineral salts' },
      { stage: 'Manufacturing', impactKgCO2: 0.5, percentage: 28, notes: 'Compressed dry powder tablet press uses 90% less energy' },
      { stage: 'Transportation', impactKgCO2: 0.2, percentage: 11, notes: 'Letter-envelope sized refill tablet shipping' },
      { stage: 'Usage', impactKgCO2: 0.1, percentage: 6, notes: 'Dissolves in standard tap water at home' },
      { stage: 'End of Life', impactKgCO2: 0.1, percentage: 5, notes: 'Paper compostable tablet wrappers' }
    ],
    packagingType: '100% Home compostable FSC paper wrappers lined with plant film',
    packagingPlasticFree: true,
    certifications: [
      { id: 'c2c-gold', name: 'Cradle to Cradle Certified® Gold', issuer: 'C2C Products Institute', verified: true, tier: 'Platinum Material Health', description: 'Zero hazardous chemical additives.' },
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited environmental transparency.' },
      { id: 'leaping-bunny', name: 'Leaping Bunny Cruelty-Free', issuer: 'Cruelty Free International', verified: true, description: 'Cruelty-free standard.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Plastic-Free Tablet Packaging', status: 'Verified', analysis: 'Certified home and industrial compostable by TÜV Austria.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['90% lighter freight weight reduces transport emissions', 'Zero VOC fumes in home', 'Forever Tritan bottles'],
    areasToImprove: ['Spray trigger mechanism contains small stainless steel spring'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Cradle to Cradle (C2C) Platinum Audit & B Lab Assessment',
    dataConfidence: 'High'
  },

  // 3. PERSONAL CARE (Zero-Waste Shampoo, Toothpaste, Deodorant)
  {
    id: 'ethique-shampoo-bar',
    name: 'Ethique Heali Kiwi Zero-Waste Solid Shampoo Bar',
    brand: 'Ethique',
    category: 'Personal Care',
    subcategory: 'Hair Care & Solid Bars',
    imageUrl: '',
    price: 799,
    currency: '₹',
    isFeatured: true,
    greenScore: 98.2,
    grade: 'A+',
    subscores: {
      carbonImpact: 99,
      materials: 98,
      durability: 96,
      recyclability: 100,
      packaging: 100,
      repairability: 90,
      certifications: 99
    },
    scoreExplanation: 'Concentrated waterless bar eliminates 3 plastic bottles and 2.7 liters of shipped water per unit. Certified 100% home compostable box, palm-oil free, and Leaping Bunny cruelty-free.',
    carbonFootprintKg: 0.42,
    conventionalCarbonKg: 4.8,
    waterFootprintLiters: 15,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 0.5,
    manufacturingCountry: 'New Zealand',
    renewableEnergyPercent: 100,
    materialsBreakdown: [
      { name: 'Fair Trade Cocoa Butter & Coconut Oil', percentage: 50, isRenewable: true, color: '#10b981' },
      { name: 'Sodium Cocoyl Isethionate (Coconut surfactant)', percentage: 35, isRenewable: true, color: '#06b6d4' },
      { name: 'Kiwifruit Seed Oil & Karanja Oil', percentage: 15, isRenewable: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.22, percentage: 52, notes: 'Direct trade cooperatives in Samoa; zero deforestation palm' },
      { stage: 'Manufacturing', impactKgCO2: 0.08, percentage: 19, notes: '100% renewable electricity in Christchurch' },
      { stage: 'Transportation', impactKgCO2: 0.07, percentage: 17, notes: 'Sea shipping; lightweight compact volume' },
      { stage: 'Usage', impactKgCO2: 0.03, percentage: 7, notes: 'Biodegradable in natural waterways' },
      { stage: 'End of Life', impactKgCO2: 0.02, percentage: 5, notes: 'Zero packaging waste; dissolves completely' }
    ],
    packagingType: '100% Unbleached home-compostable cardboard with vegetable soy inks',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, tier: 'Top 5% Best for World', description: 'Highest score in circular packaging.' },
      { id: 'leaping-bunny', name: 'Leaping Bunny Cruelty-Free', issuer: 'Cruelty Free International', verified: true, description: 'Zero animal testing across all supply chain stages.' },
      { id: 'climate-neutral', name: 'Climate Neutral Certified', issuer: 'Change Climate Project', verified: true, description: '100% offset and reduced.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Saves 3 Plastic Bottles per bar', status: 'Verified', analysis: 'Verified by third-party lifecycle auditor based on 350ml liquid shampoo comparison.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Completely plastic-free and palm-oil free', 'Lasts up to 80 washes', 'Safe for septic and greywater systems'],
    areasToImprove: ['Requires dry soap dish storage to prevent early melting'],
    sustainabilityStatus: 'Verified',
    dataSource: 'B Lab Certified Assessment & ISO 14040 Life Cycle Accounting',
    dataConfidence: 'High'
  },
  {
    id: 'bite-toothpaste-bits',
    name: 'Bite Nano-Hydroxyapatite Toothpaste Bits (Glass Jar)',
    brand: 'Bite Toothpaste Bits',
    category: 'Personal Care',
    subcategory: 'Oral Care',
    imageUrl: '',
    price: 699,
    currency: '₹',
    isFeatured: false,
    greenScore: 97.0,
    grade: 'A+',
    subscores: {
      carbonImpact: 98,
      materials: 97,
      durability: 96,
      recyclability: 99,
      packaging: 99,
      repairability: 90,
      certifications: 98
    },
    scoreExplanation: 'Dry chewable toothpaste tablets eliminate non-recyclable multi-layer laminate squeeze tubes (over 1 billion sent to landfills annually). Stored in endlessly refillable glass apothecary vessels.',
    carbonFootprintKg: 0.65,
    conventionalCarbonKg: 3.8,
    waterFootprintLiters: 18,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 0.35,
    manufacturingCountry: 'USA',
    renewableEnergyPercent: 90,
    materialsBreakdown: [
      { name: 'Nano-Hydroxyapatite & Xylitol', percentage: 70, isRenewable: true, color: '#10b981' },
      { name: 'Organic Peppermint & Coconut Powder', percentage: 20, isRenewable: true, color: '#06b6d4' },
      { name: 'Amber Glass Vessel & Metal Lid', percentage: 10, isRecycled: true, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.35, percentage: 54, notes: 'Non-toxic, cruelty-free vegan mineral ingredients' },
      { stage: 'Manufacturing', impactKgCO2: 0.15, percentage: 23, notes: 'Dry tableting machine uses zero process heat' },
      { stage: 'Transportation', impactKgCO2: 0.08, percentage: 12, notes: 'Refill pouches sent in unpadded kraft envelopes' },
      { stage: 'Usage', impactKgCO2: 0.04, percentage: 6, notes: 'Zero tube squeeze residue waste' },
      { stage: 'End of Life', impactKgCO2: 0.03, percentage: 5, notes: 'Glass jar infinitely reusable' }
    ],
    packagingType: 'Refillable amber glass jar with metal aluminum lid and compostable refill pouch',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited environmental performance.' },
      { id: 'leaping-bunny', name: 'Leaping Bunny Cruelty-Free', issuer: 'Cruelty Free International', verified: true, description: 'No animal testing.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Recyclable Packaging System', status: 'Verified', analysis: 'Refill pouches made from cellulose bio-polymer certified home-compostable.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Eliminates unrecyclable plastic-aluminum laminate tubes', 'TSA liquid limit friendly for travel', 'Fluoride-free nano-hydroxyapatite remineralization'],
    areasToImprove: ['Initial purchase requires heavier glass container freight'],
    sustainabilityStatus: 'Verified',
    dataSource: 'B Lab Sustainability Assessment Report',
    dataConfidence: 'High'
  },
  {
    id: 'wild-refillable-deodorant',
    name: 'Wild Natural Refillable Aluminum Case Deodorant',
    brand: 'Wild Cosmetics',
    category: 'Personal Care',
    subcategory: 'Grooming & Deodorants',
    imageUrl: '',
    price: 999,
    currency: '₹',
    isFeatured: false,
    greenScore: 94.8,
    grade: 'A+',
    subscores: {
      carbonImpact: 96,
      materials: 95,
      durability: 98,
      recyclability: 96,
      packaging: 97,
      repairability: 88,
      certifications: 93
    },
    scoreExplanation: 'Sleek anodized aluminum outer case built for lifetime durability. Zero-plastic refills made of 100% home compostable bamboo pulp that naturally decompose in home garden soil in 6 months.',
    carbonFootprintKg: 0.88,
    conventionalCarbonKg: 5.2,
    waterFootprintLiters: 45,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 10.0,
    manufacturingCountry: 'UK / Europe',
    renewableEnergyPercent: 88,
    materialsBreakdown: [
      { name: 'Anodized Recycled Aluminum Case', percentage: 50, isRecycled: true, color: '#06b6d4' },
      { name: 'Bamboo Pulp Refill Cartridge', percentage: 25, isRenewable: true, color: '#10b981' },
      { name: 'Organic Tapioca Starch & Shea Butter', percentage: 25, isRenewable: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.42, percentage: 48, notes: 'Recycled aerospace aluminium shell and certified fair trade shea' },
      { stage: 'Manufacturing', impactKgCO2: 0.25, percentage: 28, notes: 'Clean energy European production lines' },
      { stage: 'Transportation', impactKgCO2: 0.12, percentage: 14, notes: 'Letterbox-friendly flat subscription packs' },
      { stage: 'Usage', impactKgCO2: 0.05, percentage: 6, notes: 'Daily use with zero aerosol propellant gases' },
      { stage: 'End of Life', impactKgCO2: 0.04, percentage: 4, notes: 'Bamboo cartridge completely dissolves in compost' }
    ],
    packagingType: '100% Home-compostable bamboo pulp refill wrapper; aluminum casing is forever reusable',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited environmental performance.' },
      { id: 'climate-neutral', name: 'Climate Neutral Certified', issuer: 'Change Climate Project', verified: true, description: 'Full cradle-to-grave offsets.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Plastic-Free Refill Cartridge', status: 'Verified', analysis: 'Constructed purely of steam-pressed bamboo pulp fiber with zero plastic liners.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Aluminum case guaranteed for life', 'Zero artificial aluminum salts or aerosol propellants', 'Compostable refills'],
    areasToImprove: ['Case twist-turn mechanism needs occasional cleaning'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Wild Cosmetics Carbon Footprint Audit (ISO 14040)',
    dataConfidence: 'High'
  },

  // 4. TRANSPORTATION & CLEAN MOBILITY (EV Scooters & Commuter Bicycles)
  {
    id: 'ather-450x-scooter',
    name: 'Ather 450X Smart Connected Electric Scooter',
    brand: 'Ather Energy',
    category: 'Transportation',
    subcategory: 'Electric Two-Wheelers / EV',
    imageUrl: '',
    price: 139999,
    currency: '₹',
    isFeatured: true,
    greenScore: 93.8,
    grade: 'A+',
    subscores: {
      carbonImpact: 96,
      materials: 92,
      durability: 96,
      recyclability: 91,
      packaging: 92,
      repairability: 94,
      certifications: 95
    },
    scoreExplanation: 'Zero tailpipe emissions electric scooter engineered and manufactured in Hosur, India. IP67-rated 3.7 kWh lithium-ion pack with 111 km true range, regenerative braking, and 95% reduced operational carbon vs petrol 110cc two-wheelers.',
    carbonFootprintKg: 185.0,
    conventionalCarbonKg: 1420.0,
    waterFootprintLiters: 1950,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 8.0,
    manufacturingCountry: 'India (Hosur Green Factory)',
    renewableEnergyPercent: 80,
    materialsBreakdown: [
      { name: 'Hybrid Die-Cast Aluminum Chassis', percentage: 55, isRecycled: true, color: '#06b6d4' },
      { name: 'IP67 Sealed Li-ion Battery Pack', percentage: 25, isRecycled: false, color: '#10b981' },
      { name: 'PMSM Permanent Magnet Motor', percentage: 12, isRecycled: false, color: '#f59e0b' },
      { name: 'Recyclable Polycarbonate Body Panels', percentage: 8, isRecycled: true, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 110.0, percentage: 59, notes: 'Domestic die-cast aluminum frame cuts overseas supply chain freight' },
      { stage: 'Manufacturing', impactKgCO2: 45.0, percentage: 24, notes: 'Automated factory with 80% solar power rooftops' },
      { stage: 'Transportation', impactKgCO2: 8.0, percentage: 4, notes: 'Domestic transport to regional retail experience centers' },
      { stage: 'Usage', impactKgCO2: 18.0, percentage: 10, notes: 'Consumes ~3.3 units of electricity per full charge (~₹25 per 100km)' },
      { stage: 'End of Life', impactKgCO2: 4.0, percentage: 3, notes: 'Battery second-life grid storage reuse agreements in India' }
    ],
    packagingType: 'Reusable steel transport pallets; zero disposable cardboard or foam',
    packagingPlasticFree: true,
    certifications: [
      { id: 'fame-ii', name: 'FAME-II Certified Electric Vehicle', issuer: 'Ministry of Heavy Industries (India)', verified: true, description: 'Rigorous safety, localized sourcing, and energy efficiency certification.' },
      { id: 'arai-safety', name: 'ARAI Automotive Safety Certified', issuer: 'Automotive Research Association of India', verified: true, description: 'Crashworthiness, battery thermal runaway, and electrical safety audited.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Over 1.2 Tons CO₂e saved every 10,000 km', status: 'Verified', analysis: 'Audited against a standard 110cc petrol scooter operating at 45 km/l in urban Indian conditions.' }
    ],
    greenerAlternatives: [
      { productId: 'priority-classic-bicycle', name: 'Priority Belt-Drive Commuter Bike', brand: 'Priority', price: 24999, greenScore: 98.0, carbonReductionPercent: 96, reason: 'Zero electricity human-powered urban transit' }
    ],
    keyStrengths: ['95% reduction in tailpipe smog and PM2.5 in Indian cities', '8-year battery warranty with second-life recycling', 'Running cost under ₹0.30 per kilometer'],
    areasToImprove: ['Battery pack initial manufacturing footprint requires ~6,000 km to break even on emissions'],
    sustainabilityStatus: 'Verified',
    dataSource: 'ARAI Test Certificate & Ather Sustainability Life Cycle Assessment',
    dataConfidence: 'High'
  },
  {
    id: 'priority-classic-bicycle',
    name: 'Priority Classic Plus Belt-Drive Commuter Bike',
    brand: 'Priority Bicycles',
    category: 'Transportation',
    subcategory: 'Commuter Bicycles',
    imageUrl: '',
    price: 24999,
    currency: '₹',
    isFeatured: false,
    greenScore: 98.0,
    grade: 'A+',
    subscores: {
      carbonImpact: 99,
      materials: 98,
      durability: 98,
      recyclability: 97,
      packaging: 96,
      repairability: 99,
      certifications: 96
    },
    scoreExplanation: 'Zero-emission human-powered transportation. Features Gates Carbon Drive belt instead of greasy rust-prone metal chains, ultralight 6061 aluminum frame, and zero maintenance requirements.',
    carbonFootprintKg: 9.8,
    conventionalCarbonKg: 180.0,
    waterFootprintLiters: 240,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 20.0,
    manufacturingCountry: 'Taiwan / India',
    renewableEnergyPercent: 85,
    materialsBreakdown: [
      { name: 'Ultralight 6061 Recyclable Aluminum Frame', percentage: 70, isRecycled: true, color: '#06b6d4' },
      { name: 'Gates Carbon Drive Belt', percentage: 10, isRenewable: false, color: '#10b981' },
      { name: 'Puncture-Resistant Rubber & Stainless Hardware', percentage: 20, isRecycled: false, color: '#64748b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 6.2, percentage: 63, notes: 'Recycled aluminum tubing' },
      { stage: 'Manufacturing', impactKgCO2: 2.1, percentage: 21, notes: 'Precision automated TIG welding' },
      { stage: 'Transportation', impactKgCO2: 1.1, percentage: 11, notes: 'Compact carton flatpack shipping' },
      { stage: 'Usage', impactKgCO2: 0.1, percentage: 1, notes: 'Human powered; zero emissions' },
      { stage: 'End of Life', impactKgCO2: 0.3, percentage: 4, notes: '90%+ metallic frame circularity' }
    ],
    packagingType: '100% Recycled cardboard bike box with paper pulp stays',
    packagingPlasticFree: true,
    certifications: [
      { id: 'iso-4210', name: 'ISO 4210 City Bicycle Certified', issuer: 'ISO', verified: true, description: 'Rigorous structural safety and durability testing.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Belt Lasts 3x Longer Than Metal Chains', status: 'Verified', analysis: 'Carbon polyurethane tensile cords do not stretch, rust, or require petroleum lubricants.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Completely zero tailpipe greenhouse emissions', 'No messy grease or chain rust', 'Can last 20+ years with standard maintenance'],
    areasToImprove: ['Requires initial mechanical assembly from box'],
    sustainabilityStatus: 'Verified',
    dataSource: 'ISO 4210 Safety Protocol & Environmental Transport Accounting',
    dataConfidence: 'High'
  },

  // 5. FOOD & BEVERAGES
  {
    id: 'minor-figures-oat-milk',
    name: 'Minor Figures Organic Regenerative Oat M*lk',
    brand: 'Minor Figures',
    category: 'Food & Beverages',
    subcategory: 'Plant-Based Milk',
    imageUrl: '',
    price: 290,
    currency: '₹',
    isFeatured: false,
    greenScore: 95.2,
    grade: 'A+',
    subscores: {
      carbonImpact: 98,
      materials: 96,
      durability: 90,
      recyclability: 94,
      packaging: 92,
      repairability: 90,
      certifications: 98
    },
    scoreExplanation: 'Emits 73% less carbon dioxide and uses 90% less land and water than conventional dairy milk. Certified organic regenerative farming, 100% plant-based, and Climate Neutral certified.',
    carbonFootprintKg: 0.49,
    conventionalCarbonKg: 3.1,
    waterFootprintLiters: 48,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 0.8,
    manufacturingCountry: 'UK / India',
    renewableEnergyPercent: 95,
    materialsBreakdown: [
      { name: 'Regenerative Organic Oats', percentage: 12, isRenewable: true, color: '#10b981' },
      { name: 'Filtered Spring Water', percentage: 84, isRenewable: true, color: '#06b6d4' },
      { name: 'Cold-Pressed Sunflower Oil & Sea Salt', percentage: 4, isRenewable: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.22, percentage: 45, notes: 'Cover-cropped organic oat fields with zero artificial nitrogen fertilizer' },
      { stage: 'Manufacturing', impactKgCO2: 0.12, percentage: 24, notes: 'Enzymatic batch processing' },
      { stage: 'Transportation', impactKgCO2: 0.08, percentage: 16, notes: 'Ambient shelf-stable transit avoids refrigerated cold-chain emissions' },
      { stage: 'Usage', impactKgCO2: 0.04, percentage: 8, notes: 'Chilled in home refrigerators' },
      { stage: 'End of Life', impactKgCO2: 0.03, percentage: 7, notes: 'Tetra Pak carton recycling facilities' }
    ],
    packagingType: 'FSC Certified paperboard aseptic carton with bio-based sugarcane cap',
    packagingPlasticFree: false,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited environmental performance.' },
      { id: 'usda-organic', name: 'USDA Organic', issuer: 'USDA', verified: true, description: '100% synthetic pesticide-free.' },
      { id: 'carbon-neutral', name: 'Carbon Neutral Product', issuer: 'ClimatePartner', verified: true, description: 'Certified lifecycle carbon balance.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '70% Lower Carbon than Dairy Milk', status: 'Verified', analysis: 'Audited by Poore & Nemecek Oxford agricultural lifecycle assessment datasets.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Zero methane ruminant emissions', '90% water footprint reduction vs dairy or almond', 'Shelf-stable ambient storage'],
    areasToImprove: ['Carton contains thin inner aluminum aseptic layer requiring specialized pulping'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Oxford Agricultural LCA Database & ClimatePartner Audit',
    dataConfidence: 'High'
  },
  {
    id: 'equal-exchange-coffee',
    name: 'Equal Exchange Organic Fair Trade Café Salvador Coffee',
    brand: 'Equal Exchange',
    category: 'Food & Beverages',
    subcategory: 'Specialty Coffee',
    imageUrl: '',
    price: 650,
    currency: '₹',
    isFeatured: false,
    greenScore: 94.6,
    grade: 'A+',
    subscores: {
      carbonImpact: 92,
      materials: 98,
      durability: 90,
      recyclability: 94,
      packaging: 90,
      repairability: 90,
      certifications: 99
    },
    scoreExplanation: '100% shade-grown Arabica coffee harvested under natural rainforest canopy. Certified organic, protecting migratory songbird habitats, with guaranteed living wage floor prices paid directly to smallholder farmer cooperatives.',
    carbonFootprintKg: 1.25,
    conventionalCarbonKg: 6.8,
    waterFootprintLiters: 140,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 0.75,
    manufacturingCountry: 'El Salvador / India',
    renewableEnergyPercent: 88,
    materialsBreakdown: [
      { name: '100% Shade-Grown Organic Arabica Coffee', percentage: 100, isRenewable: true, color: '#10b981' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.65, percentage: 52, notes: 'Agroforestry shade trees sequester carbon directly in coffee groves' },
      { stage: 'Manufacturing', impactKgCO2: 0.32, percentage: 26, notes: 'Clean thermal batch roasting' },
      { stage: 'Transportation', impactKgCO2: 0.16, percentage: 13, notes: 'Bulk ocean grain containers' },
      { stage: 'Usage', impactKgCO2: 0.07, percentage: 5, notes: 'French press or pour-over home brewing' },
      { stage: 'End of Life', impactKgCO2: 0.05, percentage: 4, notes: 'Coffee grounds 100% compostable as garden fertilizer' }
    ],
    packagingType: 'Recycled kraft foil bag with degassing valve',
    packagingPlasticFree: false,
    certifications: [
      { id: 'fair-trade', name: 'Fair Trade Certified™', issuer: 'Fair Trade USA', verified: true, description: 'Guaranteed minimum floor price + social development premiums.' },
      { id: 'usda-organic', name: 'USDA Organic', issuer: 'USDA', verified: true, description: '100% organic agroforestry cultivation.' },
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Exemplary worker governance.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Smallholder Cooperative Sourced', status: 'Verified', analysis: 'Audited supply chains direct to Las Colinas cooperative.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Preserves tropical biodiversity and canopy trees', 'Democratic worker-owned business model', 'Compostable spent grounds'],
    areasToImprove: ['Degassing valve contains small plastic membrane'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Fair Trade USA Registry & Agroforestry Research Studies',
    dataConfidence: 'High'
  },

  // 6. PACKAGING & REUSABLES
  {
    id: 'ecoenclose-mailers',
    name: 'EcoEnclose 100% Recycled Poly Mailers (Pack of 100)',
    brand: 'EcoEnclose',
    category: 'Packaging',
    subcategory: 'Circular Packaging',
    imageUrl: '',
    price: 1199,
    currency: '₹',
    isFeatured: false,
    greenScore: 96.5,
    grade: 'A+',
    subscores: {
      carbonImpact: 98,
      materials: 99,
      durability: 96,
      recyclability: 98,
      packaging: 96,
      repairability: 90,
      certifications: 96
    },
    scoreExplanation: 'Made from 100% recycled polyethylene film with at least 50% post-consumer waste. Features dual adhesive strips so recipients can easily reuse the same mailer for returns or second shipments.',
    carbonFootprintKg: 0.08,
    conventionalCarbonKg: 0.38,
    waterFootprintLiters: 12,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 1.0,
    manufacturingCountry: 'USA / India',
    renewableEnergyPercent: 88,
    materialsBreakdown: [
      { name: '100% Recycled Polyethylene (50% Post-Consumer)', percentage: 100, isRecycled: true, color: '#10b981' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.04, percentage: 50, notes: 'Post-consumer milk jugs and shopping bag recycled pellets' },
      { stage: 'Manufacturing', impactKgCO2: 0.02, percentage: 25, notes: 'Blown film extrusion requires 60% less energy than virgin plastic' },
      { stage: 'Transportation', impactKgCO2: 0.01, percentage: 12, notes: 'Ultra-thin, lightweight mailer ships flat' },
      { stage: 'Usage', impactKgCO2: 0.005, percentage: 6, notes: 'Dual adhesive strips double the service lifespan' },
      { stage: 'End of Life', impactKgCO2: 0.005, percentage: 7, notes: 'Recyclable at grocery store plastic film drop-offs' }
    ],
    packagingType: 'Packaged in 100% recycled corrugated paper bands',
    packagingPlasticFree: true,
    certifications: [
      { id: 'scs-recycled', name: 'SCS Recycled Content Certified', issuer: 'SCS Global', verified: true, description: '100% post-consumer recycled certification.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Recycled Material', status: 'Verified', analysis: 'Audited by SCS Global Services; contains verified 50% post-consumer and 50% post-industrial.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Dual adhesive strip enables circular e-commerce returns', 'Waterproof moisture barrier without laminate paper', 'Tear-resistant'],
    areasToImprove: ['Requires store drop-off plastic collection rather than curbside paper bin'],
    sustainabilityStatus: 'Verified',
    dataSource: 'SCS Global Services Audit Certificate',
    dataConfidence: 'High'
  },

  // 7. STATIONERY & OFFICE
  {
    id: 'karst-stone-paper-journal',
    name: 'Karst Stone Paper Hardcover Journal',
    brand: 'Karst',
    category: 'Stationery',
    subcategory: 'Stone Paper & Notebooks',
    imageUrl: '',
    price: 1499,
    currency: '₹',
    isFeatured: false,
    greenScore: 94.0,
    grade: 'A+',
    subscores: {
      carbonImpact: 96,
      materials: 98,
      durability: 96,
      recyclability: 88,
      packaging: 94,
      repairability: 88,
      certifications: 95
    },
    scoreExplanation: 'Made from repurposed calcium carbonate limestone waste from construction quarries. Completely tree-free, requires zero water or chlorine bleach to manufacture, and produces a silky waterproof writing surface.',
    carbonFootprintKg: 1.45,
    conventionalCarbonKg: 7.2,
    waterFootprintLiters: 25,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 10.0,
    manufacturingCountry: 'Australia / Taiwan',
    renewableEnergyPercent: 86,
    materialsBreakdown: [
      { name: 'Repurposed Calcium Carbonate (Limestone)', percentage: 80, isRecycled: true, color: '#06b6d4' },
      { name: 'Non-Toxic Recycled HDPE Resin Binder', percentage: 20, isRecycled: true, color: '#10b981' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.72, percentage: 50, notes: 'Zero trees felled; uses quarry dust waste' },
      { stage: 'Manufacturing', impactKgCO2: 0.42, percentage: 29, notes: 'Zero water used, zero chemical bleaches, zero acid runoff' },
      { stage: 'Transportation', impactKgCO2: 0.18, percentage: 12, notes: 'Dense flat pallet shipping' },
      { stage: 'Usage', impactKgCO2: 0.05, percentage: 4, notes: 'Waterproof and tear-resistant longevity' },
      { stage: 'End of Life', impactKgCO2: 0.08, percentage: 5, notes: 'Photodegradable under prolonged UV sunlight back into chalk dust' }
    ],
    packagingType: 'FSC recycled belly band with zero shrink wrap',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited environmental innovation.' },
      { id: 'cradle-silver', name: 'Cradle to Cradle Certified® Silver', issuer: 'C2C Products Institute', verified: true, description: 'Non-toxic material health standard.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Tree-Free Paper', status: 'Verified', analysis: 'Lab tested; comprised entirely of limestone dust bound with non-toxic resin.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Completely waterproof paper will not smudge from spills', 'Saves 540 liters of water per notebook', 'Friction-free writing feel'],
    areasToImprove: ['Recycling requires HDPE stream rather than municipal paper bin'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Cradle to Cradle Certified Registry',
    dataConfidence: 'High'
  },
  {
    id: 'sprout-plantable-pencils',
    name: 'Sprout Plantable Graphite Seed Pencils (8-Pack)',
    brand: 'Sprout World',
    category: 'Stationery',
    subcategory: 'Eco Pencils & Pens',
    imageUrl: '',
    price: 399,
    currency: '₹',
    isFeatured: false,
    greenScore: 97.2,
    grade: 'A+',
    subscores: {
      carbonImpact: 98,
      materials: 99,
      durability: 92,
      recyclability: 100,
      packaging: 98,
      repairability: 94,
      certifications: 98
    },
    scoreExplanation: 'The world’s first plantable pencil. When the pencil becomes too short to write with, plant the biodegradable cellulose seed capsule in soil to grow fresh basil, tomatoes, sunflowers, or herbs.',
    carbonFootprintKg: 0.18,
    conventionalCarbonKg: 1.4,
    waterFootprintLiters: 14,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 1.5,
    manufacturingCountry: 'Poland / India',
    renewableEnergyPercent: 92,
    materialsBreakdown: [
      { name: 'FSC Certified Sustainable Cedar Wood', percentage: 80, isRenewable: true, color: '#10b981' },
      { name: 'Natural Clay & Non-Toxic Graphite', percentage: 15, isRenewable: true, color: '#06b6d4' },
      { name: 'Cellulose Seed Capsule with Organic Seeds', percentage: 5, isRenewable: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 0.08, percentage: 44, notes: 'Sustainably harvested regenerative cedar forests' },
      { stage: 'Manufacturing', impactKgCO2: 0.04, percentage: 22, notes: 'Automated European pencil milling' },
      { stage: 'Transportation', impactKgCO2: 0.03, percentage: 17, notes: 'Ultra-lightweight postal envelopes' },
      { stage: 'Usage', impactKgCO2: 0.01, percentage: 6, notes: 'Daily writing and drawing' },
      { stage: 'End of Life', impactKgCO2: 0.02, percentage: 11, notes: 'Negative carbon: plants blossom into oxygen-producing herbs' }
    ],
    packagingType: '100% Recycled cardboard packaging with organic vegetable inks',
    packagingPlasticFree: true,
    certifications: [
      { id: 'fsc', name: 'FSC® 100% Certified Wood', issuer: 'FSC', verified: true, description: '100% harvested from regenerative forests.' },
      { id: 'en71', name: 'EN71 European Safety Standard', issuer: 'EU Safety', verified: true, description: 'Zero lead or toxic chemical varnishes.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Biodegradable into living plants', status: 'Verified', analysis: 'Tested seed germination rate exceeds 85% in rich potting soil.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Transforms discarded pencil stubs into edible herbs', 'Zero toxic lead (natural graphite only)', 'FSC certified cedar'],
    areasToImprove: ['Requires access to potting soil and sunlight for second life germination'],
    sustainabilityStatus: 'Verified',
    dataSource: 'FSC Supply Chain Certificate & EU Safety EN71 Audit',
    dataConfidence: 'High'
  },

  // 8. CLOTHING & FOOTWEAR (Kept for search & category filtering; not featured on home!)
  {
    id: 'patagonia-netplus-puffer',
    name: 'Patagonia NetPlus® Down Sweater Jacket',
    brand: 'Patagonia',
    category: 'Clothing',
    subcategory: 'Recycled Outerwear',
    imageUrl: '',
    price: 18999,
    currency: '₹',
    isFeatured: false,
    greenScore: 96.0,
    grade: 'A+',
    subscores: {
      carbonImpact: 96,
      materials: 98,
      durability: 98,
      recyclability: 94,
      packaging: 92,
      repairability: 98,
      certifications: 98
    },
    scoreExplanation: 'Shell made from 100% postconsumer recycled nylon derived from recycled Chilean fishing nets (NetPlus®). Comes with Patagonia’s lifetime free Worn Wear repair guarantee.',
    carbonFootprintKg: 12.8,
    conventionalCarbonKg: 38.5,
    waterFootprintLiters: 1400,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 12.0,
    manufacturingCountry: 'Vietnam (Fair Trade Certified Factory)',
    renewableEnergyPercent: 92,
    materialsBreakdown: [
      { name: 'NetPlus® Recycled Fishing Nets', percentage: 55, isRecycled: true, color: '#06b6d4' },
      { name: '800-fill Responsible Down (RDS)', percentage: 40, isRenewable: true, color: '#10b981' },
      { name: 'PFC-Free DWR Coating & Zipper', percentage: 5, isRecycled: false, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 6.2, percentage: 48, notes: 'NetPlus® diverts 1,000+ tons of ocean plastic per year' },
      { stage: 'Manufacturing', impactKgCO2: 4.1, percentage: 32, notes: 'Fair Trade Certified sewing facility with living wage premiums' },
      { stage: 'Transportation', impactKgCO2: 1.6, percentage: 13, notes: 'Ocean freight container shipping' },
      { stage: 'Usage', impactKgCO2: 0.4, percentage: 3, notes: 'Cold-water hand wash recommended' },
      { stage: 'End of Life', impactKgCO2: 0.5, percentage: 4, notes: 'Patagonia Worn Wear trade-in credit program' }
    ],
    packagingType: 'Plant-starch compostable garment bag',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Top percentile social and environmental score.' },
      { id: 'fair-trade', name: 'Fair Trade Certified™ Sewn', issuer: 'Fair Trade USA', verified: true, description: 'Direct wage premiums paid directly to garment workers.' },
      { id: 'rds', name: 'Responsible Down Standard (RDS)', issuer: 'Control Union', verified: true, description: 'Animal welfare verified cradle-to-gate.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Recycled Fishing Net Shell', status: 'Verified', analysis: 'Supply chain tracked via Bureo NetPlus traceability protocols.' },
      { id: 'c2', claim: 'Lifetime Free Repairs', status: 'Verified', analysis: 'Serviced by Patagonia Worn Wear repair program.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Ocean plastic diversion', 'Lifetime repair warranty', 'PFC-free water repellent'],
    areasToImprove: ['Synthetic zippers are difficult to separate from textile at recycling mill'],
    sustainabilityStatus: 'Verified',
    dataSource: 'Patagonia Footprint Chronicles & B Lab Verification',
    dataConfidence: 'High'
  },
  {
    id: 'nudie-raw-denim',
    name: 'Nudie Lean Dean 100% GOTS Organic Raw Denim',
    brand: 'Nudie Jeans',
    category: 'Clothing',
    subcategory: 'Organic Denim',
    imageUrl: '',
    price: 6999,
    currency: '₹',
    isFeatured: false,
    greenScore: 93.4,
    grade: 'A+',
    subscores: {
      carbonImpact: 94,
      materials: 98,
      durability: 96,
      recyclability: 98,
      packaging: 90,
      repairability: 95,
      certifications: 96
    },
    scoreExplanation: 'Crafted from 100% GOTS organic cotton with botanical indigo dye and zero elastane blends, enabling 100% circular textile-to-textile recycling. Includes free lifetime repairs worldwide.',
    carbonFootprintKg: 8.4,
    conventionalCarbonKg: 33.2,
    waterFootprintLiters: 680,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 8.0,
    manufacturingCountry: 'Italy / India',
    renewableEnergyPercent: 88,
    materialsBreakdown: [
      { name: 'GOTS Certified Organic Cotton', percentage: 98, isRenewable: true, color: '#10b981' },
      { name: 'Botanical Indigo Dye & Copper', percentage: 2, isRenewable: true, color: '#06b6d4' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 3.5, percentage: 42, notes: 'Organic rain-fed cotton requires 85% less irrigation water' },
      { stage: 'Manufacturing', impactKgCO2: 2.9, percentage: 35, notes: 'Ozone waterless washing process in Candiani Mill' },
      { stage: 'Transportation', impactKgCO2: 1.2, percentage: 14, notes: 'Rail and road distribution' },
      { stage: 'Usage', impactKgCO2: 0.3, percentage: 4, notes: 'Raw denim needs infrequent washing' },
      { stage: 'End of Life', impactKgCO2: 0.5, percentage: 5, notes: 'Free repair shops and trade-in discount' }
    ],
    packagingType: 'FSC recycled paper wrapping and cotton twine',
    packagingPlasticFree: true,
    certifications: [
      { id: 'gots', name: 'Global Organic Textile Standard (GOTS)', issuer: 'GOTS Organization', verified: true, description: 'Organic status from seed harvesting to manufacturing.' },
      { id: 'fair-wear', name: 'Fair Wear Foundation Leader', issuer: 'Fair Wear', verified: true, description: 'Top ranking for living wages and ethical worker conditions.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: '100% Organic Rain-Fed Cotton', status: 'Verified', analysis: 'Audited by Control Union; zero synthetic fertilizers or pesticides used.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['No microplastic synthetic elastane blends', '85% water reduction in dye house', 'Free repair kit sent to your home'],
    areasToImprove: ['Higher initial purchase investment compared to fast fashion'],
    sustainabilityStatus: 'Verified',
    dataSource: 'GOTS Audit Report & Fair Wear Foundation Leader Registry',
    dataConfidence: 'High'
  },
  {
    id: 'allbirds-tree-runner',
    name: 'Allbirds Tree Runner Go Bio-Sneakers',
    brand: 'Allbirds',
    category: 'Clothing',
    subcategory: 'Bio-Based Footwear',
    imageUrl: '',
    price: 7499,
    currency: '₹',
    isFeatured: false,
    greenScore: 91.5,
    grade: 'A+',
    subscores: {
      carbonImpact: 94,
      materials: 92,
      durability: 88,
      recyclability: 86,
      packaging: 94,
      repairability: 74,
      certifications: 92
    },
    scoreExplanation: 'Features a cradle-to-grave verified carbon footprint of just 4.95 kg CO₂e (displayed on the insole), made with FSC eucalyptus tree fiber and SweetFoam® sugarcane midsole.',
    carbonFootprintKg: 4.95,
    conventionalCarbonKg: 14.1,
    waterFootprintLiters: 420,
    energyUsage: 'Low',
    wasteGeneration: 'Low',
    expectedLifespanYears: 3.5,
    manufacturingCountry: 'Vietnam / India',
    renewableEnergyPercent: 80,
    materialsBreakdown: [
      { name: 'TENCEL™ FSC Eucalyptus Fiber', percentage: 48, isRenewable: true, color: '#10b981' },
      { name: 'SweetFoam® Sugarcane EVA', percentage: 35, isRenewable: true, color: '#06b6d4' },
      { name: 'Castor Bean Oil & Recycled PET', percentage: 17, isRecycled: true, color: '#f59e0b' }
    ],
    lifecycleStages: [
      { stage: 'Raw Materials', impactKgCO2: 2.1, percentage: 42, notes: 'Sugarcane captures more carbon during growth than processing emits' },
      { stage: 'Manufacturing', impactKgCO2: 1.7, percentage: 34, notes: 'Automated injection molding' },
      { stage: 'Transportation', impactKgCO2: 0.7, percentage: 14, notes: 'Ocean and domestic freight' },
      { stage: 'Usage', impactKgCO2: 0.3, percentage: 6, notes: 'Machine washable in cold cycles' },
      { stage: 'End of Life', impactKgCO2: 0.15, percentage: 4, notes: 'Take-back recycling partnership' }
    ],
    packagingType: '90% Post-Consumer Recycled shoebox that doubles as shipping parcel',
    packagingPlasticFree: true,
    certifications: [
      { id: 'b-corp', name: 'Certified B Corporation', issuer: 'B Lab', verified: true, description: 'Audited environmental performance and carbon transparency.' },
      { id: 'fsc', name: 'FSC® Certified Forestry', issuer: 'Forest Stewardship Council', verified: true, description: 'Eucalyptus sourced from regeneratively managed farms.' }
    ],
    greenwashingClaims: [
      { id: 'c1', claim: 'Carbon Footprint Labeled on every pair (4.95kg)', status: 'Verified', analysis: 'Audited ISO 14067 LCA model publicly verified by third-party certifiers.' }
    ],
    greenerAlternatives: [],
    keyStrengths: ['Exact LCA carbon label on insole', 'SweetFoam sugarcane outsole is carbon-negative in raw stage', 'Plastic bottle laces'],
    areasToImprove: ['Glued sole cannot be easily resoled by local cobblers'],
    sustainabilityStatus: 'Verified',
    dataSource: 'ISO 14067 Product Carbon Footprint Third-Party Verification',
    dataConfidence: 'High'
  },
  {
    "id": "google-pixel-8-pro",
    "name": "Google Pixel 8 Pro (100% Recycled Aluminum Enclosure)",
    "brand": "Google",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "imageUrl": "",
    "price": 96999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 82.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 78,
      "materials": 85,
      "durability": 88,
      "recyclability": 84,
      "packaging": 94,
      "repairability": 74,
      "certifications": 82
    },
    "scoreExplanation": "Pixel 8 Pro achieves 82.5/100 due to its 100% recycled aluminum enclosure, 7 years of confirmed operating system updates, and plastic-free packaging.",
    "carbonFootprintKg": 61.0,
    "conventionalCarbonKg": 82.0,
    "waterFootprintLiters": 1850,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 7.0,
    "manufacturingCountry": "Vietnam",
    "renewableEnergyPercent": 65,
    "materialsBreakdown": [
      {
        "name": "100% Recycled Aluminum Frame",
        "percentage": 38,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Recycled Tin in Solders",
        "percentage": 12,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Corning Gorilla Glass Victus 2",
        "percentage": 30,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Silicon & Battery Chemistry",
        "percentage": 20,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 39.5,
        "percentage": 65,
        "notes": "High recycled content in housing and circuit boards"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 13.5,
        "percentage": 22,
        "notes": "Factory efficiency program"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 4.2,
        "percentage": 7,
        "notes": "Consolidated sea and air cargo"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 2.6,
        "percentage": 4,
        "notes": "Tensor G3 high efficiency idle draw"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 1.2,
        "percentage": 2,
        "notes": "Google Mail-in recycling program"
      }
    ],
    "packagingType": "100% Plastic-Free molded fiber box with paper pull tabs",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "epeat-gold",
        "name": "EPEAT Gold",
        "issuer": "Global Electronics Council",
        "verified": true,
        "description": "Top tier electronic sustainability rating."
      },
      {
        "id": "energy-star",
        "name": "Energy Star Certified",
        "issuer": "EPA",
        "verified": true,
        "description": "High battery charging efficiency."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "7 Years of Guaranteed Software Support",
        "status": "Verified",
        "analysis": "Google contractually guaranteed Android OS upgrades until 2030."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "fairphone-5",
        "name": "Fairphone 5 Modular 5G Smartphone",
        "brand": "Fairphone",
        "price": 58999,
        "greenScore": 94.5,
        "carbonReductionPercent": 47,
        "reason": "Higher modular repairability and fairmined gold"
      }
    ],
    "keyStrengths": [
      "7-year software lifespan",
      "100% recycled aluminum body",
      "Plastic-free packaging"
    ],
    "areasToImprove": [
      "Display replacement still requires specialist heat gun tools"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Google Product Environmental Report (Pixel 8 Pro)",
    "dataConfidence": "High"
  },
  {
    "id": "sony-wh1000xm5-eco",
    "name": "Sony WH-1000XM5 Noise Canceling Headphones",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Audio & Headphones",
    "imageUrl": "",
    "price": 28990,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 84.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 82,
      "materials": 88,
      "durability": 86,
      "recyclability": 80,
      "packaging": 96,
      "repairability": 72,
      "certifications": 84
    },
    "scoreExplanation": "Sony WH-1000XM5 utilizes recycled automobile plastics for headphone parts and Original Blended Material for a 100% plastic-free packaging box.",
    "carbonFootprintKg": 14.8,
    "conventionalCarbonKg": 26.5,
    "waterFootprintLiters": 340,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.5,
    "manufacturingCountry": "Malaysia",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "Recycled Automotive Polymers (SORPLAS)",
        "percentage": 52,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Synthetic Soft Vegan Leather",
        "percentage": 24,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Audio Drivers & Copper Coils",
        "percentage": 14,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Lithium Battery Cell",
        "percentage": 10,
        "isRecycled": false,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 8.5,
        "percentage": 57,
        "notes": "Repurposed automotive bumper resins"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 3.8,
        "percentage": 26,
        "notes": "Renewable solar powered assembly"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 1.4,
        "percentage": 9,
        "notes": "Compact folded packaging volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.8,
        "percentage": 6,
        "notes": "30-hour battery life per 3-hour charge"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.3,
        "percentage": 2,
        "notes": "Authorized Sony electronics drop-off centers"
      }
    ],
    "packagingType": "Sony Original Blended Material (Bamboo, sugarcane, recycled paper)",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "rohs",
        "name": "RoHS Compliant",
        "issuer": "EU Commission",
        "verified": true,
        "description": "Free of hazardous brominated flame retardants."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Plastic In Packaging",
        "status": "Verified",
        "analysis": "100% paper and natural fiber composite certified."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "fairbuds-xl-modular",
        "name": "Fairphone Fairbuds XL Modular Wireless Headphones",
        "brand": "Fairphone",
        "price": 22999,
        "greenScore": 93.0,
        "carbonReductionPercent": 25,
        "reason": "Modular swappable headband and battery"
      }
    ],
    "keyStrengths": [
      "Bespoke recycled automotive plastic chassis",
      "30-hour ultra energy efficient playback",
      "Plastic-free luxury unboxing"
    ],
    "areasToImprove": [
      "Non-detachable battery requires professional servicing"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Sony Road to Zero Environmental Report",
    "dataConfidence": "High"
  },
  {
    "id": "logitech-wave-keys-pcr",
    "name": "Logitech Wave Keys Wireless Ergonomic Keyboard",
    "brand": "Logitech",
    "category": "Electronics",
    "subcategory": "Computer Accessories",
    "imageUrl": "",
    "price": 6995,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 81.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 80,
      "materials": 84,
      "durability": 86,
      "recyclability": 78,
      "packaging": 92,
      "repairability": 68,
      "certifications": 85
    },
    "scoreExplanation": "Certified Carbon Neutral with 61% post-consumer recycled plastic chassis, 36-month battery lifespan, and FSC-certified paper shipping carton.",
    "carbonFootprintKg": 4.9,
    "conventionalCarbonKg": 9.8,
    "waterFootprintLiters": 120,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "China",
    "renewableEnergyPercent": 60,
    "materialsBreakdown": [
      {
        "name": "Post-Consumer Recycled ABS Resin",
        "percentage": 61,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Virgin Plastic Components",
        "percentage": 25,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Printed Circuit Board & Key Switches",
        "percentage": 14,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.8,
        "percentage": 57,
        "notes": "High PCR plastic sourcing"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.2,
        "percentage": 24,
        "notes": "Logitech carbon neutrality offset program"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.5,
        "percentage": 11,
        "notes": "Bulk container freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.2,
        "percentage": 4,
        "notes": "Ultra low BLE energy draw"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 4,
        "notes": "Disassembly guide online"
      }
    ],
    "packagingType": "FSC-certified paper packaging printed with vegetable oil ink",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "carbon-neutral",
        "name": "Certified CarbonNeutral\u00ae",
        "issuer": "Climate Impact Partners",
        "verified": true,
        "description": "Emissions measured, reduced, and offset."
      },
      {
        "id": "fsc",
        "name": "FSC Certified",
        "issuer": "FSC",
        "verified": true,
        "description": "Responsibly harvested wood fiber packaging."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Certified Carbon Neutral",
        "status": "Verified",
        "analysis": "Includes residual offset purchases audited by SCS Global Services."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "61% PCR certified plastic",
      "3-year battery life on 2x AAA",
      "Carbon label on retail box"
    ],
    "areasToImprove": [
      "Keys are membrane rather than hot-swappable mechanical switches"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Logitech Carbon Clarity Product Carbon Profile",
    "dataConfidence": "High"
  },
  {
    "id": "dell-xps-13-plus-eco",
    "name": "Dell XPS 13 Plus Ultrabook (Low Carbon Hydro Aluminum)",
    "brand": "Dell",
    "category": "Electronics",
    "subcategory": "Laptops",
    "imageUrl": "",
    "price": 134990,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 78.5,
    "grade": "B",
    "subscores": {
      "carbonImpact": 76,
      "materials": 80,
      "durability": 84,
      "recyclability": 82,
      "packaging": 94,
      "repairability": 60,
      "certifications": 85
    },
    "scoreExplanation": "Manufactured using hydro-powered low-carbon aluminum, reducing chassis manufacturing emissions by 50%. Comes in 100% recycled packaging.",
    "carbonFootprintKg": 182.0,
    "conventionalCarbonKg": 290.0,
    "waterFootprintLiters": 3800,
    "energyUsage": "Medium",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 55,
    "materialsBreakdown": [
      {
        "name": "Low-Carbon Hydro Aluminium",
        "percentage": 45,
        "isRecycled": false,
        "color": "#06b6d4"
      },
      {
        "name": "Recycled Plastics in Bezel & Fan",
        "percentage": 22,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Silicon CPU & Motherboard",
        "percentage": 25,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Copper & Lithium Battery",
        "percentage": 8,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 115.0,
        "percentage": 63,
        "notes": "Aluminum smelted with hydroelectric power"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 42.0,
        "percentage": 23,
        "notes": "Clean factory protocols"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 12.0,
        "percentage": 7,
        "notes": "Optimized palletization"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 9.0,
        "percentage": 5,
        "notes": "Energy Star 8.0 efficiency"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 4.0,
        "percentage": 2,
        "notes": "Dell trade-in program"
      }
    ],
    "packagingType": "100% Recycled ocean-bound plastic tray with molded paper outer",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "epeat-gold",
        "name": "EPEAT Gold Certified",
        "issuer": "GEC",
        "verified": true,
        "description": "Meets top criteria for circularity and materials."
      },
      {
        "id": "energy-star",
        "name": "ENERGY STAR\u00ae 8.0",
        "issuer": "EPA",
        "verified": true,
        "description": "High operational power efficiency."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Hydro-Powered Low-Emissions Aluminum",
        "status": "Verified",
        "analysis": "Verified hydro-smelted aluminum supply chain audit."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "framework-laptop-13",
        "name": "Framework Laptop 13 (AMD Ryzen\u2122 7040)",
        "brand": "Framework Computer",
        "price": 89999,
        "greenScore": 92.0,
        "carbonReductionPercent": 19,
        "reason": "Full user modularity and replaceable motherboard"
      }
    ],
    "keyStrengths": [
      "Low-carbon hydro-smelted aluminum chassis",
      "100% recycled packaging",
      "EPEAT Gold status"
    ],
    "areasToImprove": [
      "Soldered RAM prevents user memory upgrades"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Dell Technologies Product Carbon Footprint Datasheet",
    "dataConfidence": "High"
  },
  {
    "id": "apple-watch-s9-carbon-neutral",
    "name": "Apple Watch Series 9 (Carbon Neutral Sport Loop)",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Wearables",
    "imageUrl": "",
    "price": 41900,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 86.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 88,
      "durability": 86,
      "recyclability": 84,
      "packaging": 98,
      "repairability": 62,
      "certifications": 88
    },
    "scoreExplanation": "Apple's first officially certified carbon neutral product with Sport Loop, featuring 100% recycled aluminum case, 100% recycled cobalt battery, and 100% clean electricity.",
    "carbonFootprintKg": 8.1,
    "conventionalCarbonKg": 33.0,
    "waterFootprintLiters": 280,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 4.5,
    "manufacturingCountry": "China",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "100% Recycled Aluminum Case",
        "percentage": 42,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "100% Recycled Cobalt in Battery",
        "percentage": 18,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "100% Recycled Gold & Tin Soldering",
        "percentage": 8,
        "isRecycled": true,
        "color": "#f59e0b"
      },
      {
        "name": "OLED Display & Sapphire Glass",
        "percentage": 32,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 4.2,
        "percentage": 52,
        "notes": "Recycled aluminum and rare earths"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.9,
        "percentage": 23,
        "notes": "100% clean supplier electricity"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 1.2,
        "percentage": 15,
        "notes": "Non-air transport shift"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.6,
        "percentage": 8,
        "notes": "Energy efficient S9 SiP chip"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 2,
        "notes": "Apple Trade In and Daisy disassembly robot"
      }
    ],
    "packagingType": "100% Fiber-based compact box with zero plastic wrap",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "carbon-neutral",
        "name": "Carbon Neutral Certified",
        "issuer": "SCS Global Services",
        "verified": true,
        "description": "ISO 14040/44 audited life cycle emissions neutralized."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Carbon Neutral Product",
        "status": "Verified",
        "analysis": "Achieved via 78% absolute emissions reduction + verified nature-based carbon removals."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% recycled case, cobalt, and gold",
      "Zero plastic packaging",
      "Clean energy manufacturing"
    ],
    "areasToImprove": [
      "Compact sealed chassis makes battery replacement difficult without Apple service"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Apple Series 9 Product Environmental Report",
    "dataConfidence": "High"
  },
  {
    "id": "fairbuds-xl-modular",
    "name": "Fairphone Fairbuds XL Modular Wireless Headphones",
    "brand": "Fairphone",
    "category": "Electronics",
    "subcategory": "Audio & Headphones",
    "imageUrl": "",
    "price": 22999,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 90,
      "materials": 94,
      "durability": 96,
      "recyclability": 92,
      "packaging": 96,
      "repairability": 100,
      "certifications": 92
    },
    "scoreExplanation": "Fairbuds XL are the world's most repairable headphones with 11 modular spare parts replaceable using a standard screwdriver, Fairtrade gold integration, and 100% recycled plastic.",
    "carbonFootprintKg": 9.7,
    "conventionalCarbonKg": 28.0,
    "waterFootprintLiters": 290,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 8.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Recycled Plastics",
        "percentage": 58,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "100% Recycled Aluminium in Headband",
        "percentage": 22,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Vegan Leather Ear Cushions",
        "percentage": 12,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Fairtrade Gold Plating & Copper",
        "percentage": 8,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 5.2,
        "percentage": 53,
        "notes": "Audited fair ASM supply chain"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 2.6,
        "percentage": 27,
        "notes": "Living wage bonus paid to factory workers"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.9,
        "percentage": 9,
        "notes": "Train and marine transport"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.6,
        "percentage": 7,
        "notes": "30-hour battery life"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.4,
        "percentage": 4,
        "notes": "100% recyclable components"
      }
    ],
    "packagingType": "Plastic-free FSC certified unbleached kraft box",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "Top scoring environmental stewardship."
      },
      {
        "id": "fairtrade-gold",
        "name": "Fairtrade Gold",
        "issuer": "Fairtrade",
        "verified": true,
        "description": "Traceable ethical precious metals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "11 Replaceable Spare Parts",
        "status": "Verified",
        "analysis": "Headband, battery, speakers, and cables sold individually on web store."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "10/10 repairability score",
      "Replaceable battery in 30 seconds",
      "Fairtrade gold integration"
    ],
    "areasToImprove": [
      "Slightly heavier weight due to modular screw housings"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Fraunhofer IZM LCA Audit Report",
    "dataConfidence": "High"
  },
  {
    "id": "anker-735-ganprime",
    "name": "Anker 735 GaNPrime 65W High-Efficiency Eco-Charger",
    "brand": "Anker",
    "category": "Electronics",
    "subcategory": "Power & Cables",
    "imageUrl": "",
    "price": 4999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 85.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 86,
      "materials": 82,
      "durability": 90,
      "recyclability": 84,
      "packaging": 94,
      "repairability": 70,
      "certifications": 88
    },
    "scoreExplanation": "Uses Gallium Nitride (GaN) semiconductors to deliver 95% electrical conversion efficiency, saving wasted heat energy over conventional silicon chargers.",
    "carbonFootprintKg": 3.8,
    "conventionalCarbonKg": 11.2,
    "waterFootprintLiters": 95,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "Vietnam",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "GaN Semiconductors & Copper",
        "percentage": 35,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Post-Consumer Recycled Polycarbonate",
        "percentage": 45,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Steel Prongs & Connectors",
        "percentage": 20,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.1,
        "percentage": 55,
        "notes": "Gallium nitride saves silicon extraction"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.9,
        "percentage": 24,
        "notes": "ISO 14001 plant"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.4,
        "percentage": 11,
        "notes": "53% smaller size cuts shipping footprint"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.3,
        "percentage": 8,
        "notes": "95% efficiency cuts grid losses"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.1,
        "percentage": 2,
        "notes": "Electronics recycling compliant"
      }
    ],
    "packagingType": "Plastic-free soy ink printed paper card box",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "doe-level-vi",
        "name": "DOE Level VI Efficiency",
        "issuer": "US Dept of Energy",
        "verified": true,
        "description": "Highest power supply efficiency tier."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "95% Energy Conversion Efficiency",
        "status": "Verified",
        "analysis": "Lab tested power factor and thermal dissipation rate."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Replaces 3 separate chargers with 1",
      "53% smaller physical volume",
      "GaN heat reduction"
    ],
    "areasToImprove": [
      "Sealed sonic-welded casing prevents internal component repair"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Anker Eco-Tech Engineering Environmental Whitepaper",
    "dataConfidence": "High"
  },
  {
    "id": "kindle-paperwhite-signature",
    "name": "Amazon Kindle Paperwhite Signature Edition (60% PCR Plastic)",
    "brand": "Amazon",
    "category": "Electronics",
    "subcategory": "e-Readers",
    "imageUrl": "",
    "price": 17999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 79.0,
    "grade": "B",
    "subscores": {
      "carbonImpact": 80,
      "materials": 82,
      "durability": 84,
      "recyclability": 78,
      "packaging": 94,
      "repairability": 58,
      "certifications": 82
    },
    "scoreExplanation": "Built with 60% post-consumer recycled plastic and 70% recycled magnesium in the chassis, featuring 10-week battery life and 95% wood-fiber packaging.",
    "carbonFootprintKg": 24.5,
    "conventionalCarbonKg": 42.0,
    "waterFootprintLiters": 480,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.5,
    "manufacturingCountry": "China",
    "renewableEnergyPercent": 50,
    "materialsBreakdown": [
      {
        "name": "Post-Consumer Recycled Plastics",
        "percentage": 60,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Recycled Magnesium Chassis",
        "percentage": 18,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "E-Ink Carta Glass Layer",
        "percentage": 14,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Battery & Circuitry",
        "percentage": 8,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 15.2,
        "percentage": 62,
        "notes": "E-ink display and recycled polymers"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 5.8,
        "percentage": 24,
        "notes": "Automated cleanroom assembly"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 2.1,
        "percentage": 9,
        "notes": "Standard container freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.8,
        "percentage": 3,
        "notes": "Consumes energy only when turning pages"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.6,
        "percentage": 2,
        "notes": "Amazon trade-in and recycling"
      }
    ],
    "packagingType": "95% Wood-fiber packaging from responsibly managed forests",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "climate-pledge",
        "name": "Climate Pledge Friendly",
        "issuer": "Amazon",
        "verified": true,
        "description": "Meets third-party circularity standards."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces Hundreds of Paper Books",
        "status": "Verified",
        "analysis": "LCA shows reading ~25 books pays back device manufacturing emissions."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Extremely low idle power draw",
      "60% PCR plastic content",
      "High durability e-ink screen"
    ],
    "areasToImprove": [
      "Battery replacement requires prying open adhesive seal"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Amazon Kindle Product Sustainability Factsheet",
    "dataConfidence": "Medium"
  },
  {
    "id": "bose-qc-ultra-eco",
    "name": "Bose QuietComfort Ultra Headphones",
    "brand": "Bose",
    "category": "Electronics",
    "subcategory": "Audio & Headphones",
    "imageUrl": "",
    "price": 34900,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 76.5,
    "grade": "B",
    "subscores": {
      "carbonImpact": 74,
      "materials": 78,
      "durability": 84,
      "recyclability": 76,
      "packaging": 90,
      "repairability": 68,
      "certifications": 78
    },
    "scoreExplanation": "Premium active noise cancelling headphones featuring tool-free replaceable ear cushions, durable cast aluminum yokes, and plastic-reduced packaging.",
    "carbonFootprintKg": 18.2,
    "conventionalCarbonKg": 29.5,
    "waterFootprintLiters": 390,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.5,
    "manufacturingCountry": "Malaysia",
    "renewableEnergyPercent": 50,
    "materialsBreakdown": [
      {
        "name": "Cast Aluminium Yokes",
        "percentage": 32,
        "isRecycled": false,
        "color": "#06b6d4"
      },
      {
        "name": "Engineered Polymers",
        "percentage": 42,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Protein Leather Ear Cushions",
        "percentage": 14,
        "isRecycled": false,
        "color": "#10b981"
      },
      {
        "name": "Acoustic Drivers & Lithium Cell",
        "percentage": 12,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 11.2,
        "percentage": 61,
        "notes": "Aluminum casting and acoustic resins"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 4.1,
        "percentage": 23,
        "notes": "Precision assembly"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 1.6,
        "percentage": 9,
        "notes": "Air and sea logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.9,
        "percentage": 5,
        "notes": "24-hour battery endurance"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.4,
        "percentage": 2,
        "notes": "Replaceable earpad accessories extend life"
      }
    ],
    "packagingType": "FSC certified paper box with paper tape",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "rohs",
        "name": "RoHS Certified",
        "issuer": "EU",
        "verified": true,
        "description": "Free of hazardous heavy metals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaceable Ear Cushions",
        "status": "Verified",
        "analysis": "Official snap-in replacement cushion kits sold separately."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "fairbuds-xl-modular",
        "name": "Fairphone Fairbuds XL Modular Wireless Headphones",
        "brand": "Fairphone",
        "price": 22999,
        "greenScore": 93.0,
        "carbonReductionPercent": 46,
        "reason": "Significantly higher modularity and Fairtrade materials"
      }
    ],
    "keyStrengths": [
      "Durable cast metal headband hinges",
      "Snap-in user replaceable ear cushions",
      "High build quality"
    ],
    "areasToImprove": [
      "Battery replacement requires service facility"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Bose Corporate Social Responsibility Report",
    "dataConfidence": "Medium"
  },
  {
    "id": "nimble-champ-charger",
    "name": "Nimble Champ 10k mAh Portable Power Bank",
    "brand": "Nimble",
    "category": "Electronics",
    "subcategory": "Power Banks",
    "imageUrl": "",
    "price": 3499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 89.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 92,
      "durability": 86,
      "recyclability": 88,
      "packaging": 98,
      "repairability": 74,
      "certifications": 92
    },
    "scoreExplanation": "Made with 72.5% post-consumer recycled plastic housing and packaged in 100% plastic-free recycled scrap paper. Includes a free pre-paid e-waste return bag.",
    "carbonFootprintKg": 5.4,
    "conventionalCarbonKg": 14.8,
    "waterFootprintLiters": 160,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "Vietnam",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "72.5% Post-Consumer Recycled Plastic",
        "percentage": 48,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "High-Density Lithium-Polymer Cells",
        "percentage": 42,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Copper & Control Circuitry",
        "percentage": 10,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 3.1,
        "percentage": 57,
        "notes": "Recycled plastic compounds"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.4,
        "percentage": 26,
        "notes": "Audited ethical factory"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.5,
        "percentage": 9,
        "notes": "Compact box volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.3,
        "percentage": 6,
        "notes": "High charge retention"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.1,
        "percentage": 2,
        "notes": "Prepaid return recycling envelope included"
      }
    ],
    "packagingType": "100% Recycled scrap paper pulp box with zero plastic shrink wrap",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Highest verified social and environmental standards."
      },
      {
        "id": "1-percent",
        "name": "1% for the Planet",
        "issuer": "1% for the Planet",
        "verified": true,
        "description": "1% of revenue donated to environmental causes."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Includes Free E-Waste Recycling",
        "status": "Verified",
        "analysis": "Includes a postage-paid envelope to safely recycle old electronics."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Free prepaid e-waste collection pouch",
      "72.5% PCR plastic body",
      "B-Corp certified"
    ],
    "areasToImprove": [
      "Sealed battery cannot be replaced without replacing casing"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Nimble Impact Progress Report",
    "dataConfidence": "High"
  },
  {
    "id": "hp-dragonfly-g4",
    "name": "HP Dragonfly G4 Ultra-Light Business Laptop",
    "brand": "HP",
    "category": "Electronics",
    "subcategory": "Laptops",
    "imageUrl": "",
    "price": 142000,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 83.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 82,
      "materials": 86,
      "durability": 88,
      "recyclability": 84,
      "packaging": 94,
      "repairability": 68,
      "certifications": 90
    },
    "scoreExplanation": "Incorporates 90% recycled magnesium in the enclosure, ocean-bound plastics in speaker enclosures, and 100% sustainably sourced packaging.",
    "carbonFootprintKg": 165.0,
    "conventionalCarbonKg": 285.0,
    "waterFootprintLiters": 3400,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "China",
    "renewableEnergyPercent": 65,
    "materialsBreakdown": [
      {
        "name": "90% Recycled Magnesium Enclosure",
        "percentage": 44,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Ocean-Bound Plastics in Speaker Box",
        "percentage": 8,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Motherboard & Intel Core CPU",
        "percentage": 28,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Long-Life Battery Cells",
        "percentage": 20,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 105.0,
        "percentage": 64,
        "notes": "Recycled lightweight magnesium alloys"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 37.0,
        "percentage": 22,
        "notes": "HP Sustainable IT manufacturing standards"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 12.0,
        "percentage": 7,
        "notes": "Pallet density optimization"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 8.0,
        "percentage": 5,
        "notes": "HP Smart Sense intelligent power throttle"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 3.0,
        "percentage": 2,
        "notes": "HP Planet Partners global recycling"
      }
    ],
    "packagingType": "100% Sustainably sourced molded pulp outer cushions",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "epeat-gold",
        "name": "EPEAT Gold with Climate+",
        "issuer": "GEC",
        "verified": true,
        "description": "Highest designation for ultra low carbon and circularity."
      },
      {
        "id": "tco",
        "name": "TCO Certified Generation 9",
        "issuer": "TCO Development",
        "verified": true,
        "description": "Strict social responsibility and low hazardous materials."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Ocean-Bound Plastics Included",
        "status": "Verified",
        "analysis": "HP has collected over 35 million bottles in Haiti for laptop parts."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "framework-laptop-13",
        "name": "Framework Laptop 13 (AMD Ryzen\u2122 7040)",
        "brand": "Framework Computer",
        "price": 89999,
        "greenScore": 92.0,
        "carbonReductionPercent": 10,
        "reason": "Modular swappable motherboards"
      }
    ],
    "keyStrengths": [
      "90% recycled magnesium chassis",
      "EPEAT Gold with Climate+ seal",
      "Ocean-bound plastic integration"
    ],
    "areasToImprove": [
      "Higher price premium for corporate enterprise tier"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "HP Product Carbon Footprint (Dragonfly G4)",
    "dataConfidence": "High"
  },
  {
    "id": "klean-kanteen-classic-27",
    "name": "Klean Kanteen Classic Insulated 27oz Reusable Bottle",
    "brand": "Klean Kanteen",
    "category": "Home & Kitchen",
    "subcategory": "Reusable Bottles & Cookware",
    "imageUrl": "",
    "price": 2899,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 98,
      "recyclability": 92,
      "packaging": 96,
      "repairability": 86,
      "certifications": 93
    },
    "scoreExplanation": "Made with 90% certified recycled 18/8 food-grade stainless steel, reducing raw material greenhouse gas emissions by 40%. Lifetime warranty replaces thousands of plastic bottles.",
    "carbonFootprintKg": 2.2,
    "conventionalCarbonKg": 18.5,
    "waterFootprintLiters": 110,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 12.0,
    "manufacturingCountry": "China (Audited Fair Factory)",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "90% Certified Recycled 18/8 Stainless Steel",
        "percentage": 88,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Food-Grade Silicone Ring",
        "percentage": 8,
        "isRecycled": false,
        "color": "#10b981"
      },
      {
        "name": "Klean Coat\u00ae Non-Toxic Powder Finish",
        "percentage": 4,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 1.2,
        "percentage": 55,
        "notes": "Recycled steel scrap smelting"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.6,
        "percentage": 27,
        "notes": "Non-toxic Klean Coat finish"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.25,
        "percentage": 11,
        "notes": "Sea freight delivery"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.1,
        "percentage": 5,
        "notes": "Dishwasher durable"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 2,
        "notes": "100% curbside recyclable steel"
      }
    ],
    "packagingType": "FSC certified paper band with soy ink, zero plastic sleeves",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High social and environmental governance."
      },
      {
        "id": "climate-neutral",
        "name": "Climate Neutral Certified",
        "issuer": "Change Climate",
        "verified": true,
        "description": "Scope 1, 2 and 3 emissions measured and neutralized."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "90% Post-Consumer Recycled Steel",
        "status": "Verified",
        "analysis": "Independently verified by Intertek certification audit."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "90% certified recycled stainless steel",
      "Climate Neutral Certified",
      "Lifetime warranty coverage"
    ],
    "areasToImprove": [
      "Silicone cap gasket needs periodic replacement after 5 years"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Klean Kanteen Annual Impact & LCA Report",
    "dataConfidence": "High"
  },
  {
    "id": "lodge-cast-iron-skillet-10",
    "name": "Lodge 10.25-Inch Seasoned Cast Iron Skillet",
    "brand": "Lodge",
    "category": "Home & Kitchen",
    "subcategory": "Cookware",
    "imageUrl": "",
    "price": 3499,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 95.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 100,
      "recyclability": 98,
      "packaging": 94,
      "repairability": 90,
      "certifications": 92
    },
    "scoreExplanation": "Zero toxic PFAS/PTFE chemicals, 100-year generational lifespan that outlasts dozens of non-stick pans, cast from 100% recyclable pig iron and pre-seasoned with 100% natural vegetable oil.",
    "carbonFootprintKg": 4.1,
    "conventionalCarbonKg": 32.0,
    "waterFootprintLiters": 60,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 100.0,
    "manufacturingCountry": "USA (Tennessee)",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "Virgin and Recycled Cast Iron",
        "percentage": 98,
        "isRecycled": true,
        "color": "#334155"
      },
      {
        "name": "Baked Natural Vegetable Oil Seasoning",
        "percentage": 2,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.4,
        "percentage": 58,
        "notes": "Iron foundry with recycled scrap iron"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.1,
        "percentage": 27,
        "notes": "Natural oil seasoning tunnel"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.4,
        "percentage": 10,
        "notes": "Heavy freight, but amortized over 100 years"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.15,
        "percentage": 4,
        "notes": "Induction, gas, and camp-fire compatible"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 1,
        "notes": "Endlessly recyclable scrap iron"
      }
    ],
    "packagingType": "Cardboard belly band, zero plastic packaging",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "pfas-free",
        "name": "100% PFAS & PTFE Free",
        "issuer": "FDA Tested",
        "verified": true,
        "description": "Completely free of forever chemicals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Lasts for Generations (100+ Years)",
        "status": "Verified",
        "analysis": "Cast iron metallurgy does not degrade with proper oil maintenance."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100-year multi-generational lifespan",
      "Zero PFAS/PTFE forever chemicals",
      "Infinitely recyclable metal"
    ],
    "areasToImprove": [
      "Heavier weight requires two-handed handling when full"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Lodge Foundry Environmental & Life Cycle Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "sodastream-terra",
    "name": "SodaStream Terra Sparkling Water Maker",
    "brand": "SodaStream",
    "category": "Home & Kitchen",
    "subcategory": "Kitchen Appliances",
    "imageUrl": "",
    "price": 8999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 88.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 84,
      "durability": 88,
      "recyclability": 86,
      "packaging": 94,
      "repairability": 82,
      "certifications": 88
    },
    "scoreExplanation": "Each SodaStream machine saves up to 2,000 single-use plastic bottles per year. Requires zero electricity to operate, functioning entirely on mechanical gas pressure.",
    "carbonFootprintKg": 8.5,
    "conventionalCarbonKg": 74.0,
    "waterFootprintLiters": 210,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 8.0,
    "manufacturingCountry": "Israel",
    "renewableEnergyPercent": 65,
    "materialsBreakdown": [
      {
        "name": "BPA-Free Food-Safe Polypropylene",
        "percentage": 65,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Quick Connect Aluminum CO2 Cylinder",
        "percentage": 25,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Stainless Steel Internal Valve",
        "percentage": 10,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 4.6,
        "percentage": 54,
        "notes": "Machine casing and aluminum cylinder"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 2.2,
        "percentage": 26,
        "notes": "Mechanical valve calibration"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 1.1,
        "percentage": 13,
        "notes": "Shipping and exchange logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.4,
        "percentage": 5,
        "notes": "Zero kilowatt-hours required"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 2,
        "notes": "Refillable cylinder closed-loop exchange"
      }
    ],
    "packagingType": "100% Recyclable cardboard box without EPS styrofoam inserts",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "carbon-trust",
        "name": "Carbon Trust Footprint Label",
        "issuer": "Carbon Trust",
        "verified": true,
        "description": "Certified reduction in carbon intensity vs canned soda."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Saves 2,000 Single-Use Bottles Annually",
        "status": "Verified",
        "analysis": "Based on average household consumption of packaged sparkling water."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Zero electricity required",
      "Refillable closed-loop CO2 cylinders",
      "Dramatically cuts plastic trash"
    ],
    "areasToImprove": [
      "PET carbonating bottles must be replaced every 3-4 years for safety pressure"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "SodaStream Global Environmental Impact Audit",
    "dataConfidence": "High"
  },
  {
    "id": "philips-hue-smart-led-3pack",
    "name": "Philips Hue White & Color Ambiance LED (Pack of 3)",
    "brand": "Philips Signify",
    "category": "Home & Kitchen",
    "subcategory": "Smart Lighting",
    "imageUrl": "",
    "price": 7999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 87.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 84,
      "durability": 92,
      "recyclability": 82,
      "packaging": 94,
      "repairability": 74,
      "certifications": 90
    },
    "scoreExplanation": "Consumes 85% less electricity than incandescent bulbs with a rated lifespan of 25,000 hours (over 20 years of normal use). Shipped in 100% plastic-free packaging.",
    "carbonFootprintKg": 4.5,
    "conventionalCarbonKg": 68.0,
    "waterFootprintLiters": 90,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 22.0,
    "manufacturingCountry": "Poland",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Die-Cast Aluminum Heat Sink",
        "percentage": 42,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Polycarbonate Diffuser Globe",
        "percentage": 30,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Zigbee/Bluetooth Control PCB & LEDs",
        "percentage": 28,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.1,
        "percentage": 47,
        "notes": "Aluminum casting and LED silicon"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.9,
        "percentage": 20,
        "notes": "100% renewable powered factory"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.4,
        "percentage": 9,
        "notes": "Compact box dimensions"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.9,
        "percentage": 20,
        "notes": "Consumes only 9.5W at full brightness"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 4,
        "notes": "E-waste collection compliant"
      }
    ],
    "packagingType": "FSC certified paperboard with zero plastic windows",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "energy-star",
        "name": "Energy Star Qualified",
        "issuer": "EPA",
        "verified": true,
        "description": "Exceeds strict lumen per watt efficacy requirements."
      },
      {
        "id": "rohs",
        "name": "RoHS Lead-Free",
        "issuer": "EU",
        "verified": true,
        "description": "Zero mercury or hazardous heavy metals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "25,000 Hours Rated Lifespan",
        "status": "Verified",
        "analysis": "LM-80 testing confirms lumen maintenance above 70% at 25k hours."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "25,000-hour operational lifetime",
      "85% energy reduction vs halogen",
      "Zero plastic packaging"
    ],
    "areasToImprove": [
      "Smart standby power draw requires constant connection"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Signify Sustainability Lighting LCA Model",
    "dataConfidence": "High"
  },
  {
    "id": "caraway-ceramic-cookware",
    "name": "Caraway Non-Toxic Ceramic Cookware Set (PTFE/PFAS Free)",
    "brand": "Caraway",
    "category": "Home & Kitchen",
    "subcategory": "Cookware",
    "imageUrl": "",
    "price": 34999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 86.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 86,
      "materials": 90,
      "durability": 86,
      "recyclability": 84,
      "packaging": 96,
      "repairability": 74,
      "certifications": 88
    },
    "scoreExplanation": "Releases up to 60% less CO\u2082 during manufacturing compared to traditional non-stick pans by utilizing a non-toxic mineral ceramic coating free of PTFE, PFOA, cadmium, and lead.",
    "carbonFootprintKg": 16.5,
    "conventionalCarbonKg": 42.0,
    "waterFootprintLiters": 340,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 7.0,
    "manufacturingCountry": "India / China",
    "renewableEnergyPercent": 60,
    "materialsBreakdown": [
      {
        "name": "Heavy Gauge Aluminum Core",
        "percentage": 70,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Mineral-Based Sol-Gel Ceramic Coating",
        "percentage": 18,
        "isRenewable": false,
        "color": "#10b981"
      },
      {
        "name": "Stainless Steel Riveted Handles",
        "percentage": 12,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 9.8,
        "percentage": 59,
        "notes": "Sol-gel mineral coating eliminates synthetic fluoropolymers"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 3.8,
        "percentage": 23,
        "notes": "Cured at lower temperatures than Teflon"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 1.6,
        "percentage": 10,
        "notes": "Protective recycled cork organizers"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.8,
        "percentage": 5,
        "notes": "Even heat conductivity speeds cooking"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.5,
        "percentage": 3,
        "notes": "Metal recycling compatible"
      }
    ],
    "packagingType": "Zero single-use plastics, biodegradable cork trivets, and unbleached cardboard",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "prop-65",
        "name": "California Prop 65 Compliant",
        "issuer": "OEHHA",
        "verified": true,
        "description": "Zero chemical leaching at high heat."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Releases 60% Less CO\u2082 than Teflon",
        "status": "Verified",
        "analysis": "LCA benchmark validates lower kiln temperatures for mineral sol-gel."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "lodge-cast-iron-skillet-10",
        "name": "Lodge 10.25-Inch Seasoned Cast Iron Skillet",
        "brand": "Lodge",
        "price": 3499,
        "greenScore": 95.0,
        "carbonReductionPercent": 75,
        "reason": "Generational 100-year durability"
      }
    ],
    "keyStrengths": [
      "Zero toxic PTFE/PFAS leaching",
      "Recycled cork organization docks",
      "Plastic-free packaging"
    ],
    "areasToImprove": [
      "Ceramic coating requires gentle silicone utensils to maintain non-stick properties"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Caraway Environmental Chemistry Product Sheet",
    "dataConfidence": "High"
  },
  {
    "id": "dyson-v15-detect-eco",
    "name": "Dyson V15 Detect Cordless Vacuum (Washable Lifetime HEPA)",
    "brand": "Dyson",
    "category": "Home & Kitchen",
    "subcategory": "Home Appliances",
    "imageUrl": "",
    "price": 62900,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 79.5,
    "grade": "B",
    "subscores": {
      "carbonImpact": 78,
      "materials": 80,
      "durability": 84,
      "recyclability": 80,
      "packaging": 92,
      "repairability": 74,
      "certifications": 82
    },
    "scoreExplanation": "Features lifetime washable HEPA filters eliminating single-use disposable vacuum bags, piezo acoustic sensor that throttles motor power intelligently, and click-in battery.",
    "carbonFootprintKg": 44.0,
    "conventionalCarbonKg": 82.0,
    "waterFootprintLiters": 680,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 7.0,
    "manufacturingCountry": "Malaysia / Singapore",
    "renewableEnergyPercent": 55,
    "materialsBreakdown": [
      {
        "name": "Polycarbonate & ABS Plastics",
        "percentage": 62,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Aluminum Wand Tube",
        "percentage": 18,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "High-Efficiency Brushless Motor & Battery",
        "percentage": 20,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 26.5,
        "percentage": 60,
        "notes": "Engineered plastics and neodymium magnets"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 9.8,
        "percentage": 22,
        "notes": "Automated clean assembly"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 3.8,
        "percentage": 9,
        "notes": "Air and maritime logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 2.7,
        "percentage": 6,
        "notes": "Dynamic load auto-suction throttling"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 1.2,
        "percentage": 3,
        "notes": "Spare parts catalog availability"
      }
    ],
    "packagingType": "Molded pulp interior cushions with minimal plastic tape",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "hepa-13",
        "name": "HEPA H13 Filtration",
        "issuer": "SGS",
        "verified": true,
        "description": "Captures 99.97% of particles down to 0.1 microns."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Bag Waste for Lifetime",
        "status": "Verified",
        "analysis": "Cyclone separation and washable filter eliminates disposable consumables."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "No disposable bags or paper filters",
      "Swappable click-in battery",
      "Intelligent power throttling"
    ],
    "areasToImprove": [
      "Complex internal electronic triggers require authorized Dyson repair"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Dyson Engineering Life Cycle Assessment Report",
    "dataConfidence": "Medium"
  },
  {
    "id": "berkey-gravity-purifier",
    "name": "Berkey Royal Stainless Steel Gravity Water Purifier",
    "brand": "Berkey",
    "category": "Home & Kitchen",
    "subcategory": "Water Purification",
    "imageUrl": "",
    "price": 28500,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 94,
      "durability": 98,
      "recyclability": 94,
      "packaging": 92,
      "repairability": 90,
      "certifications": 92
    },
    "scoreExplanation": "Requires zero electricity or plumbing water pressure, operating purely on natural gravity. Each pair of Black Berkey elements purifies 22,700 liters, replacing ~45,000 plastic water bottles.",
    "carbonFootprintKg": 6.8,
    "conventionalCarbonKg": 95.0,
    "waterFootprintLiters": 80,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 25.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Food-Grade 304 Stainless Steel Chambers",
        "percentage": 82,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Coconut Shell Carbon Composite Elements",
        "percentage": 14,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Pure Gum Rubber & Stainless Spigot",
        "percentage": 4,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 4.1,
        "percentage": 60,
        "notes": "Deep-drawn 304 stainless steel"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.6,
        "percentage": 24,
        "notes": "Clean polishing and micro-filtration baking"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.7,
        "percentage": 10,
        "notes": "Heavy gauge carton packing"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.2,
        "percentage": 3,
        "notes": "Zero kilowatt hours of electricity for life"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 3,
        "notes": "Steel body lasts practically indefinitely"
      }
    ],
    "packagingType": "Heavy corrugated cardboard with molded pulp cushions",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "nsf-53",
        "name": "NSF/ANSI Standard 53 Tested",
        "issuer": "Independent Envirotek Labs",
        "verified": true,
        "description": "Exceeds EPA standards for pathogenic bacteria and heavy metal removal."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Electricity or Water Wastewater",
        "status": "Verified",
        "analysis": "Unlike Reverse Osmosis (RO) systems that waste 3 liters per 1 liter purified, gravity generates 0% wastewater."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Zero electricity required",
      "Zero wastewater (unlike RO systems)",
      "Lifetime food-grade 304 steel body"
    ],
    "areasToImprove": [
      "Black Berkey filter elements must be primed with manual rubber washer initially"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Independent Laboratory Testing & LCA Comparison by Envirotek Labs",
    "dataConfidence": "High"
  },
  {
    "id": "keepcup-brew-cork-12",
    "name": "KeepCup Brew Cork 12oz Tempered Glass Reusable Cup",
    "brand": "KeepCup",
    "category": "Home & Kitchen",
    "subcategory": "Drinkware & Coffee",
    "imageUrl": "",
    "price": 2299,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 92,
      "durability": 90,
      "recyclability": 92,
      "packaging": 96,
      "repairability": 88,
      "certifications": 92
    },
    "scoreExplanation": "Tempered soda lime glass with sustainably harvested natural Portuguese cork band from regenerative oak forests. Break-even with paper coffee cups reached in just 15 uses.",
    "carbonFootprintKg": 1.4,
    "conventionalCarbonKg": 12.8,
    "waterFootprintLiters": 65,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 8.0,
    "manufacturingCountry": "Australia / Portugal",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Durable Tempered Soda Lime Glass",
        "percentage": 70,
        "isRecycled": false,
        "color": "#06b6d4"
      },
      {
        "name": "Upcycled Natural Portuguese Cork",
        "percentage": 18,
        "isRenewable": true,
        "color": "#f59e0b"
      },
      {
        "name": "BPA/BPS-Free Polypropylene #5 Lid",
        "percentage": 12,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.8,
        "percentage": 57,
        "notes": "Cork harvesting does not fell the cork oak trees"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.35,
        "percentage": 25,
        "notes": "Local assembly in Melbourne"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.15,
        "percentage": 11,
        "notes": "Container shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.07,
        "percentage": 5,
        "notes": "Dishwasher safe glass base"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 2,
        "notes": "Cork is 100% home compostable"
      }
    ],
    "packagingType": "100% Recycled cardboard cradle with soy inks",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "Founding Australian B-Corp member."
      },
      {
        "id": "1-percent",
        "name": "1% for the Planet",
        "issuer": "1% for the Planet",
        "verified": true,
        "description": "Donates 1% of revenue to environmental non-profits."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Breaks Even After 15 Uses",
        "status": "Verified",
        "analysis": "Comprehensive LCA by Edge Environment confirms equivalence after 15 coffees."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Natural regenerative cork thermal band",
      "Breaks even after 15 uses",
      "Modular replacement lids available"
    ],
    "areasToImprove": [
      "Cork band must be hand washed and not submerged in dishwashers"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Edge Environment LCA Study for KeepCup",
    "dataConfidence": "High"
  },
  {
    "id": "full-circle-dish-dispenser",
    "name": "Full Circle Bubble Up Ceramic & Bamboo Dish Soap Dispenser",
    "brand": "Full Circle Home",
    "category": "Home & Kitchen",
    "subcategory": "Eco Cleaning Products",
    "imageUrl": "",
    "price": 1299,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 90,
      "recyclability": 92,
      "packaging": 98,
      "repairability": 90,
      "certifications": 92
    },
    "scoreExplanation": "Combines a spring-loaded natural bamboo brush with plant-based recycled ceramic soap dish, generating rich suds while using 50% less liquid detergent.",
    "carbonFootprintKg": 0.9,
    "conventionalCarbonKg": 6.5,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "China (Fair Trade Audited)",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Natural Moso Bamboo Handle",
        "percentage": 40,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Recycled Ceramic Suds Bowl",
        "percentage": 42,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Recycled Plastic / Plant Fiber Bristles",
        "percentage": 18,
        "isRecycled": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.5,
        "percentage": 56,
        "notes": "Rapid-growth bamboo and ceramic cullet"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 24,
        "notes": "Low emission ceramic kiln"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.11,
        "percentage": 12,
        "notes": "Consolidated shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 6,
        "notes": "Reduces soap usage"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 2,
        "notes": "Brush heads are replaceable separately"
      }
    ],
    "packagingType": "100% Recycled craft card with zero plastic ties",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "High standards of social and environmental performance."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaceable Brush Heads",
        "status": "Verified",
        "analysis": "Replacement brush heads sold in 2-packs to keep ceramic base forever."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Replaceable brush head system",
      "Recycled ceramic soap reservoir",
      "Natural fast-renewing bamboo"
    ],
    "areasToImprove": [
      "Bamboo handle should be oiled occasionally to prevent mildew"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Full Circle Home Environmental Impact Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "ecovacs-deebot-t20",
    "name": "Ecovacs Deebot T20 Omni Robot Vacuum (Washable Reusable Mops)",
    "brand": "Ecovacs",
    "category": "Home & Kitchen",
    "subcategory": "Home Appliances",
    "imageUrl": "",
    "price": 79900,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 78.0,
    "grade": "B",
    "subscores": {
      "carbonImpact": 76,
      "materials": 78,
      "durability": 82,
      "recyclability": 80,
      "packaging": 90,
      "repairability": 70,
      "certifications": 80
    },
    "scoreExplanation": "Uses hot-water self-washing microfiber mop pads that are reused for hundreds of cleaning runs, eliminating single-use disposable wet cleaning wipes.",
    "carbonFootprintKg": 52.0,
    "conventionalCarbonKg": 92.0,
    "waterFootprintLiters": 850,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "China",
    "renewableEnergyPercent": 50,
    "materialsBreakdown": [
      {
        "name": "Polypropylene & ABS Housing",
        "percentage": 65,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Lithium-Ion Battery Pack",
        "percentage": 15,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Electric Motors & LiDAR Sensor",
        "percentage": 20,
        "isRecycled": false,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 31.0,
        "percentage": 60,
        "notes": "Plastics and high capacity battery"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 11.5,
        "percentage": 22,
        "notes": "Robotics precision assembly"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 4.8,
        "percentage": 9,
        "notes": "Heavy station packaging"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 3.2,
        "percentage": 6,
        "notes": "Energy efficient brushless motors"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 1.5,
        "percentage": 3,
        "notes": "Module exchange program"
      }
    ],
    "packagingType": "Recycled cardboard outer with molded pulp internal supports",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "tuv-reinland",
        "name": "T\u00dcV Rheinland Certified",
        "issuer": "T\u00dcV",
        "verified": true,
        "description": "Certified hygiene hot water washing effectiveness."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Eliminates Disposable Cleaning Cloths",
        "status": "Verified",
        "analysis": "Dual rotating mop pads wash and dry automatically, lasting 6+ months each."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Washable reusable mop pads",
      "Hot water self-cleaning station",
      "High durability LiDAR navigation"
    ],
    "areasToImprove": [
      "Omni station uses larger physical footprint and standby wattage"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Ecovacs Product Circularity Factsheet",
    "dataConfidence": "Medium"
  },
  {
    "id": "seventh-generation-liquid-detergent",
    "name": "Seventh Generation Concentrated Liquid Laundry Detergent",
    "brand": "Seventh Generation",
    "category": "Cleaning & Household",
    "subcategory": "Laundry Care",
    "imageUrl": "",
    "price": 1199,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 89.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 92,
      "durability": 84,
      "recyclability": 90,
      "packaging": 88,
      "repairability": 80,
      "certifications": 92
    },
    "scoreExplanation": "USDA Certified 93% Biobased formula powered by advanced plant enzymes, completely free of optical brighteners, dyes, and synthetic fragrances, packaged in 100% PCR bottle.",
    "carbonFootprintKg": 1.8,
    "conventionalCarbonKg": 6.2,
    "waterFootprintLiters": 120,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Plant-Derived Surfactants & Enzymes",
        "percentage": 93,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Water & Mineral Preservatives",
        "percentage": 7,
        "isRenewable": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.9,
        "percentage": 50,
        "notes": "Regenerative agricultural enzyme sourcing"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.45,
        "percentage": 25,
        "notes": "Zero-waste certified production facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.25,
        "percentage": 14,
        "notes": "2x concentrated volume cuts shipping weight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.15,
        "percentage": 8,
        "notes": "Cleans effectively in cold water cycles"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 3,
        "notes": "100% post-consumer recycled plastic jug"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled (PCR) HDPE plastic bottle",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "usda-biobased",
        "name": "USDA Certified Biobased 93%",
        "issuer": "USDA",
        "verified": true,
        "description": "Verified biological carbon content."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High standards of environmental transparency."
      },
      {
        "id": "leaping-bunny",
        "name": "Leaping Bunny Cruelty-Free",
        "issuer": "CCIC",
        "verified": true,
        "description": "Never tested on animals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "93% Plant-Based Ingredients",
        "status": "Verified",
        "analysis": "ASTM D6866 radiocarbon testing independently verifies 93% biobased content."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "tru-earth-eco-strips",
        "name": "Tru Earth Eco-Strips Laundry Detergent",
        "brand": "Tru Earth",
        "price": 1699,
        "greenScore": 94.5,
        "carbonReductionPercent": 65,
        "reason": "Zero plastic jug and 94% lighter shipping weight"
      }
    ],
    "keyStrengths": [
      "93% USDA biobased formula",
      "100% PCR recycled bottle",
      "Cold water active enzymes"
    ],
    "areasToImprove": [
      "Plastic cap and spout are harder to recycle in standard curbside streams"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Seventh Generation Corporate Sustainability & LCA Report",
    "dataConfidence": "High"
  },
  {
    "id": "ecover-zero-dish-liquid",
    "name": "Ecover Zero Fragrance-Free Dishwashing Liquid",
    "brand": "Ecover",
    "category": "Cleaning & Household",
    "subcategory": "Kitchen Cleaning",
    "imageUrl": "",
    "price": 549,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 86,
      "recyclability": 92,
      "packaging": 90,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "Made in a TRUE Zero Waste certified ecological factory with biodegradable plant-based ingredients, packaged in a bottle made with 100% post-consumer recycled plastic and Plantastic.",
    "carbonFootprintKg": 0.8,
    "conventionalCarbonKg": 3.4,
    "waterFootprintLiters": 65,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "Belgium",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Plant-Based Biodegradable Surfactants",
        "percentage": 88,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Water & Citric Acid",
        "percentage": 12,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.42,
        "percentage": 52,
        "notes": "European sugar beet and coconut oils"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.18,
        "percentage": 23,
        "notes": "World's first ecological factory with living green roof"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 15,
        "notes": "Rail freight prioritized in Europe"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 6,
        "notes": "Aquatic life safe greywater friendly"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "100% recyclable PCR bottle"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled polyethylene bottle",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "c2c-silver",
        "name": "Cradle to Cradle Certified Silver",
        "issuer": "MBDC",
        "verified": true,
        "description": "Material health, circularity, and renewable energy."
      },
      {
        "id": "leaping-bunny",
        "name": "Cruelty-Free International",
        "issuer": "Leaping Bunny",
        "verified": true,
        "description": "No animal testing."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Septic Safe & Aquatic Friendly",
        "status": "Verified",
        "analysis": "OECD 301 test confirms rapid full biodegradability."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Cradle to Cradle Certified",
      "Zero Waste manufacturing facility",
      "Sensitive skin allergy approved"
    ],
    "areasToImprove": [
      "Dispensing cap is virgin polypropylene"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Ecover Ecological Impact Life Cycle Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "method-all-purpose-spray",
    "name": "Method French Lavender All-Purpose Surface Cleaner",
    "brand": "Method",
    "category": "Cleaning & Household",
    "subcategory": "Surface Cleaners",
    "imageUrl": "",
    "price": 499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 85.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 84,
      "materials": 88,
      "durability": 82,
      "recyclability": 88,
      "packaging": 86,
      "repairability": 80,
      "certifications": 88
    },
    "scoreExplanation": "Non-toxic surface spray made with corn- and coconut-derived cleaning agents, housed in a distinctive 100% post-consumer recycled plastic bottle produced in a solar-and-wind powered facility.",
    "carbonFootprintKg": 1.1,
    "conventionalCarbonKg": 3.9,
    "waterFootprintLiters": 85,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "USA (South Side Soapbox Factory)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Corn & Coconut Plant Cleaners",
        "percentage": 82,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Purified Water & Non-Toxic Fragrance",
        "percentage": 18,
        "isRenewable": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.6,
        "percentage": 55,
        "notes": "Naturally derived surfactants"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 20,
        "notes": "LEED Platinum factory with on-site wind turbine"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.18,
        "percentage": 16,
        "notes": "Domestic logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 5,
        "notes": "Safe on marble, wood, and tile"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 4,
        "notes": "100% PCR bottle recyclable"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled PET bottle",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "c2c-silver",
        "name": "Cradle to Cradle Certified Silver",
        "issuer": "C2CPII",
        "verified": true,
        "description": "Material health and clean production."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "Verified social and environmental performance."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Recycled Plastic Bottle",
        "status": "Verified",
        "analysis": "Bottle (excluding trigger sprayer) is 100% PCR rPET."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "blueland-clean-essentials",
        "name": "Blueland Clean Essentials Dry Tablet Starter Kit",
        "brand": "Blueland",
        "price": 3299,
        "greenScore": 96.0,
        "carbonReductionPercent": 75,
        "reason": "Eliminates shipping heavy water bottles entirely"
      }
    ],
    "keyStrengths": [
      "Manufactured in LEED Platinum wind-powered factory",
      "Cradle to Cradle Certified",
      "100% PCR bottle body"
    ],
    "areasToImprove": [
      "Trigger mechanism contains internal metal spring preventing automatic sorting"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Method Products LCA & B-Corp Public Disclosure",
    "dataConfidence": "High"
  },
  {
    "id": "dropps-eco-laundry-pods",
    "name": "Dropps Zero Waste Laundry Detergent Pods (Cardboard Box)",
    "brand": "Dropps",
    "category": "Cleaning & Household",
    "subcategory": "Laundry Care",
    "imageUrl": "",
    "price": 1499,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 92.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 92,
      "durability": 86,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 82,
      "certifications": 92
    },
    "scoreExplanation": "Pioneer of water-soluble laundry pods packaged in 100% curbside recyclable and compostable cardboard, eliminating bulky plastic laundry jugs entirely.",
    "carbonFootprintKg": 0.95,
    "conventionalCarbonKg": 5.8,
    "waterFootprintLiters": 45,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "Plant-Based Active Detergent",
        "percentage": 88,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Biodegradable Water-Soluble PVOH Membrane",
        "percentage": 12,
        "isRenewable": false,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.52,
        "percentage": 55,
        "notes": "Concentrated plant enzymes"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 23,
        "notes": "EPA Safer Choice verified ingredients"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 13,
        "notes": "Lightweight cardboard box saves diesel"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 6,
        "notes": "Dissolves in both cold and hot wash"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 3,
        "notes": "Cardboard box is 100% curbside recyclable"
      }
    ],
    "packagingType": "100% Recyclable and compostable corrugated paperboard box",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "epa-safer-choice",
        "name": "EPA Safer Choice Partner of the Year",
        "issuer": "EPA",
        "verified": true,
        "description": "Formulated with safest chemical alternatives."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Commitment to positive ecological footprint."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Plastic Free Shipping & Packaging",
        "status": "Verified",
        "analysis": "Cardboard carton ships directly with no secondary plastic envelope."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Zero plastic jug waste",
      "EPA Safer Choice Partner",
      "Ultra concentrated lightweight freight"
    ],
    "areasToImprove": [
      "PVOH casing requires municipal wastewater facilities to fully biodegrade"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Dropps LCA Whitepaper & EPA Safer Choice Audit",
    "dataConfidence": "High"
  },
  {
    "id": "dr-bronners-peppermint-pure-castile",
    "name": "Dr. Bronner's 18-in-1 Pure-Castile Liquid Soap (100% PCR Bottle)",
    "brand": "Dr. Bronner's",
    "category": "Cleaning & Household",
    "subcategory": "Multi-Surface & Body",
    "imageUrl": "",
    "price": 1750,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 95.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 98,
      "durability": 94,
      "recyclability": 94,
      "packaging": 92,
      "repairability": 90,
      "certifications": 98
    },
    "scoreExplanation": "Made with 100% certified organic and Fair Trade oils (coconut, olive, hemp, jojoba), 3x concentrated to dilute for 18 different household and personal uses, in 100% PCR bottle.",
    "carbonFootprintKg": 1.2,
    "conventionalCarbonKg": 8.5,
    "waterFootprintLiters": 90,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 2.0,
    "manufacturingCountry": "USA (California)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Organic Fair Trade Coconut & Olive Oils",
        "percentage": 78,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Organic Hemp & Jojoba Oils",
        "percentage": 14,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Potassium Hydroxide & Organic Mentha Arvensis",
        "percentage": 8,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.65,
        "percentage": 54,
        "notes": "Regenerative organic agriculture practices in Ghana, Sri Lanka, and India"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.28,
        "percentage": 23,
        "notes": "100% solar and on-site clean energy facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.18,
        "percentage": 15,
        "notes": "Concentrated soap saves truck volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 5,
        "notes": "100% non-toxic biodegradable runoff"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 3,
        "notes": "100% post-consumer recycled PET"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled (PCR) PET bottle",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "regenerative-organic",
        "name": "Regenerative Organic Certified\u2122 (ROC)",
        "issuer": "ROA",
        "verified": true,
        "description": "Highest global standard for soil health and farm worker fairness."
      },
      {
        "id": "fair-for-life",
        "name": "Fair for Life Fair Trade",
        "issuer": "IMO",
        "verified": true,
        "description": "Guaranteed fair wages and community development premiums."
      },
      {
        "id": "usda-organic",
        "name": "USDA Organic",
        "issuer": "USDA",
        "verified": true,
        "description": "Over 95% certified organic agricultural ingredients."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "18 Different Cleaning Uses in 1 Bottle",
        "status": "Verified",
        "analysis": "Verified dilution guidelines cover laundry, dishes, mopping, washing, and pets."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Regenerative Organic Certified ingredients",
      "Replaces up to 10 single-purpose cleaners",
      "100% PCR bottle pioneer since 2003"
    ],
    "areasToImprove": [
      "Liquid format still requires water-based transport"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Dr. Bronner's All-One Annual Impact Report & LCA Audit",
    "dataConfidence": "High"
  },
  {
    "id": "tru-earth-eco-strips",
    "name": "Tru Earth Eco-Strips Laundry Detergent (64 Loads)",
    "brand": "Tru Earth",
    "category": "Cleaning & Household",
    "subcategory": "Laundry Care",
    "imageUrl": "",
    "price": 1699,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 98,
      "materials": 94,
      "durability": 90,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 86,
      "certifications": 92
    },
    "scoreExplanation": "Ultra-lightweight dehydrated laundry strips that cut transportation fuel emissions by 94% compared to heavy liquid jugs. Shipped in plastic-free zero-waste cardboard sleeve.",
    "carbonFootprintKg": 0.38,
    "conventionalCarbonKg": 7.5,
    "waterFootprintLiters": 18,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Canada",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Vegetable Glycerin & Plant Surfactants",
        "percentage": 82,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Biodegradable Binding Matrix",
        "percentage": 18,
        "isRenewable": false,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.2,
        "percentage": 53,
        "notes": "Zero water mass transported"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.1,
        "percentage": 26,
        "notes": "Dry extrusion and cutting line"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.04,
        "percentage": 11,
        "notes": "Lettermail envelope transport saves 94% truck fuel"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 8,
        "notes": "Dissolves instantly in 15 seconds"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 2,
        "notes": "100% compostable paper envelope"
      }
    ],
    "packagingType": "Plastic-free 100% recyclable and compostable paper card envelope",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "hypoallergenic",
        "name": "Independent Dermatology Certified",
        "issuer": "Dermatest",
        "verified": true,
        "description": "Hypoallergenic and free of paraben/phosphate toxins."
      },
      {
        "id": "cruelty-free",
        "name": "Cruelty-Free Certified",
        "issuer": "PETA",
        "verified": true,
        "description": "Zero animal testing."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "94% Less Transportation Carbon",
        "status": "Verified",
        "analysis": "A single pallet of Tru Earth strips equals 1 million loads, replacing 30 pallets of heavy liquid jugs."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "94% lower transport emissions",
      "Zero plastic packaging",
      "Compact envelope fits in any drawer"
    ],
    "areasToImprove": [
      "Higher initial price per load compared to bulk detergent powder"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Tru Earth Environmental Life Cycle Assessment Study",
    "dataConfidence": "High"
  },
  {
    "id": "ecoleaf-toilet-cleaner",
    "name": "Ecoleaf Plant-Based Toilet Cleaner (Septic Tank Safe)",
    "brand": "Ecoleaf",
    "category": "Cleaning & Household",
    "subcategory": "Bathroom Cleaning",
    "imageUrl": "",
    "price": 449,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 89.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 92,
      "durability": 84,
      "recyclability": 90,
      "packaging": 88,
      "repairability": 80,
      "certifications": 92
    },
    "scoreExplanation": "Formulated with plant-derived citric acids that dissolve limescale without corrosive chlorine bleach, preventing toxic chemical runoff into aquatic ecosystems.",
    "carbonFootprintKg": 0.85,
    "conventionalCarbonKg": 3.8,
    "waterFootprintLiters": 70,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "UK",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "Natural Citric & Lactic Acids",
        "percentage": 85,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Plant Surfactants & Purified Water",
        "percentage": 15,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.45,
        "percentage": 53,
        "notes": "Fermented citric acid replaces caustic hydrochloric acid"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.2,
        "percentage": 24,
        "notes": "Cold-mix formulation cuts factory electricity"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 14,
        "notes": "Local distribution"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 6,
        "notes": "Non-toxic to sewer microbial flora"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 3,
        "notes": "100% recycled HDPE bottle"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled plastic bottle with angled neck",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "vegan-society",
        "name": "Vegan Society Certified",
        "issuer": "Vegan Society",
        "verified": true,
        "description": "No animal by-products or testing."
      },
      {
        "id": "cruelty-free",
        "name": "Cruelty-Free International",
        "issuer": "Leaping Bunny",
        "verified": true,
        "description": "Audited supply chain."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Harsh Bleach or Fumes",
        "status": "Verified",
        "analysis": "pH tested non-toxic lactic/citric acid base eliminates dangerous chlorine gas hazards."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "No toxic bleach or chlorine gas",
      "100% PCR plastic bottle",
      "Safe for septic tanks and bio-digesters"
    ],
    "areasToImprove": [
      "Requires slightly longer dwell time (10 mins) on heavy scale compared to harsh acids"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Ecoleaf Environmental Formulation Whitepaper",
    "dataConfidence": "High"
  },
  {
    "id": "ifyoucare-sponge-cloths",
    "name": "If You Care 100% Natural Compostable Sponge Cloths (5-Pack)",
    "brand": "If You Care",
    "category": "Cleaning & Household",
    "subcategory": "Kitchen Cleaning",
    "imageUrl": "",
    "price": 599,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 96.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 98,
      "durability": 94,
      "recyclability": 98,
      "packaging": 98,
      "repairability": 90,
      "certifications": 96
    },
    "scoreExplanation": "Made in Germany from 70% cellulose and 30% unbleached non-GMO cotton. Each cloth absorbs 20x its weight in liquid, is washable 300 times, and fully home-compostable in 8 weeks.",
    "carbonFootprintKg": 0.28,
    "conventionalCarbonKg": 6.8,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.5,
    "manufacturingCountry": "Germany",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "FSC Certified Wood Cellulose",
        "percentage": 70,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Unbleached Non-GMO Natural Cotton",
        "percentage": 30,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.14,
        "percentage": 50,
        "notes": "Zero fossil synthetic polyester or polyurethanes"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.08,
        "percentage": 29,
        "notes": "Hydro-electric powered weaving mill"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.03,
        "percentage": 11,
        "notes": "Flat compressed pack dimensions"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.02,
        "percentage": 7,
        "notes": "Machine washable at 60\u00b0C"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 3,
        "notes": "Home composts into rich garden humus"
      }
    ],
    "packagingType": "100% Unbleached paper band printed with vegetable inks",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "ok-compost-home",
        "name": "OK Compost HOME Certified",
        "issuer": "T\u00dcV Austria",
        "verified": true,
        "description": "Guaranteed to break down completely in home garden compost."
      },
      {
        "id": "fsc",
        "name": "FSC Certified Cellulose",
        "issuer": "FSC",
        "verified": true,
        "description": "Responsibly managed forest wood pulp."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces 15 Paper Towel Rolls Per Cloth",
        "status": "Verified",
        "analysis": "Independent absorbency and 300-wash cycle endurance test confirms equivalence."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Zero microplastic shedding",
      "100% backyard compostable",
      "Replaces up to 75 paper towel rolls per pack"
    ],
    "areasToImprove": [
      "Dries stiff between uses and requires moistening before wiping"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "If You Care LCA & Compost Certification Dossier",
    "dataConfidence": "High"
  },
  {
    "id": "biod-concentrated-washing-up",
    "name": "Bio-D Concentrated Washing Up Liquid (Vegan Action)",
    "brand": "Bio-D",
    "category": "Cleaning & Household",
    "subcategory": "Kitchen Cleaning",
    "imageUrl": "",
    "price": 625,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 90.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 84,
      "recyclability": 90,
      "packaging": 90,
      "repairability": 82,
      "certifications": 92
    },
    "scoreExplanation": "Hypoallergenic, 100% naturally derived dishwashing liquid made in the UK with ethically sourced ingredients, packaged in 100% recycled plastic with bulk refill compatibility.",
    "carbonFootprintKg": 0.78,
    "conventionalCarbonKg": 3.2,
    "waterFootprintLiters": 60,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "UK (Hull)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Plant-Derived Non-Ionic Surfactants",
        "percentage": 85,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Pure Water, Salt & Citric Acid",
        "percentage": 15,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.4,
        "percentage": 51,
        "notes": "Locally synthesized sustainable surfactants"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.18,
        "percentage": 23,
        "notes": "100% green tariff renewable electricity"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 15,
        "notes": "Compact concentrated formula"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 7,
        "notes": "Mild on sensitive skin"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "Bottle made from 100% UK recycled milk bottles"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled UK milk bottle plastic",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "vegan-action",
        "name": "Vegan Action Certified",
        "issuer": "Vegan Awareness Foundation",
        "verified": true,
        "description": "100% plant and mineral formulation."
      },
      {
        "id": "cruelty-free",
        "name": "Leaping Bunny Certified",
        "issuer": "CFI",
        "verified": true,
        "description": "Zero animal testing."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Made from Recycled Milk Bottles",
        "status": "Verified",
        "analysis": "Closed-loop polymer reprocessing from UK domestic recycling kerbside collections."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Bottle made from recycled milk bottles",
      "100% renewable electricity production",
      "Bulk 5L and 20L refill options"
    ],
    "areasToImprove": [
      "Pump dispensers sold separately"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Bio-D Corporate Environmental Report",
    "dataConfidence": "High"
  },
  {
    "id": "attitude-plastic-free-floor-cleaner",
    "name": "Attitude Plastic-Free Concentrated Floor Cleaner Eco-Refill",
    "brand": "Attitude",
    "category": "Cleaning & Household",
    "subcategory": "Floor Care",
    "imageUrl": "",
    "price": 1299,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 94,
      "durability": 88,
      "recyclability": 92,
      "packaging": 96,
      "repairability": 84,
      "certifications": 94
    },
    "scoreExplanation": "Ultra-concentrated bulk eco-refill format in FSC-certified cardboard box that saves 80% plastic compared to 4 individual bottles, certified ECOLOGO and EWG Verified.",
    "carbonFootprintKg": 0.95,
    "conventionalCarbonKg": 5.4,
    "waterFootprintLiters": 75,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Canada",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Plant- and Mineral-Based Surfactants",
        "percentage": 88,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Natural Citrus Extract & Water",
        "percentage": 12,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.5,
        "percentage": 53,
        "notes": "EWG verified non-toxic ingredients"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 23,
        "notes": "Carbon-neutral hydro-powered plant in Quebec"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.14,
        "percentage": 15,
        "notes": "Bag-in-box cubes pack densely in pallets"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 6,
        "notes": "Tile, laminate, and wood safe"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 3,
        "notes": "Cardboard box is 100% curbside recyclable"
      }
    ],
    "packagingType": "FSC-certified recyclable cardboard box with thin BPA-free inner bladder",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "ecologo",
        "name": "ECOLOGO\u00ae Certified",
        "issuer": "UL Solutions",
        "verified": true,
        "description": "Reduced environmental impact throughout life cycle."
      },
      {
        "id": "ewg-verified",
        "name": "EWG Verified\u2122",
        "issuer": "Environmental Working Group",
        "verified": true,
        "description": "Free of chemicals of concern."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "80% Plastic Reduction",
        "status": "Verified",
        "analysis": "Weight comparison between 1 bag-in-box vs 4 standard 800ml rigid plastic bottles."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "EWG Verified clean ingredients",
      "80% plastic savings",
      "Easy spout dispensing"
    ],
    "areasToImprove": [
      "Inner liner bladder must be separated from cardboard before recycling"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Attitude Eco-Life Cycle Assessment Factsheet",
    "dataConfidence": "High"
  },
  {
    "id": "marleys-monsters-unpaper-towels",
    "name": "Marley's Monsters UNpaper\u00ae Reusable 100% Cotton Towels (12-Pack)",
    "brand": "Marley's Monsters",
    "category": "Cleaning & Household",
    "subcategory": "Zero-Waste Essentials",
    "imageUrl": "",
    "price": 2499,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 96,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 90,
      "certifications": 92
    },
    "scoreExplanation": "Handcrafted single-ply 100% cotton flannel towels that naturally cling together to roll onto standard paper towel holders, eliminating disposable paper roll deforestation.",
    "carbonFootprintKg": 1.2,
    "conventionalCarbonKg": 18.0,
    "waterFootprintLiters": 310,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "USA (Oregon)",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Natural Cotton Flannel",
        "percentage": 95,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Polyester Edge Surging Thread",
        "percentage": 5,
        "isRecycled": true,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.65,
        "percentage": 54,
        "notes": "Cotton flannel fabric"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.28,
        "percentage": 23,
        "notes": "Hand surged by seamstresses in Eugene, Oregon"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.14,
        "percentage": 12,
        "notes": "Direct to consumer rolled kraft tube"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.09,
        "percentage": 8,
        "notes": "Machine wash with normal laundry"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 3,
        "notes": "Cotton portion is compostable"
      }
    ],
    "packagingType": "100% Recycled kraft paper core with zero plastic shrink wrap",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp Pending",
        "issuer": "B Lab",
        "verified": true,
        "description": "Ethical workplace and zero-waste production."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Clings Naturally Without Snaps",
        "status": "Verified",
        "analysis": "Cotton flannel fabric friction allows easy rolling onto paper towel stands without plastic snaps."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Fits standard paper towel holders",
      "Naturally clings together",
      "Eliminates disposable paper towel rolls"
    ],
    "areasToImprove": [
      "Initial wash requires warm water to enhance natural fabric absorbency"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Marley's Monsters Lifecycle Transparency Report",
    "dataConfidence": "High"
  },
  {
    "id": "scrub-daddy-eco-fiber-scour",
    "name": "Scrub Daddy Eco-Fiber Coconut & Agave Kitchen Scourer (3-Pack)",
    "brand": "Scrub Daddy",
    "category": "Cleaning & Household",
    "subcategory": "Kitchen Cleaning",
    "imageUrl": "",
    "price": 499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 88.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 90,
      "durability": 86,
      "recyclability": 88,
      "packaging": 94,
      "repairability": 80,
      "certifications": 86
    },
    "scoreExplanation": "Combines natural coconut coir, agave fibers, and plant cellulose into non-scratch kitchen scrubbers that prevent synthetic microplastic shedding in sink drains.",
    "carbonFootprintKg": 0.45,
    "conventionalCarbonKg": 3.1,
    "waterFootprintLiters": 40,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.75,
    "manufacturingCountry": "Germany",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Upcycled Coconut Coir & Agave Fibers",
        "percentage": 50,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Wood Pulp Plant Cellulose",
        "percentage": 35,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Plant-Based Resin Binder",
        "percentage": 15,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.22,
        "percentage": 49,
        "notes": "Agricultural coconut husk byproducts"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.12,
        "percentage": 27,
        "notes": "Thermal pressing with water-based binders"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.06,
        "percentage": 13,
        "notes": "Compact lightweight packaging"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 7,
        "notes": "Non-scratch on non-stick pans"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 4,
        "notes": "Compostable fibers"
      }
    ],
    "packagingType": "FSC-certified paperboard box printed with soy inks",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fsc",
        "name": "FSC Certified Packaging",
        "issuer": "FSC",
        "verified": true,
        "description": "Responsibly harvested wood fiber packaging."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Microplastic Shedding",
        "status": "Verified",
        "analysis": "Eliminates polyurethane and nylon synthetic fibers that shed microplastics into municipal drains."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "ifyoucare-sponge-cloths",
        "name": "If You Care 100% Natural Compostable Sponge Cloths",
        "brand": "If You Care",
        "price": 599,
        "greenScore": 96.0,
        "carbonReductionPercent": 38,
        "reason": "Higher durability and 100% backyard compostable"
      }
    ],
    "keyStrengths": [
      "Upcycled coconut byproduct fibers",
      "Zero synthetic microplastic shedding",
      "Plastic-free packaging"
    ],
    "areasToImprove": [
      "Binder contains minor synthetic trace stabilizers"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Scrub Daddy Eco-Line Product Assessment",
    "dataConfidence": "Medium"
  },
  {
    "id": "bamboo-india-toothbrush-4pack",
    "name": "Bamboo India Charcoal Moso Bamboo Toothbrushes (4-Pack)",
    "brand": "Bamboo India",
    "category": "Personal Care",
    "subcategory": "Oral Care",
    "imageUrl": "",
    "price": 299,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 98,
      "durability": 88,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 86,
      "certifications": 92
    },
    "scoreExplanation": "Made in Pune, India from organically grown Moso bamboo that pandas do not eat. Eliminates plastic toothbrushes that take 500+ years to degrade; handle is 100% backyard compostable.",
    "carbonFootprintKg": 0.18,
    "conventionalCarbonKg": 2.4,
    "waterFootprintLiters": 12,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.25,
    "manufacturingCountry": "India (Pune, Maharashtra)",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "100% Organic Moso Bamboo Handle",
        "percentage": 92,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "BPA-Free Charcoal Infused Nylon Bristles",
        "percentage": 8,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.08,
        "percentage": 44,
        "notes": "Bamboo grows up to 1 meter per day without pesticides"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.05,
        "percentage": 28,
        "notes": "Local artisans shaping and laser engraving in Maharashtra"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.03,
        "percentage": 17,
        "notes": "Domestic India logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.01,
        "percentage": 6,
        "notes": "Dentist recommended 3-month cycle"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 5,
        "notes": "Handle composts in 6 months"
      }
    ],
    "packagingType": "100% Unbleached craft paper individual sleeves inside craft box",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "make-in-india",
        "name": "Make in India Certified",
        "issuer": "Govt of India",
        "verified": true,
        "description": "Supporting domestic artisan bamboo agroforestry."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Compostable Handle",
        "status": "Verified",
        "analysis": "Handle is untreated pure bamboo. Note: Bristles must be removed with pliers before composting."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Organically grown Indian Moso bamboo",
      "Zero plastic packaging",
      "Charcoal antibacterial infusion"
    ],
    "areasToImprove": [
      "Bristles must be plucked out before backyard composting"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Bamboo India Eco Innovation Environmental Audit",
    "dataConfidence": "High"
  },
  {
    "id": "leaf-shave-triple-blade-razor",
    "name": "Leaf Shave Plastic-Free Triple-Blade Metal Razor",
    "brand": "Leaf Shave",
    "category": "Personal Care",
    "subcategory": "Shaving & Grooming",
    "imageUrl": "",
    "price": 7499,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 96.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 98,
      "durability": 100,
      "recyclability": 98,
      "packaging": 96,
      "repairability": 92,
      "certifications": 92
    },
    "scoreExplanation": "Pivoting multi-blade metal razor that accepts standard recyclable safety razor blades. Eliminates billions of disposable plastic razor heads and plastic handle cartridges.",
    "carbonFootprintKg": 1.1,
    "conventionalCarbonKg": 24.0,
    "waterFootprintLiters": 40,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 30.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "Die-Cast Zinc Alloy Body",
        "percentage": 85,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Stainless Steel Screws and Spring",
        "percentage": 15,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.6,
        "percentage": 55,
        "notes": "Corrosion resistant zinc alloy"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.28,
        "percentage": 25,
        "notes": "Precision CNC milling"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 11,
        "notes": "Direct to consumer envelope carton"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 5,
        "notes": "Blades cost a fraction of plastic cartridges"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 4,
        "notes": "Used blades collected in metal tin and recycled as scrap"
      }
    ],
    "packagingType": "100% Recyclable paperboard box with zero plastic blisters",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "climate-neutral",
        "name": "Climate Neutral Certified",
        "issuer": "Change Climate",
        "verified": true,
        "description": "100% carbon footprint measured and offset."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces 2 Billion Disposable Razors",
        "status": "Verified",
        "analysis": "EPA estimates 2 billion plastic razors are landfilled yearly; Leaf uses 100% recyclable steel blades."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Lifetime cast metal chassis",
      "Universal standard safety razor blades (pennies per blade)",
      "Zero plastic cartridges"
    ],
    "areasToImprove": [
      "Higher upfront investment compared to disposable razor packs"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Leaf Shave Life Cycle Carbon Report & SCS Audit",
    "dataConfidence": "High"
  },
  {
    "id": "meow-meow-tweet-deodorant-stick",
    "name": "Meow Meow Tweet Baking Soda Free Deodorant Stick",
    "brand": "Meow Meow Tweet",
    "category": "Personal Care",
    "subcategory": "Grooming & Deodorants",
    "imageUrl": "",
    "price": 1299,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 93.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 88,
      "recyclability": 96,
      "packaging": 98,
      "repairability": 84,
      "certifications": 94
    },
    "scoreExplanation": "Packaged in an innovative 100% biodegradable push-up paper tube with zero plastic components, made with certified organic fair trade plant butters and arrowroot powder.",
    "carbonFootprintKg": 0.42,
    "conventionalCarbonKg": 4.6,
    "waterFootprintLiters": 30,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Organic Fair Trade Shea Butter & Coconut Oil",
        "percentage": 65,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Organic Arrowroot Powder & Magnesium",
        "percentage": 25,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Pure Essential Oils & Candelilla Wax",
        "percentage": 10,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.22,
        "percentage": 52,
        "notes": "Regenerative organic shea butter sourcing"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.1,
        "percentage": 24,
        "notes": "Solar powered micro-batch production"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.05,
        "percentage": 12,
        "notes": "Lightweight cardboard cylinder packaging"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 7,
        "notes": "Concentrated swipe application"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 5,
        "notes": "Tube is 100% backyard compostable"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled push-up paperboard tube",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High legal standard for social and environmental stewardship."
      },
      {
        "id": "leaping-bunny",
        "name": "Leaping Bunny Cruelty-Free",
        "issuer": "CCIC",
        "verified": true,
        "description": "100% vegan and cruelty-free."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Backyard Compostable Tube",
        "status": "Verified",
        "analysis": "Paper tube and soy ink break down completely in household compost within 12 weeks."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% plastic-free paper tube",
      "Baking soda free for sensitive skin",
      "Fair trade organic shea butter"
    ],
    "areasToImprove": [
      "Paper tube requires gentle thumb push from bottom"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Meow Meow Tweet B-Corp Impact Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "davids-nano-hydroxyapatite-toothpaste",
    "name": "Davids Natural Nano-Hydroxyapatite Toothpaste (Metal Tube)",
    "brand": "Davids",
    "category": "Personal Care",
    "subcategory": "Oral Care",
    "imageUrl": "",
    "price": 899,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 90,
      "materials": 94,
      "durability": 86,
      "recyclability": 94,
      "packaging": 94,
      "repairability": 82,
      "certifications": 92
    },
    "scoreExplanation": "Uses biocompatible nano-hydroxyapatite to remineralize enamel naturally, packaged in an endlessly recyclable aluminum metal tube with a metal roller key.",
    "carbonFootprintKg": 0.52,
    "conventionalCarbonKg": 3.8,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "Calcium Carbonate & Nano-Hydroxyapatite",
        "percentage": 52,
        "isRenewable": false,
        "color": "#06b6d4"
      },
      {
        "name": "Vegetable Glycerin & Birch Xylitol",
        "percentage": 36,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Pure Natural Peppermint Oil",
        "percentage": 12,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.28,
        "percentage": 54,
        "notes": "98% USA-origin ingredients"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.12,
        "percentage": 23,
        "notes": "Solar powered facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.06,
        "percentage": 12,
        "notes": "Compact metal tubes"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 7,
        "notes": "Includes metal key to squeeze 100% of paste"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 4,
        "notes": "Aluminum tube is infinitely recyclable"
      }
    ],
    "packagingType": "100% Recyclable aluminum metal tube with metal roller key",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "ewg-verified",
        "name": "EWG Verified\u2122",
        "issuer": "EWG",
        "verified": true,
        "description": "Strict standards for non-toxicity and chemical safety."
      },
      {
        "id": "fsc",
        "name": "FSC Certified Outer Box",
        "issuer": "FSC",
        "verified": true,
        "description": "Responsibly sourced forest paper."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Infinitely Recyclable Aluminum Tube",
        "status": "Verified",
        "analysis": "Unlike multi-layer plastic laminate tubes that cannot be recycled, aluminum is readily re-smelted."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "bite-toothpaste-bits",
        "name": "Bite Toothpaste Bits (Glass Jar)",
        "brand": "Bite",
        "price": 1199,
        "greenScore": 95.0,
        "carbonReductionPercent": 32,
        "reason": "Zero water and refillable glass jar with compostable pouch refills"
      }
    ],
    "keyStrengths": [
      "Endlessly recyclable aluminum metal tube",
      "Enamel-restoring nano-hydroxyapatite",
      "Includes metal squeeze roller key"
    ],
    "areasToImprove": [
      "Tube cap is small recyclable virgin plastic component"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Davids Environmental Life Cycle Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "lastswab-original-reusable-swab",
    "name": "LastSwab Original Reusable Silicone Cotton Swab (1000+ Uses)",
    "brand": "LastObject",
    "category": "Personal Care",
    "subcategory": "Hygiene & Swabs",
    "imageUrl": "",
    "price": 999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 90,
      "durability": 96,
      "recyclability": 90,
      "packaging": 98,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "A single reusable silicone swab replaces 1,000 single-use cotton swabs. Comes with a bio-based carrying case made from certified ocean-bound plastic.",
    "carbonFootprintKg": 0.32,
    "conventionalCarbonKg": 4.8,
    "waterFootprintLiters": 25,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "Denmark",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Medical Grade Silicone Tips (TPE)",
        "percentage": 35,
        "isRecycled": false,
        "color": "#10b981"
      },
      {
        "name": "Glass-Fiber Reinforced Polypropylene Rod",
        "percentage": 35,
        "isRecycled": false,
        "color": "#06b6d4"
      },
      {
        "name": "Certified Ocean-Bound Plastic Case",
        "percentage": 30,
        "isRecycled": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.16,
        "percentage": 50,
        "notes": "Durable medical silicone tip"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.08,
        "percentage": 25,
        "notes": "Danish precision injection molding"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.04,
        "percentage": 13,
        "notes": "Pocket-size shipping volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 9,
        "notes": "Cleans easily under warm tap water and soap"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 3,
        "notes": "LastObject closed-loop takeback"
      }
    ],
    "packagingType": "100% Recycled cardboard pocket box with zero plastic stickers",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Verified environmental and social excellence."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces 1,000 Single-Use Cotton Buds",
        "status": "Verified",
        "analysis": "Tensile and sanitary washing tests verify 1,000+ uses without degradation."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Replaces 1000+ single use swabs",
      "Washable with soap and water in 5 seconds",
      "Ocean-bound plastic travel case"
    ],
    "areasToImprove": [
      "Silicone tip not suitable for cleaning inner ear canal (outer hygiene only)"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "LastObject ISO 14040 Comparative LCA Study",
    "dataConfidence": "High"
  },
  {
    "id": "lush-godiva-solid-shampoo",
    "name": "Lush Godiva Solid Shampoo & Conditioning Naked Bar",
    "brand": "Lush",
    "category": "Personal Care",
    "subcategory": "Hair Care & Solid Bars",
    "imageUrl": "",
    "price": 1250,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 94,
      "durability": 90,
      "recyclability": 96,
      "packaging": 100,
      "repairability": 86,
      "certifications": 92
    },
    "scoreExplanation": "Pioneering 'Naked' zero-packaging solid shampoo bar that lasts for up to 80 washes, saving 3 plastic shampoo bottles from landfill per bar, made with fair trade cocoa butter.",
    "carbonFootprintKg": 0.35,
    "conventionalCarbonKg": 5.2,
    "waterFootprintLiters": 20,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "UK / Canada",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "Fair Trade Organic Cocoa & Shea Butter",
        "percentage": 45,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Sodium Coco Sulfate (Coconut Surfactant)",
        "percentage": 40,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Wild Camellia Oil & Jasmine Flower Infusion",
        "percentage": 15,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.18,
        "percentage": 51,
        "notes": "Direct supplier partnerships with regenerative cooperatives"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.08,
        "percentage": 23,
        "notes": "Handmade compound batch processing"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.05,
        "percentage": 14,
        "notes": "No water weight transported"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 9,
        "notes": "80 full hair washes"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 3,
        "notes": "Zero packaging waste"
      }
    ],
    "packagingType": "100% Naked zero packaging (Optional reusable cork pot)",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "cruelty-free",
        "name": "Cruelty-Free Fighting Animal Testing",
        "issuer": "Lush Standard",
        "verified": true,
        "description": "Pioneering strictly cruelty-free cosmetics supply chain."
      },
      {
        "id": "fair-trade",
        "name": "Fair Trade Sourced Butters",
        "issuer": "Fair Trade",
        "verified": true,
        "description": "Living wages for women's cooperatives in Ghana."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces 3 Plastic Shampoo Bottles",
        "status": "Verified",
        "analysis": "Calculated by 80 washes vs average 250ml liquid shampoo bottle lifespan of ~25 washes."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% Naked zero packaging",
      "Saves 3 plastic bottles per bar",
      "Handmade with organic Fair Trade cocoa butter"
    ],
    "areasToImprove": [
      "Must be kept on a well-draining soap dish between showers"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Lush Environmental Annual Audit & Carbon Footprint Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "biossance-squalane-rose-oil",
    "name": "Biossance 100% Sugarcane Squalane + Vitamin C Rose Oil",
    "brand": "Biossance",
    "category": "Personal Care",
    "subcategory": "Skincare",
    "imageUrl": "",
    "price": 5800,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 87.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 92,
      "durability": 84,
      "recyclability": 88,
      "packaging": 92,
      "repairability": 80,
      "certifications": 90
    },
    "scoreExplanation": "Pioneered ethically fermented sugarcane squalane, saving approximately 2 million deep-sea sharks each year from liver hunting. Housed in recyclable green glass.",
    "carbonFootprintKg": 0.95,
    "conventionalCarbonKg": 6.8,
    "waterFootprintLiters": 85,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Brazil / USA",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Fermented Renewable Sugarcane Squalane",
        "percentage": 82,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Damascus Rose Extract & Vitamin C (THD)",
        "percentage": 14,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Chios Crystal Resin",
        "percentage": 4,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.48,
        "percentage": 51,
        "notes": "Bonsucro certified sustainable sugarcane bio-fermentation"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 23,
        "notes": "Industrial biotech clean fermenters"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.14,
        "percentage": 15,
        "notes": "Recyclable secondary cardboard"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.07,
        "percentage": 7,
        "notes": "High potency 2-3 drops per use"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 4,
        "notes": "Glass dropper bottle recyclable"
      }
    ],
    "packagingType": "Recyclable glass dropper bottle in FSC certified sugarcane paper carton",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "ewg-verified",
        "name": "EWG Verified\u2122",
        "issuer": "EWG",
        "verified": true,
        "description": "Meets strict clean cosmetics safety benchmarks."
      },
      {
        "id": "leaping-bunny",
        "name": "Leaping Bunny Cruelty-Free",
        "issuer": "CCIC",
        "verified": true,
        "description": "Guaranteed zero animal testing."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Saves 2 Million Sharks Annually",
        "status": "Verified",
        "analysis": "Amyris industrial squalane replaces shark-liver-oil derived squalene across global cosmetics."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Saves deep sea sharks from liver harvesting",
      "Sugarcane bagasse wastepaper carton",
      "EWG Verified clean formulation"
    ],
    "areasToImprove": [
      "Rubber bulb dropper requires separate disassembly for recycling"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Amyris & Biossance ESG Sustainability Report",
    "dataConfidence": "High"
  },
  {
    "id": "tata-harper-restorative-eye-creme",
    "name": "Tata Harper 100% Natural Restorative Eye Cr\u00e8me (Refillable Glass)",
    "brand": "Tata Harper",
    "category": "Personal Care",
    "subcategory": "Skincare",
    "imageUrl": "",
    "price": 8900,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 86.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 86,
      "materials": 92,
      "durability": 84,
      "recyclability": 88,
      "packaging": 94,
      "repairability": 80,
      "certifications": 88
    },
    "scoreExplanation": "Farm-to-face 100% natural formulation grown on a certified organic farm in Vermont, packaged in refillable Italian glass bottles with soy ink cartons.",
    "carbonFootprintKg": 0.88,
    "conventionalCarbonKg": 5.4,
    "waterFootprintLiters": 65,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.75,
    "manufacturingCountry": "USA (Vermont Farm)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Estate-Grown Organic Botanicals",
        "percentage": 85,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Natural Spanish Lavender & Peptides",
        "percentage": 15,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.44,
        "percentage": 50,
        "notes": "Regenerative organic farm botanicals"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 25,
        "notes": "Handmade on-site in Vermont lab"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 14,
        "notes": "Compact glass pods"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 7,
        "notes": "100% biocompatible skin absorption"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 4,
        "notes": "Replaceable inner refill pod cuts 80% waste"
      }
    ],
    "packagingType": "Refillable Italian glass jar with recyclable PCR inner cartridge",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "ecocert",
        "name": "ECOCERT Organic Cosmos",
        "issuer": "Ecocert",
        "verified": true,
        "description": "100% natural and certified organic cosmetic standard."
      },
      {
        "id": "leaping-bunny",
        "name": "Leaping Bunny Certified",
        "issuer": "CCIC",
        "verified": true,
        "description": "Never tested on animals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Natural Without Synthetic Fillers",
        "status": "Verified",
        "analysis": "Ecocert batch audits verify zero petroleum derived silicones, PEGs, or synthetic fragrances."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Refillable outer glass bottle",
      "100% natural organic farm ingredients",
      "Zero synthetic preservatives"
    ],
    "areasToImprove": [
      "High luxury price tier"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Tata Harper Organic Standards & Life Cycle Report",
    "dataConfidence": "Medium"
  },
  {
    "id": "georganics-mineral-toothpaste-tablets",
    "name": "Georganics English Peppermint Toothpaste Tablets (Glass Jar)",
    "brand": "Georganics",
    "category": "Personal Care",
    "subcategory": "Oral Care",
    "imageUrl": "",
    "price": 899,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 88,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "Waterless toothpaste tablets that clean and remineralize teeth, packaged in a reusable and recyclable glass jar with aluminum lid and compostable kraft paper refills.",
    "carbonFootprintKg": 0.38,
    "conventionalCarbonKg": 3.6,
    "waterFootprintLiters": 15,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "UK",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Sodium Bicarbonate & Calcium Carbonate",
        "percentage": 55,
        "isRenewable": false,
        "color": "#06b6d4"
      },
      {
        "name": "Cream of Tartar & Organic Peppermint",
        "percentage": 30,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Acacia Gum & Mineral Fluoride",
        "percentage": 15,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.18,
        "percentage": 47,
        "notes": "Zero water transport"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.1,
        "percentage": 26,
        "notes": "Dry tablet compression"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.05,
        "percentage": 13,
        "notes": "Lightweight dry cargo"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 8,
        "notes": "Chew 1 tablet and brush"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 6,
        "notes": "Glass jar and aluminum lid endlessly recyclable"
      }
    ],
    "packagingType": "Glass jar with aluminum lid and compostable cellulose seal",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "cosmos-natural",
        "name": "COSMOS Natural Certified",
        "issuer": "Soil Association",
        "verified": true,
        "description": "Verified non-toxic natural formulation."
      },
      {
        "id": "vegan-society",
        "name": "Vegan Society Registered",
        "issuer": "Vegan Society",
        "verified": true,
        "description": "100% cruelty-free and vegan."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Zero-Waste Oral Care",
        "status": "Verified",
        "analysis": "Jar is refilled via home-compostable paper pouches, eliminating plastic toothpaste tubes."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Waterless lightweight formulation",
      "100% plastic-free glass & metal container",
      "Compostable paper refill bag options"
    ],
    "areasToImprove": [
      "Requires dry storage to avoid tablet clumping in humid environments"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Georganics Environmental Profile & Soil Association Audit",
    "dataConfidence": "High"
  },
  {
    "id": "the-body-shop-ginger-refill-shampoo",
    "name": "The Body Shop Ginger Anti-Dandruff Refill Flask Shampoo",
    "brand": "The Body Shop",
    "category": "Personal Care",
    "subcategory": "Hair Care",
    "imageUrl": "",
    "price": 995,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 84.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 84,
      "materials": 88,
      "durability": 84,
      "recyclability": 88,
      "packaging": 90,
      "repairability": 80,
      "certifications": 86
    },
    "scoreExplanation": "Features a reusable aluminum refill flask paired with in-store refill stations across hundreds of stores, cutting plastic waste by over 25 tons per year.",
    "carbonFootprintKg": 1.4,
    "conventionalCarbonKg": 4.8,
    "waterFootprintLiters": 95,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 3.0,
    "manufacturingCountry": "UK",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Ginger Root Essential Oil & Birch Bark",
        "percentage": 82,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Plant Surfactants & Purified Water",
        "percentage": 18,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.72,
        "percentage": 51,
        "notes": "Community Fair Trade wild ginger sourcing"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.32,
        "percentage": 23,
        "notes": "ISO 14001 factory production"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.2,
        "percentage": 14,
        "notes": "Bulk liquid drums transported to retail stations"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.1,
        "percentage": 7,
        "notes": "Aluminum flask reused indefinitely"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.06,
        "percentage": 5,
        "notes": "Aluminum bottle is infinitely recyclable"
      }
    ],
    "packagingType": "100% Recycled aluminum reusable flask with pump",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High standards of verified social and environmental impact."
      },
      {
        "id": "vegan-action",
        "name": "Vegan Certified",
        "issuer": "The Vegan Society",
        "verified": true,
        "description": "100% certified vegan formulation."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "In-Store Refill Station Scheme",
        "status": "Verified",
        "analysis": "Active refill taps in over 500 stores globally eliminate purchase of new bottles."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "lush-godiva-solid-shampoo",
        "name": "Lush Godiva Solid Shampoo Bar",
        "brand": "Lush",
        "price": 1250,
        "greenScore": 93.0,
        "carbonReductionPercent": 75,
        "reason": "100% naked bar with zero water weight"
      }
    ],
    "keyStrengths": [
      "Aluminum reusable flask",
      "In-store refill network",
      "Community Fair Trade ingredients"
    ],
    "areasToImprove": [
      "Pump dispenser is multi-material plastic requiring replacement over time"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "The Body Shop Refill Program Environmental Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "ursa-major-essential-face-wipes",
    "name": "Ursa Major 100% Bamboo Compostable Face Towelettes (20-Pack)",
    "brand": "Ursa Major",
    "category": "Personal Care",
    "subcategory": "Skincare & Wipes",
    "imageUrl": "",
    "price": 1499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 88.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 90,
      "durability": 84,
      "recyclability": 88,
      "packaging": 92,
      "repairability": 80,
      "certifications": 90
    },
    "scoreExplanation": "Made from 100% unbleached renewable bamboo fibers soaked in clean aloe, birch sap, and green tea extracts, completely certified home-compostable in 60 days.",
    "carbonFootprintKg": 0.48,
    "conventionalCarbonKg": 3.4,
    "waterFootprintLiters": 28,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "100% FSC Renewable Bamboo Fiber Cloth",
        "percentage": 88,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Organic Aloe, Birch Sap, Willow Bark",
        "percentage": 12,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.24,
        "percentage": 50,
        "notes": "Rapid-growth bamboo replaces plastic polyester wipes"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.12,
        "percentage": 25,
        "notes": "Clean solvent-free saturating line"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.06,
        "percentage": 13,
        "notes": "Lightweight packet"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 8,
        "notes": "Multi-action cleanser, exfoliant, and toner"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 4,
        "notes": "Compostable in backyard compost bin"
      }
    ],
    "packagingType": "Recyclable foil packet inside FSC paper box",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "Verified environmental and social accountability."
      },
      {
        "id": "leaping-bunny",
        "name": "Leaping Bunny Certified",
        "issuer": "CCIC",
        "verified": true,
        "description": "100% cruelty-free."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Biodegradable Bamboo Cloth",
        "status": "Verified",
        "analysis": "ASTM D6400 testing confirms bamboo wipe disintegrates in garden soil within 60 days."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% renewable bamboo fiber",
      "Zero polyester plastic microfibers",
      "Backyard compostable"
    ],
    "areasToImprove": [
      "Individual wrapper packets create multi-layer pouch waste"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Ursa Major Clean Beauty LCA Datasheet",
    "dataConfidence": "Medium"
  },
  {
    "id": "bare-necessities-spa-bath-bar",
    "name": "Bare Necessities Annatto Cold-Pressed Spa Bath Bar",
    "brand": "Bare Necessities",
    "category": "Personal Care",
    "subcategory": "Soaps & Bath",
    "imageUrl": "",
    "price": 350,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 95.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 98,
      "durability": 90,
      "recyclability": 96,
      "packaging": 100,
      "repairability": 86,
      "certifications": 92
    },
    "scoreExplanation": "Handcrafted zero-waste bath bar cold-pressed in Bangalore using local coconut oil, annatto seed extract, and lemongrass, packaged in 100% compostable upcycled fabric scrap pouches.",
    "carbonFootprintKg": 0.22,
    "conventionalCarbonKg": 3.9,
    "waterFootprintLiters": 18,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.25,
    "manufacturingCountry": "India (Bengaluru, Karnataka)",
    "renewableEnergyPercent": 95,
    "materialsBreakdown": [
      {
        "name": "Cold-Pressed Organic Coconut & Castor Oil",
        "percentage": 75,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Annatto Seed Extract & Lemongrass Oil",
        "percentage": 15,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Water & Lye (Saponifying Agent)",
        "percentage": 10,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.1,
        "percentage": 45,
        "notes": "Locally harvested South Indian coconuts and herbs"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.05,
        "percentage": 23,
        "notes": "Hand-poured cold process soap with 6-week solar cure"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.04,
        "percentage": 18,
        "notes": "Domestic rail and road transport"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.02,
        "percentage": 9,
        "notes": "Rich natural lather with zero artificial hardeners"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 5,
        "notes": "Completely non-toxic greywater runoff"
      }
    ],
    "packagingType": "100% Upcycled textile scrap pouch tied with jute cord",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "zero-waste-india",
        "name": "Zero Waste Alliance India",
        "issuer": "ZWAI",
        "verified": true,
        "description": "Completely plastic-free circular handcrafted product."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Plastic from Farm to Shower",
        "status": "Verified",
        "analysis": "Raw ingredients sourced in gunny bags; packaging uses upcycled tailoring fabric scraps."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Handcrafted in Bengaluru with local South Indian oils",
      "Zero plastic packaging (upcycled cloth pouch)",
      "100% biodegradable greywater-safe"
    ],
    "areasToImprove": [
      "Cold process soaps melt faster if kept in wet standing water"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Bare Necessities Zero Waste Circularity Audit",
    "dataConfidence": "High"
  },
  {
    "id": "veja-campo-chromefree-sneakers",
    "name": "Veja Campo ChromeFree Leather & Wild Rubber Sneakers",
    "brand": "Veja",
    "category": "Clothing",
    "subcategory": "Bio-Based Footwear",
    "imageUrl": "",
    "price": 12999,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 89.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 94,
      "durability": 88,
      "recyclability": 84,
      "packaging": 94,
      "repairability": 78,
      "certifications": 92
    },
    "scoreExplanation": "Crafted from ChromeFree leather that eliminates heavy metals, with outsoles composed of 40% Amazonian wild rubber harvested by forest seringueiros to prevent deforestation.",
    "carbonFootprintKg": 5.8,
    "conventionalCarbonKg": 16.5,
    "waterFootprintLiters": 490,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 4.0,
    "manufacturingCountry": "Brazil (Porto Alegre)",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "ChromeFree Bovine Leather",
        "percentage": 45,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Amazonian Wild Forest Rubber Outsole",
        "percentage": 30,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "100% Recycled Polyester (PET) Lining",
        "percentage": 15,
        "isRecycled": true,
        "color": "#f59e0b"
      },
      {
        "name": "Sugar Cane & Organic Cotton Insole",
        "percentage": 10,
        "isRenewable": true,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.9,
        "percentage": 50,
        "notes": "Wild rubber preserves Amazonian standing rainforest canopy"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.5,
        "percentage": 26,
        "notes": "Audited ethical shoe factory in Southern Brazil"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.8,
        "percentage": 14,
        "notes": "Ocean cargo prioritized over air transit"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.4,
        "percentage": 7,
        "notes": "Conditioning extends leather lifespan"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 3,
        "notes": "Veja store cobbler resoling and recycling program"
      }
    ],
    "packagingType": "100% Recycled kraft shoebox with zero single-use plastic wrap",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Outstanding score of 105.8 in environmental and social performance."
      },
      {
        "id": "fair-trade-rubber",
        "name": "Fair Rubber Association",
        "issuer": "FRA",
        "verified": true,
        "description": "Fair trade premiums paid directly to Amazonian tappers."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Protects Amazon Rainforest Seringueiros",
        "status": "Verified",
        "analysis": "Veja pays 4x market price for wild Amazon rubber to make standing forest economically viable."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "allbirds-tree-runner",
        "name": "Allbirds Tree Runner Go Bio-Sneakers",
        "brand": "Allbirds",
        "price": 7499,
        "greenScore": 91.5,
        "carbonReductionPercent": 15,
        "reason": "Lower carbon footprint (4.95kg CO2e) with eucalyptus tree fiber"
      }
    ],
    "keyStrengths": [
      "Direct-trade Amazonian wild rubber preservation",
      "ChromeFree non-toxic leather tanning",
      "B-Corp audited supply chain"
    ],
    "areasToImprove": [
      "Bovine leather has higher water footprint than plant-based fibers"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Veja Transparent Carbon & Social Audit (Utopies LCA)",
    "dataConfidence": "High"
  },
  {
    "id": "patagonia-torrentshell-3l-jacket",
    "name": "Patagonia Torrentshell 3L 100% Recycled Rain Jacket",
    "brand": "Patagonia",
    "category": "Clothing",
    "subcategory": "Recycled Outerwear",
    "imageUrl": "",
    "price": 15999,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 98,
      "recyclability": 90,
      "packaging": 94,
      "repairability": 96,
      "certifications": 94
    },
    "scoreExplanation": "Constructed from 100% recycled nylon face fabric made from discarded fishing nets (Econyl/NetPlus), utilizing PFC-free DWR water repellent coating, and covered by Ironclad Lifetime Guarantee.",
    "carbonFootprintKg": 4.8,
    "conventionalCarbonKg": 19.5,
    "waterFootprintLiters": 340,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 12.0,
    "manufacturingCountry": "Vietnam",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "100% Recycled ECONYL\u00ae Nylon Face",
        "percentage": 68,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Bio-Based Polycarbonate Membrane",
        "percentage": 20,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "PFC/PFAS-Free DWR Repellent Finish",
        "percentage": 12,
        "isRenewable": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.4,
        "percentage": 50,
        "notes": "Regenerated ocean fishing nets"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.2,
        "percentage": 25,
        "notes": "Fair Trade Certified sewing factory"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.6,
        "percentage": 13,
        "notes": "Sea freight delivery"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.4,
        "percentage": 8,
        "notes": "Washable with technical wash"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 4,
        "notes": "Worn Wear program repairs garments for free"
      }
    ],
    "packagingType": "Roll-packed with paper twine, zero plastic polybags",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "bluesign",
        "name": "bluesign\u00ae Approved System",
        "issuer": "bluesign",
        "verified": true,
        "description": "Strict chemical management and worker safety."
      },
      {
        "id": "fair-trade-certified",
        "name": "Fair Trade Certified\u2122 Sewn",
        "issuer": "Fair Trade USA",
        "verified": true,
        "description": "Guaranteed premium wage bonuses to garment workers."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% PFAS-Free Weatherproofing",
        "status": "Verified",
        "analysis": "Eliminated all fluorinated water repellents across Torrentshell membrane and face."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% recycled nylon from fishing nets",
      "Ironclad Lifetime Guarantee & free repairs",
      "Completely PFAS-free waterproof membrane"
    ],
    "areasToImprove": [
      "Technical nylon fibers still shed minor microfibers during machine wash"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Patagonia Footprint Chronicles & Life Cycle Analysis",
    "dataConfidence": "High"
  },
  {
    "id": "tentree-classic-organic-tee",
    "name": "tentree Classic 100% Organic Cotton Men's T-Shirt",
    "brand": "tentree",
    "category": "Clothing",
    "subcategory": "Organic Basics",
    "imageUrl": "",
    "price": 2499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 94,
      "durability": 88,
      "recyclability": 92,
      "packaging": 96,
      "repairability": 84,
      "certifications": 94
    },
    "scoreExplanation": "Plants 10 verified trees for every single shirt sold, uses 100% Fairtrade organic cotton requiring 85% less water, and includes an interactive tree planting registration token.",
    "carbonFootprintKg": 2.1,
    "conventionalCarbonKg": 8.4,
    "waterFootprintLiters": 310,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 4.0,
    "manufacturingCountry": "India (Tirupur)",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% GOTS Certified Organic Cotton",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.9,
        "percentage": 43,
        "notes": "Rain-fed organic cotton farmed in Gujarat and Tamil Nadu"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.6,
        "percentage": 28,
        "notes": "Wind-powered knitting and solar dyehouse in Tirupur"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.3,
        "percentage": 14,
        "notes": "Consolidated shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.2,
        "percentage": 10,
        "notes": "Cold water wash line dry"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.1,
        "percentage": 5,
        "notes": "100% compostable pure cotton"
      }
    ],
    "packagingType": "100% Recycled FSC card tag attached with jute twine",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation Best for the World",
        "issuer": "B Lab",
        "verified": true,
        "description": "Top 5% environmental score globally."
      },
      {
        "id": "gots",
        "name": "GOTS Certified Organic",
        "issuer": "Control Union",
        "verified": true,
        "description": "Strict environmental criteria across whole textile chain."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "10 Trees Planted Per T-Shirt",
        "status": "Verified",
        "analysis": "Verified with satellite coordinates and tree token tracking through Eden Reforestation Projects."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "10 trees planted with GPS tracking token",
      "100% pure organic cotton (zero polyester blends)",
      "Crafted in solar-powered Indian mills"
    ],
    "areasToImprove": [
      "Lightweight weave requires gentle washing to prevent collar curl"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "tentree Carbon Accounting & B-Corp Impact Scorecard",
    "dataConfidence": "High"
  },
  {
    "id": "organic-basics-tencel-bralette",
    "name": "Organic Basics TENCEL\u2122 Soft Touch Lyocell Bralette",
    "brand": "Organic Basics",
    "category": "Clothing",
    "subcategory": "Organic Basics",
    "imageUrl": "",
    "price": 3899,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 88,
      "recyclability": 90,
      "packaging": 96,
      "repairability": 82,
      "certifications": 92
    },
    "scoreExplanation": "Made from wood pulp sourced from responsibly managed Austrian forests via a 99.5% closed-loop circular solvent process, saving over 80% water compared to conventional cotton.",
    "carbonFootprintKg": 1.4,
    "conventionalCarbonKg": 6.8,
    "waterFootprintLiters": 120,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 3.5,
    "manufacturingCountry": "Portugal",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "TENCEL\u2122 Lyocell (Austrian Beechwood)",
        "percentage": 90,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "RoICA Eco-Smart Recycled Elastane",
        "percentage": 10,
        "isRecycled": true,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.65,
        "percentage": 46,
        "notes": "FSC certified wood pulp dissolving process"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.4,
        "percentage": 29,
        "notes": "Solar powered family textile mill in Porto"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.18,
        "percentage": 13,
        "notes": "Flat carton shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.12,
        "percentage": 8,
        "notes": "Naturally antimicrobial fiber requires fewer washes"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 4,
        "notes": "Cellulose core is biodegradable"
      }
    ],
    "packagingType": "100% Recycled paper box printed with algae ink",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "oeko-tex",
        "name": "OEKO-TEX\u00ae Standard 100",
        "issuer": "OEKO-TEX",
        "verified": true,
        "description": "Free of toxic dyes and chemicals."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Top environmental transparency."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "99.5% Closed-Loop Solvent Recovery",
        "status": "Verified",
        "analysis": "Lenzing AG audits verify nearly 100% of water and organic solvents are recycled."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Closed-loop solvent process",
      "Silky soft breathable wood pulp fiber",
      "Recycled elastane blend"
    ],
    "areasToImprove": [
      "Should not be tumbled in high-heat electric clothes dryers"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Organic Basics Low Impact Index & Lenzing Life Cycle Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "eileen-fisher-organic-linen-tunic",
    "name": "Eileen Fisher Regenerative Organic Linen Relaxed Tunic",
    "brand": "Eileen Fisher",
    "category": "Clothing",
    "subcategory": "Regenerative Fashion",
    "imageUrl": "",
    "price": 14500,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 90.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 96,
      "durability": 94,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 88,
      "certifications": 92
    },
    "scoreExplanation": "French flax linen grown with zero irrigation and zero synthetic chemicals. Backed by Renew takeback program that resells, upcycles, or felts worn garments into new textiles.",
    "carbonFootprintKg": 3.2,
    "conventionalCarbonKg": 14.5,
    "waterFootprintLiters": 180,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 8.0,
    "manufacturingCountry": "USA / Italy",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "100% Organic European Flax Linen",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 1.4,
        "percentage": 44,
        "notes": "Flax naturally thrives on rainwater in Normandy"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.9,
        "percentage": 28,
        "notes": "Oeko-Tex certified non-toxic enzyme softening"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.45,
        "percentage": 14,
        "notes": "Optimized freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.3,
        "percentage": 9,
        "notes": "Gets softer with every wash"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.15,
        "percentage": 5,
        "notes": "Eileen Fisher Renew take-back program active since 2009"
      }
    ],
    "packagingType": "FSC certified tissue and paper envelope",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "Leader in circular apparel models."
      },
      {
        "id": "c2c-silver",
        "name": "Cradle to Cradle Certified Material",
        "issuer": "C2CPII",
        "verified": true,
        "description": "Regenerative soil-to-soil circular design."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Circular Take-Back Guarantee",
        "status": "Verified",
        "analysis": "Over 2 million garments recycled or resold via Renew program to date."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% pure organic European flax",
      "Zero synthetic fertilizers or artificial irrigation",
      "Circular Renew takeback ecosystem"
    ],
    "areasToImprove": [
      "Higher designer price tier"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Eileen Fisher Benefit Corporation Annual Report",
    "dataConfidence": "High"
  },
  {
    "id": "girlfriend-collective-compressive-leggings",
    "name": "Girlfriend Collective Compressive High-Rise Leggings",
    "brand": "Girlfriend Collective",
    "category": "Clothing",
    "subcategory": "Activewear",
    "imageUrl": "",
    "price": 6499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 88.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 92,
      "durability": 90,
      "recyclability": 86,
      "packaging": 94,
      "repairability": 80,
      "certifications": 90
    },
    "scoreExplanation": "Made from 25 recycled post-consumer water bottles diverted from landfill and ocean waterways. Sewn in an SA8000 certified ethical facility with living wages.",
    "carbonFootprintKg": 4.2,
    "conventionalCarbonKg": 14.8,
    "waterFootprintLiters": 290,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "Vietnam",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "79% Recycled Polyethylene Terephthalate (RPET)",
        "percentage": 79,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "21% Spandex",
        "percentage": 21,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.1,
        "percentage": 50,
        "notes": "Mechanical recycling of discarded beverage bottles"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.1,
        "percentage": 26,
        "notes": "Closed-loop water filtration dye facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.55,
        "percentage": 13,
        "notes": "Sea freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.32,
        "percentage": 8,
        "notes": "Cold wash in Guppyfriend microfiber catch bag"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.13,
        "percentage": 3,
        "notes": "ReGirlfriend recycling program turns old pairs into new yarn"
      }
    ],
    "packagingType": "100% Recycled and recyclable RPET envelope with paper labels",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "sa8000",
        "name": "SA8000 Ethical Working Conditions",
        "issuer": "Social Accountability International",
        "verified": true,
        "description": "Guaranteed fair living wages, healthcare, and safe factory conditions."
      },
      {
        "id": "oeko-tex",
        "name": "OEKO-TEX Standard 100",
        "issuer": "OEKO-TEX",
        "verified": true,
        "description": "Zero harmful chemicals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Made from 25 Recycled Water Bottles",
        "status": "Verified",
        "analysis": "Weight audit confirms 25x 500ml post-consumer plastic bottles per legging pair."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "25 recycled water bottles diverted per pair",
      "SA8000 certified ethical manufacturing",
      "ReGirlfriend takeback circularity"
    ],
    "areasToImprove": [
      "Microfibers shed during washing; recommends washing with a microfiber capture filter"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Girlfriend Collective Transparency Report & LCA",
    "dataConfidence": "High"
  },
  {
    "id": "armedangels-detox-denim-jeans",
    "name": "Armedangels DetoxDenim Straight Organic Jeans (Chlorine-Free)",
    "brand": "Armedangels",
    "category": "Clothing",
    "subcategory": "Organic Denim",
    "imageUrl": "",
    "price": 9999,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 96,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 90,
      "certifications": 94
    },
    "scoreExplanation": "DetoxDenim completely bans toxic chlorine bleaches, potassium permanganate, and heavy metal rivets, using modern laser and ozone washing to cut water consumption by 85%.",
    "carbonFootprintKg": 5.1,
    "conventionalCarbonKg": 28.0,
    "waterFootprintLiters": 420,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 8.0,
    "manufacturingCountry": "Portugal / Turkey",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% GOTS Certified Organic Cotton",
        "percentage": 98,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Eco-Elastane",
        "percentage": 2,
        "isRecycled": true,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.5,
        "percentage": 49,
        "notes": "No synthetic chemical pesticides used on cotton crops"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.4,
        "percentage": 27,
        "notes": "Laser distressing & ozone wash eliminates toxic bleach"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.6,
        "percentage": 12,
        "notes": "European rail and sea transport"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.4,
        "percentage": 8,
        "notes": "Durable heavy twill construction"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 4,
        "notes": "Removable screw buttons enable easy monomaterial recycling"
      }
    ],
    "packagingType": "100% Grass paper box with zero plastic polybags",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "gots",
        "name": "GOTS Certified Organic",
        "issuer": "GOTS",
        "verified": true,
        "description": "Certified ecological and social processing."
      },
      {
        "id": "fair-wear",
        "name": "Fair Wear Foundation Leader",
        "issuer": "Fair Wear",
        "verified": true,
        "description": "Top ranking for factory worker human rights."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Toxic Chlorine or Heavy Metals",
        "status": "Verified",
        "analysis": "Greenpeace Detox Campaign compliant; independent wastewater audits show zero toxic discharge."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "nudie-lean-dean-denim",
        "name": "Nudie Lean Dean 100% GOTS Raw Denim",
        "brand": "Nudie Jeans",
        "price": 14999,
        "greenScore": 95.0,
        "carbonReductionPercent": 18,
        "reason": "Includes unlimited free lifetime repair shops"
      }
    ],
    "keyStrengths": [
      "Laser and ozone wash technology",
      "Removable screw-buttons for circular disassembly",
      "Grass-paper zero-plastic packaging"
    ],
    "areasToImprove": [
      "Contains 2% elastane which slightly slows high-speed mechanical fiber shredding"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Armedangels Social & Environmental Report & Greenpeace Detox Audit",
    "dataConfidence": "High"
  },
  {
    "id": "finisterre-vellus-recycled-wool-knit",
    "name": "Finisterre Vellus 100% Recycled Wool Heavyweight Knit Sweater",
    "brand": "Finisterre",
    "category": "Clothing",
    "subcategory": "Recycled Outerwear",
    "imageUrl": "",
    "price": 13499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 96,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 88,
      "certifications": 92
    },
    "scoreExplanation": "Spun from 100% pre- and post-consumer recycled wool knitwear in Prato, Italy. Saves 95% water and 75% carbon emissions compared to shearing and scouring virgin wool.",
    "carbonFootprintKg": 4.1,
    "conventionalCarbonKg": 32.0,
    "waterFootprintLiters": 280,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 10.0,
    "manufacturingCountry": "Italy (Prato)",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Recycled Pre/Post Consumer Wool",
        "percentage": 100,
        "isRecycled": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 1.8,
        "percentage": 44,
        "notes": "Mechanical sorting by color eliminates re-dyeing chemical baths"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.2,
        "percentage": 29,
        "notes": "Heritage circular spinning mills in Tuscany"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.55,
        "percentage": 13,
        "notes": "Sea freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.35,
        "percentage": 9,
        "notes": "Natural odor resistance requires rare washing"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 5,
        "notes": "Biodegradable natural protein fiber"
      }
    ],
    "packagingType": "Water-soluble, marine-safe biodegradable Garment bag made of Aquapak polymer",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High score for ocean stewardship and conservation."
      },
      {
        "id": "grs",
        "name": "Global Recycled Standard (GRS)",
        "issuer": "Textile Exchange",
        "verified": true,
        "description": "Third-party certification of recycled input content."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Chemical Re-Dyeing",
        "status": "Verified",
        "analysis": "Wool garments sorted by shade prior to carding, retaining original dyes."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "No virgin sheep shearing carbon footprint",
      "Zero chemical re-dyeing",
      "10-year heavyweight durability"
    ],
    "areasToImprove": [
      "Hand wash only in cold water with wool-safe detergent"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Finisterre Ocean Impact Report & Prato Circular Wool Study",
    "dataConfidence": "High"
  },
  {
    "id": "icebreaker-merino-200-oasis-top",
    "name": "Icebreaker 100% ZQRX Regenerative Merino Base Layer",
    "brand": "Icebreaker",
    "category": "Clothing",
    "subcategory": "Activewear",
    "imageUrl": "",
    "price": 7999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 96,
      "durability": 90,
      "recyclability": 90,
      "packaging": 94,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "Made with 100% natural ZQRX regenerative merino wool from New Zealand high country stations, restoring soil carbon and completely eliminating synthetic petroleum polyesters.",
    "carbonFootprintKg": 3.8,
    "conventionalCarbonKg": 14.2,
    "waterFootprintLiters": 340,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "New Zealand / Vietnam",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "100% ZQRX Regenerative Merino Wool",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 1.9,
        "percentage": 50,
        "notes": "Regenerative grazing sequesters soil organic carbon"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.95,
        "percentage": 25,
        "notes": "Gentle mechanical spinning and Oeko-Tex dyeing"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.5,
        "percentage": 13,
        "notes": "Consolidated shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.3,
        "percentage": 8,
        "notes": "Naturally antimicrobial can be worn multiple days"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.15,
        "percentage": 4,
        "notes": "100% biodegradable in garden soil within 9 months"
      }
    ],
    "packagingType": "Plastic-free FSC cardboard box with soy-based vegetable printing",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "zqrx",
        "name": "ZQRX Regenerative Wool Index",
        "issuer": "New Zealand Merino Co.",
        "verified": true,
        "description": "Audited animal welfare, biodiversity, and soil health."
      },
      {
        "id": "oeko-tex",
        "name": "OEKO-TEX\u00ae Standard 100",
        "issuer": "OEKO-TEX",
        "verified": true,
        "description": "Free of harmful substances."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Soil Biodegradable",
        "status": "Verified",
        "analysis": "Pure wool degrades naturally into nitrogen-rich plant nutrients in soil within 9 months."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "ZQRX certified regenerative agriculture",
      "Zero synthetic microfibers",
      "Naturally odor-resistant thermal performance"
    ],
    "areasToImprove": [
      "Must be protected from clothes moths during warm season storage"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Icebreaker Transparency & Regenerative Agriculture Annual Report",
    "dataConfidence": "High"
  },
  {
    "id": "no-nasties-fairtrade-organic-shirt",
    "name": "No Nasties 100% Fairtrade Organic Cotton Casual Shirt",
    "brand": "No Nasties",
    "category": "Clothing",
    "subcategory": "Organic Basics",
    "imageUrl": "",
    "price": 2899,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 96,
      "durability": 90,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 86,
      "certifications": 96
    },
    "scoreExplanation": "Pioneering Indian planet-positive brand from Goa. Every shirt offsets 300% of its carbon footprint through local agroforestry projects, made from 100% Fairtrade rain-fed organic cotton.",
    "carbonFootprintKg": 1.6,
    "conventionalCarbonKg": 9.2,
    "waterFootprintLiters": 290,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "India (Goa & Gujarat)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "100% Fairtrade Certified Organic Cotton",
        "percentage": 98,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Natural Coconut Shell Buttons",
        "percentage": 2,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.75,
        "percentage": 47,
        "notes": "Chetna Organic farmer cooperative in Telangana"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.42,
        "percentage": 26,
        "notes": "Solar-powered certified ethical factory"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.22,
        "percentage": 14,
        "notes": "Domestic India logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.14,
        "percentage": 9,
        "notes": "Durable reinforced stitching"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.07,
        "percentage": 4,
        "notes": "100% compostable pure cotton and coconut buttons"
      }
    ],
    "packagingType": "Plastic-free organic cotton drawstring tote bag with seed paper tags",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fairtrade",
        "name": "Fairtrade International Certified",
        "issuer": "FLO-CERT",
        "verified": true,
        "description": "Guaranteed minimum prices and social premiums to Indian farmers."
      },
      {
        "id": "gots",
        "name": "GOTS Certified Organic",
        "issuer": "Control Union",
        "verified": true,
        "description": "Chemical-free organic certification."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Planet Positive (300% Carbon Neutral)",
        "status": "Verified",
        "analysis": "Life cycle emissions independently audited; company retires 3x equivalent carbon credits in certified Indian solar and tree projects."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "300% carbon offset planet-positive model",
      "Upcycled coconut shell buttons",
      "Supports Indian smallholder farmers"
    ],
    "areasToImprove": [
      "Pure cotton requires light ironing or steam after drying"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "No Nasties Annual Planet Positive Impact Audit",
    "dataConfidence": "High"
  },
  {
    "id": "outerknown-blanket-shirt-twill",
    "name": "Outerknown Blanket Shirt in Organic Cotton Twill",
    "brand": "Outerknown",
    "category": "Clothing",
    "subcategory": "Organic Basics",
    "imageUrl": "",
    "price": 11999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 89.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 94,
      "durability": 96,
      "recyclability": 88,
      "packaging": 92,
      "repairability": 86,
      "certifications": 90
    },
    "scoreExplanation": "Co-founded by world champion surfer Kelly Slater, crafted from rugged 100% organic cotton heavyweight twill with natural corozo nut buttons harvested from fallen palm seeds.",
    "carbonFootprintKg": 4.5,
    "conventionalCarbonKg": 16.5,
    "waterFootprintLiters": 380,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 10.0,
    "manufacturingCountry": "Sri Lanka / Peru",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "100% Heavyweight Organic Cotton Twill",
        "percentage": 97,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Natural Corozo Palm Nut Buttons",
        "percentage": 3,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 2.2,
        "percentage": 49,
        "notes": "Organic farming preserves topsoil"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 1.2,
        "percentage": 27,
        "notes": "Fair Trade Certified sewing facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.55,
        "percentage": 12,
        "notes": "Sea transit"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.35,
        "percentage": 8,
        "notes": "Heavyweight weave withstands rigorous outdoor wear"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.2,
        "percentage": 4,
        "notes": "Pure natural biodegradable materials"
      }
    ],
    "packagingType": "FSC certified recycled paper mailer, zero plastic polybags",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fair-trade-certified",
        "name": "Fair Trade Certified\u2122",
        "issuer": "Fair Trade USA",
        "verified": true,
        "description": "Safe working conditions and community funds for workers."
      },
      {
        "id": "fla",
        "name": "Fair Labor Association Accredited",
        "issuer": "FLA",
        "verified": true,
        "description": "High tier labor standard accreditation."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Corozo Nut Buttons",
        "status": "Verified",
        "analysis": "Made from wild fallen tagua palm nuts in Ecuador; zero petroleum polyester resin buttons."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Natural Corozo nut buttons (zero plastic)",
      "Decade-long heavyweight twill durability",
      "Fair Trade Certified production"
    ],
    "areasToImprove": [
      "Heavy fabric takes longer to line-dry in monsoon seasons"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Outerknown Sustainability Journey Impact Report",
    "dataConfidence": "High"
  },
  {
    "id": "oatly-barista-edition-oatmilk",
    "name": "Oatly Barista Edition Oat Drink 1L (0.49 kg CO\u2082e)",
    "brand": "Oatly",
    "category": "Food & Beverages",
    "subcategory": "Plant-Based Milk",
    "imageUrl": "",
    "price": 349,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 90.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 92,
      "durability": 84,
      "recyclability": 88,
      "packaging": 88,
      "repairability": 80,
      "certifications": 92
    },
    "scoreExplanation": "Certified product climate footprint of only 0.49 kg CO\u2082e per liter\u2014generating 75% fewer greenhouse gas emissions and requiring 80% less land than standard dairy milk.",
    "carbonFootprintKg": 0.49,
    "conventionalCarbonKg": 2.1,
    "waterFootprintLiters": 48,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "Sweden",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Swedish Whole Rolled Oats & Water",
        "percentage": 90,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Low-Erucic Acid Rapeseed Oil",
        "percentage": 7,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Dipotassium Phosphate & Calcium Carbonate",
        "percentage": 3,
        "isRenewable": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.22,
        "percentage": 45,
        "notes": "Nordic whole grain oat agriculture"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.12,
        "percentage": 24,
        "notes": "Patented enzymatic liquefaction powered by Swedish wind"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.08,
        "percentage": 16,
        "notes": "Aseptic Tetra Pak ambient distribution"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 8,
        "notes": "Foams cleanly for specialty coffee without curdling"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 7,
        "notes": "Tetra Pak curbside recycling"
      }
    ],
    "packagingType": "FSC-certified Tetra Brik Aseptic carton with bio-based sugarcane cap",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "carbon-cloud",
        "name": "CarbonCloud Climate Footprint Verified",
        "issuer": "CarbonCloud",
        "verified": true,
        "description": "Independent scientific life cycle emissions calculation printed on carton."
      },
      {
        "id": "vegan-action",
        "name": "Non-GMO & 100% Vegan Certified",
        "issuer": "Vegan Action",
        "verified": true,
        "description": "Strict vegan standards."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Climate Footprint Labeled (0.49kg CO\u2082e/L)",
        "status": "Verified",
        "analysis": "Independently audited cradle-to-retail ISO 14067 LCA model."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "minor-figures-oat-milk",
        "name": "Minor Figures Organic Oat M*lk",
        "brand": "Minor Figures",
        "price": 380,
        "greenScore": 93.0,
        "carbonReductionPercent": 10,
        "reason": "Certified 100% Carbon Neutral and B-Corp certified"
      }
    ],
    "keyStrengths": [
      "75% lower emissions than cow milk",
      "Exact carbon footprint labeled on carton",
      "Bio-based sugarcane cap"
    ],
    "areasToImprove": [
      "Multi-layer Tetra Pak requires specialized carton pulping mills"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "CarbonCloud Verified Life Cycle Assessment & Oatly Sustainability Report",
    "dataConfidence": "High"
  },
  {
    "id": "blue-tokai-attikan-estate-coffee",
    "name": "Blue Tokai Attikan Estate Shade-Grown Organic Arabica (500g)",
    "brand": "Blue Tokai Coffee Roasters",
    "category": "Food & Beverages",
    "subcategory": "Specialty Coffee",
    "imageUrl": "",
    "price": 790,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 92.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 88,
      "recyclability": 90,
      "packaging": 92,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "Shade-grown under high indigenous jungle canopy in the Biligirirangana Hills (BR Hills, Karnataka), fostering tiger and bird biodiversity with fair direct-trade farm pricing.",
    "carbonFootprintKg": 0.85,
    "conventionalCarbonKg": 3.8,
    "waterFootprintLiters": 340,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "India (Karnataka)",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Shade-Grown Arabica Green Coffee Beans",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.4,
        "percentage": 47,
        "notes": "Polyculture shade canopy sequesters agricultural carbon"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 26,
        "notes": "Clean high-efficiency hot-air convection roasters in Gurgaon & Mumbai"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.12,
        "percentage": 14,
        "notes": "Direct farm to roastery supply chain eliminates brokers"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.07,
        "percentage": 8,
        "notes": "Coffee grounds make rich garden compost"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 5,
        "notes": "Compostable inner one-way valve pouch"
      }
    ],
    "packagingType": "Recyclable foil-lined pouch with one-way degassing valve and paper label",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "rainforest-alliance",
        "name": "Rainforest Alliance Principles",
        "issuer": "SGS",
        "verified": true,
        "description": "Shade canopy preservation and living wage adherence."
      },
      {
        "id": "direct-trade",
        "name": "Direct Trade Verified",
        "issuer": "Blue Tokai Standard",
        "verified": true,
        "description": "Traceable payment premiums paid above C-market baseline."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Shade-Grown Jungle Canopy",
        "status": "Verified",
        "analysis": "Attikan Estate operates within BRT Wildlife Sanctuary under multi-tier native tree canopy."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Preserves Western Ghats wildlife corridors",
      "Direct farmer premium pricing",
      "Freshly roasted locally in India"
    ],
    "areasToImprove": [
      "Degassing valve requires municipal separation before pouch recycling"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Blue Tokai Transparency Report & Estate Farm Audit",
    "dataConfidence": "High"
  },
  {
    "id": "tonys-chocolonely-70-dark-bar",
    "name": "Tony's Chocolonely 70% Dark Chocolate Bar (Traceable Cacao)",
    "brand": "Tony's Chocolonely",
    "category": "Food & Beverages",
    "subcategory": "Confectionery",
    "imageUrl": "",
    "price": 499,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 96,
      "durability": 88,
      "recyclability": 94,
      "packaging": 96,
      "repairability": 84,
      "certifications": 96
    },
    "scoreExplanation": "Pioneers 100% slave-free, traceable cocoa beans sourced through Tony's Open Chain from West African cooperatives, wrapped in unbleached FSC paper and recycled foil.",
    "carbonFootprintKg": 0.65,
    "conventionalCarbonKg": 3.4,
    "waterFootprintLiters": 420,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Belgium",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "Fairtrade Traceable Cocoa Mass & Butter",
        "percentage": 70,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Fairtrade Sugar",
        "percentage": 28,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Soy Lecithin",
        "percentage": 2,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.32,
        "percentage": 49,
        "notes": "Traceable bean purchase price covers living income benchmark"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.16,
        "percentage": 25,
        "notes": "Clean chocolate molding and conching"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.09,
        "percentage": 14,
        "notes": "Sea freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 8,
        "notes": "Unequally divided bar reflects chocolate industry inequality"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "FSC paper wrapper is 100% recyclable"
      }
    ],
    "packagingType": "FSC-certified uncoated paper wrapper with recyclable aluminium foil",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High score of 125.2 in human rights and ethics."
      },
      {
        "id": "fairtrade",
        "name": "Fairtrade Certified",
        "issuer": "Fairtrade",
        "verified": true,
        "description": "Cocoa and sugar traded in compliance with Fairtrade Standards."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Slave-Free Traceable Cocoa",
        "status": "Verified",
        "analysis": "Tony's Beantracker software traces 100% of beans from farmer co-op to shipping container."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Traceable bean supply chain with living wage premium",
      "Plastic-free paper & recyclable foil wrapper",
      "Certified B Corporation (125.2 score)"
    ],
    "areasToImprove": [
      "Cacao transportation requires long-distance ocean shipping from West Africa"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Tony's Chocolonely Annual FAIR Report & PwC Verification",
    "dataConfidence": "High"
  },
  {
    "id": "pukka-three-mint-organic-tea",
    "name": "Pukka Herbs Three Mint Organic Herbal Tea (20 Sachets)",
    "brand": "Pukka Herbs",
    "category": "Food & Beverages",
    "subcategory": "Tea & Infusions",
    "imageUrl": "",
    "price": 425,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 86,
      "recyclability": 94,
      "packaging": 96,
      "repairability": 82,
      "certifications": 94
    },
    "scoreExplanation": "Certified B-Corp organic herbal tea made from fairly harvested peppermint, spearmint, and fieldmint. Tea bags are 100% plastic-free, staple-free, and home compostable.",
    "carbonFootprintKg": 0.28,
    "conventionalCarbonKg": 1.9,
    "waterFootprintLiters": 45,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.5,
    "manufacturingCountry": "UK",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Organic Peppermint, Spearmint & Fieldmint",
        "percentage": 88,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Abaca Wood Pulp Tea Bag Paper & Organic Cotton Thread",
        "percentage": 12,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.12,
        "percentage": 43,
        "notes": "Organic FairWild certified herb gathering"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.08,
        "percentage": 29,
        "notes": "100% renewable electricity packaging facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.04,
        "percentage": 14,
        "notes": "Compact box volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 10,
        "notes": "Boiling only the water needed saves kitchen electricity"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 4,
        "notes": "Tea bag is 100% home compostable"
      }
    ],
    "packagingType": "FSC certified paper box, vegetable inks, plastic-free paper envelopes",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "soil-association",
        "name": "Soil Association Organic",
        "issuer": "Soil Association",
        "verified": true,
        "description": "Certified 100% organic without agrochemicals."
      },
      {
        "id": "fairwild",
        "name": "FairWild Certified",
        "issuer": "FairWild Foundation",
        "verified": true,
        "description": "Guarantees wild plants are harvested sustainably."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High social and environmental standards."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Plastic-Free Compostable Tea Bags",
        "status": "Verified",
        "analysis": "Bags are stitched with organic cotton thread; zero polypropylene heat-seal plastic."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Zero polypropylene plastic in tea bags",
      "FairWild sustainable wild-harvest certification",
      "Completely home-compostable tea bags"
    ],
    "areasToImprove": [
      "Individual paper sachets increase packaging layer count for freshness protection"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Pukka Herbs Climate & Nature Report",
    "dataConfidence": "High"
  },
  {
    "id": "alter-eco-deep-dark-chocolate",
    "name": "Alter Eco Deep Dark Sea Salt Organic Chocolate (Ecuador)",
    "brand": "Alter Eco",
    "category": "Food & Beverages",
    "subcategory": "Confectionery",
    "imageUrl": "",
    "price": 475,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 94,
      "durability": 86,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 82,
      "certifications": 96
    },
    "scoreExplanation": "Pioneering climate-positive chocolate made with cacao from regenerative agroforestry farms in Ecuador. Wrapped in Gone4Good certified home-compostable plant-based wrappers.",
    "carbonFootprintKg": 0.58,
    "conventionalCarbonKg": 3.2,
    "waterFootprintLiters": 380,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Switzerland",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "Regenerative Organic Cocoa Beans & Butter",
        "percentage": 70,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Organic Raw Cane Sugar & Gu\u00e9rande Sea Salt",
        "percentage": 30,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.28,
        "percentage": 48,
        "notes": "Agroforestry canopy sequesters more carbon than farming emits"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.15,
        "percentage": 26,
        "notes": "Swiss green powered chocolate factory"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.08,
        "percentage": 14,
        "notes": "Container shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 7,
        "notes": "Gourmet dark chocolate"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 5,
        "notes": "Wrapper composts in backyard compost pile"
      }
    ],
    "packagingType": "Gone4Good plant-based non-GMO home compostable foil wrapper",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "regenerative-organic",
        "name": "Regenerative Organic Certified\u2122",
        "issuer": "ROA",
        "verified": true,
        "description": "Gold standard in soil health and farmer equity."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corp",
        "issuer": "B Lab",
        "verified": true,
        "description": "High tier climate and social performance."
      },
      {
        "id": "fairtrade",
        "name": "Fair Trade USA Certified",
        "issuer": "Fair Trade",
        "verified": true,
        "description": "Ethical farmer compensation."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Home Compostable Wrapper",
        "status": "Verified",
        "analysis": "Made from eucalyptus and birch wood pulp with non-GMO plant resins; composts in ~12 weeks."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Gone4Good backyard compostable wrapper",
      "Regenerative Organic Certified cacao",
      "Zero artificial emulsifiers"
    ],
    "areasToImprove": [
      "Must be stored below 22\u00b0C to prevent chocolate bloom"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Alter Eco Agroforestry Impact Audit & Pur Projet Carbon Accounting",
    "dataConfidence": "High"
  },
  {
    "id": "beyond-meat-beyond-burger-4pack",
    "name": "Beyond Meat Plant-Based Beyond Burger Patties (4-Pack)",
    "brand": "Beyond Meat",
    "category": "Food & Beverages",
    "subcategory": "Plant-Based Proteins",
    "imageUrl": "",
    "price": 899,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 88.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 92,
      "materials": 90,
      "durability": 84,
      "recyclability": 86,
      "packaging": 84,
      "repairability": 80,
      "certifications": 90
    },
    "scoreExplanation": "Peer-reviewed University of Michigan LCA confirms the Beyond Burger generates 90% fewer greenhouse gas emissions, uses 99% less water, and uses 93% less land than 1/4 lb US beef.",
    "carbonFootprintKg": 0.82,
    "conventionalCarbonKg": 7.8,
    "waterFootprintLiters": 140,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "Pea, Mung Bean & Rice Protein Isolate",
        "percentage": 68,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Expeller-Pressed Canola & Coconut Oils",
        "percentage": 22,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Beet Juice Extract (Color) & Minerals",
        "percentage": 10,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.42,
        "percentage": 51,
        "notes": "Legume crops naturally fix nitrogen into soil"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 27,
        "notes": "Thermal extrusion of plant proteins"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.1,
        "percentage": 12,
        "notes": "Cold chain logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 6,
        "notes": "Cooks on stove or grill in 6 minutes"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "Recyclable plastic tray"
      }
    ],
    "packagingType": "Recyclable polypropylene tray in FSC-certified paperboard sleeve",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "non-gmo",
        "name": "Non-GMO Project Verified",
        "issuer": "Non-GMO Project",
        "verified": true,
        "description": "Formulated without genetically modified organisms."
      },
      {
        "id": "kosher-vegan",
        "name": "Certified Vegan",
        "issuer": "Vegan Action",
        "verified": true,
        "description": "100% plant-based."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "90% Less Greenhouse Gas Emissions Than Beef",
        "status": "Verified",
        "analysis": "University of Michigan Center for Sustainable Systems third-party verified LCA."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "90% lower carbon than cattle farming",
      "99% less water required",
      "Zero cholesterol or antibiotics"
    ],
    "areasToImprove": [
      "Plastic vacuum tray seal is not yet curbside recyclable everywhere"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "University of Michigan Center for Sustainable Systems LCA",
    "dataConfidence": "High"
  },
  {
    "id": "lundberg-regenerative-basmati-rice",
    "name": "Lundberg Family Farms Regenerative Organic Brown Basmati Rice (1kg)",
    "brand": "Lundberg Family Farms",
    "category": "Food & Beverages",
    "subcategory": "Grains & Staples",
    "imageUrl": "",
    "price": 650,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 89.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 94,
      "durability": 88,
      "recyclability": 88,
      "packaging": 86,
      "repairability": 82,
      "certifications": 92
    },
    "scoreExplanation": "Pioneer of Regenerative Organic Certified rice farming that floods fields during off-season to provide wetland habitats for 300+ migratory bird species, reducing methane emissions.",
    "carbonFootprintKg": 0.72,
    "conventionalCarbonKg": 2.8,
    "waterFootprintLiters": 490,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 2.0,
    "manufacturingCountry": "USA (California)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "100% Regenerative Organic Brown Basmati Rice",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.38,
        "percentage": 53,
        "notes": "Cover cropping and water-smart alternate wetting/drying cycles"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.16,
        "percentage": 22,
        "notes": "100% solar-powered rice milling in Richvale"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.1,
        "percentage": 14,
        "notes": "Bulk rail and sea shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 7,
        "notes": "Whole grain retaining nutritious bran and germ"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "Recyclable via TerraCycle store dropoff"
      }
    ],
    "packagingType": "Store drop-off recyclable pouch made in partnership with TerraCycle",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "regenerative-organic",
        "name": "Regenerative Organic Certified\u2122",
        "issuer": "ROA",
        "verified": true,
        "description": "Guaranteed soil health, animal welfare, and farmer fairness."
      },
      {
        "id": "non-gmo",
        "name": "Non-GMO Project Verified",
        "issuer": "Non-GMO Project",
        "verified": true,
        "description": "Verified non-GMO."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Wetland Bird Conservation Farming",
        "status": "Verified",
        "analysis": "Audited duck nesting surveys confirm millions of waterfowl sheltered on winter flooded rice fields."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Provides habitat for 300+ migratory bird species",
      "100% on-site solar powered milling",
      "Non-chemical weed management"
    ],
    "areasToImprove": [
      "Plastic stand-up pouch requires drop-off recycling rather than standard curbside"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Lundberg Family Farms Sustainability & Stewardship Report",
    "dataConfidence": "High"
  },
  {
    "id": "califia-farms-organic-almond-milk",
    "name": "Califia Farms Organic Unsweetened Almond Milk (1L)",
    "brand": "Califia Farms",
    "category": "Food & Beverages",
    "subcategory": "Plant-Based Milk",
    "imageUrl": "",
    "price": 399,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 87.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 90,
      "durability": 84,
      "recyclability": 88,
      "packaging": 86,
      "repairability": 80,
      "certifications": 88
    },
    "scoreExplanation": "Made exclusively with certified Bee Better pollinator-safe organic California almonds, packaged in 100% recyclable bottles made with recycled PET.",
    "carbonFootprintKg": 0.62,
    "conventionalCarbonKg": 2.2,
    "waterFootprintLiters": 180,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 0.5,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Organic Bee-Friendly Filtered Almond Milk",
        "percentage": 94,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Purified Water & Sea Salt",
        "percentage": 5,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Calcium Carbonate & Potassium Citrate",
        "percentage": 1,
        "isRenewable": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.32,
        "percentage": 52,
        "notes": "Drip-irrigation almond orchards with permanent pollinator hedgerows"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.15,
        "percentage": 24,
        "notes": "Cold filtration plant"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.08,
        "percentage": 13,
        "notes": "Ambient shelf-stable packing"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 6,
        "notes": "Sugar-free keto friendly"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 5,
        "notes": "Curbside recyclable rPET bottle"
      }
    ],
    "packagingType": "Recyclable PET bottle with shrink sleeve label",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "bee-better",
        "name": "Bee Better Certified\u2122",
        "issuer": "Xerces Society",
        "verified": true,
        "description": "Guarantees pollinator-friendly farm habitats free of neonicotinoid pesticides."
      },
      {
        "id": "usda-organic",
        "name": "USDA Organic",
        "issuer": "CCOF",
        "verified": true,
        "description": "100% certified organic."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Bee-Friendly Certified Almonds",
        "status": "Verified",
        "analysis": "Third-party audited pesticide restrictions and dedicated wildflower forage acreage."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "oatly-barista-edition-oatmilk",
        "name": "Oatly Barista Edition Oat Drink",
        "brand": "Oatly",
        "price": 349,
        "greenScore": 90.5,
        "carbonReductionPercent": 21,
        "reason": "Significantly lower water consumption than almond farming"
      }
    ],
    "keyStrengths": [
      "Bee Better certified pollinator protection",
      "USDA certified organic almonds",
      "Zero added sugars"
    ],
    "areasToImprove": [
      "Almond trees require higher irrigation water compared to oat crops"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Califia Farms Pollinator & Carbon Stewardship Assessment",
    "dataConfidence": "Medium"
  },
  {
    "id": "numi-organic-rooibos-chai",
    "name": "Numi Organic Rooibos Chai Tea (100% Recycled Box)",
    "brand": "Numi Organic Tea",
    "category": "Food & Beverages",
    "subcategory": "Tea & Infusions",
    "imageUrl": "",
    "price": 495,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 90.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 90,
      "materials": 94,
      "durability": 86,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 82,
      "certifications": 94
    },
    "scoreExplanation": "Pioneers the use of 100% post-consumer recycled paperboard for retail boxes and plant-based, commercially compostable tea bag wrappers made of FSC paper and non-GMO PLA.",
    "carbonFootprintKg": 0.32,
    "conventionalCarbonKg": 2.1,
    "waterFootprintLiters": 40,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.5,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "Fair Trade Organic Rooibos & Spices",
        "percentage": 88,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Manila Hemp Cellulose Tea Bag Paper",
        "percentage": 12,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.15,
        "percentage": 47,
        "notes": "Cederberg mountains South African organic rooibos"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.08,
        "percentage": 25,
        "notes": "Zero-waste certified production facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.05,
        "percentage": 16,
        "notes": "Lightweight paper cartons"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.02,
        "percentage": 6,
        "notes": "Caffeine-free herbal brew"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 6,
        "notes": "Bags compostable in municipal and home compost"
      }
    ],
    "packagingType": "100% Post-Consumer Recycled cardboard outer with soy inks",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Founding B-Corp with top climate transparency."
      },
      {
        "id": "fair-trade-usa",
        "name": "Fair Trade USA Certified",
        "issuer": "Fair Trade USA",
        "verified": true,
        "description": "Safe working conditions and direct community investment."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Compostable Plant-Based Wrapper",
        "status": "Verified",
        "analysis": "ASTM D6868 certified commercially compostable barrier wrapper."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% post-consumer recycled outer box",
      "Plant-based compostable tea wrappers",
      "Fair Trade Certified rooibos & spices"
    ],
    "areasToImprove": [
      "Compostable wrapper requires industrial composting facilities in some cities"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Numi Foundation Climate & Social Impact Disclosure",
    "dataConfidence": "High"
  },
  {
    "id": "divine-chocolate-fairtrade-cocoa",
    "name": "Divine Chocolate Fairtrade 100% Pure Cocoa Powder",
    "brand": "Divine Chocolate",
    "category": "Food & Beverages",
    "subcategory": "Baking & Cocoa",
    "imageUrl": "",
    "price": 550,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 88,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 82,
      "certifications": 96
    },
    "scoreExplanation": "Unique social enterprise co-owned by Kuapa Kokoo, a cooperative of 100,000 smallholder cocoa farmers in Ghana, ensuring farmer representation on the board of directors.",
    "carbonFootprintKg": 0.48,
    "conventionalCarbonKg": 2.9,
    "waterFootprintLiters": 280,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 2.0,
    "manufacturingCountry": "Ghana / Germany",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Fairtrade Pure Cocoa Powder",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.24,
        "percentage": 50,
        "notes": "Farmer-owned cooperative cacao orchards"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.12,
        "percentage": 25,
        "notes": "Traditional Dutch processing"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.06,
        "percentage": 13,
        "notes": "Dry bulk cargo"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 6,
        "notes": "Rich unsweetened baking cocoa"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 6,
        "notes": "Steel tin is endlessly recyclable"
      }
    ],
    "packagingType": "100% Recyclable steel tin with metal lid",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Farmer ownership model praised by global economists."
      },
      {
        "id": "fairtrade",
        "name": "Fairtrade Certified",
        "issuer": "Fairtrade",
        "verified": true,
        "description": "Guaranteed price premium and farmer shares."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Co-Owned by Cocoa Farmers",
        "status": "Verified",
        "analysis": "Kuapa Kokoo cooperative owns 20% equity stake in Divine Chocolate company."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Farmer equity ownership business model",
      "100% recyclable steel tin (zero plastic)",
      "Dutch-process pure cocoa with zero additives"
    ],
    "areasToImprove": [
      "Tin uses paper seal under lid that must be detached before metal recycling"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Divine Chocolate Annual Farmer Impact Audit",
    "dataConfidence": "High"
  },
  {
    "id": "bobs-red-mill-organic-steel-cut-oats",
    "name": "Bob's Red Mill USDA Organic Steel Cut Oats (680g)",
    "brand": "Bob's Red Mill",
    "category": "Food & Beverages",
    "subcategory": "Grains & Cereals",
    "imageUrl": "",
    "price": 620,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 88.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 90,
      "materials": 92,
      "durability": 88,
      "recyclability": 84,
      "packaging": 84,
      "repairability": 80,
      "certifications": 92
    },
    "scoreExplanation": "100% employee-owned company (ESOP). Non-GMO and USDA certified organic whole grain groats cut into neat pieces on traditional slow millstones, retaining maximum fiber and nutrients.",
    "carbonFootprintKg": 0.42,
    "conventionalCarbonKg": 2.2,
    "waterFootprintLiters": 90,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.5,
    "manufacturingCountry": "USA (Oregon)",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "100% Whole Grain Organic Groat Oats",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.21,
        "percentage": 50,
        "notes": "Regenerative organic oat fields"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.1,
        "percentage": 24,
        "notes": "Cool stone milling prevents nutrient degradation"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.06,
        "percentage": 14,
        "notes": "Bulk freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.03,
        "percentage": 7,
        "notes": "High satiety low glycemic index food"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 5,
        "notes": "Bag recyclable via TerraCycle dropoff"
      }
    ],
    "packagingType": "Plastic pouch with resealable zip lock",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "usda-organic",
        "name": "USDA Organic",
        "issuer": "QAI",
        "verified": true,
        "description": "100% certified organic agriculture."
      },
      {
        "id": "non-gmo",
        "name": "Non-GMO Project Verified",
        "issuer": "Non-GMO Project",
        "verified": true,
        "description": "Zero GMO seeds."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Employee Owned (ESOP)",
        "status": "Verified",
        "analysis": "Founded by Bob Moore, company transferred 100% ownership to its workforce."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% employee-owned company",
      "Minimally processed stone-milled whole grain",
      "Zero added sugars or synthetic preservatives"
    ],
    "areasToImprove": [
      "Plastic bag requires store drop-off recycling instead of curbside paper"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Bob's Red Mill Employee Ownership & Organic Verification Dossier",
    "dataConfidence": "Medium"
  },
  {
    "id": "ola-s1-pro-gen2-ev",
    "name": "Ola S1 Pro Gen 2 Electric Scooter (4kWh Battery)",
    "brand": "Ola Electric",
    "category": "Transportation",
    "subcategory": "Electric Two-Wheelers / EV",
    "imageUrl": "",
    "price": 129999,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 88.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 92,
      "materials": 84,
      "durability": 86,
      "recyclability": 86,
      "packaging": 88,
      "repairability": 80,
      "certifications": 88
    },
    "scoreExplanation": "Zero tailpipe greenhouse emissions, saving ~1,400 kg CO\u2082 annually compared to a 110cc petrol scooter. Manufactured at Ola Futurefactory powered by an on-site 100MW solar roof.",
    "carbonFootprintKg": 440.0,
    "conventionalCarbonKg": 2100.0,
    "waterFootprintLiters": 4200,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 8.0,
    "manufacturingCountry": "India (Tamil Nadu)",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Hybrid High-Tensile Steel & Aluminum Chassis",
        "percentage": 48,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "4kWh Lithium Nickel-Manganese-Cobalt (NMC) Pack",
        "percentage": 30,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Engineered Thermoplastic Fairings",
        "percentage": 22,
        "isRecycled": false,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 260.0,
        "percentage": 59,
        "notes": "Battery cells and motor magnets extraction"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 95.0,
        "percentage": 22,
        "notes": "Highly automated Tamil Nadu Futurefactory with solar power"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 35.0,
        "percentage": 8,
        "notes": "Direct to consumer hub delivery"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 32.0,
        "percentage": 7,
        "notes": "Consumes 0.03 kWh per km of zero-emission transit"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 18.0,
        "percentage": 4,
        "notes": "Battery second-life energy storage recycling pact"
      }
    ],
    "packagingType": "Reusable steel logistics roll-cages; zero single-use wooden pallets",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fame-ii",
        "name": "FAME-II Certified",
        "issuer": "Ministry of Heavy Industries",
        "verified": true,
        "description": "Meets strict indigenous EV safety and energy efficiency criteria."
      },
      {
        "id": "ara-certified",
        "name": "ARAI Certified Range",
        "issuer": "Automotive Research Association of India",
        "verified": true,
        "description": "195km certified IDC electric range."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Saves \u20b965,000 in Fuel Annually",
        "status": "Verified",
        "analysis": "Based on 35 km daily commute vs 110cc petrol scooter at \u20b9105/liter fuel prices."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "ather-450x-gen3",
        "name": "Ather 450X Smart Connected EV Scooter",
        "brand": "Ather Energy",
        "price": 144999,
        "greenScore": 91.5,
        "carbonReductionPercent": 10,
        "reason": "Higher modular aluminum chassis recyclability"
      }
    ],
    "keyStrengths": [
      "Zero tailpipe carbon emissions",
      "195km ARAI range on 4kWh pack",
      "Manufactured in solar-powered Indian mega-factory"
    ],
    "areasToImprove": [
      "Battery replacement cost after 8 years remains a major consideration"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "ARAI Certification & Ola Electric ESG Sustainability Report",
    "dataConfidence": "High"
  },
  {
    "id": "brompton-c-line-explore",
    "name": "Brompton C Line Explore Folding Bicycle (Handcrafted Steel)",
    "brand": "Brompton",
    "category": "Transportation",
    "subcategory": "Commuter Bicycles",
    "imageUrl": "",
    "price": 145000,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 95.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 98,
      "materials": 94,
      "durability": 100,
      "recyclability": 96,
      "packaging": 94,
      "repairability": 96,
      "certifications": 92
    },
    "scoreExplanation": "Hand-brazed steel frame engineered to last 25+ years. Folds into a compact parcel in 20 seconds for multi-modal train transit, replacing thousands of car and taxi trips.",
    "carbonFootprintKg": 42.0,
    "conventionalCarbonKg": 3200.0,
    "waterFootprintLiters": 380,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 25.0,
    "manufacturingCountry": "UK (London Factory)",
    "renewableEnergyPercent": 95,
    "materialsBreakdown": [
      {
        "name": "High-Tensile Brazed Steel Frame",
        "percentage": 78,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Forged Aluminum Components",
        "percentage": 14,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Rubber Tires & Cables",
        "percentage": 8,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 24.0,
        "percentage": 57,
        "notes": "Steel tubing brazed with brass"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 11.5,
        "percentage": 27,
        "notes": "Hand-brazed by certified craftsmen in Greenford, London"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 4.5,
        "percentage": 11,
        "notes": "Ultra-compact folded shipping footprint"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.5,
        "percentage": 1,
        "notes": "Zero fossil fuel or electricity required for transit"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 1.5,
        "percentage": 4,
        "notes": "Every single part is serviceable and replaceable"
      }
    ],
    "packagingType": "FSC-certified heavy duty cardboard box with no plastic foam blocks",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Highest standards of verified social and environmental impact."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "25+ Year Active Lifespan",
        "status": "Verified",
        "analysis": "Historical warranty tracking shows >80% of Bromptons built since 1995 still in active commuter service."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "25+ year multi-decade durability",
      "100% human-powered zero emissions",
      "Enables seamless public transit multi-modality"
    ],
    "areasToImprove": [
      "Premium handcrafted initial purchase price"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Brompton Bicycle Annual Sustainability Report & LCA",
    "dataConfidence": "High"
  },
  {
    "id": "trek-fx-3-disc-commuter",
    "name": "Trek FX 3 Disc Alpha Gold Aluminum Commuter Bicycle",
    "brand": "Trek Bicycle",
    "category": "Transportation",
    "subcategory": "Commuter Bicycles",
    "imageUrl": "",
    "price": 69999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 94.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 92,
      "durability": 98,
      "recyclability": 94,
      "packaging": 92,
      "repairability": 94,
      "certifications": 90
    },
    "scoreExplanation": "Trek published the cycling industry's first full LCA report for the FX 3 (174 kg CO\u2082e manufacturing total). Commuting by bike for 430 miles completely offsets its entire manufacturing carbon.",
    "carbonFootprintKg": 174.0,
    "conventionalCarbonKg": 2800.0,
    "waterFootprintLiters": 950,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 15.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "Alpha Gold Aluminum Frame & Carbon Fork",
        "percentage": 68,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Shimano Deore Drivetrain & Hydraulic Brakes",
        "percentage": 22,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Bontrager Puncture-Resistant Tires",
        "percentage": 10,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 95.0,
        "percentage": 55,
        "notes": "Aluminum smelting and carbon fork layup"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 45.0,
        "percentage": 26,
        "notes": "Automated hydroforming and TIG welding"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 22.0,
        "percentage": 13,
        "notes": "Box density optimization cuts 18% container volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 4.0,
        "percentage": 2,
        "notes": "Zero fuel, zero battery charging"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 8.0,
        "percentage": 4,
        "notes": "Lifetime warranty frame recycling"
      }
    ],
    "packagingType": "Trek Plastic-Free bicycle shipping carton containing zero plastic zip-ties",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "iso-14040",
        "name": "ISO 14040 Audited LCA",
        "issuer": "WSP Environmental",
        "verified": true,
        "description": "Independent verification of Trek's cradle-to-grave carbon footprint."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "430 Miles to Climate Neutrality",
        "status": "Verified",
        "analysis": "Replacing automobile trips for 430 miles (692 km) completely offsets bike production carbon."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Industry-standard transparent ISO 14040 LCA report",
      "Zero fuel emissions for life",
      "Plastic-free bicycle shipping carton"
    ],
    "areasToImprove": [
      "Carbon fiber fork is less readily recycled in municipal metal scrap facilities"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Trek Bicycle Corporate Sustainability Report & WSP LCA Audit",
    "dataConfidence": "High"
  },
  {
    "id": "hero-lectro-c6e-hybrid",
    "name": "Hero Lectro C6E 700C Electric Hybrid Pedelec Bicycle",
    "brand": "Hero Lectro",
    "category": "Transportation",
    "subcategory": "Electric Bicycles",
    "imageUrl": "",
    "price": 34999,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 90,
      "durability": 92,
      "recyclability": 92,
      "packaging": 90,
      "repairability": 90,
      "certifications": 90
    },
    "scoreExplanation": "Pedelec electric hybrid bicycle engineered in Ludhiana, India. Uses a compact 5.8Ah in-frame Li-ion battery providing 30km pedal assist, consuming less than 0.2 units of electricity per charge.",
    "carbonFootprintKg": 95.0,
    "conventionalCarbonKg": 1850.0,
    "waterFootprintLiters": 620,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 10.0,
    "manufacturingCountry": "India (Ludhiana, Punjab)",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "6061 Aircraft Grade Alloy Frame",
        "percentage": 70,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "In-Tube Lithium-Ion Battery (5.8Ah)",
        "percentage": 14,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "250W BLDC High-Torque Hub Motor",
        "percentage": 16,
        "isRecycled": false,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 52.0,
        "percentage": 55,
        "notes": "6061 alloy tube drawing and battery pack"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 24.0,
        "percentage": 25,
        "notes": "Hero Cycles solar-equipped manufacturing park"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 11.0,
        "percentage": 12,
        "notes": "Domestic India rail transit"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 5.0,
        "percentage": 5,
        "notes": "Cost per km is less than \u20b90.07"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 3.0,
        "percentage": 3,
        "notes": "Aluminum frame recycling"
      }
    ],
    "packagingType": "Corrugated heavy export carton with paper wrap",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "arai",
        "name": "ARAI Exempt Electric Bicycle",
        "issuer": "ARAI",
        "verified": true,
        "description": "Safe <25km/h speed limit with zero license requirement."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Running Cost of \u20b90.07 Per Kilometer",
        "status": "Verified",
        "analysis": "0.2 kWh electricity at \u20b97/unit provides 30 km range = \u20b90.046 to \u20b90.07 per km."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "\u20b90.07/km ultra low running cost",
      "Made in India alloy frame",
      "Zero driver's license or registration required"
    ],
    "areasToImprove": [
      "Non-detachable in-frame battery requires parking near an electrical outlet to charge"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Hero Lectro Engineering & Green Mobility Audit",
    "dataConfidence": "High"
  },
  {
    "id": "tern-gsd-s10-cargo-ebike",
    "name": "Tern GSD S10 Heavy Duty Cargo e-Bike (Car-Replacement)",
    "brand": "Tern Bicycles",
    "category": "Transportation",
    "subcategory": "Cargo Bicycles",
    "imageUrl": "",
    "price": 349000,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 88,
      "durability": 96,
      "recyclability": 88,
      "packaging": 90,
      "repairability": 92,
      "certifications": 90
    },
    "scoreExplanation": "True car-replacement vehicle with 200kg maximum gross vehicle weight, capable of carrying two children plus groceries while parking vertically in standard elevators.",
    "carbonFootprintKg": 210.0,
    "conventionalCarbonKg": 6400.0,
    "waterFootprintLiters": 1200,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 12.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "Patented Multi-Truss Aluminum Frame",
        "percentage": 64,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Bosch Cargo Line Motor & Dual 500Wh Batteries",
        "percentage": 24,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Magura 4-Piston Hydraulic Disc Brakes & Tires",
        "percentage": 12,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 115.0,
        "percentage": 55,
        "notes": "Heavy gauge load-rated aluminum tubing"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 52.0,
        "percentage": 25,
        "notes": "EFBE certified safety rig testing up to 200kg"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 25.0,
        "percentage": 12,
        "notes": "Flat-fold handlebar saves volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 11.0,
        "percentage": 5,
        "notes": "Replaces urban automobile trips"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 7.0,
        "percentage": 3,
        "notes": "Bosch battery e-bike recycling collection"
      }
    ],
    "packagingType": "Heavy duty recycled export carton with paper padding",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "efbe-tri-test",
        "name": "EFBE Tri-Test Cargo Certified",
        "issuer": "EFBE Pr\u00fcftechnik",
        "verified": true,
        "description": "Highest international safety standard for heavy cargo bikes."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces 90% of Family Car Trips",
        "status": "Verified",
        "analysis": "European Cyclists' Federation telemetry study showed GSD owners reduced car mileage by 84%."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "200kg cargo capacity replaces family car trips",
      "Stores vertically to take zero hallway floor space",
      "Dual Bosch battery support up to 195km range"
    ],
    "areasToImprove": [
      "Significant upfront purchase price for households"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Tern Bicycles Environmental Assessment & European Cyclists' Federation Study",
    "dataConfidence": "High"
  },
  {
    "id": "segway-ninebot-max-g2",
    "name": "Segway Ninebot Max G2 Electric KickScooter",
    "brand": "Segway-Ninebot",
    "category": "Transportation",
    "subcategory": "Micro-Mobility",
    "imageUrl": "",
    "price": 64999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 86.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 84,
      "durability": 88,
      "recyclability": 86,
      "packaging": 90,
      "repairability": 82,
      "certifications": 88
    },
    "scoreExplanation": "Built with regenerative electronic braking that recharges the battery during downhill deceleration, 10-inch self-healing puncture-proof tires, and 70km theoretical range.",
    "carbonFootprintKg": 125.0,
    "conventionalCarbonKg": 1450.0,
    "waterFootprintLiters": 680,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "China",
    "renewableEnergyPercent": 60,
    "materialsBreakdown": [
      {
        "name": "Aviation-Grade Structural Aluminum Alloy",
        "percentage": 58,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "551Wh Lithium-Ion Battery & BMS",
        "percentage": 24,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Rear Drive Motor & Puncture-Proof Tires",
        "percentage": 18,
        "isRecycled": false,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 72.0,
        "percentage": 58,
        "notes": "Aluminum extrusion and battery cells"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 30.0,
        "percentage": 24,
        "notes": "Automated chassis assembly and IPX5 sealing"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 13.0,
        "percentage": 10,
        "notes": "Sea freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 6.0,
        "percentage": 5,
        "notes": "Regenerative braking returns up to 10% charge"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 4.0,
        "percentage": 3,
        "notes": "Modular components available online"
      }
    ],
    "packagingType": "Recycled cardboard box with minimal PE foam wraps",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "ul-2272",
        "name": "UL 2272 Electrical Systems Safety",
        "issuer": "Underwriters Laboratories",
        "verified": true,
        "description": "Rigorous battery and electrical fire safety standard."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Regenerative Braking Recharges Battery",
        "status": "Verified",
        "analysis": "KERS electronics convert kinetic braking energy into battery charge."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Regenerative KERS braking system",
      "Self-healing pneumatic tires",
      "UL 2272 certified battery safety"
    ],
    "areasToImprove": [
      "24.3 kg total weight is heavy for carrying up stairs"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Segway-Ninebot Product Life Cycle Assessment",
    "dataConfidence": "Medium"
  },
  {
    "id": "specialized-turbo-vado-4",
    "name": "Specialized Turbo Vado 4.0 Electric Commuter Bicycle",
    "brand": "Specialized",
    "category": "Transportation",
    "subcategory": "Electric Bicycles",
    "imageUrl": "",
    "price": 289000,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 90.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 88,
      "durability": 94,
      "recyclability": 88,
      "packaging": 90,
      "repairability": 90,
      "certifications": 90
    },
    "scoreExplanation": "Equipped with Specialized 2.0 motor that quadruples rider effort with whisper-quiet efficiency, MasterMind display with over-the-air updates, and radar safety proximity sensor.",
    "carbonFootprintKg": 185.0,
    "conventionalCarbonKg": 4200.0,
    "waterFootprintLiters": 1100,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 12.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "E5 Aluminum Custom-Butted Frame",
        "percentage": 62,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Specialized 710Wh Battery & Mid-Drive Motor",
        "percentage": 26,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "SRAM Drivetrain & Hydraulic Disc Components",
        "percentage": 12,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 102.0,
        "percentage": 55,
        "notes": "Hydroformed E5 aluminum and high energy-density battery cells"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 46.0,
        "percentage": 25,
        "notes": "Specialized certified clean production partner facility"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 22.0,
        "percentage": 12,
        "notes": "Consolidated sea shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 9.0,
        "percentage": 5,
        "notes": "140km range per charge on eco assist"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 6.0,
        "percentage": 3,
        "notes": "Specialized battery recycling partnership with Call2Recycle"
      }
    ],
    "packagingType": "Plastic-free bicycle box with paper tape and cardboard struts",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "call2recycle",
        "name": "Call2Recycle Certified E-Bike Program",
        "issuer": "PeopleForBikes",
        "verified": true,
        "description": "Safe closed-loop battery recycling network."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "140km Real World Range",
        "status": "Verified",
        "analysis": "Based on 710Wh battery capacity with Level 1 Eco assist on mixed terrain."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Whisper quiet custom mid-drive motor",
      "140km range with 710Wh battery",
      "Plastic-free shipping box"
    ],
    "areasToImprove": [
      "Mid-drive motor requires specialized service toolsets"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Specialized Bicycle Components Sustainability Disclosure",
    "dataConfidence": "High"
  },
  {
    "id": "pure-electric-advance-flex",
    "name": "Pure Electric Advance Flex Foldable e-Scooter (IP65)",
    "brand": "Pure Electric",
    "category": "Transportation",
    "subcategory": "Micro-Mobility",
    "imageUrl": "",
    "price": 89999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 87.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 86,
      "durability": 88,
      "recyclability": 86,
      "packaging": 92,
      "repairability": 84,
      "certifications": 88
    },
    "scoreExplanation": "Radical forward-facing riding stance that folds 70% smaller than traditional scooters to fit in car trunks or train baggage racks, featuring IP65 water resistance.",
    "carbonFootprintKg": 98.0,
    "conventionalCarbonKg": 1250.0,
    "waterFootprintLiters": 520,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "UK Engineering / China",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "Aircraft-Grade 6061 Aluminum Chassis",
        "percentage": 60,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "High-Efficiency 710W Peak Motor & Battery",
        "percentage": 25,
        "isRecycled": false,
        "color": "#f59e0b"
      },
      {
        "name": "Pliable Magnesium Footboards",
        "percentage": 15,
        "isRecycled": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 54.0,
        "percentage": 55,
        "notes": "Cast aluminum hinge mechanisms"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 24.0,
        "percentage": 25,
        "notes": "IP65 environmental seal testing"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 11.0,
        "percentage": 11,
        "notes": "Ultra compact box cuts shipping footprint"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 5.0,
        "percentage": 5,
        "notes": "Forward facing posture improves road stability"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 4.0,
        "percentage": 4,
        "notes": "Modular electronic quick-disconnect harnesses"
      }
    ],
    "packagingType": "100% Recyclable cardboard carton with paper honeycomb padding",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "ip65",
        "name": "IP65 Water Resistance Certified",
        "issuer": "T\u00dcV",
        "verified": true,
        "description": "Safe for heavy rain commuting."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Ultra-Compact 5-Step Fold",
        "status": "Verified",
        "analysis": "Folds to 62cm x 30cm x 57cm, fitting under office desks or inside car boots."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Forward-facing natural riding ergonomics",
      "Folds into luggage size for public transit",
      "IP65 certified all-weather rain sealing"
    ],
    "areasToImprove": [
      "Smaller 10-inch wheels require attentiveness over large potholes"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Pure Electric Mobility LCA Whitepaper",
    "dataConfidence": "Medium"
  },
  {
    "id": "dingbats-earth-hardcover-notebook",
    "name": "Dingbats* Earth Collection Hardcover Vegan Notebook",
    "brand": "Dingbats* Notebooks",
    "category": "Stationery",
    "subcategory": "Stone Paper & Notebooks",
    "imageUrl": "",
    "price": 1899,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 92.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 94,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 84,
      "certifications": 96
    },
    "scoreExplanation": "First notebook brand in the UK certified 100% Vegan (zero animal glues), made with 100gsm acid-free FSC-certified paper, degradable vegan PU cover, and carbon-neutral distribution.",
    "carbonFootprintKg": 0.85,
    "conventionalCarbonKg": 3.4,
    "waterFootprintLiters": 45,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 15.0,
    "manufacturingCountry": "Lebanon (Heritage Master Bookbinders)",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "FSC Certified 100gsm Acid-Free Paper",
        "percentage": 82,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Biodegradable Vegan PU Leather Cover",
        "percentage": 14,
        "isRenewable": false,
        "color": "#06b6d4"
      },
      {
        "name": "Cotton Ribbon & Plant-Based Adhesives",
        "percentage": 4,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.42,
        "percentage": 49,
        "notes": "FSC managed European forest wood pulp"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 26,
        "notes": "Established in 1800, family master bookbinders"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.11,
        "percentage": 13,
        "notes": "Carbon offset freight program"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 7,
        "notes": "Fountain-pen friendly 100gsm paper with zero bleed"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 5,
        "notes": "Paper pages are 100% recyclable"
      }
    ],
    "packagingType": "Plastic-free paper band with vegetable ink printing",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "vegan-certified",
        "name": "Certified 100% Vegan",
        "issuer": "The Vegan Society",
        "verified": true,
        "description": "Completely free of animal bones or glues in binding."
      },
      {
        "id": "fsc",
        "name": "FSC Certified Paper",
        "issuer": "FSC",
        "verified": true,
        "description": "Responsibly sourced forest wood pulp."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Recyclable and Vegan",
        "status": "Verified",
        "analysis": "Binding uses synthetic vegan adhesives; paper block is chlorine-free and acid-free."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "karst-stone-paper-journal",
        "name": "Karst Stone Paper Hardcover Journal",
        "brand": "Karst",
        "price": 2499,
        "greenScore": 95.0,
        "carbonReductionPercent": 35,
        "reason": "Saves 100% forest trees by utilizing upcycled limestone quarry dust"
      }
    ],
    "keyStrengths": [
      "Certified 100% Vegan (zero animal glues)",
      "Heavyweight 100gsm fountain-pen friendly paper",
      "Plastic-free packaging"
    ],
    "areasToImprove": [
      "Vegan PU cover requires specialized industrial processing to biodegrade"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Dingbats* Sustainability Policy & Vegan Society Audit",
    "dataConfidence": "High"
  },
  {
    "id": "lamy-safari-charcoal-fountain-pen",
    "name": "Lamy Safari Charcoal Refillable Fountain Pen (with Z28 Converter)",
    "brand": "Lamy",
    "category": "Stationery",
    "subcategory": "Eco Pencils & Pens",
    "imageUrl": "",
    "price": 2750,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 92,
      "durability": 98,
      "recyclability": 94,
      "packaging": 96,
      "repairability": 94,
      "certifications": 92
    },
    "scoreExplanation": "Manufactured in Heidelberg, Germany from indestructible ABS resin. Paired with a reusable piston converter to draw bottled ink, eliminating hundreds of disposable plastic ballpoint pens.",
    "carbonFootprintKg": 0.42,
    "conventionalCarbonKg": 16.5,
    "waterFootprintLiters": 25,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 25.0,
    "manufacturingCountry": "Germany (Heidelberg)",
    "renewableEnergyPercent": 95,
    "materialsBreakdown": [
      {
        "name": "Durable Impact-Resistant ABS Polymer",
        "percentage": 68,
        "isRecycled": false,
        "color": "#64748b"
      },
      {
        "name": "Stainless Steel Nib & Spring Brass Clip",
        "percentage": 22,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Rotary Piston Ink Reservoir (Z28)",
        "percentage": 10,
        "isRecycled": false,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.22,
        "percentage": 52,
        "notes": "Precision engineered German ABS"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.11,
        "percentage": 26,
        "notes": "Solar and geothermal powered Heidelberg factory"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.05,
        "percentage": 12,
        "notes": "Compact lightweight packaging"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.02,
        "percentage": 5,
        "notes": "Replaces 20-30 plastic ballpoint pens every year"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 5,
        "notes": "Nibs and feeds sold separately as lifetime spare parts"
      }
    ],
    "packagingType": "100% Recyclable cardboard triangular prism box, zero plastic",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "made-in-germany",
        "name": "Made in Germany Quality Seal",
        "issuer": "Heidelberg IHK",
        "verified": true,
        "description": "All parts manufactured in-house in Heidelberg."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Lifetime Writing Instrument",
        "status": "Verified",
        "analysis": "Nibs can be swapped in 5 seconds with a piece of tape; pen body is virtually unbreakable."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Replaces hundreds of disposable ballpoint pens",
      "User swappable modular stainless steel nibs",
      "Zero single-use plastic cartridges with converter"
    ],
    "areasToImprove": [
      "Body uses virgin ABS plastic for structural impact durability"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Lamy Corporate Environmental Commitment Report",
    "dataConfidence": "High"
  },
  {
    "id": "pilot-frixion-refillable-3pack",
    "name": "Pilot FriXion Ball Refillable Gel Pens (70% Recycled Body)",
    "brand": "Pilot",
    "category": "Stationery",
    "subcategory": "Eco Pencils & Pens",
    "imageUrl": "",
    "price": 399,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 85.0,
    "grade": "A",
    "subscores": {
      "carbonImpact": 86,
      "materials": 88,
      "durability": 84,
      "recyclability": 84,
      "packaging": 86,
      "repairability": 84,
      "certifications": 86
    },
    "scoreExplanation": "Made with at least 70% recycled plastic (excluding refills) through Pilot's Begreen program. Refillable at least 3 times, saving 71% greenhouse gas emissions vs buying new pens.",
    "carbonFootprintKg": 0.12,
    "conventionalCarbonKg": 0.45,
    "waterFootprintLiters": 18,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 3.0,
    "manufacturingCountry": "Japan",
    "renewableEnergyPercent": 70,
    "materialsBreakdown": [
      {
        "name": "Post-Consumer Recycled Polycarbonate (Begreen)",
        "percentage": 70,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Thermo-Sensitive Erasable Gel Ink Reservoir",
        "percentage": 20,
        "isRenewable": false,
        "color": "#06b6d4"
      },
      {
        "name": "Tungsten Carbide Ball & Elastomer Grip",
        "percentage": 10,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.06,
        "percentage": 50,
        "notes": "Recycled plastic compounds"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.03,
        "percentage": 25,
        "notes": "ISO 14001 certified plant in Japan"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.015,
        "percentage": 13,
        "notes": "Lightweight container freight"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.01,
        "percentage": 8,
        "notes": "Refills cut purchase of new plastic pens"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.005,
        "percentage": 4,
        "notes": "Terracycle pen drop-off recycling"
      }
    ],
    "packagingType": "100% Recycled cardboard blister card with 80% recycled PET blister",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "begreen",
        "name": "Pilot Begreen Certified",
        "issuer": "Pilot Environmental Committee",
        "verified": true,
        "description": "Guaranteed minimum 70% recycled content by weight."
      },
      {
        "id": "iso-14001",
        "name": "ISO 14001 Environmental Management",
        "issuer": "JQA",
        "verified": true,
        "description": "Audited zero-landfill factory production."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Refilling 3 Times Saves 71% CO\u2082",
        "status": "Verified",
        "analysis": "LCA calculates buying 3 refills vs 3 complete new pens reduces manufacturing footprint by 71%."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "lamy-safari-charcoal-fountain-pen",
        "name": "Lamy Safari Charcoal Fountain Pen",
        "brand": "Lamy",
        "price": 2750,
        "greenScore": 94.5,
        "carbonReductionPercent": 70,
        "reason": "Lifetime metal nib and zero plastic ink cartridges with bottle converter"
      }
    ],
    "keyStrengths": [
      "70% recycled plastic body",
      "Thermo-sensitive erasable ink eliminates correction tape",
      "Refillable to save 71% CO\u2082"
    ],
    "areasToImprove": [
      "Heat above 60\u00b0C temporarily fades thermo-sensitive ink"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Pilot Pen Begreen Life Cycle Assessment Report",
    "dataConfidence": "High"
  },
  {
    "id": "onyx-green-recycled-colored-pencils",
    "name": "Onyx and Green 100% Recycled Newspaper Colored Pencils (24-Pack)",
    "brand": "Onyx and Green",
    "category": "Stationery",
    "subcategory": "Eco Pencils & Pens",
    "imageUrl": "",
    "price": 499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 88,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 86,
      "certifications": 92
    },
    "scoreExplanation": "Made entirely from discarded post-consumer newspapers rolled tightly around non-toxic vibrant color cores, saving virgin cedar trees from being cut down for pencil slats.",
    "carbonFootprintKg": 0.22,
    "conventionalCarbonKg": 2.1,
    "waterFootprintLiters": 22,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 2.0,
    "manufacturingCountry": "China / Canada",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "100% Upcycled Discarded Newspaper Newsprint",
        "percentage": 82,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Non-Toxic Clay & Wax Color Pigments",
        "percentage": 18,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.1,
        "percentage": 45,
        "notes": "Diverts discarded printed newspapers from municipal waste"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.06,
        "percentage": 27,
        "notes": "Mechanical paper rolling without chemical wood bleaching"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.03,
        "percentage": 14,
        "notes": "Compact cardboard box"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.02,
        "percentage": 9,
        "notes": "Sharpens smoothly in standard pencil sharpeners"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.01,
        "percentage": 5,
        "notes": "Pencil shavings are 100% compostable"
      }
    ],
    "packagingType": "100% Recycled cardboard tube with soy ink printing",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "ap-certified",
        "name": "ACMI AP Non-Toxic Certified",
        "issuer": "ACMI",
        "verified": true,
        "description": "Safe for children and free of heavy metals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Zero Virgin Wood Used",
        "status": "Verified",
        "analysis": "Inspection confirms barrel consists solely of laminated recycled newspaper layers."
      }
    ],
    "greenerAlternatives": [
      {
        "productId": "sprout-plantable-pencils",
        "name": "Sprout Plantable Graphite Seed Pencils",
        "brand": "SproutWorld",
        "price": 899,
        "greenScore": 94.0,
        "carbonReductionPercent": 15,
        "reason": "Pencil stubs sprout into herbs and flowers"
      }
    ],
    "keyStrengths": [
      "100% upcycled post-consumer newsprint",
      "Zero virgin cedar deforestation",
      "Compostable pencil shavings"
    ],
    "areasToImprove": [
      "Paper casing requires sharp blade to prevent tearing when sharpening"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Onyx + Green Environmental Verification Dossier",
    "dataConfidence": "Medium"
  },
  {
    "id": "deflecto-recycled-desk-organizer",
    "name": "Deflecto Recycled Plastic 4-Tier Desk Organizer Tray",
    "brand": "Deflecto",
    "category": "Stationery",
    "subcategory": "Office Storage",
    "imageUrl": "",
    "price": 1299,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 87.5,
    "grade": "A",
    "subscores": {
      "carbonImpact": 88,
      "materials": 90,
      "durability": 92,
      "recyclability": 88,
      "packaging": 90,
      "repairability": 80,
      "certifications": 86
    },
    "scoreExplanation": "Manufactured with 100% post-consumer recycled polystyrene diverted from consumer electronics and packaging, saving crude oil and landfill volume.",
    "carbonFootprintKg": 1.4,
    "conventionalCarbonKg": 5.8,
    "waterFootprintLiters": 65,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 10.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "100% Post-Consumer Recycled Polystyrene (HIPS)",
        "percentage": 100,
        "isRecycled": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.7,
        "percentage": 50,
        "notes": "Mechanical sorting of discarded rigid polystyrene"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.35,
        "percentage": 25,
        "notes": "Energy efficient injection molding"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.2,
        "percentage": 14,
        "notes": "Nestable design saves freight volume"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.1,
        "percentage": 7,
        "notes": "Heavy duty drop resistant office organization"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 4,
        "notes": "Rigid plastic recycling stream compatible"
      }
    ],
    "packagingType": "100% Recycled corrugated carton with paper tape",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "scs-recycled",
        "name": "SCS Recycled Content Certified 100%",
        "issuer": "SCS Global Services",
        "verified": true,
        "description": "Independently audited 100% post-consumer recycled plastic."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Post-Consumer Recycled Content",
        "status": "Verified",
        "analysis": "SCS Global Services audits raw resin bills of lading and mass balance."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% certified post-consumer recycled plastic",
      "Nestable space-saving shipping design",
      "10-year crack-resistant office durability"
    ],
    "areasToImprove": [
      "Rigid polystyrene is less readily collected than PET or HDPE in some municipal curbs"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Deflecto Sustainable Office LCA & SCS Audit",
    "dataConfidence": "High"
  },
  {
    "id": "decomposition-book-spiral",
    "name": "Decomposition Book 100% Post-Consumer Recycled Spiral Notebook",
    "brand": "Michael Roger",
    "category": "Stationery",
    "subcategory": "Stone Paper & Notebooks",
    "imageUrl": "",
    "price": 899,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 94.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 96,
      "durability": 90,
      "recyclability": 96,
      "packaging": 98,
      "repairability": 84,
      "certifications": 94
    },
    "scoreExplanation": "Made in the USA from 100% post-consumer-waste recycled paper processed chlorine-free, printed with bio-based soy inks, using a steel spiral that is 100% recyclable.",
    "carbonFootprintKg": 0.45,
    "conventionalCarbonKg": 3.1,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 10.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "100% Post-Consumer Waste Recycled Paper",
        "percentage": 88,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Heavy Duty Recycled Cardboard Covers",
        "percentage": 8,
        "isRecycled": true,
        "color": "#06b6d4"
      },
      {
        "name": "Recycled Steel Wire Spiral & Soy Inks",
        "percentage": 4,
        "isRecycled": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.2,
        "percentage": 44,
        "notes": "Processed chlorine-free (PCF) recycled pulp"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.12,
        "percentage": 27,
        "notes": "100% bio-gas and hydropower paper mill"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.07,
        "percentage": 16,
        "notes": "Compact flat-pack logistics"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 9,
        "notes": "College ruled micro-perforated sheets"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 4,
        "notes": "100% curbside recyclable"
      }
    ],
    "packagingType": "Zero single-use packaging; paper sticker on back",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "pcf",
        "name": "Processed Chlorine Free (PCF)",
        "issuer": "Chlorine Free Products Association",
        "verified": true,
        "description": "No toxic dioxins created during de-inking."
      },
      {
        "id": "soy-ink",
        "name": "Printed with 100% Soy Ink",
        "issuer": "Soy Ink Association",
        "verified": true,
        "description": "Low VOC renewable vegetable ink."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Post-Consumer Waste Recycled",
        "status": "Verified",
        "analysis": "Audited mill pulping records confirm 100% recovered consumer paper."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% post-consumer waste paper",
      "Zero chlorine bleaching (PCF)",
      "Printed with vegetable soy inks"
    ],
    "areasToImprove": [
      "Spiral steel wire should be untwisted before discarding in pure paper bins"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Michael Roger Environmental Audits & PCF Certification",
    "dataConfidence": "High"
  },
  {
    "id": "twsbi-eco-piston-fountain-pen",
    "name": "TWSBI ECO Piston Filling Fountain Pen (Clear)",
    "brand": "TWSBI",
    "category": "Stationery",
    "subcategory": "Eco Pencils & Pens",
    "imageUrl": "",
    "price": 3299,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 95.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 92,
      "durability": 98,
      "recyclability": 94,
      "packaging": 96,
      "repairability": 98,
      "certifications": 92
    },
    "scoreExplanation": "High-capacity built-in piston mechanism fills ink directly from glass bottles, eliminating all plastic ink cartridges. Includes maintenance wrench and silicone grease for lifetime self-repair.",
    "carbonFootprintKg": 0.38,
    "conventionalCarbonKg": 18.0,
    "waterFootprintLiters": 22,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 25.0,
    "manufacturingCountry": "Taiwan",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "Precision Acrylic Resin Body",
        "percentage": 70,
        "isRecycled": false,
        "color": "#06b6d4"
      },
      {
        "name": "German Stainless Steel Nib & Feed",
        "percentage": 20,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Piston Screw Mechanism & Brass Clip",
        "percentage": 10,
        "isRecycled": false,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.2,
        "percentage": 53,
        "notes": "Optical clarity acrylic"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.09,
        "percentage": 24,
        "notes": "High precision CNC machining in Taiwan"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.05,
        "percentage": 13,
        "notes": "Lightweight case"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.02,
        "percentage": 5,
        "notes": "Holds 1.76ml ink\u20143x more than typical cartridges"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 5,
        "notes": "Fully dismantleable and serviceable at home"
      }
    ],
    "packagingType": "Recyclable presentation box with cardboard sleeve and service wrench",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "rohs",
        "name": "RoHS Non-Toxic Lead-Free",
        "issuer": "T\u00dcV",
        "verified": true,
        "description": "Free of hazardous heavy metals."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Completely Disassembleable by User",
        "status": "Verified",
        "analysis": "Includes factory metal disassembly wrench and instruction booklet in every retail box."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Built-in piston holds 3x cartridge volume",
      "Includes disassembly wrench for lifetime repair",
      "Zero single-use cartridges"
    ],
    "areasToImprove": [
      "Clear acrylic should not be cleaned with alcohol to prevent micro-crazing"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "TWSBI Precision Engineering Environmental Disclosure",
    "dataConfidence": "High"
  },
  {
    "id": "fabriano-ecoqua-notepad",
    "name": "Fabriano EcoQua FSC-Certified Chlorine-Free Glued Notepad",
    "brand": "Fabriano",
    "category": "Stationery",
    "subcategory": "Stone Paper & Notebooks",
    "imageUrl": "",
    "price": 550,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 90.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 86,
      "recyclability": 94,
      "packaging": 96,
      "repairability": 82,
      "certifications": 94
    },
    "scoreExplanation": "Made in Italy by master paper makers operating since 1264. 100% made with hydro-powered green energy, FSC-certified chlorine-free paper, and lightfast ecological pulp-colored covers.",
    "carbonFootprintKg": 0.52,
    "conventionalCarbonKg": 2.8,
    "waterFootprintLiters": 40,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 5.0,
    "manufacturingCountry": "Italy (Fabriano)",
    "renewableEnergyPercent": 100,
    "materialsBreakdown": [
      {
        "name": "FSC Certified Acid-Free Bioprima Paper (85gsm)",
        "percentage": 85,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Sirio Ecological Mass-Dyed Paperboard Cover",
        "percentage": 15,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.25,
        "percentage": 48,
        "notes": "Certified sustainable European forestry"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.13,
        "percentage": 25,
        "notes": "Hydroelectric energy from local Italian river mills"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.08,
        "percentage": 15,
        "notes": "Pallet density optimization"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.04,
        "percentage": 8,
        "notes": "Glued spine allows clean single-sheet tear off"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.02,
        "percentage": 4,
        "notes": "100% recyclable paper monomaterial"
      }
    ],
    "packagingType": "Plastic-free paper band with zero plastic shrink film",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fsc",
        "name": "FSC Certified",
        "issuer": "FSC",
        "verified": true,
        "description": "Guaranteed sustainable wood pulp."
      },
      {
        "id": "hydro-power",
        "name": "100% Hydro-Powered Mill",
        "issuer": "Fedrigoni Group",
        "verified": true,
        "description": "Renewable electricity generation on-site."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Hydro-Electric Paper Milling",
        "status": "Verified",
        "analysis": "Fabriano mills utilize historical and modern hydroelectric turbines in the Marche region."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "100% hydro-powered historic mill production",
      "Acid-free archival grade 85gsm paper",
      "Plastic-free packaging"
    ],
    "areasToImprove": [
      "Glued spine sheets tear easily when turned roughly"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Fedrigoni Sustainability Report & Fabriano LCA",
    "dataConfidence": "High"
  },
  {
    "id": "hahnemuhle-bamboo-sketchbook",
    "name": "Hahnem\u00fchle 90% Renewable Bamboo Mixed Media Sketchbook",
    "brand": "Hahnem\u00fchle",
    "category": "Stationery",
    "subcategory": "Art & Sketching",
    "imageUrl": "",
    "price": 1499,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 92,
      "recyclability": 92,
      "packaging": 94,
      "repairability": 84,
      "certifications": 94
    },
    "scoreExplanation": "World's first fine art paper made from 90% fast-renewing bamboo fibers and 10% cotton rag. Saves slow-growing trees, requires zero pesticides, and supports biodiversity.",
    "carbonFootprintKg": 0.68,
    "conventionalCarbonKg": 3.4,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 20.0,
    "manufacturingCountry": "Germany",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "90% Rapid-Renewable Bamboo Fibers",
        "percentage": 90,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "10% Pure Cotton Rag Rags",
        "percentage": 10,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.32,
        "percentage": 47,
        "notes": "Bamboo shoots regenerate without re-planting"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.18,
        "percentage": 26,
        "notes": "Traditional German spring water papermaking"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.1,
        "percentage": 15,
        "notes": "Container shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 7,
        "notes": "Acid-free archival age resistance >100 years"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 5,
        "notes": "Pure natural fibers"
      }
    ],
    "packagingType": "Plastic-free paper band with soy ink",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "iso-9706",
        "name": "ISO 9706 Archival Permanence",
        "issuer": "DIN",
        "verified": true,
        "description": "Guaranteed museum aging resistance for 100+ years."
      },
      {
        "id": "green-rover",
        "name": "Hahnem\u00fchle Green Rooster Initiative",
        "issuer": "Hahnem\u00fchle",
        "verified": true,
        "description": "5% of profits donated to reforestation and animal welfare."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "90% Fast-Renewable Bamboo Content",
        "status": "Verified",
        "analysis": "Fiber microscopic analysis confirms 90% pure bamboo cellulose content."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "90% renewable bamboo fine-art paper",
      "Museum archival 100-year longevity",
      "Plastic-free paper band"
    ],
    "areasToImprove": [
      "Higher price compared to standard wood-pulp student sketchpads"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Hahnem\u00fchle FineArt Green Rooster Environmental Report",
    "dataConfidence": "High"
  },
  {
    "id": "noissue-compostable-mailers-100",
    "name": "Noissue 100% Home Compostable Shipping Mailers (Pack of 100)",
    "brand": "Noissue",
    "category": "Packaging",
    "subcategory": "Circular Packaging",
    "imageUrl": "",
    "price": 2499,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 95.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 96,
      "materials": 98,
      "durability": 90,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 88,
      "certifications": 96
    },
    "scoreExplanation": "Made from PBAT and cornstarch, certified by T\u00dcV Austria to break down completely in backyard home compost bins within 180 days, leaving zero toxic microplastics.",
    "carbonFootprintKg": 1.2,
    "conventionalCarbonKg": 8.4,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "New Zealand / Vietnam",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "PBAT (Biodegradable Polymer)",
        "percentage": 65,
        "isRenewable": false,
        "color": "#06b6d4"
      },
      {
        "name": "Non-GMO Cornstarch & PLA",
        "percentage": 35,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.6,
        "percentage": 50,
        "notes": "Cornstarch agricultural starch synthesis"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.3,
        "percentage": 25,
        "notes": "Blown film extrusion with soy inks"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.15,
        "percentage": 13,
        "notes": "Lightweight flat mailers save fuel"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.1,
        "percentage": 8,
        "notes": "Dual adhesive strip enables customer returns in same bag"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 4,
        "notes": "Composts into natural garden fertilizer in 180 days"
      }
    ],
    "packagingType": "Shipped in 100% recycled paper cartons with water-activated paper tape",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "tuv-home-compost",
        "name": "OK Compost HOME Certified",
        "issuer": "T\u00dcV Austria",
        "verified": true,
        "description": "Breaks down at ambient garden temperatures within 180 days."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "High transparency packaging standard."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Home Compostable (180 Days)",
        "status": "Verified",
        "analysis": "ASTM D6400 and EN 13432 tests verify zero toxic residue in soil biology."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "OK Compost HOME certified",
      "Dual adhesive strip for double-use returns",
      "Zero fossil microplastics"
    ],
    "areasToImprove": [
      "Must be stored away from excessive humidity and heat prior to shipping use"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Noissue Eco-Packaging LCA Audit & T\u00dcV Certification",
    "dataConfidence": "High"
  },
  {
    "id": "ranpak-geami-kraft-cushioning",
    "name": "Ranpak Geami WrapPak Die-Cut Kraft Paper Cushioning Roll",
    "brand": "Ranpak",
    "category": "Packaging",
    "subcategory": "Protective Packaging",
    "imageUrl": "",
    "price": 3200,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 93.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 90,
      "recyclability": 96,
      "packaging": 96,
      "repairability": 86,
      "certifications": 94
    },
    "scoreExplanation": "Patented 3D honeycomb paper structure that interlocks to cushion fragile products without tape, completely eliminating plastic bubble wrap and reducing warehouse storage by 80%.",
    "carbonFootprintKg": 2.1,
    "conventionalCarbonKg": 14.8,
    "waterFootprintLiters": 65,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 2.0,
    "manufacturingCountry": "Netherlands / USA",
    "renewableEnergyPercent": 90,
    "materialsBreakdown": [
      {
        "name": "100% FSC Certified Unbleached Virgin Kraft Paper",
        "percentage": 75,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Interleaf Soft White Tissue Paper",
        "percentage": 25,
        "isRenewable": true,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 1.1,
        "percentage": 52,
        "notes": "FSC certified sustainable forestry"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.5,
        "percentage": 24,
        "notes": "Die-cut slit perforation line"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.28,
        "percentage": 13,
        "notes": "Flat compressed roll expands to 1.7x its length during dispensing"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.14,
        "percentage": 7,
        "notes": "Interlocking cells eliminate packing tape"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.08,
        "percentage": 4,
        "notes": "100% curbside recyclable and backyard compostable"
      }
    ],
    "packagingType": "Cardboard dispenser box with zero plastic core plugs",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fsc",
        "name": "FSC\u00ae 100% Certified Paper",
        "issuer": "FSC",
        "verified": true,
        "description": "Responsibly harvested wood fiber packaging."
      },
      {
        "id": "recyclable-curbside",
        "name": "Curbside Recyclable Standard",
        "issuer": "How2Recycle",
        "verified": true,
        "description": "Widely accepted in domestic paper blue bins."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Replaces Plastic Bubble Wrap Completely",
        "status": "Verified",
        "analysis": "ASTM D4169 drop tests confirm equal or superior shock absorption for glass and ceramics."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Replaces non-recyclable plastic bubble wrap",
      "Self-interlocking design eliminates packing tape",
      "100% curbside recyclable & compostable"
    ],
    "areasToImprove": [
      "Paper roll is heavier to lift during initial machine loading"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Ranpak Packaging Environmental Performance Whitepaper",
    "dataConfidence": "High"
  },
  {
    "id": "tipa-compostable-resealable-bags",
    "name": "TIPA Fully Home Compostable Resealable Zipper Bags (50-Pack)",
    "brand": "TIPA Corp",
    "category": "Packaging",
    "subcategory": "Circular Packaging",
    "imageUrl": "",
    "price": 1199,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 94.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 88,
      "recyclability": 94,
      "packaging": 98,
      "repairability": 84,
      "certifications": 96
    },
    "scoreExplanation": "Pioneering bio-based polymer film engineered to mimic conventional plastic barrier properties, breaking down into water, CO\u2082, and biomass in home compost alongside fruit peels.",
    "carbonFootprintKg": 0.65,
    "conventionalCarbonKg": 4.2,
    "waterFootprintLiters": 30,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Israel / Germany",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "Bio-Based PLA & PHA Resins",
        "percentage": 70,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Certified Compostable Synthetic PBAT Co-Polymers",
        "percentage": 30,
        "isRenewable": false,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.32,
        "percentage": 49,
        "notes": "Non-GMO bio-based feedstocks"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.16,
        "percentage": 25,
        "notes": "Cast film extrusion line"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.09,
        "percentage": 14,
        "notes": "Flat pouch packaging"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 8,
        "notes": "Transparent food-contact safe barrier"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "TUV Home Compost certified in 180 days"
      }
    ],
    "packagingType": "100% Recycled cardboard dispenser box with soy inks",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "tuv-home-compost",
        "name": "OK Compost HOME",
        "issuer": "T\u00dcV Austria",
        "verified": true,
        "description": "Certified backyard composting standard."
      },
      {
        "id": "fda-food-safe",
        "name": "FDA Food Contact Compliant",
        "issuer": "FDA",
        "verified": true,
        "description": "Safe for dry and fresh food storage."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Composts Like An Orange Peel",
        "status": "Verified",
        "analysis": "Ecotoxicity and earthworm tests prove complete conversion to fertile humus."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Transparent high-barrier optical clarity",
      "Integrates compostable zipper mechanism",
      "Composts at home alongside food waste"
    ],
    "areasToImprove": [
      "Shelf-life before initial filling is 12 months in dry storage"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "TIPA Compostable Packaging Life Cycle Study",
    "dataConfidence": "High"
  },
  {
    "id": "boox-reusable-shipping-box-10",
    "name": "Boox Engineered Reusable Shipping Box System (Pack of 10)",
    "brand": "Boox",
    "category": "Packaging",
    "subcategory": "Reusable Logistics",
    "imageUrl": "",
    "price": 4500,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 96.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 98,
      "materials": 94,
      "durability": 100,
      "recyclability": 94,
      "packaging": 96,
      "repairability": 92,
      "certifications": 94
    },
    "scoreExplanation": "Engineered for 50+ logistics shipping cycles. Consumers fold the empty Boox flat and drop it in any postal collection bin with no label required, cutting packaging waste by 75%.",
    "carbonFootprintKg": 0.85,
    "conventionalCarbonKg": 32.0,
    "waterFootprintLiters": 95,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 6.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Post-Consumer Recycled Polypropylene Corrugate",
        "percentage": 92,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Reusable Hook-and-Loop Fasteners",
        "percentage": 8,
        "isRecycled": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.45,
        "percentage": 53,
        "notes": "Recycled domestic plastic bottle caps and crates"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.22,
        "percentage": 26,
        "notes": "Die-cut folding geometry"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.1,
        "percentage": 12,
        "notes": "Folds 90% flat on return leg"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 6,
        "notes": "Amortized across 50 shipping round-trips"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 3,
        "notes": "100% mechanically reground into next generation Boox"
      }
    ],
    "packagingType": "Shipped flat in bundled reusable strap",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "b-corp",
        "name": "Certified B Corp Pending",
        "issuer": "B Lab",
        "verified": true,
        "description": "Circular business logistics."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Engineered for 50+ Return Trips",
        "status": "Verified",
        "analysis": "ISTA drop and vibration testing verifies 50-cycle structural integrity without corner crushing."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Eliminates single-use cardboard boxes",
      "Customers return by dropping flat in mailboxes",
      "Saves 75% carbon over 50 single-use cartons"
    ],
    "areasToImprove": [
      "Requires consumer participation to return flat box via postal system"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Boox Circular Logistics Life Cycle Assessment",
    "dataConfidence": "High"
  },
  {
    "id": "returnity-reusable-fabric-bag",
    "name": "Returnity Waterproof Woven RPET Delivery Bag (40+ Trips)",
    "brand": "Returnity Innovations",
    "category": "Packaging",
    "subcategory": "Reusable Logistics",
    "imageUrl": "",
    "price": 1850,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 92,
      "durability": 98,
      "recyclability": 90,
      "packaging": 94,
      "repairability": 88,
      "certifications": 92
    },
    "scoreExplanation": "High-durability waterproof fabric delivery bag manufactured from 100% recycled plastic water bottles. Tested for 40+ courier deliveries, eliminating single-use poly mailers.",
    "carbonFootprintKg": 0.72,
    "conventionalCarbonKg": 18.5,
    "waterFootprintLiters": 80,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 4.0,
    "manufacturingCountry": "USA / Vietnam",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "100% Recycled PET Woven Canvas",
        "percentage": 88,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Tamper-Evident Zipper & Clear Pocket",
        "percentage": 12,
        "isRecycled": false,
        "color": "#06b6d4"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.38,
        "percentage": 53,
        "notes": "Mechanical recycling of discarded beverage bottles"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.18,
        "percentage": 25,
        "notes": "Heavy gauge water-resistant stitching"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.08,
        "percentage": 11,
        "notes": "Roll-up compact return transit"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.05,
        "percentage": 7,
        "notes": "Amortized across 40 shipping journeys"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.03,
        "percentage": 4,
        "notes": "Recycled via textile scrap partners"
      }
    ],
    "packagingType": "Shipped self-contained with reusable cable ties",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "grs",
        "name": "Global Recycled Standard (GRS)",
        "issuer": "Textile Exchange",
        "verified": true,
        "description": "Certified post-consumer recycled polyester content."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Cuts 80% Emissions vs 40 Poly Mailers",
        "status": "Verified",
        "analysis": "LCA shows breakeven after 4 deliveries; delivers 80% net carbon savings over 40 uses."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Waterproof 600D recycled fabric",
      "Breaks even after only 4 courier cycles",
      "Tamper-evident security zipper"
    ],
    "areasToImprove": [
      "E-commerce sender must operate a closed-loop customer return system"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Returnity Innovations LCA & System Dynamics Report",
    "dataConfidence": "High"
  },
  {
    "id": "sealed-air-paper-shippers-50",
    "name": "Sealed Air Padded Paper Mailers with Fluff Padding (50-Pack)",
    "brand": "Sealed Air (Jiffy)",
    "category": "Packaging",
    "subcategory": "Protective Packaging",
    "imageUrl": "",
    "price": 1999,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 91.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 88,
      "recyclability": 96,
      "packaging": 94,
      "repairability": 82,
      "certifications": 92
    },
    "scoreExplanation": "Padded mailers cushioned with 100% recycled paper fiber fluff instead of plastic bubble wrap. Certified curbside recyclable in ordinary household paper waste bins.",
    "carbonFootprintKg": 1.4,
    "conventionalCarbonKg": 7.2,
    "waterFootprintLiters": 55,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "USA / UK",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "100% Recycled Paper Fluff Cushioning",
        "percentage": 60,
        "isRecycled": true,
        "color": "#10b981"
      },
      {
        "name": "Heavyweight Kraft Outer Paper",
        "percentage": 35,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Water-Soluble Starch Adhesive",
        "percentage": 5,
        "isRenewable": true,
        "color": "#f59e0b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.75,
        "percentage": 54,
        "notes": "Repurposed newsprint and corrugated scrap"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.35,
        "percentage": 25,
        "notes": "Macerated paper expansion line"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.16,
        "percentage": 11,
        "notes": "Bulk bundle shipping"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.08,
        "percentage": 6,
        "notes": "Excellent edge and shock protection"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.06,
        "percentage": 4,
        "notes": "100% recyclable with curbside mixed paper"
      }
    ],
    "packagingType": "Bundled in recycled kraft paper wrap with paper tape",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "how2recycle",
        "name": "How2Recycle Curbside Recyclable",
        "issuer": "GreenBlue",
        "verified": true,
        "description": "Certified widely recyclable in curbside paper bins."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Curbside Recyclable Paper Stream",
        "status": "Verified",
        "analysis": "Dissolves cleanly in standard paper repulping vats without clogging screens."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "No plastic bubble liner",
      "100% curbside recyclable as paper",
      "Biodegradable paper macerated fluff"
    ],
    "areasToImprove": [
      "Heavier tare weight than ultra-thin plastic poly mailers"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Sealed Air Product Sustainability Factsheet",
    "dataConfidence": "High"
  },
  {
    "id": "better-packaging-pollastic-mailers",
    "name": "Better Packaging POLLAST!C Ocean-Bound Plastic Mailers (100-Pack)",
    "brand": "Better Packaging Co.",
    "category": "Packaging",
    "subcategory": "Circular Packaging",
    "imageUrl": "",
    "price": 2899,
    "currency": "\u20b9",
    "isFeatured": true,
    "greenScore": 92.5,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 90,
      "recyclability": 88,
      "packaging": 94,
      "repairability": 84,
      "certifications": 96
    },
    "scoreExplanation": "Made from 100% ocean-bound plastic collected by coastal communities in Southeast Asia lacking waste infrastructure, preventing ocean pollution while funding fair local incomes.",
    "carbonFootprintKg": 1.1,
    "conventionalCarbonKg": 6.8,
    "waterFootprintLiters": 30,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "Southeast Asia / New Zealand",
    "renewableEnergyPercent": 85,
    "materialsBreakdown": [
      {
        "name": "100% Certified Ocean-Bound Recycled Plastic (OBP)",
        "percentage": 100,
        "isRecycled": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.52,
        "percentage": 47,
        "notes": "Recovered within 50km of coastline in Indonesia & Philippines"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.3,
        "percentage": 27,
        "notes": "Mechanical washing and extrusion into recycled mailers"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.15,
        "percentage": 14,
        "notes": "Lightweight water-resistant mailers"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.08,
        "percentage": 7,
        "notes": "Tear-proof waterproof parcel shipping"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 5,
        "notes": "Soft plastic recyclable (#4 LDPE)"
      }
    ],
    "packagingType": "Shipped in 100% recycled corrugated cartons with paper strapping",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "obp-certified",
        "name": "Ocean Bound Plastic (OBP) Certified",
        "issuer": "Zero Plastic Oceans",
        "verified": true,
        "description": "Independent verification of coastal collection origin."
      },
      {
        "id": "b-corp",
        "name": "Certified B Corporation",
        "issuer": "B Lab",
        "verified": true,
        "description": "Leader in positive environmental impact."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "100% Ocean-Bound Plastic",
        "status": "Verified",
        "analysis": "Control Union audited supply chain traces feedstock from collection beaches to pelletizer."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Directly cleans vulnerable coastlines and islands",
      "Provides living wages to informal waste collectors",
      "Reduces carbon by 75% vs virgin poly mailers"
    ],
    "areasToImprove": [
      "Recyclable via soft plastics collection points rather than standard curbside paper bins"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Better Packaging Co. Environmental Impact & OBP Audit",
    "dataConfidence": "High"
  },
  {
    "id": "uline-biodegradable-packing-peanuts",
    "name": "Uline 100% Cornstarch Biodegradable Packing Peanuts (5 cu ft)",
    "brand": "Uline Industrial",
    "category": "Packaging",
    "subcategory": "Protective Packaging",
    "imageUrl": "",
    "price": 2100,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 93.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 94,
      "materials": 96,
      "durability": 86,
      "recyclability": 94,
      "packaging": 94,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "Made from 100% plant-based non-GMO cornstarch. Dissolves completely and instantly in warm tap water in seconds, eliminating toxic styrofoam peanuts that persist for centuries.",
    "carbonFootprintKg": 0.95,
    "conventionalCarbonKg": 11.5,
    "waterFootprintLiters": 40,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 1.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 75,
    "materialsBreakdown": [
      {
        "name": "100% Non-GMO Cornstarch & Plant Resins",
        "percentage": 100,
        "isRenewable": true,
        "color": "#10b981"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.45,
        "percentage": 47,
        "notes": "Annual renewable crop starch replaces expanded polystyrene (EPS)"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.25,
        "percentage": 26,
        "notes": "Steam puffing process using clean drinking water"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.14,
        "percentage": 15,
        "notes": "Bulk bag packaging"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 6,
        "notes": "Static-free cushioning protects sensitive electronics"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.05,
        "percentage": 6,
        "notes": "Dissolves in household sink or composts in garden soil"
      }
    ],
    "packagingType": "Shipped in bulk breathable woven poly sack with paper ties",
    "packagingPlasticFree": false,
    "certifications": [
      {
        "id": "astm-d6400",
        "name": "ASTM D6400 Compostable",
        "issuer": "BPI",
        "verified": true,
        "description": "Rapid water-soluble and compostable standard."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Dissolves in Water in Seconds",
        "status": "Verified",
        "analysis": "Cornstarch matrix melts instantly under warm tap water without clogging sink drains."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Dissolves completely in water in seconds",
      "Zero polystyrene foam landfill waste",
      "Static-free safe for sensitive electronics"
    ],
    "areasToImprove": [
      "Must be kept in airtight dry storage to prevent humidity softening"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "Uline Industrial Eco-Packaging Technical Datasheet",
    "dataConfidence": "High"
  },
  {
    "id": "scotch-recyclable-paper-tape",
    "name": "Scotch Water-Activated Reinforced Kraft Packaging Tape (2 Rolls)",
    "brand": "Scotch 3M",
    "category": "Packaging",
    "subcategory": "Sealing & Adhesives",
    "imageUrl": "",
    "price": 1150,
    "currency": "\u20b9",
    "isFeatured": false,
    "greenScore": 92.0,
    "grade": "A+",
    "subscores": {
      "carbonImpact": 92,
      "materials": 94,
      "durability": 96,
      "recyclability": 96,
      "packaging": 94,
      "repairability": 84,
      "certifications": 92
    },
    "scoreExplanation": "High-strength water-activated kraft paper tape with natural cornstarch adhesive that bonds permanently to corrugated boxes, allowing boxes to be recycled without peeling tape off.",
    "carbonFootprintKg": 0.78,
    "conventionalCarbonKg": 4.8,
    "waterFootprintLiters": 35,
    "energyUsage": "Low",
    "wasteGeneration": "Low",
    "expectedLifespanYears": 3.0,
    "manufacturingCountry": "USA",
    "renewableEnergyPercent": 80,
    "materialsBreakdown": [
      {
        "name": "FSC Certified Heavyweight Kraft Paper",
        "percentage": 78,
        "isRenewable": true,
        "color": "#10b981"
      },
      {
        "name": "Natural Cornstarch Water-Activated Adhesive",
        "percentage": 16,
        "isRenewable": true,
        "color": "#06b6d4"
      },
      {
        "name": "Fiberglass Reinforcing Strands",
        "percentage": 6,
        "isRenewable": false,
        "color": "#64748b"
      }
    ],
    "lifecycleStages": [
      {
        "stage": "Raw Materials",
        "impactKgCO2": 0.38,
        "percentage": 49,
        "notes": "Unbleached kraft paper pulp and natural starch"
      },
      {
        "stage": "Manufacturing",
        "impactKgCO2": 0.2,
        "percentage": 26,
        "notes": "Solvent-free coating process"
      },
      {
        "stage": "Transportation",
        "impactKgCO2": 0.1,
        "percentage": 13,
        "notes": "Heavy core rolls"
      },
      {
        "stage": "Usage",
        "impactKgCO2": 0.06,
        "percentage": 8,
        "notes": "1 strip seals securely compared to 3-4 strips of plastic tape"
      },
      {
        "stage": "End of Life",
        "impactKgCO2": 0.04,
        "percentage": 4,
        "notes": "Recycles cleanly with corrugated cardboard"
      }
    ],
    "packagingType": "100% Recycled cardboard box with zero plastic shrink wrap",
    "packagingPlasticFree": true,
    "certifications": [
      {
        "id": "fsc",
        "name": "FSC Certified Kraft",
        "issuer": "FSC",
        "verified": true,
        "description": "Sustainably harvested wood fiber packaging."
      }
    ],
    "greenwashingClaims": [
      {
        "id": "c1",
        "claim": "Recyclable with Cardboard Box",
        "status": "Verified",
        "analysis": "Paper mills filter out reinforcement fibers without contaminating paper recycling pulpers."
      }
    ],
    "greenerAlternatives": [],
    "keyStrengths": [
      "Recycles directly with cardboard boxes (no peeling required)",
      "Tamper-evident fiber-tear box bond",
      "1 strip replaces 3 strips of plastic tape"
    ],
    "areasToImprove": [
      "Requires water sponge or tape dispenser to activate adhesive"
    ],
    "sustainabilityStatus": "Verified",
    "dataSource": "3M Packaging Systems Sustainable Design Profile",
    "dataConfidence": "High"
  }
];

export const POPULAR_SEARCH_TERMS = [
  'iPhone',
  'Samsung',
  'Pixel',
  'Framework Laptop',
  'Water Bottle',
  'Shampoo Bar',
  'Toothpaste',
  'Washing Machine',
  'EV Scooter',
  'Commuter Bike',
  'Compostable',
  'Cast Iron',
  'Oat Milk',
  'Organic Cotton',
  'Bamboo'
];
