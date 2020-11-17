import React from 'react';
import './Objective.scss';
const Objective = () => {
	return (
		<div>
			<div className="ml-5">
				<h1 className="text-center mt-5">
					<span className="text-warning">WHY</span> CHOOSE US
				</h1>
				<div className="row p-3 mt-5 ml-5 mr-5">
					<div className="col-md-4">
						<div className="card1 col mb-4 p-3">
							<div
								style={{ marginTop: '100px' }}
								className="text-center"
							>
								<img
									className="mb-5"
									src="https://i.imgur.com/pvAEO0J.png"
									alt="img-objective"
								/>
								<h2>FREE FITNESS TRAINING</h2>
								<p className="mt-4">
									Lorem ipsum dolor sit amet consectetur, adipisicing
									elit. bnaglas hsgak khkajsj shjgajk bhangka chownr
									Hbahg aliquam Nobis et aliquid veniam consequatur vel
									minus aliquam nihil. Error aspernatur consequuntur
									nobis in accusantium tenetur neque.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card1 col mb-4 p-3">
							<div
								style={{ marginTop: '100px' }}
								className="text-center"
							>
								<img
									className="mb-5"
									src="https://i.imgur.com/1xgEsaw.png"
									alt="img-objective2"
								/>
								<h2>TONS OF CARDIO & STRENGTH</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing
									elit. Nobis et aliquid veniam consequatur vel minus
									aliquam nihil. Error aspernatur consequuntur nobis in
									accusantium tenetur neque.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card1 col mb-4 p-3">
							<div
								style={{ marginTop: '130px' }}
								className="text-center"
							>
								<img
									className="mb-5"
									src="https://i.imgur.com/SbswHyy.png"
									alt=""
								/>
								<h2>NO COMMITMENT MEMBERSHIPS</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing
									elit. Nobis et aliquid veniam consequatur vel minus
									aliquam nihil. Error aspernatur consequuntur nobis in
									accusantium tenetur neque.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Objective;
