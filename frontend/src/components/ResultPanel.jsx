import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ResultPanel({ result }) {

  /* ---------- EMPTY STATE ---------- */
  if (!result)
    return (
      <div className="card h-full flex items-center justify-center text-gray-400">
        Upload and analyze an image to view results
      </div>
    );

  return (
    <motion.div
      initial={{ opacity:0, x:20 }}
      animate={{ opacity:1, x:0 }}
      className="space-y-5"
    >

      {/* CATEGORY */}
      <div className="card p-5">
        <h3 className="font-semibold text-gray-700 mb-3">
          Predicted Category
        </h3>

        <span className="
          bg-indigo-100
          text-indigo-700
          px-5 py-2
          rounded-lg
          font-medium
        ">
          {result.category}
        </span>
      </div>

      {/* SUMMARY */}
      <div className="card p-5">
        <h3 className="font-semibold text-gray-700 mb-3">
          Summary
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {result.summary}
        </p>
      </div>

      {/* CONFIDENCE */}
      <div className="card p-5">
        <h3 className="font-semibold text-gray-700 mb-3">
          Confidence Score
        </h3>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${result.confidence_score}%` }}
            transition={{ duration: 0.8 }}
            className="bg-indigo-500 h-3 rounded-full"
          />

        </div>

        <p className="mt-2 text-sm text-gray-600">
          {result.confidence_score}% confidence
        </p>
      </div>

      {/* MATCH RESULT */}
      <div className="card p-5 flex items-center gap-3">

        {result.match ? (
          <>
            <CheckCircle className="text-green-500"/>
            <span className="text-green-600 font-medium">
              Image and article matched
            </span>
          </>
        ) : (
          <>
            <XCircle className="text-red-500"/>
            <span className="text-red-600 font-medium">
              Image and article not matched
            </span>
          </>
        )}

      </div>

    </motion.div>
  );
}