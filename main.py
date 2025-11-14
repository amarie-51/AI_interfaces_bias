#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Nov 10 10:24:01 2025

@author: mariamlocka
"""



from pathlib import Path
import pandas as pd
import json
import re
from typing import List, Dict, Any

from functions.website_style import extract_css_variables_and_fonts
from functions.website_text_extraction import extract_text_from_tsx, replace_faculty_placeholders, unpack_faculty_json_to_df, parse_js_object_array, ts_array_to_json
from functions.image_relocation import copy_images_with_full_path_and_df

# ---------- CONSTANTS ----------
INLINE_ARRAY_REGEX = re.compile(r"\{\s*\[([^\]]+)\]\s*\}", re.DOTALL)


# ---------- OUTPUT DIRECTORIES ----------
OUTPUT_ROOT = Path(__file__).resolve().parent / "data_output"
TEXT_OUTPUT_DIR = OUTPUT_ROOT / "text"
TEXT_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
STYLE_OUTPUT_DIR = OUTPUT_ROOT / "styles"
STYLE_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
IMAGE_DEST_DIR = OUTPUT_ROOT / "images"
IMAGE_DEST_DIR.mkdir(parents=True, exist_ok=True)


# ---------- FUNCTIONS ----------


def get_project_name(file_or_folder: Path) -> str:
    """
    Automatically detect the project name from a file/folder path.
    Finds the first 'Lovable' or 'Figma' folder in the path and returns
    the folder immediately after it as the project name.
    Falls back to the last folder if none found.
    """
    path = file_or_folder.resolve()
    parts = path.parts

    for i, part in enumerate(parts):
        if part in ("Lovable", "Figma", "Replit") and i + 2 < len(parts):
            return parts[i + 2]  # folder right after Lovable/Figma

    return path.name  # fallback

def get_tool_name(file_or_folder: Path) -> str:
    """
    Detect if the file/folder is inside a 'Lovable', 'Figma', or 'Replit' folder.
    Returns the tool name if found, otherwise returns None.
    """
    path = file_or_folder.resolve()
    parts = path.parts

    for part in parts:
        if part in ("Lovable", "Figma", "Replit"):
            return part  # return the tool name

    return None

def get_program_name(file_or_folder: Path) -> str:
    """
    Detect if the file/folder is inside a 'computer_science', 'psychology', or 'nursing' folder.
    Returns the tool name if found, otherwise returns None.
    """
    path = file_or_folder.resolve()
    parts = path.parts

    for part in parts:
        if part in ("nursing", "computer_science", "psychology"):
            return part  # return the tool name

    return None


def text_extraction(root_path: Path) -> pd.DataFrame:
    """
    Detect all .tsx files under root_path and extract text content.
    Returns a DataFrame with extracted content.
    """
    data: List[Dict[str, Any]] = []

    # Detect faculty.ts if exists
    faculty_ts = next(root_path.rglob("faculty.ts"), None)
    faculty_json_data: Dict[str, Any] = {}
    if faculty_ts:
        faculty_json = faculty_ts.with_suffix(".json")
        ts_array_to_json(faculty_ts, faculty_json, "faculty")
        with faculty_json.open("r", encoding="utf-8") as f:
            faculty_json_data = json.load(f)

    # Detect all .tsx files recursively
    tsx_files = [f for f in root_path.rglob("*.tsx") if f.name[0].isupper()]
    if not tsx_files:
        print(f"⚠️ No .tsx files found under {root_path}")

    for page_file in tsx_files:
        project_name = get_project_name(page_file.relative_to(root_path))
        tool_name = get_tool_name(page_file.relative_to(root_path))
        page_name = page_file.name
        program_name = get_program_name(page_file.relative_to(root_path))
        
        for t in extract_text_from_tsx(page_file):
            content = t["content"]

            if faculty_json_data and page_name.lower().startswith("faculty"):
                replaced_contents = replace_faculty_placeholders(content, faculty_json_data)
                for c in replaced_contents:
                    data.append({
                        "project_name": project_name,
                        "tool_name": tool_name,
                        "program_name": program_name,
                        "page_name": page_name,
                        "type": t["type"],
                        "content": c,
                        "source": "page JSX"
                        
                    })
                data.extend(unpack_faculty_json_to_df(faculty_json_data, page_name))
            else:
                inline_match = INLINE_ARRAY_REGEX.search(content)
                if inline_match:
                    js_array_str = inline_match.group(1)
                    items = parse_js_object_array(js_array_str)
                    for idx, item in enumerate(items, start=1):
                        for key, value in item.items():
                            data.append({
                                "project_name": project_name,
                                "tool_name": tool_name,
                                "program_name": program_name,
                                "page_name": page_name,
                                "type": f"{key}{idx}",
                                "content": value,
                                "source": "inline JS array"
                            })
                else:
                    if "{" in content and "}" in content:
                        continue
                    data.append({
                        "project_name": project_name,
                        "tool_name": tool_name,
                        "page_name": page_name,
                        "program_name": program_name,
                        "type": t["type"],
                        "content": content,
                        "source": "page JSX"
                    })

    df = pd.DataFrame(data)
    output_csv_file = TEXT_OUTPUT_DIR / f"extracted_text.csv"
    df.to_csv(output_csv_file, index=False)
    print(f"✅ Text extraction complete. Saved to {output_csv_file}")
    return df

def style_extraction(root_path: Path) -> pd.DataFrame:
    """
    Detect all .css files under root_path and extract styles from each.
    """
    css_files = list(root_path.rglob("*.css"))
    if not css_files:
        print(f"⚠️ No .css files found under {root_path}")
        return pd.DataFrame()

    all_styles = []
    for css_file in css_files:
        project_name = get_project_name(css_file.relative_to(root_path))
        tool_name = get_tool_name(css_file.relative_to(root_path))
        program_name = get_program_name(css_file.relative_to(root_path))

        df = extract_css_variables_and_fonts(css_file)
        df["project_name"] = project_name
        df["tool_name"] = tool_name
        df["file_name"] = css_file.stem
        df["program_name"] = program_name
        all_styles.append(df)

    df_styles = pd.concat(all_styles, ignore_index=True)
    output_style_file = STYLE_OUTPUT_DIR / "extracted_styles.csv"
    df_styles.to_csv(output_style_file, index=False)
    print(f"✅ Style extraction complete. Saved to {output_style_file}")
    return df_styles




def image_relocation(source_dir: Path) -> None:
    """
    Copy all images from source to destination, preserve folder structure in filenames,
    and save the generated dataframe into IMAGE_DEST_DIR as images_metadata.csv.
    """
    # Run the copying + metadata extraction
    df = copy_images_with_full_path_and_df(source_dir, IMAGE_DEST_DIR)

    # Save DataFrame inside the destination directory
    csv_path = IMAGE_DEST_DIR / "images_metadata.csv"
    df.to_csv(csv_path, index=False)

    print(f"✅ Images copied to: {IMAGE_DEST_DIR}")
    print(f"📄 Metadata saved to: {csv_path}")




# ---------- MAIN ----------
def main() -> None:
    PROJECT_ROOT = OUTPUT_ROOT = Path(__file__).resolve().parent / "data_input"

    text_extraction(PROJECT_ROOT)
    style_extraction(PROJECT_ROOT)
    image_relocation(PROJECT_ROOT)


if __name__ == "__main__":
    main()
