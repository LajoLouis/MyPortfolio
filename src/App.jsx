import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Framer from "./components/Framer";

function App() {
  return (
    <>
      <div className="bg-baseColor text-white m-0 p-0 font-Lora">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/f" element={<Framer/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
