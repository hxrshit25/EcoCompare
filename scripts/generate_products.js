const fs = require('fs');
const path = require('path');

// Helper to compute grade from greenScore
function computeGrade(score) {
  if (score >= 90) return 'A+';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 55) return 'C';
  if (score >= 40) return 'D';
  return 'E';
}

const originalProductsCode = fs.readFileSync(path.join(__dirname, '../src/data/products.ts'), 'utf8');

// Find the last item before the closing `];`
const lastBracket = originalProductsCode.lastIndexOf('];');
let originalItemsCode = originalProductsCode.substring(0, lastBracket).trim();
if (!originalItemsCode.endsWith(',')) {
  originalItemsCode += ',';
}

// Now define catalog arrays
const newProducts = [];

// ==========================================
// 1. ELECTRONICS (Target: 75+ products)
// ==========================================
const electronics = [
  // Smartphones
  {
    id: 'apple-iphone-15-pro',
    name: 'Apple iPhone 15 Pro (128GB, Natural Titanium)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 129900,
    greenScore: 82.5,
    carbonFootprintKg: 66.0,
    conventionalCarbonKg: 85.0,
    waterFootprintLiters: 1650,
    lifespanYears: 5.5,
    subscores: { carbonImpact: 78, materials: 85, durability: 88, recyclability: 82, packaging: 92, repairability: 70, certifications: 82 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Substructure', percentage: 38, isRecycled: true },
      { name: 'Grade 5 Titanium Band', percentage: 22, isRecycled: false },
      { name: '100% Recycled Rare Earth Magnets', percentage: 15, isRecycled: true },
      { name: 'Ceramic Shield Glass', percentage: 25, isRecycled: false }
    ],
    packagingType: '100% Fiber-based plastic-free retail box',
    certifications: [{ id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'Global Electronics Council', verified: true, description: 'Eco design standard' }],
    strengths: ['100% recycled cobalt in battery', '100% recycled gold wire in mainboard', 'Eliminated leather accessories'],
    improvements: ['Proprietary component pairing restricts third-party repairs']
  },
  {
    id: 'apple-iphone-14',
    name: 'Apple iPhone 14 (128GB, Midnight)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 58999,
    greenScore: 78.0,
    carbonFootprintKg: 61.0,
    conventionalCarbonKg: 82.0,
    waterFootprintLiters: 1520,
    lifespanYears: 5.0,
    subscores: { carbonImpact: 75, materials: 80, durability: 84, recyclability: 78, packaging: 90, repairability: 68, certifications: 80 },
    materialsBreakdown: [
      { name: 'Recycled Aluminium Frame', percentage: 40, isRecycled: true },
      { name: 'Bio-based plastics & glass', percentage: 35, isRecycled: false },
      { name: 'Recycled Tungsten & Gold', percentage: 10, isRecycled: true },
      { name: 'Display glass', percentage: 15, isRecycled: false }
    ],
    packagingType: 'FSC-certified paper packaging',
    certifications: [{ id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'GEC', verified: true, description: 'Electronics sustainability' }],
    strengths: ['Long software support cycle', 'Certified clean electricity suppliers'],
    improvements: ['Display adhesive difficult to service at home']
  },
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G (256GB, Titanium Gray)',
    brand: 'Samsung',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 129999,
    greenScore: 81.0,
    carbonFootprintKg: 68.0,
    conventionalCarbonKg: 89.0,
    waterFootprintLiters: 1720,
    lifespanYears: 5.5,
    subscores: { carbonImpact: 76, materials: 84, durability: 87, recyclability: 80, packaging: 88, repairability: 72, certifications: 80 },
    materialsBreakdown: [
      { name: 'Recycled Cobalt Battery & Steel', percentage: 32, isRecycled: true },
      { name: 'Recycled Ocean-Bound Plastics', percentage: 18, isRecycled: true },
      { name: 'Titanium chassis', percentage: 25, isRecycled: false },
      { name: 'Corning Gorilla Armor Glass', percentage: 25, isRecycled: false }
    ],
    packagingType: '100% Recycled Paper Packaging Box',
    certifications: [{ id: 'ul-ecologo', name: 'UL ECOLOGO Gold', issuer: 'UL Solutions', verified: true, description: 'Multi-attribute lifecycle evaluation' }],
    strengths: ['7 generations of OS upgrades', 'Recycled neodymium speaker modules'],
    improvements: ['High embodied energy in Snapdragon processor fabrication']
  },
  {
    id: 'samsung-galaxy-a54-5g',
    name: 'Samsung Galaxy A54 5G (128GB, Awesome Lime)',
    brand: 'Samsung',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 33499,
    greenScore: 76.5,
    carbonFootprintKg: 52.0,
    conventionalCarbonKg: 74.0,
    waterFootprintLiters: 1380,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 76, materials: 75, durability: 80, recyclability: 74, packaging: 85, repairability: 68, certifications: 78 },
    materialsBreakdown: [
      { name: 'Post-consumer recycled plastic buttons', percentage: 22, isRecycled: true },
      { name: 'Recycled glass back panel', percentage: 28, isRecycled: true },
      { name: 'Aluminium and copper traces', percentage: 50, isRecycled: false }
    ],
    packagingType: 'Recycled Kraft cardboard box without plastic wrap',
    certifications: [{ id: 'ul-ecologo', name: 'UL ECOLOGO', issuer: 'UL', verified: true, description: 'Eco-certified' }],
    strengths: ['4 years OS + 5 years security patches', 'IP67 dust and water resistance'],
    improvements: ['No wall adapter included, but cable still packaged in PE wrap']
  },
  {
    id: 'samsung-galaxy-m34-5g',
    name: 'Samsung Galaxy M34 5G (128GB, Prism Silver)',
    brand: 'Samsung',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 15999,
    greenScore: 73.0,
    carbonFootprintKg: 46.0,
    conventionalCarbonKg: 68.0,
    waterFootprintLiters: 1250,
    lifespanYears: 4.0,
    subscores: { carbonImpact: 74, materials: 70, durability: 76, recyclability: 72, packaging: 80, repairability: 68, certifications: 72 },
    materialsBreakdown: [
      { name: 'Polycarbonate with 15% PCR content', percentage: 45, isRecycled: true },
      { name: 'Reinforced glass', percentage: 25, isRecycled: false },
      { name: 'Silicon and metals', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Compact recycled box',
    certifications: [{ id: 'bis-isi', name: 'BIS ISI Certified', issuer: 'Bureau of Indian Standards', verified: true, description: 'Indian quality certification' }],
    strengths: ['Massive 6000mAh battery extends recharge lifespan', '4 Android version updates'],
    improvements: ['Battery glued with high-adhesion pull tabs']
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12 5G (256GB, Silky Black)',
    brand: 'OnePlus',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 64999,
    greenScore: 74.0,
    carbonFootprintKg: 58.0,
    conventionalCarbonKg: 78.0,
    waterFootprintLiters: 1480,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 72, materials: 74, durability: 82, recyclability: 73, packaging: 76, repairability: 65, certifications: 74 },
    materialsBreakdown: [
      { name: 'Aluminium frame with 20% recycled content', percentage: 35, isRecycled: true },
      { name: 'Gorilla Glass Victus 2', percentage: 30, isRecycled: false },
      { name: 'Cobalt & Lithium cells', percentage: 25, isRecycled: false },
      { name: 'Internal alloys', percentage: 10, isRecycled: false }
    ],
    packagingType: 'Standard red gift box (soy-based ink)',
    certifications: [{ id: 'rohs', name: 'RoHS Compliant', issuer: 'EU RoHS Directive', verified: true, description: 'Hazardous substance free' }],
    strengths: ['BHE Battery Health Engine preserves battery capacity for 1600 cycles', 'IP65 rating'],
    improvements: ['Proprietary SuperVOOC fast charger increases packaging size']
  },
  {
    id: 'oneplus-nord-ce4',
    name: 'OnePlus Nord CE4 5G (128GB, Celadon Marble)',
    brand: 'OnePlus',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 24999,
    greenScore: 72.5,
    carbonFootprintKg: 47.0,
    conventionalCarbonKg: 65.0,
    waterFootprintLiters: 1290,
    lifespanYears: 3.5,
    subscores: { carbonImpact: 73, materials: 71, durability: 76, recyclability: 70, packaging: 75, repairability: 66, certifications: 70 },
    materialsBreakdown: [
      { name: 'Polycarbonate composite', percentage: 50, isRecycled: false },
      { name: 'Recycled tin in solder', percentage: 12, isRecycled: true },
      { name: 'Glass & Copper', percentage: 38, isRecycled: false }
    ],
    packagingType: 'Minimal paperboard box',
    certifications: [{ id: 'bis-isi', name: 'BIS Approved', issuer: 'BIS India', verified: true, description: 'Safety standard' }],
    strengths: ['100W SUPERVOOC charging with 4-year battery lifespan guarantee', 'Clean software'],
    improvements: ['Plastics not yet fully post-consumer recycled']
  },
  {
    id: 'nothing-phone-2a',
    name: 'Nothing Phone (2a) 5G (128GB, Milk White)',
    brand: 'Nothing',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 23999,
    greenScore: 84.0,
    carbonFootprintKg: 52.0,
    conventionalCarbonKg: 78.0,
    waterFootprintLiters: 1320,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 82, materials: 86, durability: 83, recyclability: 84, packaging: 92, repairability: 75, certifications: 82 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Midframe', percentage: 32, isRecycled: true },
      { name: '100% Recycled Tin in 6 Circuit Boards', percentage: 18, isRecycled: true },
      { name: '50% Bio-based & PCR Plastic Parts', percentage: 24, isRecycled: true },
      { name: 'Recycled Steel stamping scrap', percentage: 12, isRecycled: true },
      { name: 'Gorilla Glass 5', percentage: 14, isRecycled: false }
    ],
    packagingType: 'Zero-plastic biodegradable unbleached pulp box',
    certifications: [{ id: 'carbon-trust', name: 'Carbon Trust Audited', issuer: 'Carbon Trust UK', verified: true, description: 'Audited carbon footprint of 52kg' }],
    strengths: ['Lowest carbon footprint in its class (52 kg CO₂e)', 'Made with 100% renewable electricity at final assembly', 'Plastic-free packaging'],
    improvements: ['Rear transparent adhesive makes camera module repair trickier']
  },
  {
    id: 'nothing-phone-2',
    name: 'Nothing Phone (2) Flagship 5G (256GB, Dark Grey)',
    brand: 'Nothing',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 36999,
    greenScore: 83.5,
    carbonFootprintKg: 53.4,
    conventionalCarbonKg: 79.0,
    waterFootprintLiters: 1360,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 81, materials: 85, durability: 84, recyclability: 82, packaging: 92, repairability: 74, certifications: 82 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Frame', percentage: 35, isRecycled: true },
      { name: '100% Recycled Tin & Copper foil', percentage: 16, isRecycled: true },
      { name: 'PCR plastics in 9 internal components', percentage: 22, isRecycled: true },
      { name: 'Curved Gorilla Glass', percentage: 27, isRecycled: false }
    ],
    packagingType: 'FSC-mix plastic-free tear-strip packaging',
    certifications: [{ id: 'carbon-trust', name: 'Carbon Trust Certified', issuer: 'Carbon Trust', verified: true, description: 'Certified cradle-to-grave footprint' }],
    strengths: ['SGS verified environmental profile', '3 major OS updates and 4 years bi-monthly security patches'],
    improvements: ['Glyph LED lighting adds minor component complexity']
  },
  {
    id: 'xiaomi-14',
    name: 'Xiaomi 14 5G Leica Flagship (512GB, Jade Green)',
    brand: 'Xiaomi',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 69999,
    greenScore: 73.5,
    carbonFootprintKg: 62.0,
    conventionalCarbonKg: 82.0,
    waterFootprintLiters: 1540,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 72, materials: 74, durability: 80, recyclability: 73, packaging: 75, repairability: 66, certifications: 72 },
    materialsBreakdown: [
      { name: 'CNC Carved Aluminium with 15% recycled alloy', percentage: 34, isRecycled: true },
      { name: 'Bio-ceramic leather or glass', percentage: 26, isRecycled: false },
      { name: 'Silicon-carbon battery cells', percentage: 24, isRecycled: false },
      { name: 'Optics and copper', percentage: 16, isRecycled: false }
    ],
    packagingType: 'Standard white rigid board',
    certifications: [{ id: 'rohs', name: 'RoHS Compliant', issuer: 'SGS', verified: true, description: 'Lead and cadmium free' }],
    strengths: ['High energy density battery reduces physical raw mass', 'IP68 water sealing'],
    improvements: ['High transport carbon from international shipping']
  },
  {
    id: 'redmi-note-13-pro-plus',
    name: 'Redmi Note 13 Pro+ 5G (256GB, Fusion Purple)',
    brand: 'Redmi',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 31999,
    greenScore: 71.0,
    carbonFootprintKg: 54.0,
    conventionalCarbonKg: 72.0,
    waterFootprintLiters: 1390,
    lifespanYears: 3.5,
    subscores: { carbonImpact: 70, materials: 71, durability: 77, recyclability: 71, packaging: 74, repairability: 64, certifications: 68 },
    materialsBreakdown: [
      { name: 'Vegan bio-leather back or glass', percentage: 30, isRecycled: false },
      { name: 'Polycarbonate inner chassis', percentage: 40, isRecycled: false },
      { name: 'Circuit boards and batteries', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Cardboard box with soy ink',
    certifications: [{ id: 'bis-isi', name: 'BIS Registered', issuer: 'BIS India', verified: true, description: 'National standard' }],
    strengths: ['IP68 certification increases resistance to liquid damage', 'Local Indian assembly in Noida'],
    improvements: ['Fast-charging brick generates extra electronic scrap over time']
  },
  {
    id: 'motorola-edge-50-pro',
    name: 'Motorola Edge 50 Pro 5G (256GB, Moonlight Pearl)',
    brand: 'Motorola',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 31999,
    greenScore: 81.0,
    carbonFootprintKg: 49.0,
    conventionalCarbonKg: 75.0,
    waterFootprintLiters: 1280,
    lifespanYears: 4.0,
    subscores: { carbonImpact: 80, materials: 82, durability: 83, recyclability: 81, packaging: 94, repairability: 70, certifications: 78 },
    materialsBreakdown: [
      { name: 'Handmade Italian Acetate or Vegan Leather', percentage: 32, isRecycled: false },
      { name: '100% Recycled Aluminium Frame', percentage: 30, isRecycled: true },
      { name: 'Recycled solder tin', percentage: 12, isRecycled: true },
      { name: 'Glass & Electronics', percentage: 26, isRecycled: false }
    ],
    packagingType: '100% Plastic-free eco box printed with soy ink & fragranced with bio-scent',
    certifications: [{ id: 'fsc', name: 'FSC Certified Packaging', issuer: 'Forest Stewardship Council', verified: true, description: 'Sustainably sourced forestry' }],
    strengths: ['100% plastic-free packaging box with natural soy ink', 'Pantone verified display color accuracy with lower blue emission'],
    improvements: ['Curved OLED edge glass more vulnerable to accidental drops']
  },
  {
    id: 'google-pixel-8a',
    name: 'Google Pixel 8a 5G (128GB, Bay Blue)',
    brand: 'Google',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 49999,
    greenScore: 86.0,
    carbonFootprintKg: 47.0,
    conventionalCarbonKg: 76.0,
    waterFootprintLiters: 1210,
    lifespanYears: 7.0,
    subscores: { carbonImpact: 84, materials: 88, durability: 86, recyclability: 85, packaging: 95, repairability: 78, certifications: 88 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium in Enclosure', percentage: 40, isRecycled: true },
      { name: '76% Recycled Plastic in Back Cover', percentage: 24, isRecycled: true },
      { name: '100% Recycled Tin in Solder', percentage: 10, isRecycled: true },
      { name: 'Corning Gorilla Glass 3', percentage: 26, isRecycled: false }
    ],
    packagingType: '100% Plastic-free unbleached paperboard box',
    certifications: [
      { id: 'ul-ecologo', name: 'UL ECOLOGO Gold', issuer: 'UL', verified: true, description: 'Top tier circular electronic design' },
      { id: 'energy-star', name: 'ENERGY STAR', issuer: 'EPA', verified: true, description: 'Power efficiency' }
    ],
    strengths: ['Industry-leading 7 years of full Android OS and security upgrades', 'Back cover made with 76% recycled plastic', 'Plastic-free compact retail packaging'],
    improvements: ['Tensor G3 chip thermal dissipation can run warm during gaming']
  },
  {
    id: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro (128GB, Obsidian)',
    brand: 'Google',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 93999,
    greenScore: 85.0,
    carbonFootprintKg: 61.0,
    conventionalCarbonKg: 88.0,
    waterFootprintLiters: 1510,
    lifespanYears: 7.0,
    subscores: { carbonImpact: 83, materials: 87, durability: 86, recyclability: 84, packaging: 95, repairability: 76, certifications: 88 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Frame', percentage: 42, isRecycled: true },
      { name: 'Recycled Tin & Magnet components', percentage: 16, isRecycled: true },
      { name: 'Gorilla Glass Victus 2', percentage: 42, isRecycled: false }
    ],
    packagingType: '100% Plastic-free certified packaging box',
    certifications: [{ id: 'ul-ecologo', name: 'UL ECOLOGO Gold', issuer: 'UL', verified: true, description: 'Highest environmental rating' }],
    strengths: ['7-year OS maintenance lifespan eliminates early replacement', 'Official iFixit spare parts availability'],
    improvements: ['Camera visor glass complex to separate in recycling stream']
  },
  {
    id: 'realme-12-pro-plus',
    name: 'Realme 12 Pro+ 5G (256GB, Submarine Blue)',
    brand: 'Realme',
    category: 'Electronics',
    subcategory: 'Smartphones',
    price: 29999,
    greenScore: 71.5,
    carbonFootprintKg: 52.0,
    conventionalCarbonKg: 73.0,
    waterFootprintLiters: 1360,
    lifespanYears: 3.5,
    subscores: { carbonImpact: 71, materials: 72, durability: 78, recyclability: 70, packaging: 74, repairability: 63, certifications: 69 },
    materialsBreakdown: [
      { name: 'Bio-inspired vegan leather', percentage: 28, isRecycled: false },
      { name: 'Plastic & alloy frame', percentage: 42, isRecycled: false },
      { name: 'Display & circuits', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Yellow cardboard box',
    certifications: [{ id: 'bis-isi', name: 'BIS ISI Certified', issuer: 'BIS India', verified: true, description: 'Consumer safety' }],
    strengths: ['Periscope telephoto zoom in sub-30k segment', 'Long 5000mAh battery life'],
    improvements: ['Shorter software upgrade roadmap (2 OS upgrades)']
  },

  // Laptops
  {
    id: 'apple-macbook-air-m3',
    name: 'Apple MacBook Air 13-inch (M3, 8GB RAM, 256GB SSD, Starlight)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 104990,
    greenScore: 89.0,
    carbonFootprintKg: 135.0,
    conventionalCarbonKg: 285.0,
    waterFootprintLiters: 3200,
    lifespanYears: 7.0,
    subscores: { carbonImpact: 88, materials: 92, durability: 94, recyclability: 89, packaging: 96, repairability: 68, certifications: 92 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Enclosure', percentage: 50, isRecycled: true },
      { name: '100% Recycled Rare Earth Elements in magnets', percentage: 15, isRecycled: true },
      { name: '100% Recycled Cobalt in battery', percentage: 12, isRecycled: true },
      { name: '100% Recycled Tin solder', percentage: 8, isRecycled: true },
      { name: 'Retina Display glass', percentage: 15, isRecycled: false }
    ],
    packagingType: '100% Fiber-based plastic-free retail box',
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold Certified', issuer: 'GEC', verified: true, description: 'Top ranking in environmental performance' },
      { id: 'energy-star', name: 'ENERGY STAR 8.0', issuer: 'EPA', verified: true, description: 'Exceeds strict efficiency limits' }
    ],
    strengths: ['Over 50% total recycled materials by mass', 'Fanless zero-noise design has no dust clogging failure point', '18-hour battery longevity'],
    improvements: ['Soldered RAM and SSD cannot be upgraded after purchase']
  },
  {
    id: 'apple-macbook-pro-14-m3',
    name: 'Apple MacBook Pro 14-inch (M3 Pro, 18GB RAM, 512GB SSD, Space Black)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 199900,
    greenScore: 87.5,
    carbonFootprintKg: 162.0,
    conventionalCarbonKg: 340.0,
    waterFootprintLiters: 3600,
    lifespanYears: 7.5,
    subscores: { carbonImpact: 86, materials: 90, durability: 95, recyclability: 88, packaging: 95, repairability: 67, certifications: 92 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Unibody', percentage: 52, isRecycled: true },
      { name: '100% Recycled Rare Earths & Gold plating', percentage: 18, isRecycled: true },
      { name: 'Liquid Retina XDR Mini-LED display', percentage: 30, isRecycled: false }
    ],
    packagingType: '100% Fiber packaging',
    certifications: [{ id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'GEC', verified: true, description: 'Gold rating' }],
    strengths: ['Anodization seal reduces fingerprint oils and surface wear', 'M3 Pro architecture cuts energy draw by 50% vs x86 chips'],
    improvements: ['Chassis disassembly requires specialized pentalobe bits']
  },
  {
    id: 'lenovo-thinkpad-l14-gen4',
    name: 'Lenovo ThinkPad L14 Gen 4 (AMD Ryzen 5 Pro, 16GB, 512GB)',
    brand: 'Lenovo',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 68500,
    greenScore: 86.5,
    carbonFootprintKg: 155.0,
    conventionalCarbonKg: 290.0,
    waterFootprintLiters: 3100,
    lifespanYears: 6.5,
    subscores: { carbonImpact: 84, materials: 86, durability: 95, recyclability: 88, packaging: 92, repairability: 94, certifications: 90 },
    materialsBreakdown: [
      { name: '50% Post-Consumer Recycled Plastic in Battery Frame', percentage: 25, isRecycled: true },
      { name: '90% Recycled Magnesium-Aluminium keyboard frame', percentage: 35, isRecycled: true },
      { name: 'Internal motherboard & copper cooling', percentage: 40, isRecycled: false }
    ],
    packagingType: 'FSC-certified cardboard with 90% recycled cushioning',
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold with Climate+', issuer: 'GEC', verified: true, description: 'Climate-neutral verified lifecycle' },
      { id: 'tco-certified', name: 'TCO Certified Generation 9', issuer: 'TCO Development', verified: true, description: 'Socially responsible supply chain' }
    ],
    strengths: ['MIL-STD-810H durability standard withstands rugged drops', 'User-replaceable SO-DIMM RAM, M.2 SSD, and modular keyboard', 'CO2 Offset Services included'],
    improvements: ['Bezel plastic is non-recycled ABS']
  },
  {
    id: 'lenovo-yoga-slim-7x',
    name: 'Lenovo Yoga Slim 7x Copilot+ PC (Snapdragon X Elite, 16GB, 1TB)',
    brand: 'Lenovo',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 137990,
    greenScore: 85.0,
    carbonFootprintKg: 142.0,
    conventionalCarbonKg: 280.0,
    waterFootprintLiters: 2950,
    lifespanYears: 6.0,
    subscores: { carbonImpact: 85, materials: 84, durability: 90, recyclability: 86, packaging: 94, repairability: 74, certifications: 88 },
    materialsBreakdown: [
      { name: 'Recycled Aluminium Lid & Bottom', percentage: 48, isRecycled: true },
      { name: 'OLED Display Panel', percentage: 28, isRecycled: false },
      { name: 'Internal high-density battery', percentage: 24, isRecycled: false }
    ],
    packagingType: 'Plastic-free bamboo and sugarcane fiber packaging',
    certifications: [{ id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'GEC', verified: true, description: 'Top eco rating' }],
    strengths: ['ARM Snapdragon chip uses 60% less battery wattage', 'Plastic-free rapid-renew fiber retail box'],
    improvements: ['Soldered memory architecture']
  },
  {
    id: 'hp-pavilion-aero-13',
    name: 'HP Pavilion Aero 13 (AMD Ryzen 7, 16GB, 512GB SSD, Ultra-light 970g)',
    brand: 'HP',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 72999,
    greenScore: 84.5,
    carbonFootprintKg: 148.0,
    conventionalCarbonKg: 275.0,
    waterFootprintLiters: 2900,
    lifespanYears: 5.5,
    subscores: { carbonImpact: 83, materials: 86, durability: 85, recyclability: 85, packaging: 92, repairability: 80, certifications: 88 },
    materialsBreakdown: [
      { name: 'Ocean-bound plastic in speaker enclosure & bezel', percentage: 22, isRecycled: true },
      { name: 'Post-consumer recycled plastics in keycaps', percentage: 18, isRecycled: true },
      { name: 'Recycled magnesium-aluminium alloy', percentage: 40, isRecycled: true },
      { name: 'IPS Display glass', percentage: 20, isRecycled: false }
    ],
    packagingType: '100% Sustainably sourced and recyclable molded pulp packaging',
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'Global Electronics Council', verified: true, description: 'Eco-conscious design' },
      { id: 'energy-star', name: 'ENERGY STAR', issuer: 'EPA', verified: true, description: 'High energy conservation' }
    ],
    strengths: ['Sub-1kg mass reduces freight carbon emissions', 'Speaker housing uses ocean-bound plastics collected from coastal regions'],
    improvements: ['Thin magnesium alloy prone to superficial denting']
  },
  {
    id: 'hp-envy-x360-14',
    name: 'HP Envy x360 2-in-1 Laptop 14 (Intel Core Ultra 5, 16GB, 512GB)',
    brand: 'HP',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 84999,
    greenScore: 83.0,
    carbonFootprintKg: 156.0,
    conventionalCarbonKg: 285.0,
    waterFootprintLiters: 3100,
    lifespanYears: 5.5,
    subscores: { carbonImpact: 82, materials: 84, durability: 88, recyclability: 84, packaging: 90, repairability: 76, certifications: 86 },
    materialsBreakdown: [
      { name: 'Recycled Aluminium chassis', percentage: 45, isRecycled: true },
      { name: 'Ocean-bound plastic in bezel', percentage: 15, isRecycled: true },
      { name: 'Touchscreen digitizer & battery', percentage: 40, isRecycled: false }
    ],
    packagingType: 'Molded pulp box with zero EPS foam',
    certifications: [{ id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'GEC', verified: true, description: 'Sustainability certified' }],
    strengths: ['Recycled metals and ocean plastic integration', '360-degree convertible hinge tested for 25,000 cycles'],
    improvements: ['Hinge grease degrades if used in dusty environments']
  },
  {
    id: 'dell-inspiron-14-5430',
    name: 'Dell Inspiron 14 5430 (13th Gen Intel Core i5, 16GB, 512GB SSD)',
    brand: 'Dell',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 61490,
    greenScore: 82.0,
    carbonFootprintKg: 165.0,
    conventionalCarbonKg: 295.0,
    waterFootprintLiters: 3250,
    lifespanYears: 5.0,
    subscores: { carbonImpact: 80, materials: 83, durability: 86, recyclability: 84, packaging: 92, repairability: 82, certifications: 85 },
    materialsBreakdown: [
      { name: 'Post-Consumer Recycled Plastics', percentage: 30, isRecycled: true },
      { name: 'Low-emission aluminium lid', percentage: 35, isRecycled: true },
      { name: 'Circuits, battery & panel', percentage: 35, isRecycled: false }
    ],
    packagingType: '100% Recycled or renewable packaging tray',
    certifications: [
      { id: 'epeat-silver', name: 'EPEAT Silver', issuer: 'GEC', verified: true, description: 'Environmental performance' },
      { id: 'energy-star', name: 'ENERGY STAR', issuer: 'EPA', verified: true, description: 'Energy saving' }
    ],
    strengths: ['Dell AR Assistant app provides guided home part replacement', 'Recycled steel in chassis hinge bracket'],
    improvements: ['Cooling fan assembly collects dust quickly in Indian climates']
  },
  {
    id: 'dell-xps-13-plus',
    name: 'Dell XPS 13 (Intel Core Ultra 7, 16GB, 1TB SSD, Platinum)',
    brand: 'Dell',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 144990,
    greenScore: 84.0,
    carbonFootprintKg: 152.0,
    conventionalCarbonKg: 290.0,
    waterFootprintLiters: 3100,
    lifespanYears: 6.0,
    subscores: { carbonImpact: 82, materials: 85, durability: 92, recyclability: 85, packaging: 94, repairability: 70, certifications: 88 },
    materialsBreakdown: [
      { name: 'Low-carbon Aluminium smelted with hydro power', percentage: 55, isRecycled: true },
      { name: 'Corning Gorilla Glass 7', percentage: 20, isRecycled: false },
      { name: 'Motherboard and lithium cells', percentage: 25, isRecycled: false }
    ],
    packagingType: '100% Recycled ocean plastic tray + paper box',
    certifications: [{ id: 'epeat-gold', name: 'EPEAT Gold', issuer: 'GEC', verified: true, description: 'Gold level' }],
    strengths: ['Low-carbon hydro-smelted aluminium body', 'InfinityEdge high-efficiency display'],
    improvements: ['Zero-lattice capacitive function row difficult to repair']
  },
  {
    id: 'asus-zenbook-s13-oled',
    name: 'ASUS Zenbook S 13 OLED (Intel Core Ultra 7, 16GB, 1TB, Basalt Grey)',
    brand: 'ASUS',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 124990,
    greenScore: 88.5,
    carbonFootprintKg: 138.0,
    conventionalCarbonKg: 285.0,
    waterFootprintLiters: 2850,
    lifespanYears: 6.0,
    subscores: { carbonImpact: 87, materials: 91, durability: 89, recyclability: 88, packaging: 95, repairability: 76, certifications: 92 },
    materialsBreakdown: [
      { name: 'Plasma Ceramic Aluminium (Zero synthetic polymers)', percentage: 48, isRecycled: true },
      { name: 'Post-Industrial Recycled Magnesium alloy', percentage: 22, isRecycled: true },
      { name: 'Ocean-bound plastic in speaker chambers', percentage: 12, isRecycled: true },
      { name: 'Luminescent OLED panel', percentage: 18, isRecycled: false }
    ],
    packagingType: '100% FSC Mix certified box that doubles as a laptop stand',
    certifications: [
      { id: 'epeat-gold', name: 'EPEAT Gold Certified', issuer: 'GEC', verified: true, description: 'High circularity' },
      { id: 'carbon-neutral', name: 'Carbon Neutral Product', issuer: 'SGS Audited', verified: true, description: 'Net zero lifecycle' }
    ],
    strengths: ['Innovative Plasma Ceramic Aluminium requires zero toxic paints or chemical anodization', 'Packaging transforms into ergonomic laptop stand'],
    improvements: ['Extremely thin 1cm profile limits internal modularity']
  },
  {
    id: 'acer-swift-go-14',
    name: 'Acer Swift Go 14 OLED (Intel Core Ultra 5, 16GB, 512GB)',
    brand: 'Acer',
    category: 'Electronics',
    subcategory: 'Laptops',
    price: 69990,
    greenScore: 81.5,
    carbonFootprintKg: 168.0,
    conventionalCarbonKg: 295.0,
    waterFootprintLiters: 3200,
    lifespanYears: 5.0,
    subscores: { carbonImpact: 79, materials: 82, durability: 84, recyclability: 83, packaging: 88, repairability: 78, certifications: 82 },
    materialsBreakdown: [
      { name: 'OceanGlass touchpad (100% ocean-bound plastic)', percentage: 8, isRecycled: true },
      { name: 'Post-Consumer Recycled plastics in chassis', percentage: 28, isRecycled: true },
      { name: 'Aluminium top cover', percentage: 34, isRecycled: false },
      { name: 'Motherboard & battery', percentage: 30, isRecycled: false }
    ],
    packagingType: '100% Recyclable molded paper pulp',
    certifications: [{ id: 'epeat-silver', name: 'EPEAT Silver', issuer: 'GEC', verified: true, description: 'Eco-standard' }],
    strengths: ['OceanGlass eco touchpad provides smooth glass-like feel', 'Acer VeroSense energy saving utility'],
    improvements: ['Plastic body panels feel softer than machined alloy']
  },

  // Audio & Wearables
  {
    id: 'boat-airdopes-141',
    name: 'boAt Airdopes 141 True Wireless Earbuds (42H Playtime, Bold Black)',
    brand: 'boAt',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 1299,
    greenScore: 68.0,
    carbonFootprintKg: 14.5,
    conventionalCarbonKg: 19.0,
    waterFootprintLiters: 380,
    lifespanYears: 2.5,
    subscores: { carbonImpact: 69, materials: 64, durability: 70, recyclability: 65, packaging: 74, repairability: 50, certifications: 62 },
    materialsBreakdown: [
      { name: 'ABS Plastic case and buds', percentage: 65, isRecycled: false },
      { name: 'Lithium polymer micro-batteries', percentage: 20, isRecycled: false },
      { name: 'Neodymium magnetic drivers & copper', percentage: 15, isRecycled: false }
    ],
    packagingType: 'Printed cardboard box with paper tray',
    certifications: [{ id: 'bis-isi', name: 'BIS Approved', issuer: 'BIS', verified: true, description: 'Consumer safety standard' }],
    strengths: ['Made in India local assembly creates lower transport emissions', 'Affordable pricing democratizes digital access'],
    improvements: ['Glued earbud shells make battery replacement impossible at end-of-life']
  },
  {
    id: 'boat-rockerz-255-pro-plus',
    name: 'boAt Rockerz 255 Pro+ Bluetooth Neckband (40H Playtime, Teal Green)',
    brand: 'boAt',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 1499,
    greenScore: 71.0,
    carbonFootprintKg: 12.0,
    conventionalCarbonKg: 18.0,
    waterFootprintLiters: 320,
    lifespanYears: 3.0,
    subscores: { carbonImpact: 72, materials: 68, durability: 76, recyclability: 68, packaging: 75, repairability: 56, certifications: 66 },
    materialsBreakdown: [
      { name: 'Flexible silicone neckband', percentage: 40, isRecycled: false },
      { name: 'ABS plastic controls', percentage: 30, isRecycled: false },
      { name: 'Internal copper wire & magnetics', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Standard paperboard box',
    certifications: [{ id: 'bis-isi', name: 'BIS Registered', issuer: 'BIS', verified: true, description: 'Safety compliance' }],
    strengths: ['IPX7 water resistance prevents sweat corrosion failures', 'ASAP charge delivers 10h in 10 mins'],
    improvements: ['Silicone not easily separated from internal wires in e-waste centers']
  },
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones (Silver)',
    brand: 'Sony',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 29990,
    greenScore: 85.5,
    carbonFootprintKg: 28.0,
    conventionalCarbonKg: 52.0,
    waterFootprintLiters: 890,
    lifespanYears: 6.0,
    subscores: { carbonImpact: 84, materials: 88, durability: 90, recyclability: 86, packaging: 96, repairability: 74, certifications: 88 },
    materialsBreakdown: [
      { name: 'Recycled Automobile Plastic parts in headband', percentage: 45, isRecycled: true },
      { name: 'Synthetic vegan soft fit leather', percentage: 25, isRecycled: false },
      { name: 'Carbon fiber composite diaphragm', percentage: 10, isRecycled: false },
      { name: 'Internal circuits & lithium cell', percentage: 20, isRecycled: false }
    ],
    packagingType: '100% Plastic-free Original Blended Material (Bamboo, sugarcane fibers & post-consumer recycled paper)',
    certifications: [
      { id: 'road-to-zero', name: 'Sony Road to Zero Environmental Plan', issuer: 'Sony Group', verified: true, description: 'Corporate zero footprint commitment' },
      { id: 'fsc', name: 'FSC Certified Materials', issuer: 'FSC', verified: true, description: 'Eco forestry' }
    ],
    strengths: ['Packaging contains zero plastic from raw materials to store shelves', 'Uses recycled plastic developed from discarded Japanese automobile parts', 'Long 30-hour battery cycle'],
    improvements: ['Synthetic leather earpads may peel in high humidity after 3 years']
  },
  {
    id: 'sony-wf-c500',
    name: 'Sony WF-C500 Truly Wireless Bluetooth Earbuds (Green)',
    brand: 'Sony',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 4990,
    greenScore: 81.0,
    carbonFootprintKg: 13.5,
    conventionalCarbonKg: 24.0,
    waterFootprintLiters: 420,
    lifespanYears: 4.0,
    subscores: { carbonImpact: 80, materials: 83, durability: 84, recyclability: 81, packaging: 95, repairability: 60, certifications: 84 },
    materialsBreakdown: [
      { name: 'Recycled Plastics in Case & Earbud Housings', percentage: 55, isRecycled: true },
      { name: 'Micro lithium cell', percentage: 20, isRecycled: false },
      { name: 'Neodymium drivers & contacts', percentage: 25, isRecycled: false }
    ],
    packagingType: 'Zero-plastic recycled paper pulp packaging box',
    certifications: [{ id: 'fsc', name: 'FSC Certified Paper', issuer: 'FSC', verified: true, description: 'Responsible forest stewardship' }],
    strengths: ['Plastic-free packaging material', 'Recycled plastic body construction'],
    improvements: ['Micro batteries difficult to desolder']
  },
  {
    id: 'jbl-flip-6',
    name: 'JBL Flip 6 Portable Waterproof Bluetooth Speaker (Forest Green)',
    brand: 'JBL',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 10999,
    greenScore: 83.0,
    carbonFootprintKg: 24.0,
    conventionalCarbonKg: 42.0,
    waterFootprintLiters: 710,
    lifespanYears: 5.5,
    subscores: { carbonImpact: 82, materials: 85, durability: 92, recyclability: 83, packaging: 92, repairability: 70, certifications: 84 },
    materialsBreakdown: [
      { name: '100% Recycled Fabric Grille & Rubber', percentage: 48, isRecycled: true },
      { name: 'Post-Consumer Recycled Plastic Housing', percentage: 22, isRecycled: true },
      { name: 'Racetrack driver & lithium battery', percentage: 30, isRecycled: false }
    ],
    packagingType: 'FSC-certified paper box printed with biodegradable soy ink',
    certifications: [{ id: 'fsc', name: 'FSC Certified', issuer: 'FSC', verified: true, description: 'Eco-certified paper' }],
    strengths: ['IP67 rugged waterproof and dustproof design withstands monsoons', 'Eco packaging with recyclable plastic handle replaced by paper'],
    improvements: ['Battery glued into acoustic chamber']
  },
  {
    id: 'jbl-tune-510bt',
    name: 'JBL Tune 510BT On-Ear Wireless Headphones (Pure Bass, Black)',
    brand: 'JBL',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 2999,
    greenScore: 75.0,
    carbonFootprintKg: 18.0,
    conventionalCarbonKg: 30.0,
    waterFootprintLiters: 520,
    lifespanYears: 4.0,
    subscores: { carbonImpact: 74, materials: 73, durability: 78, recyclability: 75, packaging: 85, repairability: 68, certifications: 74 },
    materialsBreakdown: [
      { name: 'Post-consumer plastic resin', percentage: 30, isRecycled: true },
      { name: 'Standard ABS headband', percentage: 40, isRecycled: false },
      { name: 'Foam ear cushions & drivers', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Recyclable cardboard box',
    certifications: [{ id: 'rohs', name: 'RoHS Compliant', issuer: 'EU', verified: true, description: 'Hazardous chemicals eliminated' }],
    strengths: ['40-hour long playback cycle between charges', 'Foldable durable swivel joints'],
    improvements: ['Earpad foam not removable without unscrewing']
  },
  {
    id: 'oneplus-bullets-wireless-z2',
    name: 'OnePlus Bullets Wireless Z2 Bluetooth Neckband (Acoustic Red)',
    brand: 'OnePlus',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 1999,
    greenScore: 72.0,
    carbonFootprintKg: 13.0,
    conventionalCarbonKg: 20.0,
    waterFootprintLiters: 350,
    lifespanYears: 3.0,
    subscores: { carbonImpact: 73, materials: 69, durability: 77, recyclability: 69, packaging: 76, repairability: 54, certifications: 68 },
    materialsBreakdown: [
      { name: 'Skin-friendly silicone wire', percentage: 45, isRecycled: false },
      { name: 'Magnetic earbud shells', percentage: 25, isRecycled: false },
      { name: 'Lithium battery and wiring', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Compact paper box',
    certifications: [{ id: 'bis-isi', name: 'BIS Approved', issuer: 'BIS', verified: true, description: 'Safety certified' }],
    strengths: ['Quick Warp Charge delivers 20h in 10 minutes', 'Magnetic auto-pause saves battery drain'],
    improvements: ['Single-piece glued wire construction']
  },
  {
    id: 'nothing-ear-a',
    name: 'Nothing Ear (a) High-Res Wireless Earbuds (Bright Yellow)',
    brand: 'Nothing',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 7999,
    greenScore: 83.5,
    carbonFootprintKg: 16.0,
    conventionalCarbonKg: 28.0,
    waterFootprintLiters: 490,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 82, materials: 85, durability: 84, recyclability: 82, packaging: 94, repairability: 65, certifications: 82 },
    materialsBreakdown: [
      { name: 'Recycled Polycarbonate Case & Stems', percentage: 48, isRecycled: true },
      { name: 'Recycled solder tin & circuit metals', percentage: 18, isRecycled: true },
      { name: 'Custom ceramic driver diaphragm', percentage: 14, isRecycled: false },
      { name: 'High-density micro battery cells', percentage: 20, isRecycled: false }
    ],
    packagingType: '100% Plastic-free recycled paper box with soy inks',
    certifications: [{ id: 'carbon-trust', name: 'Carbon Trust Audited', issuer: 'Carbon Trust', verified: true, description: 'Independently audited lifecycle footprint' }],
    strengths: ['Plastic-free retail packaging', 'Low lifecycle carbon emissions of 16 kg CO₂e', 'High-res audio certification with smart noise cancellation'],
    improvements: ['Transparent case prone to micro-scratches from keys']
  },
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro 2nd Gen with USB-C Case (White)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 24900,
    greenScore: 82.0,
    carbonFootprintKg: 22.0,
    conventionalCarbonKg: 38.0,
    waterFootprintLiters: 650,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 80, materials: 85, durability: 86, recyclability: 81, packaging: 95, repairability: 52, certifications: 85 },
    materialsBreakdown: [
      { name: '100% Recycled Gold Plating in Circuit Boards', percentage: 12, isRecycled: true },
      { name: '100% Recycled Rare Earth Elements in All Magnets', percentage: 28, isRecycled: true },
      { name: '100% Recycled Tin in Solder', percentage: 10, isRecycled: true },
      { name: 'Recycled Aluminium Hinge', percentage: 10, isRecycled: true },
      { name: 'Bio-plastics & optical sensors', percentage: 40, isRecycled: false }
    ],
    packagingType: '100% Virgin wood fiber from responsibly managed forests, zero exterior plastic wrap',
    certifications: [{ id: 'energy-star', name: 'ENERGY STAR Battery Charger', issuer: 'EPA', verified: true, description: 'Efficient charging circuitry' }],
    strengths: ['100% recycled rare earth magnets across all components', 'Hearing Aid and health diagnostic firmware extension'],
    improvements: ['Near impossible DIY battery repair score (iFixit 0/10)']
  },
  {
    id: 'noise-colorfit-pulse-3',
    name: 'Noise ColorFit Pulse 3 Smartwatch (1.96-inch TFT, Jet Black)',
    brand: 'Noise',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 1599,
    greenScore: 70.0,
    carbonFootprintKg: 15.0,
    conventionalCarbonKg: 24.0,
    waterFootprintLiters: 390,
    lifespanYears: 3.0,
    subscores: { carbonImpact: 71, materials: 67, durability: 74, recyclability: 68, packaging: 78, repairability: 55, certifications: 65 },
    materialsBreakdown: [
      { name: 'Zinc alloy dial frame', percentage: 38, isRecycled: false },
      { name: 'Silicone wrist strap', percentage: 32, isRecycled: false },
      { name: 'Display & optical PPG sensor', percentage: 30, isRecycled: false }
    ],
    packagingType: 'Cardboard box with foam cushion',
    certifications: [{ id: 'bis-isi', name: 'BIS ISI Marked', issuer: 'BIS India', verified: true, description: 'Consumer electronic safety' }],
    strengths: ['Made in India production', 'Standard quick-release strap mechanism enables strap reuse'],
    improvements: ['Proprietary pogo pin magnetic charging cable']
  },
  {
    id: 'apple-watch-se-carbon-neutral',
    name: 'Apple Watch SE (GPS 40mm, Starlight Aluminium with Sport Loop)',
    brand: 'Apple',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 29900,
    greenScore: 91.0,
    carbonFootprintKg: 18.0,
    conventionalCarbonKg: 39.0,
    waterFootprintLiters: 580,
    lifespanYears: 5.5,
    subscores: { carbonImpact: 92, materials: 92, durability: 90, recyclability: 91, packaging: 96, repairability: 64, certifications: 94 },
    materialsBreakdown: [
      { name: '100% Recycled Aluminium Case', percentage: 45, isRecycled: true },
      { name: '100% Recycled Gold & Tin', percentage: 15, isRecycled: true },
      { name: 'Sport Loop made with 82% recycled yarn', percentage: 20, isRecycled: true },
      { name: 'Ion-X front glass & ceramic back', percentage: 20, isRecycled: false }
    ],
    packagingType: '100% Fiber packaging with 0% plastic',
    certifications: [
      { id: 'carbon-neutral', name: 'Certified Carbon Neutral', issuer: 'SCS Global Services', verified: true, description: 'Over 78% absolute emissions reduction + high quality nature offsets' },
      { id: 'fsc', name: 'FSC Certified', issuer: 'FSC', verified: true, description: 'Forest management' }
    ],
    strengths: ['Officially certified carbon-neutral product combination', 'Sport loop made from 82% recycled yarn', 'Manufactured with 100% renewable electricity'],
    improvements: ['Battery glued under OLED screen']
  },
  {
    id: 'samsung-galaxy-watch-6',
    name: 'Samsung Galaxy Watch 6 (40mm Bluetooth, Graphite)',
    brand: 'Samsung',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 19999,
    greenScore: 82.5,
    carbonFootprintKg: 21.0,
    conventionalCarbonKg: 36.0,
    waterFootprintLiters: 640,
    lifespanYears: 4.5,
    subscores: { carbonImpact: 81, materials: 83, durability: 88, recyclability: 82, packaging: 90, repairability: 66, certifications: 82 },
    materialsBreakdown: [
      { name: 'Armor Aluminium chassis', percentage: 42, isRecycled: false },
      { name: 'Sapphire Crystal display glass', percentage: 25, isRecycled: false },
      { name: 'Recycled plastic inner components', percentage: 15, isRecycled: true },
      { name: 'Bioactive sensor circuits', percentage: 18, isRecycled: false }
    ],
    packagingType: '100% Recycled paper box',
    certifications: [{ id: 'ul-ecologo', name: 'UL ECOLOGO', issuer: 'UL', verified: true, description: 'Sustainable electronics standard' }],
    strengths: ['Scratch-resistant Sapphire Crystal dramatically lengthens cosmetic lifespan', '4 years of Wear OS platform updates'],
    improvements: ['Water seals degrade after continuous salt water immersion']
  },

  // Power Banks & Accessories
  {
    id: 'mi-power-bank-3i-20000',
    name: 'Mi 20000mAh 18W Fast Charging Power Bank 3i (Sandstone Black)',
    brand: 'Xiaomi',
    category: 'Electronics',
    subcategory: 'Power Banks',
    price: 2149,
    greenScore: 74.0,
    carbonFootprintKg: 22.0,
    conventionalCarbonKg: 32.0,
    waterFootprintLiters: 580,
    lifespanYears: 4.0,
    subscores: { carbonImpact: 75, materials: 72, durability: 80, recyclability: 74, packaging: 78, repairability: 58, certifications: 70 },
    materialsBreakdown: [
      { name: 'High-density Lithium Polymer battery cells', percentage: 60, isRecycled: false },
      { name: 'PC + ABS flame-retardant textured case', percentage: 28, isRecycled: false },
      { name: 'Power management PCB & copper connectors', percentage: 12, isRecycled: false }
    ],
    packagingType: 'Cardboard box with paper slip',
    certifications: [{ id: 'bis-isi', name: 'BIS Certified (IS 16046)', issuer: 'Bureau of Indian Standards', verified: true, description: 'Secondary cell safety compliance' }],
    strengths: ['12-layer advanced circuit protection prevents battery burnout', 'Made in India assembly in Sri City'],
    improvements: ['Ultrasonically welded enclosure cannot be opened for cell replacement']
  },
  {
    id: 'ambrane-stylo-20k',
    name: 'Ambrane 20000mAh 20W Fast Charging Power Bank (Stylo 20k, Green)',
    brand: 'Ambrane',
    category: 'Electronics',
    subcategory: 'Power Banks',
    price: 1899,
    greenScore: 73.0,
    carbonFootprintKg: 23.0,
    conventionalCarbonKg: 33.0,
    waterFootprintLiters: 610,
    lifespanYears: 3.5,
    subscores: { carbonImpact: 74, materials: 71, durability: 78, recyclability: 73, packaging: 76, repairability: 56, certifications: 68 },
    materialsBreakdown: [
      { name: 'Lithium Polymer cells', percentage: 62, isRecycled: false },
      { name: 'ABS Plastic casing', percentage: 26, isRecycled: false },
      { name: 'Control chipsets', percentage: 12, isRecycled: false }
    ],
    packagingType: 'Recyclable paperboard box',
    certifications: [{ id: 'bis-isi', name: 'BIS ISI Certified', issuer: 'BIS', verified: true, description: 'Indian quality certification' }],
    strengths: ['Manufactured in Kundli, Haryana reducing international air shipping emissions', 'Multi-device pass-through charging'],
    improvements: ['Heavy 410g weight uses substantial raw minerals']
  },
  {
    id: 'anker-511-nano-3-charger',
    name: 'Anker 511 Charger (Nano 3 30W GaN Fast Charger, Natural Green)',
    brand: 'Anker',
    category: 'Electronics',
    subcategory: 'Power Banks',
    price: 1899,
    greenScore: 86.0,
    carbonFootprintKg: 8.5,
    conventionalCarbonKg: 18.0,
    waterFootprintLiters: 210,
    lifespanYears: 7.0,
    subscores: { carbonImpact: 88, materials: 85, durability: 92, recyclability: 82, packaging: 94, repairability: 60, certifications: 86 },
    materialsBreakdown: [
      { name: 'Post-Consumer Recycled Plastics (PCR)', percentage: 30, isRecycled: true },
      { name: 'Gallium Nitride (GaN) high-efficiency semiconductors', percentage: 25, isRecycled: false },
      { name: 'Copper transformer coils', percentage: 30, isRecycled: false },
      { name: 'Aluminium heat dissipation shield', percentage: 15, isRecycled: false }
    ],
    packagingType: '100% Plastic-free paper pulp box',
    certifications: [
      { id: 'energy-star', name: 'DOE Level VI Energy Efficiency', issuer: 'US Dept of Energy', verified: true, description: 'Highest conversion efficiency standard' },
      { id: 'rohs', name: 'RoHS Compliant', issuer: 'EU', verified: true, description: 'Lead-free solder' }
    ],
    strengths: ['GaN technology cuts size by 70% and reduces electrical energy waste by 95%', '30.9% PCR plastic in outer shell', 'Replaces separate phone and tablet chargers'],
    improvements: ['Internal silicone potting prevents component disassembly']
  },
  {
    id: 'benq-gw2790qt-monitor',
    name: 'BenQ GW2790QT 27-inch 2K QHD Eye-Care USB-C Monitor (White)',
    brand: 'BenQ',
    category: 'Electronics',
    subcategory: 'Monitors & Displays',
    price: 24990,
    greenScore: 84.0,
    carbonFootprintKg: 210.0,
    conventionalCarbonKg: 380.0,
    waterFootprintLiters: 4800,
    lifespanYears: 8.0,
    subscores: { carbonImpact: 82, materials: 85, durability: 92, recyclability: 84, packaging: 90, repairability: 82, certifications: 88 },
    materialsBreakdown: [
      { name: '85% Post-Consumer Recycled (PCR) Plastics in Chassis', percentage: 48, isRecycled: true },
      { name: 'IPS LED Backlight Panel', percentage: 32, isRecycled: false },
      { name: 'Steel Stand & Internal Frame', percentage: 20, isRecycled: true }
    ],
    packagingType: '85% Recycled cardboard carton with molded paper pulp inserts (no EPS foam)',
    certifications: [
      { id: 'tco-certified', name: 'TCO Certified Generation 9', issuer: 'TCO Development', verified: true, description: 'Stringent socially and ecologically responsible electronics certification' },
      { id: 'energy-star', name: 'ENERGY STAR 8.0', issuer: 'EPA', verified: true, description: 'Low standby draw' }
    ],
    strengths: ['85% PCR plastics in monitor frame and base', 'Brightness Intelligence Gen2 saves up to 40% backlight electricity', 'Zero EPS foam in packaging'],
    improvements: ['Backlight panel contains non-recycled optical diffuser sheets']
  },
  {
    id: 'lg-ultrafine-27-4k-monitor',
    name: 'LG UltraFine 27-inch 4K UHD IPS Monitor (27UN880 Ergo Stand)',
    brand: 'LG',
    category: 'Electronics',
    subcategory: 'Monitors & Displays',
    price: 36999,
    greenScore: 81.5,
    carbonFootprintKg: 235.0,
    conventionalCarbonKg: 410.0,
    waterFootprintLiters: 5200,
    lifespanYears: 8.5,
    subscores: { carbonImpact: 80, materials: 82, durability: 92, recyclability: 82, packaging: 86, repairability: 80, certifications: 84 },
    materialsBreakdown: [
      { name: 'Recycled Steel Ergo Clamp Arm', percentage: 40, isRecycled: true },
      { name: 'PCR plastic housing', percentage: 25, isRecycled: true },
      { name: 'UHD IPS Panel', percentage: 35, isRecycled: false }
    ],
    packagingType: 'Recycled cardboard box',
    certifications: [
      { id: 'epeat-silver', name: 'EPEAT Silver', issuer: 'GEC', verified: true, description: 'Eco-certified monitor' },
      { id: 'energy-star', name: 'ENERGY STAR', issuer: 'EPA', verified: true, description: 'Energy saving' }
    ],
    strengths: ['Heavy duty C-clamp ergo arm avoids plastic desktop foot bases', 'LG Smart Energy Saving algorithm'],
    improvements: ['Power supply brick uses external plastic housing']
  }
];

console.log("Electronics catalog count:", electronics.length);
