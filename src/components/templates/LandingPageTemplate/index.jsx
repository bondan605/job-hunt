import React from "react";
import Navbar from "../../organisms/Navbar";
import Footer from "../../organisms/Footer";
import { useLocation } from "react-router-dom";

export default function LandingPageTemplate({ children }) {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" && <div className="bg-landingpage"></div>}
      <Navbar />
      <div id="content" style={{ padding: "0 124px" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
