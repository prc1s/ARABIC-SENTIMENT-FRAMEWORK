from src.arabic_sentiment.components.data_preprocessing import DataPreprocessing
from src.arabic_sentiment.config.configuration import ConfigurationManager

class DataPreprocessingPipeline():
    def __init__(self):
        pass

    def initiate_data_preprocessing(self):
        config = ConfigurationManager()
        data_preprocessing_config = config.get_data_preprocessing_config()
        data_preprocessing = DataPreprocessing(data_preprocessing_config)
        data_preprocessing.preprocess_data()