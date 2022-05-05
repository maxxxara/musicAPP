import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const Header = () => {
	return(
		<header>
			<div className="container">
				<div className="header__content">
					<div className="header__logo">
						<h3>LOGO</h3>
					</div>
					<nav className="header__nav">
						<ul className="header__nav-list">
							<li className="header__nav-item">
								<Link to="/" className="header__nav-link">Home</Link>
							</li>
							<li className="header__nav-item">
								<Link to="/" className="header__nav-link">Musics</Link>
							</li>
							<li className="header__nav-item">
								<Link to="/about" className="header__nav-link">About</Link>
							</li>
							<li className="header__nav-item">
								<Link to="/contact" className="header__nav-link">Contact</Link>
							</li>
						</ul>
					</nav>
					<div className="header__button">
						<button className="header__button-btn">Try Now</button>
					</div>
				</div>
			</div>
		</header>
	)
};


export default Header;