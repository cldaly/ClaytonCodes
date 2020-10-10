import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Landing from './pages/landing/landing.component';
import Project from './components/project/project.component';
import { ProjectObj } from './models/ProjectObj';

class App extends Component {
	constructor(props) {
		super(props);
		this.aboutRef = React.createRef();
		this.projectsRef = React.createRef();
		this.contactRef = React.createRef();

		this.fullStack = new ProjectObj(
			'Clayton Codes | Full Stack of Cards', 'Full Stack of Cards', { src: '/img/full-stack-cards-small.png', alt: 'full-stack-cards-small' },
			null, 'Flash cards for Full Stack Java Developers. Built with JavaScript, Java, ReactJS, Spring Boot, and PostgreSQL. All design and styling custom created and without the use of Bootstrap/Material or any similar library.',
			'for this project was to create a full stack web application with ReactJS on the front end, that could also assist in interview preparation.',
			'https://github.com/cldaly/FullStackOfCards', 
			[
				"This project was primarily undertaken as a means of practicing React on the front end, as well as Spring Boot / PostgreSQL on the back end. This project simply offers a UI for a user to practice interview questions for a Java Developer role.",
				"The back end was built in Java, using Spring Boot's RESTapi services. Flash Cards are read, updated, retrieved, and deleted to a PostgreSQL database using MongoRepository interface. There is also a simple User controller that allows for the login and registration of new users. Forms feature custom validation on the front end, along with messages to aid in UX.",
				"When a user enters the web app, all flash cards will be pulled from the database. Random flash cards will be pulled and generated for the user. The flash card's unique ID will be logged into an array and checked to ensure each card gets displayed once every cycle of cards. Users that are logged in can add new flash cards to the database, and can also view the cards they have added. They can search through, edit, and delete their cards through their user portal."
			], 
			['JavaScript', 'ReactJS', 'Java', 'Spring Boot', 'PostgreSQL', 'HTML5 & CSS3'], 
			[
				{ group: false, img: { src: '/img/full-stack-cards-01.png', alt: 'full-stack-cards-01' }, desc: 'The landing page for this app features a slick loading animation for the user, as they proceed into the application' },
				{ group: true, img: [{ src: '/img/full-stack-cards-02.png', alt: 'full-stack-cards-02' }, { src: '/img/full-stack-cards-03.png', alt: 'full-stack-cards-03' }], desc: "Once the user has entered the app, all cards in the database will be retrieved, and a random card will be displayed. That card's ID will be logged to ensure cards will not be repeated until the user has gone through all cards" },
				{ group: false, img: { src: '/img/full-stack-cards-04.png', alt: 'full-stack-cards-04' }, desc: 'A logged in user can view all of the cards they have added. A search bar at top will instantly filter the list of flash cards for better access. The user can edit or delete their cards from this page' },
				{ group: true, img: [{ src: '/img/full-stack-cards-05.png', alt: 'full-stack-cards-05' }, { src: '/img/full-stack-cards-06.png', alt: 'full-stack-cards-06' }], desc: 'The application features a very simple login and registration component, as seen on the left. Once logged in, a user can easily add flash cards to the database with the form on the right. These forms feature custom validation' } 
			]
		);
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
						<Project proj={this.fullStack} />
					</Route>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
