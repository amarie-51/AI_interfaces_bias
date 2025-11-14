#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Nov  7 16:27:05 2025

@author: mariamlocka
"""

import os
import shutil
import pandas as pd




def copy_images_with_full_path_and_df(source: str, destination: str, extensions=None):
    """
    Copies images while tracking metadata in a dataframe:
    - old name
    - new name
    - platform (Lovable, Figma, Replit)
    - discipline (nursing, psychology, computer_science)
    - subfolder (2 levels below platform folder)
    """

    if extensions is None:
        extensions = (".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp")
    
    os.makedirs(destination, exist_ok=True)

    records = []  # for dataframe rows

    platforms = ["Lovable", "Figma", "Replit"]
    program_list = ["nursing", "psychology", "computer_science"]

    for root, _, files in os.walk(source):
        relative_path = os.path.relpath(root, source)
        folder_path_str = relative_path.replace(os.sep, "_") if relative_path != "." else ""

        # Folder parts for metadata extraction
        parts = relative_path.split(os.sep)

        # Detect platform
        platform = next((p for p in platforms if p in parts), None)

        # Detect discipline
        program = next((d for d in program_list if d in parts), None)

        # Find subfolder two levels after the platform
        subfolder = None
        if platform and platform in parts:
            idx = parts.index(platform)
            if len(parts) > idx + 2:  # ensure enough depth
                subfolder = parts[idx + 2]

        for file in files:
            if file.lower().endswith(extensions):
                src_path = os.path.join(root, file)
                base, ext = os.path.splitext(file)

                # Create new filename with embedded path
                new_base = f"{base}_{folder_path_str}" if folder_path_str else base
                dest_path = os.path.join(destination, new_base + ext)

                # Handle duplicates
                duplicate_counter = 1
                final_dest_path = dest_path
                while os.path.exists(final_dest_path):
                    final_dest_path = os.path.join(destination, f"{new_base}_{duplicate_counter}{ext}")
                    duplicate_counter += 1

                shutil.copy2(src_path, final_dest_path)

                # Push record into dataframe
                records.append({
                    "old_name": file,
                    "current_name": os.path.basename(final_dest_path),
                    "tool_name": platform,
                    "program_name": program,
                    "file_name": subfolder
                })

    # Convert to DataFrame
    df = pd.DataFrame(records)
    return df

                



