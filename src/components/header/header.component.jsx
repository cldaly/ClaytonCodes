import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.styles.css';

const Header = ({ aboutRef, projectsRef, contactRef, handleScroll, handleNav }) => {
	const { pathname } = useLocation();

	return(
		<header className={(pathname === '/') ? 'cch cch-fixed' : 'cch cch-top'}>
			<h2 className='cch2'><Link to="/">{`${String.fromCharCode(123)}${String.fromCharCode(123)} Clayton Codes ${String.fromCharCode(125)}${String.fromCharCode(125)}`}</Link></h2>
			{pathname === '/' && 
			<nav className='ccnav'>
				<li>
					<button className='nav-btn' onClick={ (true) ? handleScroll.bind(this, aboutRef) : handleNav.bind(this, aboutRef)}>
						About Me
					</button>
				</li>
				<li>
					<button className='nav-btn' onClick={ (true) ? handleScroll.bind(this, projectsRef) : handleNav.bind(this, projectsRef)}>
						My Projects
					</button>
				</li>
				<li>
					<button className='nav-btn' onClick={ (true) ? handleScroll.bind(this, contactRef) : handleNav.bind(this, contactRef)}>
						Contact Me
					</button>
				</li>
			</nav>
			}
		</header>
	);
	
}

export default Header;
