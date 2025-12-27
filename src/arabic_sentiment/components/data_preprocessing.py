from pathlib import Path
import pandas as pd
import json
from sklearn.model_selection import train_test_split
from src.arabic_sentiment.logging import logger
import xml.etree.ElementTree as ET
from src.arabic_sentiment.entity.config_entity import DataPreprocessingConfig
class DataPreprocessing:
    def __init__(self, data_preprocessing_config:DataPreprocessingConfig):
        self.config = data_preprocessing_config

    def slsa_dataset_transform(self, source:Path):
        try:
            logger.info("Initiated slsa dataset transformation")
            source_slsa = source
            df = pd.read_csv(source_slsa, sep="\t", dtype=str)
            shuffled_df = df.sample(n=len(df))
            shuffled_df = shuffled_df[0:30001]
            logger.info("slsa dataset transformation completed")
            return shuffled_df
        except Exception as e:
            raise(e)

    def slsa_train_dev_test_split(self, df:pd.DataFrame):
        try:
            logger.info("Initiated slsa dataset split")
            LABEL_COL = self.config.slsa_label_column
            SEED = self.config.slsa_seed
            TEST_RATIO = self.config.slsa_test_ratio
            DEV_RATIO = self.config.slsa_dev_ratio

            train_big_df, test_df = train_test_split(
                df,
                test_size=TEST_RATIO,
                random_state=SEED,
                stratify=df[LABEL_COL]
            )

            dev_size_relative_to_train = DEV_RATIO / (1 - TEST_RATIO)
            train_big_df, dev_df = train_test_split(
                train_big_df,
                test_size=dev_size_relative_to_train,
                random_state=SEED,
                stratify=train_big_df[LABEL_COL]
            )

            train_small_df = train_big_df.sample(n=self.config.slsa_small_n, random_state=SEED, replace=False)
            train_big_df = train_big_df.sample(len(train_big_df))
            logger.info("slsa dataset split completed")
            return train_big_df, train_small_df, test_df, dev_df
        except Exception as e:
            raise(e)

    def slsa_df_to_jsonl(self,df, text_col, label_col, out_path):
        out_path = Path(out_path)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        try:
            with open(out_path, "w", encoding="utf-8") as f:
                for _, row in df.iterrows():
                    obj = {"text": row[text_col], "label": row[label_col]}
                    f.write(json.dumps(obj, ensure_ascii=False) + "\n")
            logger.info(f"slsa DataFrame has been saved at {out_path}")
        except Exception as e:
            raise(e)
    
    def slsa_dataset_preprocessing(self):
        try:
            logger.info(f"slsa dataset preprocessing initiated")
            source_slsa = self.config.slsa_data_local_path
            df = self.slsa_dataset_transform(Path(source_slsa))
            train_big_df, train_small_df, test_df, dev_df = self.slsa_train_dev_test_split(df)
            LABEL_COL = self.config.slsa_label_column
            TEXT_COL = self.config.slsa_text_column
            self.slsa_df_to_jsonl(train_small_df, text_col=TEXT_COL, label_col=LABEL_COL, out_path=self.config.save_train_small_slsa_data)
            self.slsa_df_to_jsonl(train_big_df, text_col=TEXT_COL, label_col=LABEL_COL, out_path=self.config.save_train_full_slsa_data)
            self.slsa_df_to_jsonl(dev_df, text_col=TEXT_COL, label_col=LABEL_COL, out_path=self.config.save_dev_slsa_data)
            self.slsa_df_to_jsonl(test_df, text_col=TEXT_COL, label_col=LABEL_COL, out_path=self.config.save_test_slsa_data)
            logger.info(f"slsa dataset preprocessing completed")
        except Exception as e:
            raise(e)
    

    def parse_sb2_review_level(self, xml_path):
        try:
            logger.info(f"absa dataset parsing initiated")
            tree = ET.parse(xml_path)
            root = tree.getroot()

            rows = []
            for review in root.findall(".//Review"):
                rid = review.get("rid")

                # Collect review text by concatenating all sentence texts
                sent_texts = []
                for s in review.findall(".//sentences/sentence"):
                    t = s.find("text")
                    if t is not None and t.text:
                        sent_texts.append(t.text.strip())
                full_text = " ".join(sent_texts).strip()

                # Collect review-level opinions
                labels = []
                opinions_block = review.find("Opinions")
                if opinions_block is not None:
                    for op in opinions_block.findall("Opinion"):
                        labels.append({
                            "category": op.get("category"),
                            "polarity": op.get("polarity")
                        })

                rows.append({
                    "rid": rid,
                    "text": full_text,
                    "labels": labels
                })
            logger.info(f"absa dataset parsing completed")
            return rows
        except Exception as e:
            raise(e)

    def absa_rows_save_jsonl(self, rows, out_path: str):
        try:
            out_path = Path(out_path)
            out_path.parent.mkdir(parents=True, exist_ok=True)
            with open(out_path, "w", encoding="utf-8") as f:
                for r in rows:
                    f.write(json.dumps(r, ensure_ascii=False) + "\n")
            logger.info(f"absa DataFrame has been saved at {out_path}")
        except Exception as e:
            raise(e)
    
    def absa_train_dev_split(self,rows, dev_ratio):
        try:
            logger.info("Initiated absa dataset split")
            n = len(rows)
            n_dev = int(n * dev_ratio)
            dev = rows[:n_dev]        
            train = rows[n_dev:]
            logger.info("absa dataset split completed")
            return train, dev
        except Exception as e:
            raise(e)
    def absa_dataset_preprocessing(self):
        try:
            logger.info(f"absa dataset preprocessing initiated")
            train_rows = self.parse_sb2_review_level(self.config.absa_data_train_local_path)
            train_rows, dev_rows = self.absa_train_dev_split(train_rows, dev_ratio=self.config.absa_dev_ratio)

            self.absa_rows_save_jsonl(train_rows, self.config.save_train_full_absa_data)
            self.absa_rows_save_jsonl(dev_rows, self.config.save_dev_absa_data)

            test_rows = self.parse_sb2_review_level(self.config.absa_data_test_gold_local_path)
            self.absa_rows_save_jsonl(test_rows, self.config.save_test_absa_data)
            logger.info(f"absa dataset preprocessing completed")
        except Exception as e:
            raise(e)
    
    def preprocess_data(self):
        try:
            logger.info("Initiated Preprocessing!")
            self.slsa_dataset_preprocessing()
            self.absa_dataset_preprocessing()
            logger.info("Preprocessing Completed!")
        except Exception as e:
            raise(e)