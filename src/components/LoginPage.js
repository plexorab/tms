import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

import './LoginPage.css';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			token: ''
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

	handleSubmit(e) {
		console.log('submit');
		console.log(this.state);
	}

	handleClear(e) {
		console.log('clear');
		console.log(this.state);
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
					{this.props.errors} {this.props.message}
				</div>
				}


			</div>
			
			</Fragment>
		);
	}
}

export default LoginPage;
