import re
import json
from pathlib import Path

big_slsa_INPUT_FILE = "../../../artifacts/analysis/raw/3.2_raw_outputs.txt"
big_slsa_OUTPUT_FILE = "../../../artifacts/analysis/preprocessed/3_slsa_peft/processed_3.2_big_slsa_outputs.json"

small_slsa_INPUT_FILE = "../../../artifacts/analysis/raw/3.1_raw_outputs.txt"
small_slsa_OUTPUT_FILE = "../../../artifacts/analysis/preprocessed/3_slsa_peft/processed_3.1_small_slsa_outputs.json"


def clean_label(label: str) -> str:
    if not label:
        return ""
    label = label.strip().lower()
    label = re.sub(r'[^a-z]', '', label)
    return label


def clean_raw_output(raw: str) -> str:
    if not raw:
        return ""
    raw = raw.strip()
    raw = raw.replace("▁", " ")
    raw = raw.replace("<0x0A>", "\n")
    raw = re.sub(r'\s+', ' ', raw).strip()
    return raw


def extract_entries(text: str):
    pattern = re.compile(
        r"predictioin:\s*([^\n\r]+)\s*"
        r"raw:\s*(\{.*?\}|[^\n\r]+)\s*"
        r"promot:\s*.*?"
        r"المراجعة:\s*(.*?)\s*"
        r"real:\s*([^\n\r]+)",
        re.DOTALL | re.IGNORECASE
    )

    results = []

    for match in pattern.finditer(text):
        predicted = clean_label(match.group(1))
        raw_output = clean_raw_output(match.group(2))
        review_text = match.group(3).strip()
        actual = clean_label(match.group(4))

        review_text = re.sub(r'\n?\s*\d+%\|.*', '', review_text).strip()

        results.append({
            "text": review_text,
            "actual": actual,
            "predicted": predicted,
            "raw_output": raw_output,
        })

    return results


def main():
    big_slsa = Path(big_slsa_INPUT_FILE).read_text(encoding="utf-8")
    big_slsa_rows = extract_entries(big_slsa)

    Path(big_slsa_OUTPUT_FILE).write_text(
        json.dumps(big_slsa_rows, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )

    small_slsa = Path(small_slsa_INPUT_FILE).read_text(encoding="utf-8")
    small_slsa_rows = extract_entries(small_slsa)

    Path(small_slsa_OUTPUT_FILE).write_text(
        json.dumps(small_slsa_rows, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )


if __name__ == "__main__":
    main()