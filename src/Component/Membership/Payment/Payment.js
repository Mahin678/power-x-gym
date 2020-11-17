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
