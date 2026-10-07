import { EducationalTopic } from '../types';

export const EDUCATIONAL_TOPICS: EducationalTopic[] = [
  {
    id: 'lca-explained',
    title: 'Life Cycle Assessment (LCA)',
    tagline: 'Cradle-to-Grave Environmental Accounting',
    icon: 'Layers',
    summary: 'A standardized scientific methodology (ISO 14040/14044) to evaluate environmental impacts of a product from raw material extraction through manufacturing, shipping, usage, and disposal.',
    keyPoints: [
      'Cradle-to-Gate: Measures impact from raw material mining up to the factory door.',
      'Cradle-to-Grave: Accounts for consumer use phase and ultimate end-of-life landfill or recycling.',
      'Cradle-to-Cradle: Circular design where post-consumer materials become raw feedstocks for new products.'
    ],
    example: 'A modular phone may have a slightly higher manufacturing energy cost, but because it lasts 8 years instead of 2.5 years, its annualized LCA impact is 65% lower than conventional devices.',
    takeaway: 'Never look solely at production footprint; product lifespan and repairability dramatically reshape total lifecycle emissions.'
  },
  {
    id: 'carbon-footprint',
    title: 'Carbon Footprint & kg CO₂e',
    tagline: 'Measuring Atmospheric Greenhouse Impact',
    icon: 'Leaf',
    summary: 'Carbon dioxide equivalent (CO₂e) standardizes all greenhouse gas emissions (methane, nitrous oxide, fluorinated gases) into the global warming potential of an equivalent metric mass of CO₂.',
    keyPoints: [
      'Methane (CH₄) is 28x more potent than CO₂ over a 100-year timescale, making food waste landfill prevention vital.',
      'Product carbon is driven predominantly by raw material extraction and energy-intensive smelter grids.',
      'Green electricity during assembly cuts manufacturing scope 2 carbon dramatically.'
    ],
    example: 'Manufacturing 1 kg of virgin aluminium emits ~12 kg CO₂e, whereas 1 kg of post-consumer recycled aluminium emits only ~0.6 kg CO₂e (a 95% reduction).',
    takeaway: 'Products utilizing high recycled metal ratios deliver immediate, verifiable carbon cuts.'
  },
  {
    id: 'circular-economy',
    title: 'The Circular Economy',
    tagline: 'Eliminating Waste by Design',
    icon: 'RefreshCw',
    summary: 'Unlike the linear "Take-Make-Waste" economic paradigm, circular systems design products so materials remain in high-utility loops across biological and technical nutrient cycles.',
    keyPoints: [
      'Technical Cycle: Non-renewable metals and polymers designed to be disassembled, refurbished, and remanufactured.',
      'Biological Cycle: Pure plant-based organics that can safely return to the biosphere as compost nutrients.',
      'Avoid hybrid "monstrous hybrids" (e.g. cotton mixed with 3% spandex) that jam standard textile recycling mills.'
    ],
    example: '100% pure organic cotton jeans can be shredded and respun into new denim yarn; blended stretch jeans usually end up incinerated or landfilled.',
    takeaway: 'Mono-material construction is the gold standard for genuine recyclability.'
  },
  {
    id: 'greenwashing-detection',
    title: 'Greenwashing Detection',
    tagline: 'Spotting Unsubstantiated Eco Claims',
    icon: 'ShieldAlert',
    summary: 'Greenwashing occurs when marketing communications convey a false impression or provide misleading information about how a company’s products are environmentally sound.',
    keyPoints: [
      'Sin of the Hidden Trade-off: Highlighting one minor green attribute while concealing severe pollution.',
      'Sin of Vagueness: Unregulated buzzwords like "eco-friendly", "natural", or "pure" with zero third-party audit.',
      'Sin of Irrelevance: Advertising "CFC-Free" when CFCs have been federally banned by law since 1996.'
    ],
    example: 'Labeling plastic bottles as "100% recyclable" when municipal facilities reject thin multi-layer plastics and actual recycling rates are under 9%.',
    takeaway: 'Demand verifiable third-party ecolabels (EPEAT, C2C, B-Corp) rather than self-declared brand badges.'
  },
  {
    id: 'repairability-lifespan',
    title: 'Repairability & Lifespan',
    tagline: 'The Ultimate Sustainability Multiplier',
    icon: 'Wrench',
    summary: 'Extending a product’s useful service life is the most mathematically effective way to dilute its embodied manufacturing carbon footprint over time.',
    keyPoints: [
      'Right to Repair: Readily available schematics, standard screws (Philips/Torx), and affordable replacement parts.',
      'Non-glued battery and display modules enable self-service repair within 15 minutes.',
      'Doubling a device’s lifespan from 3 to 6 years effectively cuts its annual carbon burden in half.'
    ],
    example: 'Framework laptops provide QR code repair manuals and swappable expansion cards, ensuring the main chassis serves for a decade.',
    takeaway: 'A product that cannot be repaired is fundamentally designed for premature obsolescence.'
  },
  {
    id: 'eco-labels-guide',
    title: 'Verified Eco-Labels Guide',
    tagline: 'Trustworthy Global Certification Standards',
    icon: 'Award',
    summary: 'A taxonomy of legitimate third-party audit frameworks that conduct rigorous on-site supply chain inspections rather than self-attested claims.',
    keyPoints: [
      'Cradle to Cradle Certified®: Assesses material health, clean air/climate, water stewardship, and social fairness.',
      'Certified B Corporation: Rigorous legal verification of corporate environmental performance and transparency.',
      'EPEAT Gold: Global ecolabel for electronics requiring low toxic content and verified repairability.',
      'GOTS (Global Organic Textile Standard): 95%+ certified organic fibers with strict wastewater controls.'
    ],
    example: 'When looking at cosmetics or detergents, Cradle to Cradle Platinum Material Health guarantees zero known carcinogenic or mutagenic ingredients.',
    takeaway: 'Look for certification registry numbers and accredited issuing bodies.'
  }
];

export const ABOUT_PROJECT_INFO = {
  title: 'EcoCompare Intelligence Platform',
  course: 'Environmental & Chemical Engineering Life Cycle Assessment (LCA)',
  purpose: 'A data-driven decision intelligence system designed to expose the environmental trade-offs of everyday consumer products through transparent Life Cycle Assessment (LCA) algorithms.',
  scoringPhilosophy: [
    'Transparency Over Black-Box Ratings: Every Green Score is deconstructed into 7 clear weighted subscores.',
    'Lifecycle Breadth: We balance raw extraction with useful durability and end-of-life circularity.',
    'Combating Greenwashing: Marketing claims are systematically checked against verifiable third-party certification databases.'
  ],
  disclaimer: 'Illustrative Prototype Disclaimer: Environmental metrics, emissions values (kg CO₂e), water footprints (L), and Green Scores displayed within this web application are engineering estimates and educational models compiled for the CHE110 project prototype. While grounded in published Life Cycle Assessment (LCA) literature and third-party standards, they should not be treated as legally binding certification data.'
};
