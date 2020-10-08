import React from 'react';
import './about.styles.css';

const About = () => {
	return(
		<section id="about">
			<img src="../img/clay-daly-01.png" alt='Clayton Daly' />
			<h3 className="sectionTitle">About me</h3>
			<div className="aboutMain">
					<p>
						I graduated from California Polytechnic State University, San Luis Obispo, in 2013 with a Bachelor of Science degree in Industrial Technology. 
						Soon after, I began working in operations for a third party logistics company in Los Angeles, CA. 
						After three years of being yelled at by truck drivers, I knew I needed to make a career change!
					</p>
					<p>
						In 2017 I went to work for a young tech startup, and I soon developed a curiosity for software development, coding, and technology. 
						I was able to spend time with our highly skilled engineering team every day, and in 2018 I was convinced that I was going to make this a career for myself as well.
						I decided to embark down a path to become a self-taught Full Stack Web Developer. 
					</p>
					<p>
						I have taken every online class out on the web these days, from Harvard's CS50 to a great number of Udemy courses. 
						Soon enough, I realized I learned the most while building things myself!
						My passion for learning about software development and creating web applications continues to grow each day.
					</p>
					<p>
						Currently, I am working as a Full Stack Developer, specializing in Java, JavaScript, and Angular2+. 
						I strive to create intuitive, responsive web applications, designed for the every-day user.
						Whatever my next challenge will be, my passion for learning, software, and creating will continue to grow each day.
					</p>
			</div>
			<hr />
					
			<div className="technologiesList">
				<h4 className="tech-header">Here is a list of technologies I have learned and regularly use</h4>
				<div className="techListContent">
					<div className="tech-row">
						<div className="tech-container">
							<h4>Languages</h4>
							<ul>
								<li>Java</li>
								<li>JavaScript</li>
								<li>Python</li>
								<li>C</li>
							</ul>
						</div>
						<div className="tech-container">
							<h4>Databases</h4>
							<ul>
								<li>MS SQL Server</li>
								<li>MySQL</li>
								<li>Oracle SQL</li>
								<li>MongoDB</li>
							</ul>
						</div>
					</div>
					<div className="tech-row">
						<div className="tech-container">
							<h4>Frameworks & Libraries</h4>
							<ul>
								<li>Angular2+</li>
								<li>ReactJS</li>
								<li>Spring Boot</li>
								<li>ExpressJS</li>
								<li>NodeJS</li>
								<li>Flask (python)</li>
							</ul>
						</div>
						<div className="tech-container">
							<h4>Others</h4>
							<ul>
								<li>HTML5 & CSS3</li>
								<li>RESTful APIs</li>
								<li>MicroServices</li>
								<li>Git</li>
								<li>Bash</li>
								<li>Postman</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;