import Home from './Home';
import React from 'react';
import './Landing.css';
import Topbar from './Topbar';
import Prevent from './Prevent';

function Landing() {
	return (
		<div className="landing">
			<h4>Let's do our part and prevent the spread of Covid-19</h4>
			<div className="landing__top">
				<img src="landing.svg" alt="" />
				<Topbar />
			</div>
			<Prevent />
		</div>
	);
}

export default Landing;
