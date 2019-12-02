import React from 'react';
import './App.css';
import {Grid,Cell} from 'react-mdl';

function Home() {
  return (
    <div style={{width: '100%', margin: 'auto'}}>
		<Grid className="landing-grid">
			<Cell col={12}>
				<img 
					src="img.JPG"
					className="img"
				/>
				
				<div className="banner-text">
					<h1>Web Developer</h1>
					
				<hr/>
					<p> HTML/CSS | JavaScript | React </p>
				<div className="social-links">
				
				{/*LinkedIn*/}
					<a href="https://www.linkedin.com/in/tripthi-palan-410aaa183?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlncNg0avTs%2B7vn0BZDi2lg%3D%3D" rel="noopener noreferrer"target="_blank">
						<i className=" fa fa-linkedin-square"  aria-hidden="true" />
					</a>
					
				{/*Github*/}
					<a href="https://github.com/Tripthipalan" rel="noopener noreferrer"target="_blank">
						<i className=" fa fa-github-square"  aria-hidden="true" />
					</a>
				{/*Instagram*/}
					<a href="http://google.com" rel="noopener noreferrer"target="_blank">
						<i className=" fa fa-instagram-square"  aria-hidden="true" />
					</a>
					
				{/*Facebook*/}
					<a href="http://google.com" rel="noopener noreferrer"target="_blank">
						<i className=" fa fa-facebook-square-square"  aria-hidden="true" />
					</a>
				</div>
				
				</div>
			</Cell>
		</Grid>
		</div>
  );
}

export default Home;