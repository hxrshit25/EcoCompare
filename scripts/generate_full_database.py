#!/usr/bin/env python3
import json
import os
import re

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

def p(
    id_val, name, brand, cat, subcat, price, score,
    carbon, conv_carb, water, lifespan,
    carbon_sub, mat_sub, dur_sub, rec_sub, pack_sub, rep_sub, cert_sub,
    explanation, materials, packaging, plastic_free,
    certs, strengths, improvements,
    country='India', renew=65, energy='Low', waste='Low', feat=False
):
    grade = compute_grade(score)
    raw = round(carbon * 0.48, 1)
    mfg = round(carbon * 0.28, 1)
    trn = round(carbon * 0.10, 1)
    use = round(carbon * 0.10, 1)
    eol = round(max(0.1, carbon - (raw + mfg + trn + use)), 1)
    
    stages = [
        {"stage": "Raw Materials", "impactKgCO2": raw, "percentage": 48, "notes": "Traceable ethical supply chain provenance"},
        {"stage": "Manufacturing", "impactKgCO2": mfg, "percentage": 28, "notes": f"{renew}% clean renewable electricity in facilities"},
        {"stage": "Transportation", "impactKgCO2": trn, "percentage": 10, "notes": "Consolidated intermodal domestic freight"},
        {"stage": "Usage", "impactKgCO2": use, "percentage": 10, "notes": "Class-leading energy and resource efficiency"},
        {"stage": "End of Life", "impactKgCO2": eol, "percentage": 4, "notes": "High circular recovery & recyclability"}
    ]

    return {
        "id": id_val,
        "name": name,
        "brand": brand,
        "category": cat,
        "subcategory": subcat,
        "imageUrl": "",
        "price": price,
        "currency": "₹",
        "isFeatured": feat or (score >= 87.0),
        "greenScore": score,
        "grade": grade,
        "subscores": {
            "carbonImpact": carbon_sub,
            "materials": mat_sub,
            "durability": dur_sub,
            "recyclability": rec_sub,
            "packaging": pack_sub,
            "repairability": rep_sub,
            "certifications": cert_sub
        },
        "scoreExplanation": explanation,
        "carbonFootprintKg": carbon,
        "conventionalCarbonKg": conv_carb,
        "waterFootprintLiters": water,
        "energyUsage": energy,
        "wasteGeneration": waste,
        "expectedLifespanYears": lifespan,
        "manufacturingCountry": country,
        "renewableEnergyPercent": renew,
        "materialsBreakdown": materials,
        "lifecycleStages": stages,
        "packagingType": packaging,
        "packagingPlasticFree": plastic_free,
        "certifications": certs,
        "greenwashingClaims": [
            {
                "id": f"{id_val}-c1",
                "claim": f"{cert_sub}% verified eco metrics & circular design principles",
                "status": "Verified",
                "analysis": "Audited using ISO 14040 Life Cycle Assessment coefficients."
            }
        ],
        "greenerAlternatives": [
            {
                "productId": "fairphone-5" if cat == "Electronics" else ("milton-thermosteel-bottle" if cat == "Home & Kitchen" else "bare-necessities-tote"),
                "name": "Higher Circularity Baseline Option",
                "brand": "EcoCompare Benchmark",
                "price": price,
                "greenScore": min(95.0, round(score + 4.5, 1)),
                "carbonReductionPercent": max(15, int(round((1.0 - (carbon / max(conv_carb, carbon + 1))) * 100))),
                "reason": "Offers improved repairability index and certified renewable input materials."
            }
        ],
        "keyStrengths": strengths,
        "areasToImprove": improvements,
        "sustainabilityStatus": "Verified" if score >= 75 else "Estimated",
        "dataSource": "EcoCompare LCA Matrix & Certified EPD Database",
        "dataConfidence": "High" if score >= 78 else "Medium"
    }

print("Base loaded successfully.")
