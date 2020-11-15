import React from 'react';
import './Footer.scss';
const Footer = () => {
	return (
		<div>
			<footer className=" footer-home mt-5 p-3 pb-5 text-light">
				<div className="container  mb-5 pb-5">
					<div className="row ">
						<div className="col-lg-2">
							<h4 className="footer-text text-uppercase">
								Power <span>X</span>
							</h4>
						</div>
						<div className="col-lg-10   ">
							<div className="row">
								<div className="col-lg-3">
									<h5>Need Help</h5>
									<h6>Email Support </h6>
									<h6>Live Chat</h6>
									<h6>Gift Certificates</h6>
									<h6>Send Us Feedback</h6>
								</div>
								<div className="col-lg-3">
									<div>
										<h5>Digital Resources</h5>
										<h6>Articles</h6>
										<h6>E-books</h6>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="footer-icon">
										<h5>Connect with Us</h5>
										<h6>
											<span>
												<a href="/">
													<img
														className="img-fluid"
														src="https://i.imgur.com/rxUgt29.png"
														alt="facebook"
													/>
												</a>
											</span>
											<span>
												<a href="/">
													<img
														className="img-fluid"
														src="https://i.imgur.com/SZr5rdH.png"
														alt="Instragram"
													/>
												</a>
											</span>
											<span>
												<a href="/">
													<img
														className="img-fluid"
														src="https://i.imgur.com/GXiPsfh.png"
														alt="Twitter"
													/>
												</a>
											</span>
											<span>
												<a href="/">
													<img
														className="img-fluid"
														src="https://i.imgur.com/yUOESkG.png"
														alt="whats-app"
													/>
												</a>
											</span>
											<span>
												<a href="/">
													<img
														className="img-fluid"
														src="https://i.imgur.com/H40Op9Q.png"
														alt="youtube"
													/>
												</a>
											</span>
										</h6>
										<h6>Forum</h6>
									</div>
								</div>
								<div className="col-lg-3">
									<h5>Join Our Newsletter</h5>
									<p>
										Get exclusive news, features, and updates from The
										Shredder Weight Loss Academy.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center pt-3 mt-5 text-muted">
					<p>Copyright @2020 All Right Reserved</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
