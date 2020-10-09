import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Landing from './pages/landing/landing.component';

class App extends Component {
	constructor(props) {
		super(props);
		this.aboutRef = React.createRef();
		this.projectsRef = React.createRef();
		this.contactRef = React.createRef();
	}
	handleScroll = (ref) => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
	render() {
		return(
			<div className='clayton-codes'>
				<Header aboutRef={this.aboutRef} projectsRef={this.projectsRef} contactRef={this.contactRef} handleScroll={this.handleScroll} />
				<Switch>
					<Route path='/'>
						<Landing aboutRef={this.aboutRef} projectsRef={this.projectsRef} contactRef={this.contactRef} handleScroll={this.handleScroll} />
					</Route>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
