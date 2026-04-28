import { Github, Linkedin, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-center">

        {/* Project Info */}
        <div>
          <h2 className="flex items-center gap-2 font-semibold text-lg text-indigo-700">
            <Newspaper size={20}/>
            NewsInsight AI
          </h2>

          <p className="text-sm text-gray-600 mt-2">
            Intelligent News Image Analysis using Deep Learning,
            OCR and NLP techniques.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-8 text-gray-600">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-indigo-600 transition">
            About
          </Link>

          <Link to="/team" className="hover:text-indigo-600 transition">
            Team
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end gap-6 text-gray-600">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <Github size={22}/>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <Linkedin size={22}/>
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 pb-6">
        © {new Date().getFullYear()} NewsInsight AI • Final Year Project
      </div>

    </footer>
  );
}