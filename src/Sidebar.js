import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import stateNames from './data/statenames';
import StateCard from './StateCard';

function Sidebar() {
	const [states, setStates] = useState([]);

	const byState = (a, b) => {
		if (a.state < b.state) {
			return -1;
		}
		if (a.state > b.state) {
			return 1;
		}
		return 0;
	};

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await Axios.get(
				'https://disease.sh/v3/covid-19/states?sort=cases&yesterday=true&allowNull=true'
			);

			//Sort the data - alphabetically
			let sortedStates = data.sort(byState);

			//Filter Out Names
			sortedStates = sortedStates.filter((currentValue) => {
				const { state } = currentValue;
				return stateNames.includes(state);
			});

			setStates(sortedStates);
		};

		fetchData();
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar__content">
				{states.map((state, iter) => (
					<StateCard data={state} key={iter} />
				))}
			</div>
		</div>
	);
}

export default Sidebar;
