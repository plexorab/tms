import React, { Component, Fragment } from 'react';
import { Button, Nav } from 'react-bootstrap';

import { fetchAllClients } from '../services/client';
import NavPage from './NavPage';

import './ClientsPage.css';

class ClientsPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			clients: [],
		}
	}

	componentDidMount() {
		console.log('Did mount!');
		fetchAllClients()
			.then(data => {
				console.log(data);
				if (data.data.success) {
					const clients = data.data.payload;
					this.setState({ clients, isLoading: false });
				} else {
					console.error('Error!');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<div>
				<NavPage />
                <div className="clients-div">
					<div className="clients-search-bar">
						SearchBar
					</div>
					{!this.state.isLoading &&
					<div>
						{this.state.clients.map((data, key) => {
							return(
								<div key={key}>
									{data.clientid + " " + data.clientname}
								</div>
							)
						})}
					</div>
					}
				</div>
			</div>
		);
	}
}

export default ClientsPage;
