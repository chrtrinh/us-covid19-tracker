import './Home.css';
import React from 'react';
import MapChart from './MapChart';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<div className="home__top">
					<Topbar />
				</div>
				<div className="home__bottom">
					<MapChart />
					<Sidebar />
				</div>
			</div>
		</div>
	);
}

export default Home;
