import { Paper } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Topbar.css';
import stateNames from './data/statenames';
import numberFormatter from 'number-formatter';
import { abbreviate } from '@pqt/abbreviate';

function Topbar() {
	const [active, setActive] = useState(0);
	const [deaths, setDeaths] = useState(0);
	const [recovered, setRecovered] = useState(0);

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

			let metrics = {
				active: 0,
				deaths: 0,
				recovered: 0,
			};

			sortedStates.forEach((state) => {
				const { active, deaths, recovered } = state;
				metrics.active += active;
				metrics.deaths += deaths;
				metrics.recovered += recovered;
			});

			setActive(metrics.active);
			setDeaths(metrics.deaths);
			setRecovered(metrics.recovered);
		};

		fetchData();
	}, []);
	return (
		<>
			<div className="topBar">
				<Paper>
					<h4>Active</h4>
					<h4>{numberFormatter('#,##0.####', active)}</h4>
				</Paper>
				<Paper>
					<h4>Death</h4>
					<h4>{numberFormatter('#,##0.####', deaths)}</h4>
				</Paper>
				<Paper>
					<h4>Recovered</h4>
					<h4>{numberFormatter('#,##0.####', recovered)}</h4>
				</Paper>
			</div>
			<div className="topBar__mobile">
				<Paper elevation={4}>
					<h4>Active</h4>
					<h4>{abbreviate(active, 2)}</h4>
				</Paper>
				<Paper elevation={4}>
					<h4>Death</h4>
					<h4>{abbreviate(deaths, 2)}</h4>
				</Paper>
				<Paper elevation={4}>
					<h4>Recovered</h4>
					<h4>{abbreviate(recovered, 2)}</h4>
				</Paper>
			</div>
		</>
	);
}

export default Topbar;
