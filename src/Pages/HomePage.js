import React from 'react';
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
            Hello, I am
          <span> Sandra Cheptoo</span>
        </h1>
        <p className="h-sub-text">
          I am an Kenyan based Full Stack Web Developer and UI/UX enthusiast focused on crafting clean and user-friendly experiences.
          As a tenacious programmer, I use continuous iteration to produce results quickly and continuously improve products.
          Besides my work, I love reading, writing, traveling, watching Science Fiction and documentaries.
          Feel free to take a look at my projects on my work page.
        </p>
        <div className="icons">
          <Link to="/facebook" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
          </Link>
          <Link to="https://www.github.com/S-cheptoo" className="icon-holder" >
            <FontAwesomeIcon icon={faGithub} className="icon gh"/>
          </Link>
          <Link to="/linkedin" className="icon-holder">
            <FontAwesomeIcon icon={faLinkedin} className="icon ln"/>
          </Link>
          <Link to="/instagram" className="icon-holder">
            <FontAwesomeIcon icon={faInstagram} className="icon ig" />
          </Link>
        </div>
      </header>
      
    </div>
  )
}

export default HomePage;