from dataclasses import dataclass
from pathlib import Path
@dataclass
class DataPreprocessingConfig:
    root_dir: Path
    slsa_data_local_path: Path
    absa_data_train_local_path: Path
    absa_data_test_gold_local_path: Path
    save_train_full_slsa_data: Path
    save_train_full_absa_data: Path
    save_train_small_slsa_data: Path
    save_dev_slsa_data: Path
    save_dev_absa_data: Path
    save_test_slsa_data: Path
    save_test_absa_data: Path
    slsa_label_column: str
    slsa_text_column: str
    slsa_seed: int
    slsa_test_ratio: float
    slsa_dev_ratio: float
    slsa_small_n: int
    absa_seed: int
    absa_dev_ratio: float
