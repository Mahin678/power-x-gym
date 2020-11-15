import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.scss';
const MenuBar = () => {
	return (
		<nav className="navbar navbar-expand-lg ">
			<div className="container">
				<a className="navbar-brand bold text-light" to="/">
					POWER <span className="footer-text"> X</span>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="/navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Service
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Pricing
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default MenuBar;
