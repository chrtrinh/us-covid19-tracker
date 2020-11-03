import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Landing from './Landing';

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route path="/tracker" component={Home}></Route>
				<Route path="/" component={Landing}></Route>
				<Route component={Home}></Route>
			</Switch>
		);
	}
}

export default Routes;
