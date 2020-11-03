import React from 'react';
import './App.css';
import Home from './Home';

function App() {
	return (
		<div className="app">
			{/* {user ? (
				<div className="app__container">
					<Home />
				</div>
			) : (
				<h2>
					<Login />
				</h2>
			)} */}
			<div className="app__container">
				<Home />
			</div>
		</div>
	);
}

export default App;
