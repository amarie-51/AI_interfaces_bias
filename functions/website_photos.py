#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Nov  4 17:21:26 2025

@author: mariamlocka
"""

import pandas as pd
from pathlib import Path

# Path to your assets folder
ASSETS_DIR = Path("/Users/mariamlocka/Downloads/uni-prospect-layout-main/src/assets")

# Supported image extensions
IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".svg", ".gif"]

data = []

# Recursively scan for images
for img_path in ASSETS_DIR.rglob("*"):
    if img_path.suffix.lower() in IMAGE_EXTENSIONS:
        data.append({
            "image_name": img_path.name,
            "relative_path": str(img_path.relative_to(ASSETS_DIR.parent)),
            "absolute_path": str(img_path),
            "source": "assets folder"
        })

# Create DataFrame
df = pd.DataFrame(data)

# Export to CSV
df.to_csv("assets_images.csv", index=False)
print(f"Found {len(data)} images. Saved to assets_images.csv")