import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';

import { authenticate, isAuthenticated } from '../services/auth';

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
	}

	async handleSubmit() {
		try {
			const response = await authenticate(this.state.username, this.state.password);
			if (response.data.success) {
				this.setState({ errors: false, message: '' });
				// Redirect to home page
				this.props.history.push('/');
			} else {
				this.setState({ errors: true, message: response.data.message });
			}
		} catch (err) {
			console.log(JSON.stringify(err));
			this.setState({ errors: true, message: 'Unknown error' });
		}
	}

	handleClear(e) {
		// console.log('clear');
		this.setState(
			{
				username: '',
				password: '',
				errors: false,
				message: '',
			}
		);
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

					<div>
						<a href="/signup">Signup</a>
						<a href="/reset-password">Forgot password</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default LoginPage;
