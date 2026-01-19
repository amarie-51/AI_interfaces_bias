# AI Interfaces Bias – Data Collection

## Description
This repository contains:
1. A curated list of websites analyzed for AI interface bias  
2. Code used to extract relevant interface content  
3. The resulting dataset generated from the extraction process  


---

## Contents
```text
AI_interfaces_bias/
├── data_input/            # Source code from all websites, grouped by tool
│   ├── Figma/
│   │   └── <website source files>
│   ├── Lovable/
│   │   └── <website source files>
│   └── Replit/
│       └── <website source files>

├── data_output/           # Extracted data from websites
│   ├── images/
│   │   ├── images_metadata.csv
│   │   └── <image files>
│   ├── styles/
│   │   └── extracted_styles.csv
│   └── text/
│       ├── all_user_facing_text.csv
│       └── people_related_text.csv

├── functions/             # Helper functions for data extraction
│   └── <python modules>

├── main.py                # Main script to run the extraction pipeline
├── __init__.py
└── README.md

