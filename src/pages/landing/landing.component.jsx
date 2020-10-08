import React from 'react';
import './landing.styles.css';

import About from './about/about.component';
import Projects from './projects/projects.component';
import Contact from './about/contact/contact.component';

const Landing = () => {
	return(
		<div className='landing-main'>
			<section className="titleSection">
				<div className="landingMain">
						<h1 className="landingTitle">Clayton Daly</h1>
						<p>Full Stack Web Developer</p>
						<div className="learnMore">
							<a href="#about">Learn More</a>
						</div>
				</div>
			</section>

			<About />

			<Projects />

			<Contact />
		</div>
	);
}

export default Landing;