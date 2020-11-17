import React, { Component, PropTypes, useState } from 'react';
import Multistep from 'react-multistep';
import Footer from '../Footer/Footer';
import OutPageMenu from '../OutPageMenu/OutPageMenu';
import ContactForm from './ContactForm/ContactForm';
import Payment from './Payment/Payment';
import './Membership.scss';
import ConfirmMemberShip from './ConfirmMemberShip/ConfirmMemberShip';

const Membership = (props) => {
	const [values, setValues] = useState(true);
	console.log(values, 'value');
	const prevStyle = {
		background: '#33c3f0',
		borderWidth: 'none',
		width: '180px',
		margin: '5px',
	};
	const nextStyle = {
		backgroundColor: '#fcd842',
		border: 'none',
		width: '180px',
		padding: '5px',
		margin: '5px',
	};
	const steps = [
		{ name: 'Step Three', component: <ContactForm setValues={setValues} /> },
		{ name: 'Step Two', component: <Payment setValues={setValues} /> },
		{ name: 'Step Three', component: <ConfirmMemberShip /> },
	];
	return (
		<>
			<OutPageMenu>
				<h1 className="display-4">YOUR GYM MEMBERSHIP</h1>
			</OutPageMenu>
			<div
				className={`text-right container ${
					values ? 'step-button' : 'd-block'
				}`}
			>
				<Multistep
					showNavigation={false}
					prevStyle={prevStyle}
					nextStyle={nextStyle}
					steps={steps}
				/>
			</div>

			<Footer />
		</>
	);
};

export default Membership;
