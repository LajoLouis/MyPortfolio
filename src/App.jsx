import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-zinc-100 m-0 p-0">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
