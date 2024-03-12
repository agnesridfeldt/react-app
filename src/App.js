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
      <Router>
        <Header />
        <Routes>
          <Route exact path="/index.html" element={<Home />} />
          <Route exact path="/books.html" element={<Books />} />
          <Route exact path="/about.html" element={<About />} />
          <Route exact path="/timeline.html" element={<Timeline />} />
          <Route exact path="/interview.html" element={<Interview />} />
          <Route exact path="/extra.html" element={<Extra />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
