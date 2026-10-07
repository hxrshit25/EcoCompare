#!/usr/bin/env python3
import json
import sys

# Read the first 24 products from src/data/products.ts
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the end of the last existing product in INITIAL_PRODUCTS
# We know the last item in INITIAL_PRODUCTS ends before '];'
last_bracket = content.rfind('];')
base_ts = content[:last_bracket].strip()
if not base_ts.endswith(','):
    base_ts += ','

print("Original content preserved up to byte:", len(base_ts))
