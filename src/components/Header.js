import React from "react";
import { NavLink } from "react-router-dom";

// Import links for header-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';
import { faAmazon, faWikipediaW } from '@fortawesome/free-brands-svg-icons';


class Header extends React.Component {
    render() {
        return (
            <div className="header-content">
                <div className="header-links">
                    <a href="https://www.goodreads.com/author/show/153394.Suzanne_Collins" className="fa fa-bookmark-o">
                        <FontAwesomeIcon icon={farBookmark} />
                    </a>
                    <a href="https://www.amazon.com/Books-Suzanne-Collins/s?rh=n%3A283155%2Cp_27%3ASuzanne+Collins"
                        className="fa fa-amazon">
                        <FontAwesomeIcon icon={faAmazon} />
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Suzanne_Collins" className="fa fa-wikipedia-w">
                        <FontAwesomeIcon icon={faWikipediaW} />
                    </a>
                </div>

                <div className="header">
                    <NavLink to="/index.html">
                        <img src={require("../images/logo.png")} alt="Logo. Suzanne Collins signature." className="logo" />
                    </NavLink>
                    <img src="images/print_logo.png" alt="Print logo. Suzanne Collins signature." className="logo-print" />
                </div>

                <nav className="menu">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/books">Books</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/timeline">Timeline</NavLink>
                    <NavLink to="/interview">Interview</NavLink>
                </nav>

                <div id="hamburger-menu">
                    <NavLink to="/index.html" id="menu-text">
                        <span className="menu-text">MENU</span>
                    </NavLink>

                    <input className="checkbox" type="checkbox" name="hamburger-navbar-checkbox" id="hamburger-navbar-checkbox" />
                    <label htmlFor="hamburger-navbar-checkbox" id="hamburger-navbar-icon">
                        <span className="line" id="line1"></span>
                        <span className="line" id="line2"></span>
                        <span className="line" id="line3"></span>
                    </label>

                    <nav id="hamburger-navbar">
                        <ul id="hamburger-main-navbar">
                            <li><NavLink to="/index.html" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/books.html">Books</NavLink></li>
                            <li><NavLink to="/about.html">About</NavLink></li>
                            <li><NavLink to="/timeline.html">Timeline</NavLink></li>
                            <li><NavLink to="/interview.html">Interview</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
