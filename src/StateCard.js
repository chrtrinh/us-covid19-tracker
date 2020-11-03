import { Paper } from '@material-ui/core';
import React from 'react';
import './StateCard.css';
import numberFormatter from 'number-formatter';

function StateCard({ data: { state, active, deaths } }) {
	return (
		<div className="stateCard">
			<Paper elevation={2}>
				<div className="stateCard__left">{state}</div>
				<div className="stateCard__right">
					<div className="stateCard__active">
						<h4>Active Cases:</h4>
						<span>{numberFormatter('#,##0.####', active)}</span>
					</div>
					<div className="stateCard__deaths">
						<h4>Deaths:</h4>
						<span>{numberFormatter('#,##0.####', deaths)}</span>
					</div>
				</div>
			</Paper>
		</div>
	);
}

export default StateCard;
