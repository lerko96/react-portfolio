// import logo from './logo.svg';
import './App.scss';
// import Greet from './components/Greet';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

// fix dark mode
function mySwitch() {
	var element2 = document.body;
	element2.classList.toggle('dark');
}

function App() {
	return (
		<div className='App'>
			<Nav />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
