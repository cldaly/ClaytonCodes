import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = ({aboutRef, projectsRef, contactRef, handleScroll}) => {
	return(
		<header className='cch'>
			<h2 className='cch2'><Link to="/">{`${String.fromCharCode(123)}${String.fromCharCode(123)} Clayton Codes ${String.fromCharCode(125)}${String.fromCharCode(125)}`}</Link></h2>
			<nav className='ccnav'>
				<li><button className='nav-btn' onClick={handleScroll.bind(this, aboutRef)}>About Me</button></li>
				<li><button className='nav-btn' onClick={handleScroll.bind(this, projectsRef)}>My Projects</button></li>
				<li><button className='nav-btn' onClick={handleScroll.bind(this, contactRef)}>Contact Me</button></li>
			</nav>
		</header>
	);
}

export default Header;
