import React from 'react';
import './Prevent.css';

function Prevent() {
	return (
		<div className="prevent">
			<div className="prevent__example">
				<img src="https://img.icons8.com/plasticine/100/000000/protection-mask.png" />
				<h4>Wear a mask!</h4>
			</div>
			<div className="prevent__example">
				<img src="social_distance.png" />
				<h4>Practice Social Distancing</h4>
			</div>
			<div className="prevent__example">
				<img src="wash_hands.png" />
				<h4>Wash your hands!</h4>
			</div>
		</div>
	);
}

export default Prevent;
