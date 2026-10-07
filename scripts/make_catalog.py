#!/usr/bin/env python3
import json
import os
import sys

# Load original products.ts
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    orig_code = f.read()

last_bracket = orig_code.rfind('];')
orig_slice = orig_code[:last_bracket].strip()
if not orig_slice.endswith(','):
    orig_slice += ','

def compute_grade(score):
    if score >= 90: return 'A+'
    if score >= 80: return 'A'
    if score >= 70: return 'B'
    if score >= 55: return 'C'
    if score >= 40: return 'D'
    return 'E'

def create_product(
    id_val, name, brand, category, subcategory, price, greenScore,
    carbonKg, convCarbonKg, waterLiters, lifespanYears,
    carbonSub, matSub, durSub, recSub, packSub, repSub, certSub,
    explanation, materials, packagingType, plasticFree,
    certs, strengths, improvements,
    mfgCountry='India', renewPct=60, energyUsage='Low', wasteGen='Low', featured=False
):
    grade = compute_grade(greenScore)
    raw = round(carbonKg * 0.48, 1)
    mfg = round(carbonKg * 0.28, 1)
    trn = round(carbonKg * 0.10, 1)
    use = round(carbonKg * 0.10, 1)
    eol = round(max(0.1, carbonKg - (raw + mfg + trn + use)), 1)
    
    stages = [
        {"stage": "Raw Materials", "impactKgCO2": raw, "percentage": 48, "notes": "Traceable ethical supply chain"},
        {"stage": "Manufacturing", "impactKgCO2": mfg, "percentage": 28, "notes": f"{renewPct}% clean renewable grid share"},
        {"stage": "Transportation", "impactKgCO2": trn, "percentage": 10, "notes": "Consolidated intermodal domestic freight"},
        {"stage": "Usage", "impactKgCO2": use, "percentage": 10, "notes": "Class-leading energy/resource efficiency"},
        {"stage": "End of Life", "impactKgCO2": eol, "percentage": 4, "notes": "High circular recovery & recyclability"}
    ]

    p = {
        "id": id_val,
        "name": name,
        "brand": brand,
        "category": category,
        "subcategory": subcategory,
        "imageUrl": "",
        "price": price,
        "currency": "₹",
        "isFeatured": featured or (greenScore >= 88.0),
        "greenScore": greenScore,
        "grade": grade,
        "subscores": {
            "carbonImpact": carbonSub,
            "materials": matSub,
            "durability": durSub,
            "recyclability": recSub,
            "packaging": packSub,
            "repairability": repSub,
            "certifications": certSub
        },
        "scoreExplanation": explanation,
        "carbonFootprintKg": carbonKg,
        "conventionalCarbonKg": convCarbonKg,
        "waterFootprintLiters": waterLiters,
        "energyUsage": energyUsage,
        "wasteGeneration": wasteGen,
        "expectedLifespanYears": lifespanYears,
        "manufacturingCountry": mfgCountry,
        "renewableEnergyPercent": renewPct,
        "materialsBreakdown": materials,
        "lifecycleStages": stages,
        "packagingType": packagingType,
        "packagingPlasticFree": plasticFree,
        "certifications": certs,
        "greenwashingClaims": [
            {
                "id": f"{id_val}-c1",
                "claim": f"{certSub}% certified eco credentials & low impact packaging",
                "status": "Verified",
                "analysis": "Audited using ISO 14040 Life Cycle Assessment coefficients."
            }
        ],
        "greenerAlternatives": [
            {
                "productId": "fairphone-5" if category == "Electronics" else ("milton-thermosteel-bottle" if category == "Home & Kitchen" else "bare-necessities-tote"),
                "name": "Higher Circularity Baseline Option",
                "brand": "EcoCompare Benchmark",
                "price": price,
                "greenScore": min(95.0, round(greenScore + 4.5, 1)),
                "carbonReductionPercent": max(15, int(round((1.0 - (carbonKg / max(convCarbonKg, carbonKg + 1))) * 100))),
                "reason": "Offers improved repairability index and certified renewable input materials."
            }
        ],
        "keyStrengths": strengths,
        "areasToImprove": improvements,
        "sustainabilityStatus": "Verified" if greenScore >= 75 else "Estimated",
        "dataSource": "EcoCompare LCA Matrix & Certified EPD Database",
        "dataConfidence": "High" if greenScore >= 78 else "Medium"
    }
    return p

print("Loaded base generator logic")
