import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	personalInfo,
	purchasePackages,
} from '../../../Redux/actions/dataActions';
import Footer from '../../Footer/Footer';
import OutPageMenu from '../../OutPageMenu/OutPageMenu';
import './OurClasses.scss';
const OurClasses = (props) => {
	const history = useHistory();
	const [serviceName, setServiceName] = useState({});
	const handleGymType = (data) => {
		history.push('/pricing');
		serviceName.service = data;
		props.purchasePackages(serviceName);
	};
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
								<button
									onClick={() => handleGymType('PSYCHO TRAINING')}
								>
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
								<button onClick={() => handleGymType('SELF DEFENSE')}>
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
								<button onClick={() => handleGymType('ADVANCE GYM')}>
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
								<button
									onClick={() => handleGymType('CARDIO TRAINING ')}
								>
									CARDIO TRAINING <span className="h6">🠮</span>
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
								<button
									onClick={() =>
										handleGymType('STRENGTH TRAINING     ')
									}
								>
									STRENGTH TRAINING <span className="h6">🠮</span>
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
								<button onClick={handleGymType}>
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
const mapStateToProps = (state) => {
	return {
		data: state.data,
		packageInfo: state.package,
	};
};
const mapDispatchToProps = {
	personalInfo: personalInfo,
	purchasePackages: purchasePackages,
};

export default connect(mapStateToProps, mapDispatchToProps)(OurClasses);
