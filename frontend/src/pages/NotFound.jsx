import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-6">

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="card p-12 text-center max-w-md w-full"
      >

        {/* ICON */}
        <AlertTriangle
          size={60}
          className="mx-auto text-indigo-600 mb-4"
        />

        {/* TITLE */}
        <h1 className="text-6xl font-bold text-indigo-700">
          404
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-600 mt-3 mb-8">
          Oops! The page you are looking for does not exist
          or may have been moved.
        </p>

        {/* BUTTON */}
        <Link
          to="/"
          className="primary-btn inline-block"
        >
          Go Back Home
        </Link>

      </motion.div>

    </div>
  );
}