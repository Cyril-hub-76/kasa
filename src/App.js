import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Logements from "./pages/Logements.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";

export default function App() {
  return (
    <div className="containerSize">
      <Header />
      <main className="mainSize">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Logements />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
