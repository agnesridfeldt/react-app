import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="header-content">
                <div className="header-links">
                    <a href="https://www.goodreads.com/author/show/153394.Suzanne_Collins" className="fa fa-bookmark-o"></a>
                    <a href="https://www.amazon.com/Books-Suzanne-Collins/s?rh=n%3A283155%2Cp_27%3ASuzanne+Collins"
                        className="fa fa-amazon"></a>
                    <a href="https://en.wikipedia.org/wiki/Suzanne_Collins" className="fa fa-wikipedia-w"></a>
                </div>

                <div className="header">
                    <a href="index.html">
                        {/* Varför ufnkar inte detta? */}
                        <img src={require("../images/logo.png")} alt="Logo. Suzanne Collins signature." className="logo"/>                    </a>
                    <img src="images/print_logo.png" alt="Print logo. Suzanne Collins signature." className="logo-print" />
                </div>

                <nav className="menu">
                    <a href="index.html" className="active">Home</a>
                    <a href="books.html">Books</a>
                    <a href="about.html">About</a>
                    <a href="timeline.html">Timeline</a>
                    <a href="interview.html">Interview</a>
                </nav>

                <div id="hamburger-menu">
                    <a href="index.html" id="menu-text">
                        <span className="menu-text">MENU</span>
                    </a>

                    <input className="checkbox" type="checkbox" name="hamburger-navbar-checkbox" id="hamburger-navbar-checkbox" />
                    <label htmlFor="hamburger-navbar-checkbox" id="hamburger-navbar-icon">
                        <span className="line" id="line1"></span>
                        <span className="line" id="line2"></span>
                        <span className="line" id="line3"></span>
                    </label>

                    <nav id="hamburger-navbar">
                        <ul id="hamburger-main-navbar">
                            <li><a href="index.html" className="active">Home</a></li>
                            <li><a href="books.html">Books</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="timeline.html">Timeline</a></li>
                            <li><a href="interview.html">Interview</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;