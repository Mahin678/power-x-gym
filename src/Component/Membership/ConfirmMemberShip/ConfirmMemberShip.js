import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { purchasePackages } from '../../../Redux/actions/dataActions';

const ConfirmMemberShip = (props) => {
	const { data } = props;
	useEffect(() => {
		fetch(
			'https://shrouded-plains-89752.herokuapp.com/isUser?email=' +
				data.email
		)
			.then((res) => res.json())
			.then((result) => console.log(result));
	}, []);
	return (
		<div className="text-center">
			<h1>succeslly completed</h1>
			<p>Previous service List </p>
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
