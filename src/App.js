import Navbar from "./components /Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Hero from "./components /Hero";
import { SliderData } from "./data/SliderData";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </Router>
  );
}

export default App;
