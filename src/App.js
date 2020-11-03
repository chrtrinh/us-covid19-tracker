import React from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Routes from './routes';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Routes />
		</div>
	);
}

export default App;
