import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';
import Body from './components/Body';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Body />
		</div>
	);
};

export default App;