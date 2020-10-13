import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Landing from './pages/landing/landing.component';
import Project from './components/project/project.component';
import projectData from './data/projects-data.json';
import './App.css';
import history from './components/_helpers/history';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			aboutRef: React.createRef(),
			projectsRef: React.createRef(),
			contactRef: React.createRef(),
			projects: projectData.projects
		}
		
	}

	handleScroll = (ref) => {
		ref.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	handleNav = (ref) => {
		history.push("/");
		console.log(ref);
	}

	render() {
		return(
			<div className='clayton-codes'>
				<Header aboutRef={this.state.aboutRef} projectsRef={this.state.projectsRef} contactRef={this.state.contactRef} handleScroll={this.handleScroll} handleNav={this.handleNav} />
				<Switch>
					<Route exact path='/'>
						<Landing aboutRef={this.state.aboutRef} projectsRef={this.state.projectsRef} contactRef={this.state.contactRef} handleScroll={this.handleScroll} />
					</Route>
					<Route path='/full-stack-of-cards'>
						<Project proj={this.state.projects["full-stack-of-cards"]} />
					</Route>
					<Route path='/musix-app'>
						<Project proj={this.state.projects["musix-app"]} />
					</Route>
					<Route path='/train-ticket'>
						<Project proj={this.state.projects["train-ticket"]} />
					</Route>
					<Route path='/my-spirit-circle'>
						<Project proj={this.state.projects["my-spirit-circle"]} />
					</Route>
					<Route path='/rileys-candles'>
						<Project proj={this.state.projects["rileys-candles"]} />
					</Route>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
