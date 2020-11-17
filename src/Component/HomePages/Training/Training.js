import React from 'react';
import './Training.scss';
const Training = () => {
	return (
		<section>
			<div className="container">
				<h1 className="text-center">
					TRAINING <span className="text-warning">PROGRAMS</span>
				</h1>
				<div className="row  my-5 py-3 ">
					<div className="col-sm-12 col-md-6 mt-3 col-md-6 train">
						<img
							className="train-img img-fluid"
							src="https://i.imgur.com/xclETATl.png"
							alt=""
						/>
						<div className="card-img-overlay d-flex align-items-end">
							<button className="yoga">YOGA TRAINING SESSION ➜</button>
						</div>
					</div>
					<div className="col-sm-12 col-md-6 mt-3 col-md-6 train">
						<img
							className="train-img img-fluid"
							src="https://i.imgur.com/bRIW5o8.jpg"
							alt=""
						/>
						<div className="card-img-overlay d-flex align-items-end">
							<button className="yoga ">
								CARDIO TRAINING SESSION ➜
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Training;
