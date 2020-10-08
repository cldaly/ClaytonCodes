import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

const Header = () => {
    return(<header className='cch'>
            <h2 className='cch2'><Link to="/">{`${String.fromCharCode(123)}${String.fromCharCode(123)} Clayton Codes ${String.fromCharCode(125)}${String.fromCharCode(125)}`}</Link></h2>
            <nav className='ccnav'>
                <li><Link to="/#about">About Me</Link></li>
                <li><Link to="/#projects">My Projects</Link></li>
                <li><Link to="/#contact">Contact Me</Link></li>
            </nav>
        </header>
    );
}

export default Header;
