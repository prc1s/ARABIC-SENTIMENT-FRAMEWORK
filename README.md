# Arabic Sentiment Framework

Notebook-first research repository for Arabic sentiment analysis across three tasks:

- SLSA: single-label sentiment classification with `Positive`, `Negative`, and `Mixed`
- Unconditioned ABSA: extract aspect categories and polarities from a review
- Conditioned ABSA: predict sentiment polarity for a review when the aspect category is already given

The repo combines:

- a small modular preprocessing pipeline in `src/`
- prompt-engineering experiments with `ALLAM-7B`
- parameter-efficient fine-tuning (LoRA/PEFT) on `ALLAM-7B`
- lightweight retrieval-augmented generation (RAG)
- encoder baselines with mBERT and AraBERT

Most of the actual experimentation lives in notebooks. The code under `src/` currently covers data preprocessing plus post-processing utilities for raw SLSA experiment logs.

## What Is In The Repo

- `src/arabic_sentiment/...`: modular dataset preprocessing, config loading, and raw-output cleanup utilities
- `main.py`: runs preprocessing end to end
- `config/config.yaml`, `params.yaml`, `schema.yaml`: dataset paths, split parameters, and schema definitions
- `notebooks/`: the full research workflow, now grouped by stage (`preprocessing/`, `prompt_engineering/`, `peft/`, `rag/`, `mbert/`, `arabert/`)
- `artifacts/data/processed/`: generated JSONL datasets
- `artifacts/results/`: saved evaluation outputs
- `artifacts/analysis/raw/`: saved raw text logs from SLSA prompt-engineering and PEFT runs
- `artifacts/analysis/preprocessed/`: cleaned JSON extracted from those raw logs for downstream analysis
- `model/ALLAM-7B/`: local checkpoint files for the generative model
- `mlflow_runs/` and `mlflow.db`: local tracking artifacts for SLSA LoRA tuning

This repository is notebook- and script-driven; there is no packaged application or service entrypoint in the current tree.

## Tasks And Datasets

### 1. SLSA

Single-label sentiment classification over Arabic reviews.

- Raw source used by the pipeline: `raw_datasets/ar_reviews_100k.tsv`
- Processed format:

```json
{"text": "....", "label": "Positive"}
```

- Current processed splits:

| Split | Size |
| --- | ---: |
| `slsa_train_big.jsonl` | 24000 |
| `slsa_train_small.jsonl` | 3000 |
| `slsa_dev.jsonl` | 3000 |
| `slsa_test.jsonl` | 3001 |

- Observed label balance is close to uniform in the saved processed files.
- The preprocessing code shuffles the raw TSV, truncates it to `30001` rows, then performs stratified splitting.

### 2. ABSA

Aspect-based sentiment analysis over Arabic hotel reviews from SemEval 2016 Task 5 SB2-style XML.

- Raw sources used by the pipeline:
  - `raw_datasets/SemEval2016_arabic/SemEval2016_arabic/AR_Hotels_Train_SB2.xml`
  - `raw_datasets/SemEval2016_arabic/SemEval2016_arabic/AR_HOTE_SB2_TEST.xml.gold`
- Processed format:

```json
{
  "rid": "336",
  "text": "....",
  "labels": [
    {"category": "ROOMS#QUALITY", "polarity": "positive"},
    {"category": "SERVICE#GENERAL", "polarity": "positive"}
  ]
}
```

- Polarity distribution in saved processed data is imbalanced toward `positive`, with `conflict` very rare.
- The current preprocessing code creates the ABSA train/dev split with a fixed seed from `params.yaml`, so rerunning preprocessing reproduces the same partition.

### Other Raw Files Present

The repository also contains:

- `raw_datasets/ArSAS.txt`
- `raw_datasets/Arabic_Laptop_Reviews.xml`
- `raw_datasets/reviews.tsv`

These are useful context for future work, but they are not wired into `config/config.yaml` and are not used by `main.py`.

## Repository Flow

The notebook numbering tells the story of the project:

- `notebooks/preprocessing/0.0_raw_data_inspection.ipynb`
  - initial raw-data inspection
- `notebooks/preprocessing/1.0_data_preprocessing.ipynb`
  - early preprocessing work
- `notebooks/preprocessing/1.1_modularisation.ipynb`
  - moves preprocessing into `src/`
- `notebooks/prompt_engineering/2.0_allam_prompt_engineering_slsa.ipynb`
  - prompt-engineering baseline for SLSA
- `notebooks/prompt_engineering/2.1_prompt_engineering_unconditioned_absa.ipynb`
  - prompt-engineering baseline for unconditioned ABSA
- `notebooks/prompt_engineering/2.2_prompt_engineering_conditioned_absa.ipynb`
  - conditioned ABSA prompt setup
- `notebooks/peft/3.0_hyperparameter_tunning_slsa.ipynb`
  - LoRA hyperparameter tuning for SLSA with MLflow
- `notebooks/peft/3.1_slsa_small_train_peft.ipynb`
  - LoRA fine-tuning on small SLSA train split
- `notebooks/peft/3.2_slsa_big_train_peft.ipynb`
  - LoRA fine-tuning on big SLSA train split
- `notebooks/peft/3.3_unconditioned_absa_peft.ipynb`
  - LoRA fine-tuning for unconditioned ABSA
- `notebooks/peft/3.4_conditioned_absa_peft.ipynb`
  - LoRA fine-tuning for conditioned ABSA
- `notebooks/rag/4.0_rag_slsa_train_big.ipynb`
  - RAG for SLSA using the big train split
- `notebooks/rag/4.1_rag_slsa_train_small.ipynb`
  - RAG for SLSA using the small train split
- `notebooks/rag/4.2_rag_unconditioned_absa.ipynb`
  - RAG for unconditioned ABSA
- `notebooks/rag/4.3_rag_conditioned_absa.ipynb`
  - RAG for conditioned ABSA
- `notebooks/rag/5.1_rag_with_fine_tuned_model_absa.ipynb`
  - hybrid retrieval plus fine-tuned model for ABSA
- `notebooks/mbert/6.0.0` to `notebooks/mbert/6.0.3`
  - mBERT baselines for SLSA, unconditioned ABSA, and conditioned ABSA
- `notebooks/arabert/6.1.0` to `notebooks/arabert/6.1.3`
  - AraBERT baselines for SLSA, unconditioned ABSA, and conditioned ABSA

The saved MLflow experiment is `slsa_allam_lora_hpt` under `mlflow_runs/928368689365027864/` and contains 16 tracked runs.

## Results Snapshot
# FIND ALL ARTIFACTS INCLUDING ADAPTERS,CHECKPOINTS,ETC CAN BE FOUND HERE: https://drive.google.com/drive/folders/1obWpjG4kllEfCg2QRs_GL1sOQvG9qIWx?usp=sharing
All numbers below are copied from the JSON artifacts under `artifacts/results/`.

### SLSA

| Family | Run | Accuracy | Macro-F1 | Invalid JSON |
| --- | --- | ---: | ---: | ---: |
| Prompting | Zero-shot | 0.4625 | 0.4449 | 26 |
| RAG | Small train | 0.6571 | 0.6441 | 3 |
| RAG | Big train | 0.6658 | 0.6537 | 2 |
| mBERT | Big train | 0.7058 | 0.7076 | - |
| AraBERT | Big train | 0.7421 | 0.7431 | - |
| ALLAM LoRA | Big train | 0.7607 | 0.7637 | 71 |

Takeaways:

- The best saved SLSA run is `ALLAM LoRA` on the big train split.
- `AraBERT` is the strongest encoder baseline.
- Prompting is much weaker than fine-tuning on the test set.
- In the saved prompt artifacts, zero-shot beats three-shot and five-shot on SLSA.
- Increasing LoRA training data improves both classification quality and structured-output reliability. Invalid JSON drops from `375/3001` on small-train LoRA to `71/3001` on big-train LoRA.

### Unconditioned ABSA

| Family | Run | Precision | Recall | Micro-F1 | Invalid JSON |
| --- | --- | ---: | ---: | ---: | ---: |
| Prompting | Zero-shot | 0.3668 | 0.3304 | 0.3476 | 0 |
| Prompting | Five-shot | 0.5997 | 0.3638 | 0.4528 | 0 |
| RAG | Retrieval baseline | 0.5542 | 0.3981 | 0.4633 | 0 |
| mBERT pipeline | Saved test run | 0.7560 | 0.3188 | 0.4485 | - |
| AraBERT pipeline | Saved test run | 0.7655 | 0.3207 | 0.4520 | - |
| Hybrid | RAG + LoRA | 0.6740 | 0.6372 | 0.6551 | 0 |
| ALLAM LoRA | Saved test run | 0.6770 | 0.6460 | 0.6611 | 1 |

Takeaways:

- Unconditioned ABSA is the hardest task in the repo for pure prompting.
- Few-shot prompting helps here, unlike SLSA.
- `ALLAM LoRA` is the best saved method, with the hybrid `RAG + LoRA` run very close behind.
- The encoder pipelines achieve good precision but much lower recall, which holds their Micro-F1 near the best prompt baseline rather than the best generative fine-tuned runs.

### Conditioned ABSA

All conditioned ABSA experiments use the same 452-review test split. The saved conditioned ABSA artifacts differ only in how that same test set is logged:

- prompt/RAG/ALLAM LoRA result files report `n = 452`
- mBERT/AraBERT result files first expand those 452 reviews into one row per aspect-polarity instance, which produces `2158` expanded rows in the saved artifact

This is not a different test set. For conditioned ABSA, the real test-set size is always `452` reviews; `2158` is just the expanded aspect-level row count created when the encoder notebooks separate each review into multiple aspect examples.

#### Generative runs

| Family | Run | Accuracy | Macro-F1 | Invalid JSON |
| --- | --- | ---: | ---: | ---: |
| Prompting | Zero-shot | 0.7210 | 0.3844 | 0 |
| Prompting | Five-shot | 0.7206 | 0.4086 | 0 |
| RAG | 1-shot | 0.6900 | 0.3929 | 0 |
| RAG | 3-shot | 0.5181 | 0.3275 | 0 |
| ALLAM LoRA | Saved test run | 0.8258 | 0.4548 | 0 |

#### Encoder runs

| Family | Run | Accuracy | Macro-F1 | Test Reviews | Expanded Aspect Rows |
| --- | --- | ---: | ---: | ---: | ---: |
| mBERT | Saved test run | 0.8443 | 0.4353 | 452 | 2158 |
| AraBERT | Saved test run | 0.8438 | 0.4737 | 452 | 2158 |

Takeaways:

- Within the generative family, `ALLAM LoRA` is clearly the strongest conditioned ABSA run.
- Five-shot prompting improves over zero-shot for conditioned ABSA, but not enough to catch LoRA.
- The notebook notes also conclude that RAG adds little benefit here and can hurt because of retrieval noise or leakage.
- `AraBERT` is the strongest saved encoder baseline for conditioned ABSA.
- When reading the saved encoder JSON files, treat `2158` as the number of expanded aspect-level evaluation rows, not the number of ABSA test reviews.

## Overall Analysis

Across the saved artifacts and notebook notes, a consistent pattern shows up:

- Fine-tuning beats prompting on every major task in the repository.
- More data helps not just semantic accuracy, but also JSON format adherence for generative methods.
- RAG is mixed: it can be competitive for SLSA and slightly improve unconditioned ABSA over prompting, but it does not beat the best fine-tuned runs and can degrade conditioned ABSA.
- AraBERT is the strongest non-generative baseline in most places.
- Class imbalance is still visible, especially in ABSA, where accuracy is much higher than macro-F1 for conditioned runs.

## Code Structure

The modular code path is small and easy to trace:

- `src/arabic_sentiment/config/configuration.py`
  - loads YAML config, params, and schema
- `src/arabic_sentiment/entity/config_entity.py`
  - defines the dataclass passed into preprocessing
- `src/arabic_sentiment/components/data_preprocessing.py`
  - transforms the SLSA TSV and SemEval XML into JSONL files
- `src/arabic_sentiment/components/2.0_preprocessing_raw_slsa_prompt_engineering_output_logs.py`
  - parses raw SLSA prompt-engineering logs into structured JSON under `artifacts/analysis/preprocessed/2.0_prompt_engineering/`
- `src/arabic_sentiment/components/3_preprocessing_raw_slsa_peft_outputs.py`
  - parses raw SLSA PEFT logs into structured JSON under `artifacts/analysis/preprocessed/3_slsa_peft/`
- `src/arabic_sentiment/pipeline/data_preprocessing_pipeline.py`
  - wires config to the component
- `main.py`
  - runs the dataset preprocessing pipeline

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pip install scikit-learn
```

`scikit-learn` is required by `src/arabic_sentiment/components/data_preprocessing.py` but is not currently listed in `requirements.txt`.

If you want to work through the notebooks locally, also make sure Jupyter is available:

```bash
pip install notebook ipykernel
```

## Preprocess The Data

Run:

```bash
python main.py
```

This generates:

- `artifacts/data/processed/slsa/slsa_train_big.jsonl`
- `artifacts/data/processed/slsa/slsa_train_small.jsonl`
- `artifacts/data/processed/slsa/slsa_dev.jsonl`
- `artifacts/data/processed/slsa/slsa_test.jsonl`
- `artifacts/data/processed/absa/absa_train_big.jsonl`
- `artifacts/data/processed/absa/absa_dev.jsonl`
- `artifacts/data/processed/absa/absa_test.jsonl`

The command runs successfully in the current workspace.

## Running The Experiments

The experiments are primarily notebook-driven.

Important notes before running them:

- Many notebooks were authored in Colab and still contain hard-coded paths like `drive/MyDrive/FYP/...` and `/content/drive/MyDrive/FYP/...`.
- If you want to run locally, replace those paths with this repository's local paths.
- The local ALLAM checkpoint already present in this repo is `model/ALLAM-7B/`.
- Results are already organized under `artifacts/results/slsa_results/` and `artifacts/results/absa_results/`.
- Raw generation logs and cleaned analysis files from newer SLSA experiments live under `artifacts/analysis/raw/` and `artifacts/analysis/preprocessed/`.

A reasonable local path mapping is:

- `drive/MyDrive/FYP/ALLAM-7B` -> `model/ALLAM-7B`
- `drive/MyDrive/FYP/slsa/...` -> `artifacts/results/slsa_results/...`
- `drive/MyDrive/FYP/absa/...` -> `artifacts/results/absa_results/...`

## Preprocess Raw Experiment Logs

Two standalone scripts under `src/arabic_sentiment/components/` convert saved raw SLSA outputs into analysis-ready JSON:

- `python src/arabic_sentiment/components/2.0_preprocessing_raw_slsa_prompt_engineering_output_logs.py`
  - reads `artifacts/analysis/raw/2.0_*Shot_raw_outputs.txt`
  - writes cleaned files under `artifacts/analysis/preprocessed/2.0_prompt_engineering/`
- `python src/arabic_sentiment/components/3_preprocessing_raw_slsa_peft_outputs.py`
  - reads `artifacts/analysis/raw/3.1_raw_outputs.txt` and `artifacts/analysis/raw/3.2_raw_outputs.txt`
  - writes cleaned files under `artifacts/analysis/preprocessed/3_slsa_peft/`

These utilities are separate from `main.py`; they post-process already-generated experiment logs rather than rebuild the core datasets.
