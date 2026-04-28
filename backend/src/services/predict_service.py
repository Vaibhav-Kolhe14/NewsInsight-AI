import torch
from transformers import BertTokenizer, BertForSequenceClassification
from src.ml_model.summarize import generate_summary
from src.ml_model.ocr_utils import extract_text
from src.ml_model.clip_match import compute_similarity

# LOAD ONCE (IMPORTANT)
label_dict = torch.load("src/ml_model/label_dict.pt")
reverse_label_dict = {v:k for k,v in label_dict.items()}

tokenizer = BertTokenizer.from_pretrained("src/ml_model/category_model")
model = BertForSequenceClassification.from_pretrained("src/ml_model/category_model")

def predict_pipeline(image_path):

    ocr_text = extract_text(image_path)

    inputs = tokenizer(ocr_text, return_tensors="pt", truncation=True)
    outputs = model(**inputs)

    pred = torch.argmax(outputs.logits, dim=1).item()
    category = reverse_label_dict[pred]

    summary = generate_summary(ocr_text)

    # 🔥 NEW FEATURE ADDED
    similarity_score = compute_similarity(image_path, summary)

    return category, summary, similarity_score