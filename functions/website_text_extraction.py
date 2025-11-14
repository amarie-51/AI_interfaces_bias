#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Functions to extract JSX text and faculty JSON for website text extraction.

@author: mariamlocka
"""

import re
import json
from pathlib import Path


# ---------- FUNCTIONS ----------

def ts_array_to_json(ts_file_path: str, json_file_path: str, array_name: str):
    """
    Convert a TypeScript exported array of objects to JSON.
    """
    with open(ts_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = rf"export\s+const\s+{array_name}\s*:\s*[\w\[\]]+\s*=\s*(\[.*\]);"
    match = re.search(pattern, content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find the array '{array_name}' in the TypeScript file.")

    array_str = match.group(1)
    array_str = re.sub(r',(\s*[}\]])', r'\1', array_str)
    array_str = re.sub(r'(\s*)(\w+)\s*:', r'\1"\2":', array_str)

    data = json.loads(array_str)

    with open(json_file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✅ Successfully converted '{array_name}' to JSON: {json_file_path}")


def extract_text_from_tsx1(file_path: Path):
    """
    Extract JSX text from a TSX file and map tags to types.
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

    matches = re.findall(r"<(\w+)[^>]*>([^<>]+)</\1>", content)
    for tag, text in matches:
        cleaned = text.strip()
        if not cleaned:
            continue
        text_type = tag_type_map.get(tag.lower(), "text")
        text_entries.append({"content": cleaned, "type": text_type})

    return text_entries


def extract_text_from_tsx(file_path: Path):
    """
    Extracts all human-readable text from a TSX/JSX file, including:
    - Text between JSX tags (mapped to semantic types)
    - String literals in constants, arrays, and objects (e.g. title, description, quote)
    Filters out class names, Tailwind utilities, file paths, and technical text.
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

    # -------------------------------
    # 1️⃣ JSX TEXT (mapped to tag types)
    # -------------------------------
    jsx_matches = re.findall(r"<(\w+)[^>]*>([^<>]+)</\1>", content)
    for tag, text in jsx_matches:
        cleaned = text.strip()
        if not cleaned:
            continue
        # Skip tailwind or non-human content
        if re.match(r'^[a-z0-9\-:.\[\]\s]+$', cleaned):
            continue
        text_type = tag_type_map.get(tag.lower(), "text")
        text_entries.append({"content": cleaned, "type": text_type})

    # -------------------------------
    # 2️⃣ STRING LITERALS (from constants, arrays, etc.)
    # -------------------------------
    string_literals = re.findall(
        r'(?<!\\)(?:"([^"]+)"|\'([^\']+)\'|`([^`]+)`)',
        content,
        flags=re.DOTALL
    )

    for triple in string_literals:
        for val in triple:
            if not val:
                continue
            val = re.sub(r'\s+', ' ', val.strip())

            # Skip non-human / technical text
            # Skip tailwind / className values
            if re.search(r'className\s*=\s*["\']' + re.escape(val) + r'["\']', content):
                continue
    
            val = re.sub(r'\s+', ' ', val.strip())

            if (
                len(val) < 3
                or re.search(r'[@/{}<>]|\.jsx|\.jpg|\.png|\.tsx|className', val)
                or re.match(r'^[a-z0-9\-:.\[\]\s]+$', val)  # Tailwind or CSS utilities
            ):
                continue

            # If it looks human-readable, add as generic text
            if re.search(r'[A-Za-z]', val):
                text_entries.append({"content": val, "type": "text"})

    # -------------------------------
    # 3️⃣ Deduplicate and preserve order
    # -------------------------------
    seen = set()
    unique_entries = []
    for entry in text_entries:
        if entry["content"] not in seen:
            seen.add(entry["content"])
            unique_entries.append(entry)

    return unique_entries


def unpack_faculty_json_to_df(json_data, page_name: str):
    """
    Unpack each faculty member into separate rows for the DataFrame.
    """
    rows = []
    for idx, member in enumerate(json_data, start=1):
        for field, value in member.items():
            rows.append({
                "page_name": page_name,
                "type": f"{field}{idx}",  # e.g., name1, title1, etc.
                "content": value,
                "source": "json"
            })
    return rows


def replace_faculty_placeholders(content: str, faculty_json: list):
    """
    Replace {member.FIELD} placeholders in content with actual values from faculty JSON.
    Returns a list of strings if multiple members.
    """
    replaced_entries = []

    if "{member." in content:
        for member in faculty_json:
            replaced = content
            for key, value in member.items():
                replaced = replaced.replace(f"{{member.{key}}}", str(value))
            replaced_entries.append(replaced)
    else:
        replaced_entries.append(content)

    return replaced_entries


def parse_js_object_array(js_text: str):
    """
    Convert a JS object array string into a Python list of dicts.
    Ignores non-JSON-compatible values like JSX elements.
    """
    # Remove JSX elements like <Code ... />
    js_text = re.sub(r"<[^>]+/>", "null", js_text)  # replace with null

    # Wrap unquoted keys with quotes: name: -> "name":
    js_text = re.sub(r'(\w+)\s*:', r'"\1":', js_text)

    # Remove trailing commas before closing braces/brackets
    js_text = re.sub(r',(\s*[}\]])', r'\1', js_text)

    # Wrap array brackets to make it valid JSON
    js_text = f"[{js_text}]"

    try:
        data = json.loads(js_text)
        # Filter: only dict items
        return [item for item in data if isinstance(item, dict)]
    except json.JSONDecodeError as e:
        print("❌ Failed to parse JS array:", e)
        return []



