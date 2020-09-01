import React from "react";
function Header() {
    return (<div>
        <header className="jumbotron bg-secondary text-center text-light">
            <h1>Nicholas M. Foreman</h1>

            <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style="background-color: #000000;">
        <a className="navbar-brand" href="index.html">
            <img src="./assets/images/4MAN.JPG" width="60" height="60" className="d-inline-block align-top" alt=""/>
        </a>
        <span className="navbar-brand mb-1 h1">Nicholas M. Foreman</span>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
            <li className="nav-item text-right">
            <a className="nav-link" href="index.html">About</a>
            </li>
            <li className="nav-item text-right">
            <a className="nav-link" href="./assets/portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item text-right">
            <a className="nav-link" href="./assets/contact.html">Contact</a>
            </li>
        </ul>
        </div>
    </nav>

        </header>
    </div>)
}

export default Header;
