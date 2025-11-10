#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Nov  4 17:57:24 2025

@author: mariamlocka
"""
# functions/css_extraction.py

# functions/css_extraction.py

import pandas as pd
import re
from colorsys import hls_to_rgb
from pathlib import Path

def extract_css_variables_and_fonts(css_path):
    """
    Extract CSS colors, fonts, and map them to elements/components.
    Returns a DataFrame with colors (with RGB and description) and fonts.
    """
    css_path = Path(css_path)
    if not css_path.exists():
        raise FileNotFoundError(f"CSS file not found at {css_path}")

    with open(css_path, "r", encoding="utf-8") as f:
        css_text = f.read()

    # --- Extract all CSS variables ---
    variable_pattern = re.compile(r'--([\w-]+):\s*(.+?);')
    variables = variable_pattern.findall(css_text)
    df_variables = pd.DataFrame(variables, columns=["Variable", "Value"])
    df_variables["Mode"] = "light"

    # --- Extract dark mode variables ---
    dark_pattern = re.compile(r'\.dark\s*{([^}]+)}', re.DOTALL)
    dark_matches = dark_pattern.findall(css_text)
    dark_variables = []
    for match in dark_matches:
        dark_vars = variable_pattern.findall(match)
        for var, value in dark_vars:
            dark_variables.append((var, value))
    df_dark = pd.DataFrame(dark_variables, columns=["Variable", "Value"])
    df_dark["Mode"] = "dark"

    # Combine light and dark variables
    df_all = pd.concat([df_variables, df_dark], ignore_index=True)

    # --- Mapping of elements/components ---
    mapping = {
        "background": "body",
        "foreground": "body text",
        "card": "card background",
        "card-foreground": "card text",
        "popover": "popover background",
        "popover-foreground": "popover text",
        "primary": "primary button background / highlights",
        "primary-foreground": "primary button text / highlights",
        "secondary": "secondary components / sections",
        "secondary-foreground": "secondary text",
        "muted": "muted backgrounds",
        "muted-foreground": "muted text",
        "accent": "accent elements",
        "accent-foreground": "accent text",
        "destructive": "destructive button background / error",
        "destructive-foreground": "destructive text",
        "border": "borders",
        "input": "input background",
        "ring": "focus ring / outline",
        "gradient-hero": "hero section gradient",
        "gradient-section": "section gradient",
        "sidebar-background": "sidebar background",
        "sidebar-foreground": "sidebar text",
        "sidebar-primary": "sidebar primary elements",
        "sidebar-primary-foreground": "sidebar primary text",
        "sidebar-accent": "sidebar accent elements",
        "sidebar-accent-foreground": "sidebar accent text",
        "sidebar-border": "sidebar borders",
        "sidebar-ring": "sidebar focus ring",
        "radius": "border radius",
        "shadow-card": "card shadow",
        "shadow-elevated": "elevated shadow",
        "shadow-accent": "accent shadow",
        "transition-smooth": "transition speed",
        "font-size": "base font size",
        "font-weight-medium": "medium font weight",
        "font-weight-normal": "normal font weight"
    }

    df_all["Element/Use"] = df_all["Variable"].map(mapping).fillna("Other / unspecified")

    # --- Color conversion ---
    def parse_hsl(value):
        parts = re.findall(r'[\d.]+', value)
        if len(parts) >= 3:
            return float(parts[0]), float(parts[1]), float(parts[2])
        return None

    def hsl_to_rgb_func(h, s, l):
        h, s, l = h / 360, s / 100, l / 100
        r, g, b = hls_to_rgb(h, l, s)
        return round(r*255), round(g*255), round(b*255)

    def describe_color(h, s, l):
        if l < 10: lightness = "very dark"
        elif l < 35: lightness = "dark"
        elif l < 65: lightness = "medium"
        elif l < 85: lightness = "light"
        else: lightness = "very light"
        if s < 10: return f"{lightness} gray"
        if h < 15 or h >= 345: hue = "red"
        elif h < 45: hue = "orange"
        elif h < 75: hue = "yellow"
        elif h < 165: hue = "green"
        elif h < 195: hue = "cyan"
        elif h < 255: hue = "blue"
        elif h < 285: hue = "purple"
        elif h < 345: hue = "magenta"
        else: hue = "unknown"
        return f"{lightness} {hue}"

    rgb_list = []
    desc_list = []
    for val in df_all["Value"]:
        parsed = parse_hsl(val)
        if parsed:
            h, s, l = parsed
            rgb_list.append(hsl_to_rgb_func(h, s, l))
            desc_list.append(describe_color(h, s, l))
        else:
            rgb_list.append(None)
            desc_list.append(None)

    df_all["RGB"] = rgb_list
    df_all["Color Description"] = desc_list

    return df_all

