import React from 'react';

const Footer = () => (
	<footer>
		<span id='copyright'>&copy; 2021 Tyler Koenig</span>
		<div id='footLinks'>
			<a href='https://github.com/lerko96' target='_blank' title='github'>
				<i class='fa fa-github fa-2x' aria-hidden='true'></i>
			</a>
			<a
				href='https://www.linkedin.com/in/tyler-koenig-72607a18b/'
				target='_blank'
				title='LinkedIn'
			>
				<i class='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>
			</a>
			<a
				href='mailto:tylerkng96@icloud.com'
				target='_blank'
				title='email'
			>
				<i class='fa fa-envelope-o fa-2x' aria-hidden='true'></i>
			</a>
		</div>
	</footer>
);

export default Footer;
