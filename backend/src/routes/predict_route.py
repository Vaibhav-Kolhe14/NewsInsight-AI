from fastapi import APIRouter, UploadFile, File
import shutil
from src.services.predict_service import predict_pipeline

router = APIRouter()

@router.post("/predict")

async def predict(file: UploadFile = File(...)):

    path = f"temp_{file.filename}"

    with open(path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    category, summary, score = predict_pipeline(path)

    return {
    "category": category,
    "summary": summary,
    "confidence_score": round(score * 100, 2),
    "match": True if score > 0.25 else False
}