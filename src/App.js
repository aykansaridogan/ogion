import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import "./styles.css"; // CSS dosyasını içe aktarın

const App = () => {
  useEffect(() => {
    // AdSense scriptini yükle
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5080345026704875";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      // AdSense reklamlarını yükle
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
  }, []);

  useEffect(() => {
    // Reklam birimlerini yükle
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <Router>
      <Header />
      <div className="ad-container">
        <div className="ad ad-left">
          {/* Google AdSense sol üst reklam kodu */}
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5080345026704875"
            data-ad-slot="2599060138" // Kendi reklam slot kodunuzu girin
            data-ad-format="auto"></ins>
        </div>
        <div className="ad ad-right">
          {/* Google AdSense sağ üst reklam kodu */}
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-5080345026704875"
            data-ad-slot="5828144119" // Kendi reklam slot kodunuzu girin
            data-ad-format="auto"></ins>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <br/>
    </Router>
  );
};

export default App;
