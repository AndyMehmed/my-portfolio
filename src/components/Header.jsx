import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <h1>Andy Mehmedovic</h1>
      
      <nav className="nav">
        <Link to="/">Hem</Link>
        <Link to="/about">Om mig</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    </header>
  );
};

export default Header;
