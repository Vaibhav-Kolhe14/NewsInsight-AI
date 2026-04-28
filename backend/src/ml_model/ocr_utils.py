import os
from dotenv import load_dotenv
import pytesseract
import cv2


load_dotenv()


pytesseract.pytesseract.tesseract_cmd = os.getenv("TESSERACT_PATH")

def extract_text(image_path):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray)
    return text









