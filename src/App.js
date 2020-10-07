import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

class App extends Component {
	render() {
		return(
			<div className='clayton-codes'>
				<Header />
				Clayton Codes
				<Footer />
			</div>
		);
	}
}

export default App;
