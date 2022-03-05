import React from 'react';
import photo from "../img/photo.jpg";
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
          <nav className="nav">
            <div className="profile">
                <img src={photo} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/work" exact activeClassName="active">
                        My Work
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact Me
                    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2022 Sandra. All Rights Reserved.</p>
            </footer>
        </nav>
    </div>
  )
}

export default NavBar;