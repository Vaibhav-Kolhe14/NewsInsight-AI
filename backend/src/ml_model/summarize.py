from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

print("🔹 Loading summarization model...")

model_name = "sshleifer/distilbart-cnn-12-6"

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

print("✅ Summarizer ready.\n")


def generate_summary(text):

    if not text.strip():
        return "No text available for summarization."

    text = text[:1000]

    inputs = tokenizer(
        text,
        return_tensors="pt",
        max_length=512,
        truncation=True
    )

    summary_ids = model.generate(
        inputs["input_ids"],
        max_length=120,
        min_length=30,
        num_beams=4
    )

    return tokenizer.decode(summary_ids[0], skip_special_tokens=True)