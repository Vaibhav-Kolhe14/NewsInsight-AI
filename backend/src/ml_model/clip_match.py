import torch
import torch.nn.functional as F
from transformers import CLIPProcessor, CLIPModel
from PIL import Image

print("🔹 Loading CLIP model...")

model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

print("✅ CLIP model ready.\n")

def compute_similarity(image_path, text):

    image = Image.open(image_path).convert("RGB")

    inputs = processor(
        text=[text],
        images=image,
        return_tensors="pt",
        padding="max_length",
        truncation=True,
        max_length=77
    )

    outputs = model(**inputs)

    image_embeds = outputs.image_embeds
    text_embeds = outputs.text_embeds

    image_embeds = F.normalize(image_embeds, p=2, dim=-1)
    text_embeds = F.normalize(text_embeds, p=2, dim=-1)

    similarity = torch.matmul(image_embeds, text_embeds.T)

    return similarity.item()