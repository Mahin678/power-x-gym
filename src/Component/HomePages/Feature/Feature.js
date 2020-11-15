import React from 'react';
import './Feature.scss';
const Feature = () => {
	return (
		<section className="feature">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="custom-features1">
							{/* <img
                        className="img-fluid"
                        src="https://i.imgur.com/joH8VvA.jpg"
                        alt="feature-img"
                    /> */}
							<div className="features-details">
								<img
									className="img-fluid"
									src="https://i.imgur.com/tl8Dhg9.png"
									alt="features-logo1"
								/>
								<h3>PROGRESSION</h3>
								<p>
									This is a longer card with supporting text below as a
									natural lead-in to additional content. This content
									is a little bit longer.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="custom-features2">
							{/* <img
                        className="img-fluid"
                        src="https://i.imgur.com/CZPtanj.jpg"
                        alt="feature-img"
                    /> */}
							<div className="features-details">
								<img
									className="img-fluid"
									src="https://i.imgur.com/hKff9W6.png"
									alt="features-logo2"
								/>
								<h3>WORKOUT</h3>
								<p>
									This is a longer card with supporting text below as a
									natural lead-in to additional content. This content
									is a little bit longer.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="custom-features3">
							{/* <img
                        className="img-fluid"
                        src="https://i.imgur.com/LO3KKqF.jpg"
                        alt="feature-img"
                    /> */}
							<div className="features-details">
								<img
									className="img-fluid"
									src="https://i.imgur.com/0dY9Q41.png"
									alt="features-logo2"
								/>
								<h3>NUTRITION</h3>
								<p>
									This is a longer card with supporting text below as a
									natural lead-in to additional content. This content
									is a little bit longer.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
