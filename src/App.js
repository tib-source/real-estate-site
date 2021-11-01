import Navbar from "./components /Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components /Hero";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components /Dropdown";
import { useState } from "react";

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
    </Router>
  );
}

export default App;
