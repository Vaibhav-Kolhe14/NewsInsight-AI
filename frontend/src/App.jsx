import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App(){
  return(
    <div className="min-h-screen flex flex-col text-white">

      <Navbar/>

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>

      <Footer/>
      <ToastContainer position="top-right"/>
    </div>
  );
}