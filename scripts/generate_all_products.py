#!/usr/bin/env python3
import json
import os
import re

# Read original products.ts to preserve original 24 items
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    orig_code = f.read()

# Locate the end of the 24th item in INITIAL_PRODUCTS
# We can find `];` at the end
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

# Generator helper
def make_prod(
    id_str, name, brand, cat, subcat, price, score, carbon, conv_carbon, water, lifespan,
    carbon_sub, mat_sub, dur_sub, rec_sub, pack_sub, rep_sub, cert_sub,
    mats, pack_type, certs, strengths, improvements, explanation,
    country='India', renew_pct=50, plastic_free=False, energy='Low', waste='Low',
    featured=False, alt_id=None, alt_name=None, alt_brand=None, alt_price=0, alt_score=0
):
    grade = compute_grade(score)
    # Lifecycle stages breakdown
    raw_impact = round(carbon * 0.48, 1)
    mfg_impact = round(carbon * 0.28, 1)
    trans_impact = round(carbon * 0.10, 1)
    use_impact = round(carbon * 0.10, 1)
    eol_impact = round(max(0.2, carbon - (raw_impact + mfg_impact + trans_impact + use_impact)), 1)

    stages = [
        {"stage": "Raw Materials", "impactKgCO2": raw_impact, "percentage": 48, "notes": "Sourced sustainably with certified provenance"},
        {"stage": "Manufacturing", "impactKgCO2": mfg_impact, "percentage": 28, "notes": f"{renew_pct}% clean energy mix in assembly facilities"},
        {"stage": "Transportation", "impactKgCO2": trans_impact, "percentage": 10, "notes": "Optimized domestic logistics network across India"},
        {"stage": "Usage", "impactKgCO2": use_impact, "percentage": 10, "notes": "High operational power and resource efficiency"},
        {"stage": "End of Life", "impactKgCO2": eol_impact, "percentage": 4, "notes": "Recyclability circularity recovery programs"}
    ]

    alts = []
    if alt_id and alt_name:
        alts.append({
            "productId": alt_id,
            "name": alt_name,
            "brand": alt_brand or brand,
            "price": alt_price or price,
            "greenScore": alt_score or min(95.0, score + 5.0),
            "carbonReductionPercent": max(15, int(round((1.0 - (carbon / conv_carbon)) * 100))),
            "reason": "Circular modular alternative with lower lifecycle footprint"
        })

    prod = {
        "id": id_str,
        "name": name,
        "brand": brand,
        "category": cat,
        "subcategory": subcat,
        "imageUrl": "",
        "price": price,
        "currency": "₹",
        "isFeatured": featured or (score >= 87.0),
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
        "conventionalCarbonKg": conv_carbon,
        "waterFootprintLiters": water,
        "energyUsage": energy,
        "wasteGeneration": waste,
        "expectedLifespanYears": lifespan,
        "manufacturingCountry": country,
        "renewableEnergyPercent": renew_pct,
        "materialsBreakdown": mats,
        "lifecycleStages": stages,
        "packagingType": pack_type,
        "packagingPlasticFree": plastic_free,
        "certifications": certs,
        "greenwashingClaims": [
            {
                "id": f"{id_str}-c1",
                "claim": "100% Recyclable Packaging & Extended Lifespan",
                "status": "Verified",
                "analysis": "Independently audited against ISO 14040 environmental criteria."
            }
        ],
        "greenerAlternatives": alts,
        "keyStrengths": strengths,
        "areasToImprove": improvements,
        "sustainabilityStatus": "Verified" if score >= 80 else "Estimated",
        "dataSource": "EcoCompare LCA Audit & Environmental Product Declaration (EPD)",
        "dataConfidence": "High" if score >= 80 else "Medium"
    }
    return prod

print("Helper defined.")
