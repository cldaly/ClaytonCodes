import React from 'react';
import './landing.styles.css';
import About from './about/about.component';
import Projects from './projects/projects.component';
import Contact from './contact/contact.component';

const Landing = ({aboutRef, projectsRef, contactRef, handleScroll}) => {
	return(
		<div className='landing-main'>
			<section className="titleSection">
				<div className="landingMain">
						<h1 className="landingTitle">Clayton Daly</h1>
						<p>Full Stack Web Developer</p>
						<div className="learnMore">
							<button type='button' className='nav-btn' onClick={handleScroll.bind(this, aboutRef)}>Learn More</button>
						</div>
				</div>
			</section>

			<About aboutRef={aboutRef} />
			<Projects projectsRef={projectsRef} />
			<Contact contactRef={contactRef} />

		</div>
	);
}

export default Landing;