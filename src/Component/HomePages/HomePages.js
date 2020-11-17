import React from 'react';
import Footer from '../Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Feature from './Feature/Feature';
import Header from './Header/Header';
import Objective from './Objective/Objective';
import Training from './Training/Training';

const HomePages = () => {
	return (
		<div>
			<Header />
			<Feature />
			<AboutUs />
			<Training />
			<Objective />
			<Footer />
		</div>
	);
};

export default HomePages;
