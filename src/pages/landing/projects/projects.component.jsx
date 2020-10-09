import React from 'react';
import './projects.styles.css';

const Projects = ({projectsRef}) => {
   return(
		<section id="projects" ref={projectsRef}>
			<h3 className="sectionTitle">My Projects</h3>
			<div className="projectsMain">
					
				<div className="project-group">
					<div className="projectCard">
						<div className="cardImg">
							<a href="/full-stack-cards"><img src="../img/full-stack-cards-small.png" alt="Musix App" /></a>
						</div>
						<div className="cardInfo">
							<div className="cardDetails">
								<h4 className="cardTitle"><a href="/full-stack-cards">Full Stack of Cards</a></h4>
								<div className="cardDescription">
									<p>Flash Cards for Full Stack Java Developers, featuring a styled landing page and add/edit functionality</p>
									<p>Built using JavaScript, Java, ReactJS, Spring Boot, and PostgreSQL</p>
								</div>
							</div>
							<a className="projectLink" href="/full-stack-cards">More Info on "Full Stack of Cards"</a>
						</div>
					</div>

					<div className="projectCard">
						<div className="cardImg">
							<a href="/musix-app"><img src="../img/musix-app-small.png" alt="Musix App" /></a>
						</div>
						<div className="cardInfo">
							<div className="cardDetails">
								<h4 className="cardTitle"><a href="/musix-app">Musix App</a></h4>
								<div className="cardDescription">
									<p>A Web Application for users to find and save their favorite music albums to their personal profile.</p>
									<p>Built using Java, Spring Boot, Angular, MySQL, and JavaScript</p>
								</div>
							</div>
							<a className="projectLink" href="/musix-app">More Info on "Musix App"</a>
						</div>
					</div>
				</div>
					
				<div className="project-group">
					<div className="projectCard">
						<div className="cardImg">
							<a href="/train-ticket"><img src="../img/train-ticket-small.png" alt="Train Ticket Generator" /></a>
						</div>
						<div className="cardInfo">
							<div className="cardDetails">
								<h4 className="cardTitle"><a href="/train-ticket">Train Ticket Generator</a></h4>
								<div className="cardDescription">
									<p>Creates a train ticket for a user based on a train database and a dynamic user form. Writes the ticket to a file and saves it to the user's Downloads folder.</p>
									<p>Built using Java, Oracle SQL and JavaScript. </p>
								</div>
							</div>
							<a className="projectLink" href="/train-ticket">More Info on "Train Ticket Generator"</a>
						</div>
					</div>

					<div className="projectCard">
						<div className="cardImg">
							<a href="/my-spirit-circle"><img src="../img/my-spirit-circle-small.png" alt="My Spirit Circle" /></a>
						</div>
						<div className="cardInfo">
							<div className="cardDetails">
								<h4 className="cardTitle"><a href="/my-spirit-circle">My Spirit Circle</a><span className="wop">  (work in progress)</span></h4>
								<div className="cardDescription">
									<p>A personal project I embarked on in July 2019, this web application started as both a business idea and a project to further learn about full stack web development.</p>
									<p>Developed using Node.js, Express.js, as well as HTML, CSS, and front-end Javascript.</p>
								</div>
							</div>
							<a className="projectLink" href="/my-spirit-circle">More Info on "My Spirit Circle"</a>
						</div>
					</div>
				</div>
					
				<div className="project-group">
					<div className="projectCard">
						<div className="cardImg">
							<a href="/rileys-candles"><img src="../img/rileys-candles-small.png" alt="Riley's Candles" /></a>
						</div>
						<div className="cardInfo">
							<div className="cardDetails">
								<h4 className="cardTitle"><a href="/rileys-candles">Riley's Candles</a></h4>
								<p className="cardCourse"><strong>Class:</strong> Harvard CS50 - Introduction to Computer Science</p>
								<p className="cardDescription">A simple e-commerce type web app designed for my final class project. Built off of Flask and Python, utilizing Sqlite3 and Javascript for functionality.</p>
							</div>
							<a className="projectLink" href="/rileys-candles">More Info on "Riley's Candles"</a>
						</div>
					</div>

					<div className="projectCard">
						<div className="cardInfo game-card">
							<div className="cardTitle game-card-title">JavaScript Games</div>
							<div className="game-details">
								<div className="cardImg game-img">
									<a href="/tic-tac-toe">
										<span className="game-label">Tic Tac Toe</span>
										<img src="../img/tic-tac-toe-01.png" alt="Tic Tac Toe" />
									</a>
								</div>
								<div className="cardImg game-img">
									<a href="/grid-dot-game">
										<span className="game-label">Grid Dot Game</span>
										<img src="../img/grid-game-01.png" alt="Grid Dot Game" />
									</a>
								</div>
								<div className="cardImg game-img">
									<a href="/snek-game">
										<span className="game-label">Snek Game</span>
										<img src="../img/snek-game-sm.png" alt="Snake Game" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
					
			</div>
		</section>
	);
}

export default Projects;