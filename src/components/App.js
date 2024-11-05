import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, AboutUs, Header, Footer, ContactUs, Shop, ProductInfo } from ".";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductInfo />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
