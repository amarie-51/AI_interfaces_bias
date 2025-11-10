#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extract static JSX text from pages and dynamic faculty info from JSON.

@author: mariamlocka
"""

import re
import json
from pathlib import Path
import pandas as pd

# ---------- CONFIG ----------
PROJECT_ROOT = Path("/Users/mariamlocka/Downloads/uni-prospect-layout-main/src")
PAGES_DIR = PROJECT_ROOT / "pages"
FACULTY_TS = PROJECT_ROOT / "data/faculty.ts"
FACULTY_JSON = PROJECT_ROOT / "data/faculty.json"
OUTPUT_CSV = PROJECT_ROOT / "extracted_text.csv"


# ---------- FUNCTIONS ----------

def ts_array_to_json(ts_file_path: str, json_file_path: str, array_name: str):
    """
    Convert a TypeScript exported array of objects to JSON.

    Parameters:
        ts_file_path (str): Path to the TypeScript file (.ts)
        json_file_path (str): Path to save the output JSON file
        array_name (str): Name of the exported array in TypeScript (e.g., "faculty")
    """
    with open(ts_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract the array
    pattern = rf"export\s+const\s+{array_name}\s*:\s*[\w\[\]]+\s*=\s*(\[.*\]);"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find the array '{array_name}' in the TypeScript file.")

    array_str = match.group(1)

    # Remove trailing commas before closing braces/brackets
    array_str = re.sub(r',(\s*[}\]])', r'\1', array_str)

    # Add double quotes around unquoted property names
    array_str = re.sub(r'(\s*)(\w+)\s*:', r'\1"\2":', array_str)

    # Parse JSON
    data = json.loads(array_str)

    # Save to JSON file
    with open(json_file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✅ Successfully converted '{array_name}' to JSON: {json_file_path}")


def extract_text_from_tsx(file_path: Path):
    """
    Extract JSX text from a TSX file and map tags to types.

    Returns:
        List[dict]: Each dict contains 'content' and 'type'.
    """
    text_entries = []
    tag_type_map = {
        "p": "text", "h1": "title", "h2": "sub_title", "h3": "sub_sub_title",
        "h4": "sub_sub_sub_title", "h5": "heading_5", "h6": "heading_6",
        "li": "list_item", "span": "inline_text", "strong": "bold_text",
        "em": "italic_text", "blockquote": "quote", "cite": "cite_text",
        "figcaption": "caption", "small": "small_text", "label": "label_text",
        "a": "link_text", "button": "button_text", "div": "text",
        "pre": "pre_text", "code": "code_text", "summary": "summary_text",
        "option": "option_text"
    }

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Match opening tag, content, closing tag: <tag>content</tag>
    matches = re.findall(r"<(\w+)[^>]*>([^<>]+)</\1>", content)
    for tag, text in matches:
        cleaned = text.strip()
        if not cleaned:
            continue
        text_type = tag_type_map.get(tag.lower(), "text")
        text_entries.append({"content": cleaned, "type": text_type})

    return text_entries


def unpack_faculty_json_to_df(json_data, page_name: str):
    """
    Unpack each faculty member into separate rows for the DataFrame.

    Returns:
        List[dict]: Each dict corresponds to a row in the DataFrame.
    """
    rows = []
    for idx, member in enumerate(json_data, start=1):
        for field, value in member.items():
            rows.append({
                "page_name": page_name,
                "type": f"{field}{idx}",  # e.g., name1, title1, name2
                "content": value,
                "source": "json"
            })
    return rows

def parse_faculty_json(json_data, page_name: str):
    """
    Convert faculty JSON data into a list of entries for a page.

    Each entry will contain the full member object as 'content'.
    """
    parsed_data = []
    for member in json_data:
        parsed_data.append({
            "page_name": page_name,
            "type": "faculty_member",
            "content": member,  # includes bio, title, specialization, etc.
            "source": "faculty JSON"
        })
    return parsed_data

def replace_faculty_placeholders(content: str, faculty_json: list):
    """
    Replace {member.FIELD} placeholders in content with actual values from faculty JSON.
    Returns a list of strings if multiple members.
    """
    replaced_entries = []

    # Check if the placeholder {member.FIELD} exists
    if "{member." in content:
        for member in faculty_json:
            replaced = content
            # Replace all placeholders for this member
            for key, value in member.items():
                replaced = replaced.replace(f"{{member.{key}}}", str(value))
            replaced_entries.append(replaced)
    else:
        replaced_entries.append(content)

    return replaced_entries


# ---------- MAIN SCRIPT ----------

def main():
    # Step 1: Convert TS to JSON (if needed)
    ts_array_to_json(FACULTY_TS, FACULTY_JSON, "faculty")

    # Step 2: Load faculty JSON
    with open(FACULTY_JSON, "r", encoding="utf-8") as f:
        faculty_json_data = json.load(f)

    # Step 3: Extract text from pages
    data = []

    for page_file in PAGES_DIR.glob("*.tsx"):
        page_name = page_file.name

        # Static JSX text
        for t in extract_text_from_tsx(page_file):
            data.append({
                "page_name": page_name,
                "type": t["type"],
                "content": t["content"],
                "source": "page JSX"
            })

        # Dynamic faculty text if page is Faculty
        # Static JSX text (with placeholder replacement)
        for t in extract_text_from_tsx(page_file):
            # Replace faculty placeholders if this is a faculty page
            if page_name.lower().startswith("faculty"):
                data.extend(unpack_faculty_json_to_df(faculty_json_data, page_name))
                contents = replace_faculty_placeholders(t["content"], faculty_json_data)
                for c in contents:
                    data.append({
                        "page_name": page_name,
                        "type": t["type"],
                        "content": c,
                        "source": "page JSX"
                    })
            else:
                data.append({
                    "page_name": page_name,
                    "type": t["type"],
                    "content": t["content"],
                    "source": "page JSX"
                })
    # Step 4: Build DataFrame and save CSV
    df = pd.DataFrame(data)
    df.to_csv(OUTPUT_CSV, index=False)
    print(f"✅ Extraction complete. Saved to {OUTPUT_CSV}")


if __name__ == "__main__":
    main()


