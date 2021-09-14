import React from 'react';

const Nav = () => (
	<header>
		<nav>
			<div id='logo'>
				<a href='index.html'>tk</a>
			</div>
			<div id="nav__list">
				<ul>
					<li>
						<a href='#about' target='_self'>
							ABOUT
						</a>
					</li>
					<li id='nav__contact'>
						<a href='#contact' target='_self'>
							CONTACT
						</a>
					</li>
					<li>
						<a href='#projects' target='_self'>
							PROJECTS
						</a>
					</li>
					<li>
						<a href='#skills' target='_self'>
							SKILLS
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Nav;
