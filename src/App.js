import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Interview from "./pages/Interview";
import Extra from "./pages/Extra";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.cdnfonts.com/css/amagro');
        @import url('https://fonts.cdnfonts.com/css/proxima-nova-condensed');
      </style>

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
