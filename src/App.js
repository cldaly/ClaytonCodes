import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Landing from './pages/landing/landing.component';

class App extends Component {
	render() {
		return(
			<div className='clayton-codes'>
				<Header />
				<Switch>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
