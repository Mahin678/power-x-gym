import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitForm from './SplitCardForm';
const Payment = (props) => {
	const stripePromise = loadStripe(
		'pk_test_51HZvIFBAV6lzlDH6w2z7e1it4fkhCFJ0ly93Kju83pZmHBOWyqFtHjx0JobvssFybWrDpSOGr880Tcxnw7l9M47000fWubVwml'
	);
	const { setValues } = props;
	const [paymentId, setPaymentId] = useState(null);
	if (paymentId) {
		setValues(false);
	} else {
		setValues(true);
	}
	return (
		<div>
			<Elements stripe={stripePromise}>
				<SplitForm setPaymentId={setPaymentId} setValues={setValues} />
			</Elements>
		</div>
	);
};

export default Payment;
/* 
	<div className="form-group  text-left">
							<label>CARD NUMBER</label>
							<CardNumberElement
								className="form-control"
								options={{
									style: {
										base: {
											fontSize: '18px',
											color: '#424770',
											'::placeholder': {
												color: '#aab7c4',
											},
										},
										invalid: {
											color: '#9e2146',
										},
										complete: {
											color: 'green',
										},
										empty: {
											color: 'red',
										},
									},
								}}
							/>
						</div>
						<div className="d-flex">
							<div className="form-group w-50 pr-3 text-left">
								<label>EXPIRY DATE</label>
								<CardExpiryElement
									className="form-control"
									options={{
										style: {
											base: {
												fontSize: '18px',
												color: '#424770',
												'::placeholder': {
													color: '#aab7c4',
												},
											},
											invalid: {
												color: '#9e2146',
											},
											complete: {
												color: 'green',
											},
											empty: {
												color: 'red',
											},
										},
									}}
								/>
							</div>
							<div className="form-group w-50 pl-3 text-left">
								<label>CVV CODE</label>
								<CardCvcElement
									className="form-control"
									options={{
										style: {
											base: {
												fontSize: '18px',
												color: '#424770',
												'::placeholder': {
													color: '#aab7c4',
												},
											},
											invalid: {
												color: '#9e2146',
											},
											complete: {
												color: 'green',
											},
											empty: {
												color: 'red',
											},
										},
									}}
								/>
							</div>
						</div>
						*/
