import React, { useState } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, List } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Navbar() {
	const [state, setState] = React.useState({
		left: false,
	});

	const list = (anchor) => (
		<div
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
			className="navbar__list"
		>
			<List className="navbar__drawer__parent">
				<div className="navbar__drawer">
					<div className="navbar__header">
						<img src="close.png" alt="x_icon" />
					</div>
					<h4>Covid-19 Tracker</h4>
					<div className="navbar__drawer__links">
						<Link to="/">Home</Link>
						<Link to="/tracker">Tracker</Link>
					</div>
				</div>
				<div className="navbar__socials"></div>
			</List>
		</div>
	);

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	let anchor = 'left';

	return (
		<>
			<div className="navbar">
				<Link to="/">
					<div className="navbar__logo">
						<h4>Covid-19 Tracker</h4>
					</div>
				</Link>
				<div className="navbar__links">
					<Link to="/">Home</Link>
					<Link to="/tracker">Tracker</Link>
				</div>
			</div>
			<div className="navbar--mobile">
				<div className="navbar--mobile--logo">
					<Link to="/">
						<div className="navbar__logo">
							<h4>Covid-19 Tracker</h4>
						</div>
					</Link>
				</div>
				<div className="navbar--mobile--right">
					<IconButton onClick={toggleDrawer(anchor, true)}>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list(anchor)}
					</Drawer>
				</div>
			</div>
		</>
	);
}

export default Navbar;
