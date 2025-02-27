import React from "react";
import "../styles/About.css"; // Importera CSS-filen
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>Om Mig</h1>
      <p>
        Hej! Jag heter Andy Mehmed och är en informationsarkitekt med en passion för frontend-utveckling och UX-design. 
        Jag älskar att skapa interaktiva och lättanvända webbapplikationer. 
      </p>
      <p>
        Under min utbildning har jag arbetat med React, TypeScript och API-integrationer för att bygga smarta lösningar.
        Jag är intresserad av att fortsätta utveckla min expertis inom design, tillgänglighet och optimering av digitala tjänster.
      </p>
      
      <h2>✨ Mina färdigheter:</h2>
      <ul>
        <li>✅ React & JavaScript</li>
        <li>✅ TypeScript</li>
        <li>✅ UX/UI Design</li>
        <li>✅ API-integration</li>
        <li>✅ Versionshantering med Git</li>
      </ul>

      <Link to="/" className="back-button">⬅ Tillbaka till startsidan</Link>
    </div>
  );
};

export default AboutPage;
