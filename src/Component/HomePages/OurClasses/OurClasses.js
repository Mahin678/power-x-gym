import React from 'react';
import Footer from '../../Footer/Footer';
import OutPageMenu from '../../OutPageMenu/OutPageMenu';
import './OurClasses.scss';
const OurClasses = () => {
	return (
		<>
			<OutPageMenu>
				<h1 className="display-4">OUR CLASSES</h1>
			</OutPageMenu>
			<section className="ourClasses">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mt-5">
							<div className="training-card">
								<img
									className="img-fluid"
									src="https://i.imgur.com/5JNdWnW.png"
									alt=""
								/>
								<button>
									PSYCHO TRAINING <span className="h6">🠮</span>
								</button>
							</div>
						</div>
						<div className="col-lg-4 mt-5">
							<div className="training-card">
								<img
									className="img-fluid"
									src="https://i.imgur.com/OfCk3Kc.jpg"
									alt=""
								/>
								<button>
									SELF DEFENSE <span className="h6">🠮</span>
								</button>
							</div>
						</div>
						<div className="col-lg-4 mt-5">
							<div className="training-card">
								<img
									className="img-fluid"
									src="https://i.imgur.com/7fbXKQU.jpg"
									alt=""
								/>
								<button>
									ADVANCE GYM <span className="h6">🠮</span>
								</button>
							</div>
						</div>
						<div className="col-lg-4 mt-5">
							<div className="training-card">
								<img
									className="img-fluid"
									src="https://i.imgur.com/oRt3ogz.jpg"
									alt=""
								/>
								<button>
									ADVANCE GYM <span className="h6">🠮</span>
								</button>
							</div>
						</div>
						<div className="col-lg-4 mt-5">
							<div className="training-card">
								<img
									className="img-fluid"
									src="https://i.imgur.com/I2bedCk.jpg"
									alt=""
								/>
								<button>
									ADVANCE GYM <span className="h6">🠮</span>
								</button>
							</div>
						</div>
						<div className="col-lg-4 mt-5">
							<div className="training-card">
								<img
									className="img-fluid"
									src="https://i.imgur.com/Uia1amW.jpg"
									alt=""
								/>
								<button>
									ADVANCE GYM <span className="h6">🠮</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default OurClasses;
