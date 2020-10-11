import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Landing from './pages/landing/landing.component';
import Project from './components/project/project.component';
import projectData from './data/projects-data.json';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.aboutRef = React.createRef();
		this.projectsRef = React.createRef();
		this.contactRef = React.createRef();

		this.projects = projectData.projects;
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
					<Route exact path='/'>
						<Landing aboutRef={this.aboutRef} projectsRef={this.projectsRef} contactRef={this.contactRef} handleScroll={this.handleScroll} />
					</Route>
					<Route path='/full-stack-of-cards'>
						<Project proj={this.projects["full-stack-of-cards"]} />
					</Route>
					<Route path='/musix-app'>
						<Project proj={this.projects["musix-app"]} />
					</Route>
					<Route path='/train-ticket'>
						<Project proj={this.projects["train-ticket"]} />
					</Route>
					<Route path='/my-spirit-circle'>
						<Project proj={this.projects["my-spirit-circle"]} />
					</Route>
					<Route path='/rileys-candles'>
						<Project proj={this.projects["rileys-candles"]} />
					</Route>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
