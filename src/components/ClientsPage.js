import React, { Component, Fragment } from 'react';
import { Button, Nav } from 'react-bootstrap';

import NavPage from './NavPage';

import './ClientsPage.css';

class ClientsPage extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('Did mount!');
	}

	render() {
		return (
			<div>
				<NavPage />
                <div className="clients-div">
					<div className="clients-search-bar">
						SearchBar
					</div>
				</div>
			</div>
		);
	}
}

export default ClientsPage;
