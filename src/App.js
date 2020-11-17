import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePages from './Component/HomePages/HomePages';
import OurClasses from './Component/HomePages/OurClasses/OurClasses';
import ServicePricing from './Component/ServicePricing/ServicePricing';
import Schedule from './Component/Schedule/Schedule';
import Membership from './Component/Membership/Membership';
import ContactForm from './Component/Membership/ContactForm/ContactForm';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/home">
						<Login />
					</Route>
					<Route path="/ourClasses">
						<OurClasses />
					</Route>
					<PrivateRoute path="/contact">
						<Membership />
					</PrivateRoute>
					<Route path="/pricing">
						<ServicePricing />
					</Route>
					<Route path="/schedule">
						<Schedule />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<HomePages />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
