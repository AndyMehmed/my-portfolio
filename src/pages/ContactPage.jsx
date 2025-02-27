import React from "react";
import "../styles/Contact.css"; // Importera CSS-filen
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>📩 Kontakt</h1>
      <p>Vill du samarbeta eller har du några frågor? Hör av dig!</p>

      <h2>📧 E-post:</h2>
      <p><a href="mailto:andy.mehmed@example.com">andy.mehmed@example.com</a></p>

      <h2>🔗 Sociala medier:</h2>
      <p>
        <a href="https://www.linkedin.com/in/andymehmed" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/AndyMehmed" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>

      <h2>📍 Plats:</h2>
      <p>Stockholm, Sverige</p>

      <Link to="/" className="back-button">⬅ Tillbaka till startsidan</Link>
    </div>
  );
};

export default ContactPage;
