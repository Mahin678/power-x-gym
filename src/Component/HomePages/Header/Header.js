import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from '../../MenuBar/MenuBar';
import './Header.scss';
const Header = () => {
	return (
		<header>
			<div className="header-bg header-bg-custom">
				<MenuBar />
				<div className="header-content  text-left container ">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className=" mt-3 header-details">
								<h1 className="mb-2 mt-3 ml-0">
									THE BEST FITNESS STUDIO <br /> IN TOWN
								</h1>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing
									elit. Facere quo dolorem ex doloribus cumque impedit
									deleniti voluptate deserunt saepe fugit vitae unde
									recusandae quidem et aut perferendis at, in eum.
								</p>
								<Link to="/ourClasses">
									<button className="btn btn-custom-header">
										Join Us
									</button>
								</Link>
							</div>
						</div>
						<div className="col-lg-6 ">
							<div className="header-content-icon mr-auto">
								<div className="containerAnimation">
									<div className="bg"></div>
									<div className="button">
										<a href="" target="_blank">
											<svg
												aria-hidden="true"
												focusable="false"
												data-prefix="fas"
												data-icon="play-circle"
												className="svg-inline--fa fa-play-circle fa-w-16 "
												role="img"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
											>
												<path
													fill="currentColor"
													d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
												></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
