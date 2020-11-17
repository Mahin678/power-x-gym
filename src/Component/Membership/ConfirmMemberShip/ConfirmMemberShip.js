import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { purchasePackages } from '../../../Redux/actions/dataActions';

const ConfirmMemberShip = (props) => {
	const { data } = props;
	const [userInfo, serUserInfo] = useState([]);

	const [previousInfo, setPreviousInfo] = useState([]);
	useEffect(() => {
		fetch(
			'https://shrouded-plains-89752.herokuapp.com/isUser?email=' +
				data.email
		)
			.then((res) => res.json())
			.then((result) => setPreviousInfo(result));
	}, [previousInfo]);

	useEffect(() => {
		fetch('https://shrouded-plains-89752.herokuapp.com/showMember')
			.then((res) => res.json())
			.then((result) => serUserInfo(result));
	}, [previousInfo]);

	const handaleCancel = (id) => {
		fetch(`https://shrouded-plains-89752.herokuapp.com/userDelete/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((result) => {
				console.log('successfully cancelled ', result);
			});
	};

	return (
		<div className="text-center">
			<h1>succeslly completed</h1>
			<p>Previous service List </p>
			<div className="completed-wrapper">
				<div className="row">
					{previousInfo.map((info) => (
						<div className="col-lg-6">
							<div className="row  m-3 p-3 text-left border">
								<div className="col-lg-8">
									<h4>{info.name}</h4>
									<p>{info.email}</p>
									<strong>{info.service}</strong>
									<p>
										<strong>
											Category :
											<small className="font-weight-bold">
												{info.serviceId}
											</small>
										</strong>
									</p>
									<p>Date : {info.date}</p>
								</div>
								<div className="col-lg-4">
									<img
										className="img-fluid rounded"
										src={data.photoURL && data.photoURL}
										alt="confirm-data"
									/>
									<button
										className="btn btn-danger  m-3"
										onClick={() => handaleCancel(info._id)}
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="other-person my-5">
					<div className="py-2">
						<h2>Other Holder under in Gym Organizations</h2>
					</div>
					<div className="row">
						{userInfo.map((info) => (
							<div className="col-lg-6">
								<div className="row  m-3 p-3 text-left border">
									<div className="col-lg-8">
										<h4>{info.name}</h4>
										<p>{info.email}</p>
										<strong>{info.service}</strong>
										<p>
											<strong>
												Category :
												<small className="font-weight-bold">
													{info.serviceId}
												</small>
											</strong>
										</p>
										<p>Date : {info.date}</p>
									</div>
									<div className="col-lg-4">
										<img
											className="img-fluid rounded"
											src={data.photoURL && data.photoURL}
											alt="confirm-data"
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ConfirmMemberShip);
