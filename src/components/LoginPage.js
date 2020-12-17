import React from 'react';
import { connect } from 'react-redux';
import { setUsername, setPassword } from './redux/actions';
import { SET_USERNAME, SET_PASSWORD, SET_TOKEN } from './redux/actionTypes';
import { Button } from 'react-bootstrap';

import './LoginPage.css';
import store from './redux/store';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange(e) {
		switch (e.target.name) {
			case 'username-input':
				store.dispatch({ type: SET_USERNAME, username: e.target.value });
				break;
			case 'password-input':
				store.dispatch({ type: SET_PASSWORD, password: e.target.value });
				break;
			default:
				break;
		}
		console.log(this.props);
	}

	handleSubmit(e) {
		console.log('submit');
		setAuth(this.state.username, this.state.password);
	}

	handleClear(e) {
		this.setState({
			username: '',
			password: ''
		});
	}

	render() {
		return (
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
					value={this.props.username}
					onChange={this.handleChange}
				/>

				{/* PASSWORD */}
				<input
					className="mb-3 inputs"
					type="password"
					name="password-input"
					value={this.props.password}
					onChange={this.handleChange}
				/>
				</form>

				<div className="button-div">
					<Button variant="primary" className="buttons" onClick={this.handleSubmit}>LOGIN</Button>
					<Button variant="primary" className="buttons" onClick={this.handleClear}>CLEAR</Button>
				</div>

			</div>

		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.username,
		password: state.password,
		token: state.token
	};
};

export default connect(mapStateToProps)(LoginPage);
