# How to Run Local AI Model in Python Extension

This tutorial will guide you through the process of running a local AI model using NYRA's Python extension.

## Prerequisites

- NYRA framework installed
- Python 3.7 or higher
- Basic knowledge of machine learning concepts

## Step 1: Set up your environment

First, create a new virtual environment and install the required packages:

```bash
python -m venv nyra-ai-env
source nyra-ai-env/bin/activate  # On Windows, use `nyra-ai-env\Scripts\activate`
pip install nyra[ai] torch torchvision

