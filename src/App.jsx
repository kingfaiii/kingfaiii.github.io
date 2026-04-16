import Home from "./views/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./views/Portfolio";
import Skills from "./views/Skills";
import Contact from "./views/Contact";
import About from "./views/About";
import Experience from "./views/Experience";
import { useDarkMode } from "./context/DarkModeContext";

const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className={`${isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} transition-colors duration-300`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
