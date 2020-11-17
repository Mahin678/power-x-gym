import React, { useState } from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { purchasePackages } from '../../Redux/actions/dataActions';
import OutPageMenu from '../OutPageMenu/OutPageMenu';
if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}
const Login = (props) => {
	const [LoggedInUser, setLoggedInUser] = useState(null);
	const history = useHistory();
	const location = useLocation();
	const { data, purchasePackages } = props;
	const { from } = location.state || { from: { pathname: '/' } };

	const handleGoogleSignIn = () => {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				console.log(result.user);
				const { displayName, email, photoURL } = result.user;
				const signedInUser = { name: displayName, email, photoURL };
				const newUser = { ...signedInUser, ...data };
				purchasePackages(newUser);
				if (data.service) {
					history.replace(from);
				} else {
					history.push('ourClasses');
				}
			})
			.catch(function (error) {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
	const storeAuthToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(/* forceRefresh */ true)
			.then(function (idToken) {
				sessionStorage.setItem('token', idToken);
				history.replace(from);
			})
			.catch(function (error) {
				// Handle error
			});
	};
	return (
		<>
			<OutPageMenu>
				<h1 className="display-4">Login</h1>
			</OutPageMenu>
			<div className="login-page container">
				<div className="row align-items-center" style={{ height: '100vh' }}>
					<div className="col-md-6 shadow p-5">
						<div className="form-group">
							<label htmlFor="">User Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="">Password</label>
							<input type="password" className="form-control" />
						</div>
						<div className="form-group">
							<label htmlFor="" className="text-danger">
								Forgot your password?
							</label>
						</div>
						<div className="from-group mt-5">
							<button
								className="btn btn-success"
								onClick={handleGoogleSignIn}
							>
								Google Sign in
							</button>
						</div>
					</div>
					<div className="col-md-6 d-none d-md-block ">
						<img
							className="img-fluid"
							src="https://media.newyorker.com/photos/59f22e3b6278396057c91982/master/w_2560%2Cc_limit/171106_r30843web.gif"
							alt=""
						/>
					</div>
				</div>
			</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
