import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './project.styles.css';

const Project = ({proj}) => {

	useEffect(() => {
		document.title = proj.title;
	});

	return(
		<section className="projectSection" id="fullstackCards">
			<div className="projectMain">
				<div className="projectHeader">
					<img className='project-img-sm' src={ proj.headerImg.src } alt={ proj.headerImg.alt } />
					<div className="projectHeaderContent">
						<h2>{ proj.projectName }</h2>
						<p><strong>Brief:</strong> { proj.brief }</p>
						<p><strong>The goal</strong> { proj.goal }</p>
						<p className="gitRepo"><Link to={{ pathname: proj.gitUrl }} target="_blank"><i className="fab fa-github"></i> View GitHub Repository</Link></p>
					</div>
				</div>
				<div className="projectDetails">
					<div className="projectDescription">
						<h3>Project Description</h3>
						<div>
							{ proj.description.map((desc, i) => <p key={i}>{desc}</p>) }
						</div>
					</div>
					<div className="projectTech">
						<h3>Technologies Used</h3>
						<ul>
							{ proj.techList.map((tech, i) => <li key={i}>{tech}</li>) }
						</ul>
					</div>
				</div>
				<hr />
				<div className="projectGallery">
					<h3>Image Gallery</h3>
					<div className="galleryMain">
						{ proj.imgGallery.map((img, i) => {
							return (!img.group) ? (
								<div key={i} className="projectImg">
									<img src={img.img.src} alt={img.img.alt} />
									<p className="projectImgInfo">{ img.desc }</p>
									<hr />
								</div>
							) : (
								<div key={i} className="projectImg">
									<div className="imgGroup">
										<img src={img.img[0].src} alt={img.img[0].alt} />
										<img src={img.img[1].src} alt={img.img[1].alt} />
									</div>
									<p className="projectImgInfo">{ img.desc }</p>
									<hr />
								</div>
							);
						}) }
					</div>
				</div>
			</div>
		</section>
	);
}

export default Project;