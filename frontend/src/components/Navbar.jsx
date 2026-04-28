import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="flex items-center gap-2 text-xl font-semibold">
          <Newspaper />
          Intelligent News Images Analysis
        </h1>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
        </div>

      </div>
    </div>
  );
}