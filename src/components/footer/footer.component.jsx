import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.css';

const Footer = () => {
	return(
		<footer className='ccfooter'>
			<p className="footerUnsplash">Images courtesy of <Link to={{ pathname: "https://unsplash.com/" }} target="_blank">unsplash</Link></p>
			<p className="footerDev">Designed and Developed by Clayton Daly</p>
			<ul className="footerIcons">
				<li>
					<Link to={{ pathname: "https://github.com/cldaly/" }} target="_blank">
						<i className="fab fa-github-square fa-2x"></i>
					</Link>
				</li>
				<li>
					<Link to={{ pathname: "https://www.linkedin.com/in/clayton-daly/" }} target="_blank">
						<i className="fab fa-linkedin fa-2x"></i>
					</Link>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
