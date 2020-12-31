import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';

import './LoginPage.css';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			message: '',
			errors: false,
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

	async handleSubmit() {
		console.log(process.env.REACT_APP_API_BASE_URL);
		try {
			axios.defaults.withCredentials = true;
			const response = await axios.post(
				`${process.env.REACT_APP_API_BASE_URL}/auth/signin`,
					{
						username: this.state.username,
						password: this.state.password,
						// withCredentials: true,
      			// headers: {
						// 	crossDomain: true, 'Content-Type': 'application/json'
						// },
					}
			);
			console.log('👉 Returned data:', response);
			if (response.data.success) {
				console.log('User successfully authenticated');
				this.setState({ errors: false, message: '' });
			} else {
				console.log(response.data.message);
				this.setState({ errors: true, message: response.data.message });
			}
			// console.log(Cookies.get('username'));
		} catch (err) {
			console.log(`😱 Axios request failed: ${err}`);
			console.log(JSON.stringify(err));
			this.setState({ errors: true, message: 'Unknown error' });
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

				{/* MESSAGE */}
				{this.state.errors &&
				<div className="errors-div">
				{this.state.message}
				</div>
				}
				{!this.state.errors &&
				<div className="message-div">
				</div>
				}

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

			</div>

			</Fragment>
		);
	}
}

export default LoginPage;
