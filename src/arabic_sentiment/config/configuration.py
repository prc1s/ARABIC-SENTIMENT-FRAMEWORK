from src.arabic_sentiment.constants import CONFIG_PATH,PARAMS_PATH,SCHEMA_PATH
from src.arabic_sentiment.utils.common import create_directories, read_yaml
from src.arabic_sentiment.entity.config_entity import DataPreprocessingConfig
from pathlib import Path
class ConfigurationManager:
    def __init__(self):
        self.config = read_yaml(Path(CONFIG_PATH))
        self.params = read_yaml(Path(PARAMS_PATH))
        self.schema = read_yaml(Path(SCHEMA_PATH))
        create_directories([self.config.artifacts_root])
    
    def get_data_preprocessing_config(self) -> DataPreprocessingConfig:
        config = self.config.data_preprocessing
        params = self.params.data_preprocessing
        schema = self.schema
        create_directories([config.root_dir])
        data_preprocessing_config = DataPreprocessingConfig(
            root_dir= config.root_dir,
            slsa_data_local_path= config.slsa_data_local_path,
            absa_data_train_local_path= config.absa_data_train_local_path,
            absa_data_test_gold_local_path= config.absa_data_test_gold_local_path,
            save_train_full_slsa_data= config.save_train_full_slsa_data,
            save_train_full_absa_data= config.save_train_full_absa_data,
            save_train_small_slsa_data= config.save_train_small_slsa_data,
            save_dev_slsa_data= config.save_dev_slsa_data,
            save_dev_absa_data= config.save_dev_absa_data,
            save_test_slsa_data= config.save_test_slsa_data,
            save_test_absa_data= config.save_test_absa_data,
            slsa_label_column= schema.slsa.columns.label.name,
            slsa_text_column= schema.slsa.columns.text.name,
            slsa_seed= params.slsa.seed,
            slsa_test_ratio= params.slsa.test_ratio,
            slsa_dev_ratio= params.slsa.dev_ratio,
            slsa_small_n= params.slsa.small_n,
            absa_seed= params.absa.seed,
            absa_dev_ratio= params.absa.dev_ratio
        )
        return data_preprocessing_config
