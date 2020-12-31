import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import './LoginPage.css';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			errors: '',
			message: '',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange(e) {
		switch (e.target.name) {
			case 'username-input':
				this.setState({ username: e.target.value });
				break;
			case 'password-input':
				this.setState({ password: e.target.value });
				break;
			default:
				break;
		}
		// console.log(this.state);
	}

	async handleSubmit(e) {
		try {
			const response = await axios.post(
				'http://localhost:3131/api/auth/signin',
				{ username: this.state.username, password: this.state.password }
			);
			console.log('👉 Returned data:', response);
		  } catch (e) {
			console.log(`😱 Axios request failed: ${e}`);
		  }
	}

	handleClear(e) {
		console.log('clear');
		
	}

	render() {
		return (
			<Fragment>
			<div className="login-div">

				{/* LABEL */}
				<div className="login-label">
					<h2>Please login</h2>
				</div>

				<form>
				{/* USERNAME */}
				<input
					className="mb-3 inputs"
					type="text"
					name="username-input"
					placeholder="Username/email"
					value={this.state.username}
					onChange={this.handleChange}
				/>

				{/* PASSWORD */}
				<input
					className="mb-3 inputs"
					type="password"
					name="password-input"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				</form>

				<div className="button-div">
					<Button variant="primary" className="buttons" onClick={this.handleSubmit}>LOGIN</Button>
					<Button variant="primary" className="buttons" onClick={this.handleClear}>CLEAR</Button>
				</div>

				{this.props.errors &&
				<div className="alert-div">
					{this.state.errors} {this.state.message}
				</div>
				}


			</div>
			
			</Fragment>
		);
	}
}

export default LoginPage;
