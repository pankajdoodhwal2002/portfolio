import Header from "./components/Header";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Button from "./Elements/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
