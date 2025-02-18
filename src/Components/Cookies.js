import React, { useState, useEffect } from "react";
import "./Cookies.css";

const Cookies = () => {
  const [isVisible, setIsVisible] = useState(() => {
    const consent = localStorage.getItem("cookiesConsent");
    return consent !== "true";
  });

  const handleAccept = () => {
    localStorage.setItem("cookiesConsent", "true");
    setIsVisible(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookiesAccepted" });
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="Cookies">
      <div className="Cookies-Content">
        <p className="Cookies-Content-title1">
          ITaborsky.cz používá soubory cookies pro zlepšení Vašeho zážitku.
        </p>
        <p className="Cookies-Content-title2">Souhlasíte s jejich použitím?</p>
        <div className="Cookies-Butts">
          <button className="Cookies-Decline" onClick={handleDecline}>
            Nesouhlasím
          </button>
          <button className="Cookies-Accept" onClick={handleAccept}>
            Souhlasím
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
