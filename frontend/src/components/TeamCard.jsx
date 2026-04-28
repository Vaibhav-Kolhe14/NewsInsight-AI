import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function TeamCard({ name, image, github, linkedin }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card p-6 text-center">
      {/* PASSPORT IMAGE */}
      <img
        src={image}
        alt={name}
        className="
          w-24 h-24 mx-auto mb-4
          rounded-full
          object-cover
          border-4 border-indigo-200
          shadow-md
        "
      />

      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      <div className="flex justify-center gap-6 mt-5">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          <Github size={22} />
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          <Linkedin size={22} />
        </a>
      </div>
    </motion.div>
  );
}
