#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov 10 10:35:11 2025

@author: mariamlocka
"""

import pandas as pd
import re
import json

def ts_file_to_single_df(file_path):
    """
    Reads a TypeScript data file with exported arrays and converts all of them
    into a single pandas DataFrame with a 'source' column indicating the original array.
    Nested lists are converted to comma-separated strings.
    """
    with open(file_path, "r") as f:
        content = f.read()

    # Find all exported arrays: export const <name> = [...]
    pattern = r"export\s+const\s+(\w+)\s*=\s*(\[[\s\S]*?\]);"
    matches = re.findall(pattern, content, re.MULTILINE)

    all_dfs = []

    for name, array_str in matches:
        # Convert TS single quotes to JSON double quotes
        json_str = array_str.replace("'", '"')
        # Remove trailing commas in objects/arrays
        json_str = re.sub(r",\s*}", "}", json_str)
        json_str = re.sub(r",\s*]", "]", json_str)

        try:
            data_list = json.loads(json_str)
        except json.JSONDecodeError as e:
            print(f"Warning: Could not parse {name}: {e}")
            continue

        # Flatten nested lists in each dictionary
        flat_data = []
        for item in data_list:
            flat_item = {}
            for k, v in item.items():
                if isinstance(v, list):
                    flat_item[k] = ", ".join(map(str, v))
                else:
                    flat_item[k] = v
            flat_data.append(flat_item)

        df = pd.DataFrame(flat_data)
        df["source"] = name  # keep track of which array it came from
        all_dfs.append(df)

    if all_dfs:
        return pd.concat(all_dfs, ignore_index=True)
    else:
        return pd.DataFrame()  # empty DF if nothing found

# Usage
file_path = "/Users/mariamlocka/Documents/project_AI_interfaces/websites_code/Figma/Responsiveuniversityprogramwebsite-main/src/data/mockData.ts"
df = ts_file_to_single_df(file_path)

print(df.head())



