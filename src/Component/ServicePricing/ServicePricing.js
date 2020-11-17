import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link as button, useHistory } from 'react-router-dom';
import {
	personalInfo,
	purchasePackages,
} from '../../Redux/actions/dataActions';
import Footer from '../Footer/Footer';
import OutPageMenu from '../OutPageMenu/OutPageMenu';
import './ServicePricing.scss';
const ServicePricing = (props) => {
	const { purchasePackages, data } = props;
	const [serviceId, setServiceId] = useState(null);
	const history = useHistory();
	const handleService = (id) => {
		data.serviceId = id;
		purchasePackages(data);
		history.push('contact');
	};
	console.log(props);
	return (
		<>
			<OutPageMenu>
				<h1 className="display-4">PRICING PLANS</h1>
			</OutPageMenu>
			<div className="container mx-auto my-5 ">
				<div className="text-center py-5">
					<h2>
						<span className="text-warning">CHOOSE THE OFFER</span> THAT
						SUITS YOU
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
						consequuntur <br /> necessitatibus quaerat natu.
					</p>
				</div>
				<div className="row  ml-5 mx-auto">
					<div className="col-md-4">
						<div className="advance-card" style={{ width: '22rem' }}>
							<div
								style={{ marginTop: '30px' }}
								className="card-img-overlay text-white text-center"
							>
								<h4 className="card-title text-warning">
									ADVANCED PLAN
								</h4>
								<h2 style={{ fontSize: '40px' }}>BEGINNERS</h2>
								<h1
									className="mb-4 text-warning"
									style={{ fontSize: '70px' }}
								>
									$140
								</h1>
								<h5>✔ Mobile-Optimized</h5>
								<h5>✔ Best Hosting</h5>
								<h5>✔ Free Custom</h5>
								<h5>✔ Outstanding</h5>
								<h5>✔ Happy Customers</h5>
								<button
									onClick={() => handleService(1)}
									className="btn btn-warning btn-lg mt-4"
								>
									<b>PURCHASE</b>
								</button>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="basic-card" style={{ width: '22rem' }}>
							<div
								style={{ marginTop: '30px' }}
								className="card-img-overlay text-white text-center"
							>
								<h4 className="card-title text-warning">BASIC PLAN</h4>
								<h2 style={{ fontSize: '40px' }}>BEGINNERS</h2>
								<h1
									className="mb-4 text-warning"
									style={{ fontSize: '70px' }}
								>
									$120
								</h1>
								<h5>✔ Mobile-Optimized</h5>
								<h5>✔ Best Hosting</h5>
								<h5>✔ Free Custom</h5>
								<h5>✔ Outstanding</h5>
								<h5>✔ Happy Customers</h5>
								<button className="btn btn-warning btn-lg mt-4">
									<b>PURCHASE</b>
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="beginner-card" style={{ width: '22rem' }}>
							<div
								style={{ marginTop: '30px' }}
								className="card-img-overlay text-white text-center"
							>
								<h4 className="card-title text-warning">
									BILLED MONTHLY
								</h4>
								<h2 style={{ fontSize: '40px' }}>BEGINNERS</h2>
								<h1
									className="mb-4 text-warning"
									style={{ fontSize: '70px' }}
								>
									$90
								</h1>
								<h5>✔ Mobile-Optimized</h5>
								<h5>✔ Best Hosting</h5>
								<h5>✔ Free Custom</h5>
								<h5>✔ Outstanding</h5>
								<h5>✔ Happy Customers</h5>
								<button className="btn btn-warning btn-lg mt-4">
									<b>PURCHASE</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		data: state.data,
		packageInfo: state.package,
	};
};
const mapDispatchToProps = {
	purchasePackages: purchasePackages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicePricing);
