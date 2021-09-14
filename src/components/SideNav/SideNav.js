import React from 'react';

const SideNav = () => (
	<div class='sideWrapper'>
		<div class='side__dark'>
			<input
				onclick='mySwitch()'
				type='checkbox'
				class='checkbox'
				id='checkbox'
			/>
			<label class='label' for='checkbox'>
				<i class='far fa-moon'></i>
				<i class='fas fa-sun'></i>
				<div class="ball"></div>
			</label>
		</div>
		<div class='side__icons'>
			<a 
				href='https://www.linkedin.com/in/tyler-koenig-72607a18b/'
				target='_blank'
				title='LinkedIn'
			>Link
				<i class='fa fa-linkedin-square fa-2x' aria-hidden='true'></i>
			</a>
			<a href='https://github.com/lerko96' target='_blank' title='github'>Git
				<i class='fa fa-github fa-2x' aria-hidden='true'></i>
			</a>
			<a
				href='mailto:tylerkng96@icloud.com'
				target='_blank'
				title='email'
			>Mail
				<i class='fa fa-envelope-o fa-2x' aria-hidden='true'></i>
			</a>
		</div>
	</div>
);


export default SideNav;
