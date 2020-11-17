import React from 'react';

const AboutUs = () => {
	return (
		<section className="about-us container pt-5 mt-5">
			<div style={{ marginBottom: '70px' }} className="row">
				<div className="col-md-6 mr-auto text-center">
					<img
						style={{ width: '80%', height: '500px' }}
						className="img-fluid"
						src="https://i.imgur.com/pi62kQA.jpg"
						alt="about-us"
					/>
				</div>
				<div className="col-md-6 mt-5">
					<h1 className="text-secondary">ABOUT US</h1>
					<h2 className="text-warning">WE ARE HERE TO DREAM!</h2>
					<h3>OUR TEAM IS HERE TO SURVIVE YOU</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Ullam, doloribus odit explicabo veritatis voluptas neque
						quidem corporis consequatur blanditiis ea aperiam nam,
						repellendus amet quod odio molestiae nemo, et officia sapiente
						a nisi ducimus? Aspernatur nostrum aperiam modi iure fuga
						eveniet, harum eos voluptates dolore accusamus ipsam, quod
						perspiciatis quidem, enim tempore molestiae rem corrupti
						exercitationem. Quaerat consequatur soluta itaque enim ab
						neque est veritatis aut adipisci, molestias excepturi et!
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
