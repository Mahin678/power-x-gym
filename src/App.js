import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePages from './Component/HomePages/HomePages';
import OurClasses from './Component/HomePages/OurClasses/OurClasses';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/home">
						<HomePages />
					</Route>
					<Route path="/">
						<OurClasses />
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
