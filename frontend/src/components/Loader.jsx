import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="
          w-12 h-12
          border-4
          border-indigo-200
          border-t-indigo-600
          rounded-full
        "
      />

      {/* Text */}
      <p className="mt-4 text-gray-600 font-medium">
        Analyzing Image...
      </p>

    </div>
  );
}