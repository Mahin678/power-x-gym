import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { purchasePackages } from '../../../Redux/actions/dataActions';
import Footer from '../../Footer/Footer';
import OutPageMenu from '../../OutPageMenu/OutPageMenu';

import '../MultiSteps.scss';
const ContactForm = (props) => {
	const { register, handleSubmit, watch, errors } = useForm();
	const [display, setDisplay] = useState(true);
	const { setValues, purchasePackages, data } = props;
	const onSubmit = (allInfo) => {
		if (data) {
			setValues(false);
			setDisplay(false);
			const info = { ...allInfo, ...data };
			purchasePackages(info);
		}
	};
	console.log(data);
	return (
		<>
			<section className="text-left m-5 ">
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="first">First Name</label>
									<input
										required
										className="form-control"
										name="name"
										ref={register({ required: true })}
									/>
									{errors.name && (
										<span className="error">
											This name is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<input
										required
										className="form-control"
										name="email"
										ref={register({ required: true })}
									/>
									{errors.email && (
										<span className="error">
											This email is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="date">Date of Birth</label>
									<input
										required
										className="form-control"
										name="date"
										type="date"
										ref={register({ required: true })}
									/>
									{errors.address && (
										<span className="error">
											This address is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="address">Address line 1:</label>
									<input
										required
										className="form-control"
										name="address"
										ref={register({ required: true })}
									/>
									{errors.address && (
										<span className="error">
											This address is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="city">City</label>
									<input
										required
										name="city"
										className="form-control"
										ref={register({ required: true })}
									/>
									{errors.email && (
										<span className="error">
											This email is required
										</span>
									)}
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label htmlFor="last">Last Name</label>
									<input
										className="form-control"
										name="last"
										type="text"
										ref={register({ required: true })}
									/>
									{errors.address && (
										<span className="error">
											This address is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="mobile">Mobile</label>
									<input
										className="form-control"
										name="mobile"
										ref={register({ required: true })}
									/>
									{errors.address && (
										<span className="error">
											This address is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="genders">Gender</label>
									<select
										name="gender"
										className="form-control"
										ref={register}
									>
										<option value="female">female</option>
										<option value="male">male</option>
										<option value="other">other</option>
									</select>
								</div>
								<div className="form-group">
									<label htmlFor="country">Country/Region</label>
									<input
										className="form-control"
										name="country"
										ref={register({ required: true })}
									/>
									{errors.address && (
										<span className="error">
											This address is required
										</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="code">PostCode</label>
									<input
										className="form-control"
										name="code"
										type="number"
										ref={register({ required: true })}
									/>
									{errors.address && (
										<span className="error">
											This address is required
										</span>
									)}
								</div>
								<br />
							</div>
						</div>
						<div className="row">
							<div className="col-md-5 ml-5 p-3"></div>
							<div className="col-md-5 p-5 d-flex align-items-end ">
								<button
									type="submit"
									className={`${
										display ? 'd-block' : 'd-none'
									} btn btn-warning btn-lg w-25 ml-auto p-2 `}
								>
									Submit{' '}
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
