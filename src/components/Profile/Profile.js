import React from 'react';

import headshot from '../../images/headshot-tyler_koenig.png';

// function Greet() {
//     return <p>Hello TK</p>
// }

const Profile = () => (
	<section id='profile'>
		<article class='profile__card'>
			<div class='card__img'>
				<img id='headshot' src={headshot} alt='tyler' />
			</div>
			<div class='card__bio'>
				<div class='bio__name'>
					<a href='index.html'>TYLER KOENIG</a>
				</div>
				<div class='bio__desc'>
					<p>SOFTWARE DEVELOPER</p>
				</div>
				<div class='bio__contacts' id='contact'>
					<a
						href='https://www.linkedin.com/in/tyler-koenig-72607a18b/'
						target='_blank'
						title='LinkedIn'
					>
						<i
							class='fa fa-linkedin-square fa-2x'
							aria-hidden='true'
						></i>
					</a>
					<a
						href='https://github.com/lerko96'
						target='_blank'
						title='github'
					>
						<i class='fa fa-github fa-2x' aria-hidden='true'></i>
					</a>
					<a
						href='mailto:tylerkng96@icloud.com'
						target='_blank'
						title='email'
					>
						<i
							class='fa fa-envelope-o fa-2x'
							aria-hidden='true'
						></i>
					</a>
				</div>
			</div>
		</article>
		<article class='profile__about'>
			<h2>about</h2>
			<p>
				I'm Tyler Koenig, a lifelong student. Graduated with an
				Associate of Arts from Lorain County Community College in 2018.
				Inbound associate at Amazon CLE-3 since December 2019. Currently
				learning Java and front-end web development through We Can Code
				IT Bootcamp. Always interested in a challenge!
			</p>
		</article>
		<article class='profile__skills' id='skills'>
			<h2>skills</h2>
			<ul>
				<li>Java</li>
				<li>Spring</li>
				<li>Thymeleaf</li>
				<li>JavaScript</li>
				<li>MVC</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>Test Driven Development</li>
				<li>Agile (Scrum)</li>
				<li>Object Oriented Programming</li>
				<li>JSON</li>
				<li>React</li>
				<li>REST APIs</li>
				<li>Responsive Design</li>
				<li>Relational Databases</li>
				<li>Source Control/ Github</li>
			</ul>
		</article>
	</section>
);

export default Profile;
