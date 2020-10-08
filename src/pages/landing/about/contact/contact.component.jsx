import React from 'react';
import { Link } from 'react-router-dom';
import './contact.styles.css';

const Contact = () => {
	return(
		<section id="contact">
			<h3 className="sectionTitle">Contact Me</h3>
			<hr />
			<div className="contactMain">
				<img className="contactImg" src="../img/unsplash-contact-01.jpeg" alt='contact me' />
				<ul>
					<li>
						<Link to={{ pathname: "mailto:clayton.daly91@gmail.com" }} target="_blank">
							<i className="fas fa-envelope"></i> Clayton.Daly91@Gmail.com
						</Link>
					</li>
					<li>
						<Link to={{ pathname: "https://github.com/cldaly" }} target="_blank">
							<i className="fab fa-github-square"></i> Github
						</Link>
					</li>
					<li>
						<Link to={{ pathname: "https://www.linkedin.com/in/clayton-daly/" }} target="_blank">
							<i className="fab fa-linkedin"></i> Linkedin
						</Link>
					</li>
					<li>
						<Link to={{ pathname: "/docs/claytonDalyResume.pdf" }} target="_blank">
							<i className="fas fa-file-alt"></i> View my Résumé
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Contact;