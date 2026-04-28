import { Brain, Image, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-indigo-700">
          About Intelligent News Images Analysis
        </h1>

        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          This system intelligently analyzes news images using Artificial
          Intelligence techniques including OCR extraction, NLP-based
          classification, automatic summarization, and image-text similarity
          validation.
        </p>
      </motion.div>

      {/* FEATURE SECTION */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* OCR */}
        <motion.div
          whileHover={{ y: -5 }}
          className="card p-6 text-center"
        >
          <Image
            size={36}
            className="mx-auto text-indigo-600 mb-4"
          />

          <h3 className="font-semibold text-lg">
            OCR Extraction
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Extracts textual information directly from uploaded
            newspaper images using Tesseract OCR.
          </p>
        </motion.div>

        {/* CATEGORY */}
        <motion.div
          whileHover={{ y: -5 }}
          className="card p-6 text-center"
        >
          <Brain
            size={36}
            className="mx-auto text-indigo-600 mb-4"
          />

          <h3 className="font-semibold text-lg">
            Category Prediction
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Uses a fine-tuned BERT deep learning model to
            automatically classify news into categories.
          </p>
        </motion.div>

        {/* SUMMARY */}
        <motion.div
          whileHover={{ y: -5 }}
          className="card p-6 text-center"
        >
          <Sparkles
            size={36}
            className="mx-auto text-indigo-600 mb-4"
          />

          <h3 className="font-semibold text-lg">
            AI Summarization
          </h3>

          <p className="text-gray-600 text-sm mt-2">
            Generates concise summaries using Transformer-based
            NLP summarization models.
          </p>
        </motion.div>

      </div>

      {/* TECH STACK */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="card p-8 mt-10 text-center"
      >
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Technologies Used
        </h2>

        <p className="text-gray-600 leading-relaxed">
          <span className="font-medium">
            FastAPI • React • Tailwind CSS • PyTorch •
            BERT • DistilBART • CLIP • OpenCV •
            Tesseract OCR
          </span>
        </p>
      </motion.div>

    </div>
  );
}