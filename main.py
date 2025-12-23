from src.arabic_sentiment.pipeline.data_preprocessing_pipeline import DataPreprocessingPipeline
from src.arabic_sentiment.logging import logger
def main():
    try:
        #DATA PREPROCESSING
        data_preprocessing_pipeline = DataPreprocessingPipeline()
        data_preprocessing_pipeline.initiate_data_preprocessing()

    except Exception as e:
        raise e
    

if __name__ == "__main__":
    main()