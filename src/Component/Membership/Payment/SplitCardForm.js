import React, { useEffect, useMemo, useState } from 'react';
import {
	useStripe,
	useElements,
	CardNumberElement,
	CardCvcElement,
	CardExpiryElement,
} from '@stripe/react-stripe-js';
import './Payment.scss';
import { purchasePackages } from '../../../Redux/actions/dataActions';
import { connect } from 'react-redux';
const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					width: '200px',
					fontSize: '18px',
					color: '#424770',
					letterSpacing: '0.025em',
					fontFamily: 'Source Code Pro, monospace',
					'::placeholder': {
						color: '#aab7c4',
					},
				},
				invalid: {
					color: '#9e2146',
				},
			},
		}),
		[]
	);

	return options;
};

const SplitForm = (props) => {
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();
	const [isError, setError] = useState('');
	const [isSuccess, setIsSuccess] = useState('');
	const [isTrue, setIsTrue] = useState(true);
	const [newData, setNewData] = useState({});
	const { setPaymentId, setValues, purchasePackages, data } = props;
	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}
		const cardNumber = elements.getElement(CardNumberElement);
		const payload = await stripe.createPaymentMethod({
			type: 'card',
			card: cardNumber,
		});
		if (payload.error) {
			console.log('[PaymentMethod]', payload.error.message);
			setError(payload.error.message);
			setIsSuccess(null);
		} else {
			setIsSuccess(payload.paymentMethod.id);
			setError(null);
			setPaymentId(payload.paymentMethod.id);
			setIsTrue(false);
			data.paymentMethod = payload.paymentMethod.id;
			purchasePackages(data);
			fetch('https://shrouded-plains-89752.herokuapp.com/addMember', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})
				.then((res) => res.json())
				.then((result) => {
					console.log(result);
				});
		}
	};

	return (
		<div className="SplitForm text-left ">
			<form onSubmit={handleSubmit}>
				<div className="non-paypal card w-75 p-5 mx-auto">
					<div>
						<div>
							<input className="m-2" type="radio" />
							Credit Card
						</div>
						<div className="row">
							<div className="col-lg-8">
								<p className="ml-3 mt-2">
									Safe money transfer using your bank account. Visa,
									Maestro, Discover, American Express.
								</p>
							</div>
							<div className="col-lg-4 ml-auto text-left">
								<div>
									<span className="m-2">
										<img
											className="img-fluid"
											src="https://i.imgur.com/PjqrROI.png"
											alt="logo1"
										/>
									</span>
									<span className="m-2">
										<img
											className="img-fluid"
											src="https://i.imgur.com/LoS9KYv.png"
											alt="logo2"
										/>
									</span>
								</div>
								<span className="d-block m-2">
									<img
										className="img-fluid"
										src="https://i.imgur.com/5JSVk0f.png"
										alt="logo3"
									/>
								</span>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="card number ">Card number</label>
						<CardNumberElement
							className="form-control w-100"
							options={options}
							onReady={() => {
								console.log('CardNumberElement [ready]');
							}}
							onChange={(event) => {
								console.log('CardNumberElement [change]', event);
							}}
							onBlur={() => {
								console.log('CardNumberElement [blur]');
							}}
							onFocus={() => {
								console.log('CardNumberElement [focus]');
							}}
						/>
					</div>

					<div className="d-flex m-2">
						<div className="form-group w-50 pr-3">
							<label htmlFor="Date">Expiration date</label>
							<CardExpiryElement
								className="form-control"
								options={options}
								onReady={() => {
									console.log('CardNumberElement [ready]');
								}}
								onChange={(event) => {
									console.log('CardNumberElement [change]', event);
								}}
								onBlur={() => {
									console.log('CardNumberElement [blur]');
								}}
								onFocus={() => {
									console.log('CardNumberElement [focus]');
								}}
							/>
						</div>
						<div className="form-group w-50 pl-3">
							<label htmlFor="cvc">CVC</label>
							<CardCvcElement
								className="form-control "
								options={options}
								onReady={() => {
									console.log('CardNumberElement [ready]');
								}}
								onChange={(event) => {
									console.log('CardNumberElement [change]', event);
								}}
								onBlur={() => {
									console.log('CardNumberElement [blur]');
								}}
								onFocus={() => {
									console.log('CardNumberElement [focus]');
								}}
							/>
							<br />
						</div>
					</div>
				</div>
				<div className="card p-5 mt-5  w-75 mx-auto">
					<div className="row">
						<div className="col-lg-6">
							<input type="radio" /> Paypal
							<p>
								Safe money transfer using your bank account. Visa,
								Maestro, Discover, American Express.
							</p>
						</div>
						<div className="col-lg-6">
							<img
								className="img-fluid pt-3"
								src="https://i.imgur.com/MTK8XmY.png"
								alt="paymant-logo"
							/>
						</div>
					</div>
				</div>
				<div className="">
					<button
						type="submit"
						className={`btn  m-4 ml-auto ${
							isTrue ? 'd-block' : 'd-none'
						}`}
						style={{
							background: '#fcd842',
							'border-width': '2px',
							width: '180px',
						}}
						disabled={!stripe}
					>
						Pay
					</button>
				</div>
			</form>
			{isError && <p key={isError.length}>{isError}</p>}
			{isSuccess && (
				<p style={{ color: 'green', margin: '50px' }} key={isSuccess}>
					Success
				</p>
			)}
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
export default connect(mapStateToProps, mapDispatchToProps)(SplitForm);
