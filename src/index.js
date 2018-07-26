import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" component={Header} />
				<Route exact path="/" component={Home} />
				<Route path = "/about" component = {About} />
			</div>
		</BrowserRouter>
	)
}

render(<Root />, document.getElementById('root'));