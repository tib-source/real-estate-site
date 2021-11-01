import Navbar from "./components /Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components /Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components /Dropdown";
import { useState } from "react";
import InfoSection from "./components /InfoSection";
import { InfoData } from "./data/InfoData";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggleMenu={toggleMenu} />
      {isOpen && <Dropdown toggleMenu={toggleMenu} />}
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </Router>
  );
}

export default App;
