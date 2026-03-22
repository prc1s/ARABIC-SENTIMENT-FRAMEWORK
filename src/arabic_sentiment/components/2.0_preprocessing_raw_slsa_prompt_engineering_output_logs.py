import re
import json
from pathlib import Path

One_Shot_INPUT_FILE = "../../../artifacts/analysis/raw/2.0_1Shot_raw_outputs.txt"
One_Shot_OUTPUT_FILE = "../../../artifacts/analysis/preprocessed/2.0_prompt_engineering/processed_2.0_1Shot_outputs.json"

Three_Shot_INPUT_FILE = "../../../artifacts/analysis/raw/2.0_3Shot_raw_outputs.txt"
Three_Shot_OUTPUT_FILE = "../../../artifacts/analysis/preprocessed/2.0_prompt_engineering/processed_2.0_3Shot_outputs.json"

Five_Shot_INPUT_FILE = "../../../artifacts/analysis/raw/2.0_5Shot_raw_outputs.txt"
Five_Shot_OUTPUT_FILE = "../../../artifacts/analysis/preprocessed/2.0_prompt_engineering/processed_2.0_5Shot_outputs.json"


def clean_label(label: str) -> str:
    if not label:
        return ""
    label = label.strip().lower()
    label = re.sub(r'[^a-z]', '', label)
    allowed = {"positive", "negative", "mixed", "none"}
    return label if label in allowed else label


def clean_raw_output(raw: str) -> str:
    if not raw:
        return ""
    raw = raw.strip()
    raw = raw.replace("▁", " ")
    raw = raw.replace("<0x0A>", "\n")
    raw = re.sub(r'\s+', ' ', raw).strip()
    return raw


def extract_raw_label(raw: str) -> str:
    cleaned = clean_raw_output(raw).lower()
    compact = re.sub(r'[^a-z]', '', cleaned)

    for label in ["positive", "negative", "mixed", "none"]:
        if label in compact:
            return label
    return ""


def extract_entries(text: str):
    pattern = re.compile(
        r"المراجعة:\s*(.*?)\s*"
        r"pred:\s*([^\n\r]+)\s*"
        r"real:\s*([^\n\r]+)\s*"
        r"(?:[\s\S]*?)?"
        r"raw:\s*(.*?)(?=\n\s*prompt:|\Z)",
        re.DOTALL | re.IGNORECASE
    )

    results = []

    for match in pattern.finditer(text):
        review_text = match.group(1).strip()
        predicted = clean_label(match.group(2))
        actual = clean_label(match.group(3))
        raw_output = clean_raw_output(match.group(4))

        review_text = re.sub(r'\n?100%.*', '', review_text).strip()

        results.append({
            "text": review_text,
            "actual": actual,
            "predicted": predicted,
            "raw_output": raw_output,
        })

    return results


def main():
    raw_1shot_text = Path(One_Shot_INPUT_FILE).read_text(encoding="utf-8")
    one_shot_rows = extract_entries(raw_1shot_text)

    Path(One_Shot_OUTPUT_FILE).write_text(
        json.dumps(one_shot_rows, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )

    raw_3shot_text = Path(Three_Shot_INPUT_FILE).read_text(encoding="utf-8")
    three_shot_rows = extract_entries(raw_3shot_text)

    Path(Three_Shot_OUTPUT_FILE).write_text(
        json.dumps(three_shot_rows, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )

    raw_5shot_text = Path(Five_Shot_INPUT_FILE).read_text(encoding="utf-8")
    five_shot_rows = extract_entries(raw_5shot_text)

    Path(Five_Shot_OUTPUT_FILE).write_text(
        json.dumps(five_shot_rows, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )




if __name__ == "__main__":
    main()