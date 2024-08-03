import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Themes from "./Components/Themes/Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Suspense fallback={<div className="box">
        <div className="loader"></div>
      </div>}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
