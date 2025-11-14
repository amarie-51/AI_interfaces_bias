#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Nov  7 16:27:05 2025

@author: mariamlocka
"""

import os
import shutil
import pandas as pd


def copy_images_with_full_path(source: str, destination: str, extensions=None):
    """
    Copies image files from source to destination, preserving the folder hierarchy
    in the filename and handling duplicates.
    
    Args:
        source (str): The source directory to search for images.
        destination (str): The destination directory to copy images to.
        extensions (tuple, optional): File extensions to include. Defaults to common image types.
    """
    if extensions is None:
        extensions = (".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp")
    
    os.makedirs(destination, exist_ok=True)

    for root, _, files in os.walk(source):
        # Get relative path from source and replace separators with underscores
        relative_path = os.path.relpath(root, source)
        folder_path_str = relative_path.replace(os.sep, "_") if relative_path != "." else ""
        
        for file in files:
            if file.lower().endswith(extensions):
                src_path = os.path.join(root, file)
                
                base, ext = os.path.splitext(file)
                # Combine original filename with full folder path
                new_base = f"{base}_{folder_path_str}" if folder_path_str else base
                dest_path = os.path.join(destination, new_base + ext)
                
                # Handle duplicates
                duplicate_counter = 1
                final_dest_path = dest_path
                while os.path.exists(final_dest_path):
                    final_dest_path = os.path.join(destination, f"{new_base}_{duplicate_counter}{ext}")
                    duplicate_counter += 1
                
                shutil.copy2(src_path, final_dest_path)
                
                



