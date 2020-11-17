import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { purchasePackages } from '../../../Redux/actions/dataActions';
function PrivateRoute({ data, children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				data.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
const mapStateToProps = (state) => {
	return {
		data: state.data,
		packageInfo: state.package,
	};
};
const mapDispatchToProps = {
	purchasePackages: purchasePackages,
};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
