import React from 'react';
import Footer from '../Footer/Footer';
import OutPageMenu from '../OutPageMenu/OutPageMenu';
import './Schedule.scss';
const Schedule = () => {
	return (
		<>
			<OutPageMenu>
				<h1 className="display-4">PRICING PLANS</h1>
			</OutPageMenu>
			<div className="container py-4 my-4">
				<div className="row ">
					<div className="col-md-7 p-3">
						<img
							className="img-fluid"
							src="https://i.imgur.com/4T686F1l.jpg"
							alt=""
						/>
					</div>
					<div className="col-md-5 ">
						<h1>
							<span style={{ color: 'rgb(252, 216, 66)' }}>CLASS</span>{' '}
							SCHEDULE
						</h1>
						<div className="row mt-5">
							<div className="col-md-6">
								<div
									class="card mb-4 p-3"
									style={{ width: '13rem', height: '7rem' }}
								>
									<h4 class="card-title">Monday</h4>
									<h6 style={{ color: 'rgb(252, 216, 66)' }}>
										8:00 AM - 9.00 PM
									</h6>
								</div>
								<div
									class="card mb-4 p-3"
									style={{ width: '13rem', height: '7rem' }}
								>
									<h4 class="card-title">Wednesday</h4>
									<h6 style={{ color: 'rgb(252, 216, 66)' }}>
										10:00 AM - 11.00 AM
									</h6>
								</div>
								<div
									class="card mb-4 p-3"
									style={{ width: '13rem', height: '7rem' }}
								>
									<h4 class="card-title">Friday</h4>
									<h6 style={{ color: 'rgb(252, 216, 66)' }}>
										11:00 AM - 12.00 PM
									</h6>
								</div>
							</div>
							<div className="col-md-4 ">
								<div
									class="card mb-4 p-3"
									style={{ width: '13rem', height: '7rem' }}
								>
									<h4 class="card-title">Tuesday</h4>
									<h6 style={{ color: 'rgb(252, 216, 66)' }}>
										10:00 AM - 11.00 AM
									</h6>
								</div>
								<div
									class="card mb-4 p-3"
									style={{ width: '13rem', height: '7rem' }}
								>
									<h4 class="card-title">Thursday</h4>
									<h6 style={{ color: 'rgb(252, 216, 66)' }}>
										5:00 PM - 6.00 PM
									</h6>
								</div>
								<div
									class="card mb-4 p-3"
									style={{ width: '13rem', height: '7rem' }}
								>
									<h4 class="card-title">Saturday</h4>
									<h6 style={{ color: 'rgb(252, 216, 66)' }}>
										7:00 PM - 9.00 PM
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-6 ml-0 text-left mt-1 ">
					<p style={{ fontSize: '18px' }} className="text-secondary">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Expedita voluptatum omnis porro impedit unde quisquam veniam
						esse perspiciatis fugit veritatis nobis cumque sapiente optio
						eum quis quibusdam, perferendis ad cupiditate, atque quia sunt
						vitae odit? Perferendis sint suscipit odio aspernatur, vero
						maiores molestiae at asperiores dicta ad labore, expedita iste
						nobis magni quisquam corporis repudiandae perspiciatis
						explicabo ducimus qui culpa non! Vel porro dolore recusandae,
						error soluta sunt doloribus consequuntur repudiandae facilis
						unde aliquid necessitatibus tenetur eius aut eveniet veniam
						eum, hic nemo officia mollitia iure, quidem sit excepturi
						sapiente. At, dolorum modi similique maxime sed illum fugit
						atque eligendi?
					</p>
				</div>
				<div className="row">
					<div className="col-md-6 ml-3 p-3">
						<h5 className="p-2 ml-3">
							<span className="bg-warning text-white">✔</span> Having
							Similar Shapely Thighs
						</h5>
						<h5 className="p-2 ml-3">
							<span className="bg-warning text-white">✔</span> Getting
							Stronger Body
						</h5>
						<h5 className="p-2 ml-3">
							<span className="bg-warning text-white">✔</span> Increased
							Metabolism
						</h5>
						<h5 className="p-2 ml-3">
							<span className="bg-warning text-white">✔</span> Increase
							Muscular Endurance
						</h5>
						<h5 className="p-2 ml-3">
							<span className="bg-warning text-white">✔</span> Maximum
							Result in Less Time
						</h5>
						<h5 className="p-2 ml-3">
							<span className="bg-warning text-white">✔</span> Firm Hips
							and Tummy{' '}
						</h5>
					</div>
					<div className="col-md-5 p-5 d-flex align-items-end justify-content-end ml-auto">
						<button className="btn btn-schedule-custom ">
							<b>JOIN US</b>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Schedule;
