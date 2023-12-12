import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import About from "./views/About";
import Experience from "./views/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
};

export default App;
