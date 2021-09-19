// import logo from './logo.svg';
import React from 'react';

import './App.scss';
// import Greet from './components/Greet';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main/Main';

// fix dark mode
// function mySwitch() {
// 	var element2 = document.body;
// 	element2.classList.toggle('dark');
// }

function App() {
	const [darkMode, setDarkMode] = React.useState(false);

	React.useEffect(() => {
		const json = localStorage.getItem('lerko96-dark-mode');
		const currentMode = JSON.parse(json);
		if (currentMode) {
			setDarkMode(true);
		} else {
			setDarkMode(false);
		}
	}, []);

	React.useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		const json = JSON.stringify(darkMode);
		localStorage.setItem('lerko96-dark-mode', json);
	}, [darkMode]);

	return (
		<div className='App'>
			<Nav />
			<div class='switch-container'>
				<label class='switch-wrap'>
					<input
						type='checkbox'
						onClick={() => setDarkMode(!darkMode)}
					/>
					<div class='switch'></div>
				</label>
			</div>
			<Main />
			<Footer />
		</div>
	);
}

export default App;
