import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.scss";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Logements from "./pages/Logements.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Error from "./pages/Error.js";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='containerSize'>
        <Header />
          <main className='mainSize'>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/logements/:id" element={<Logements />} />
                  <Route path="*" element={<Error />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
