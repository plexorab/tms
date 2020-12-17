import React from 'react';
import { connect } from 'react-redux';
import { setAuth } from './redux/actions';
import { Alert, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Person, Key } from 'react-bootstrap-icons';

import './LoginPage.css';

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	handleChange(e) {
		let obj = {};
		switch(e.target.name) {
			case 'username-input':
				this.setState({ username: e.target.value});
				break;
			case 'password-input':
				this.setState({ password: e.target.value});
				break;
			default:
				break;
		}		
		console.log(this.state);
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

				{/* USERNAME */}
				<input
					className="mb-3 inputs"
					type="text"
					name="username-input"
					value={this.state.username}
					onChange={this.handleChange}
				/>
				{/* <InputGroup className="mb-3 inputs">
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						name="username-input"
						aria-label="Username"
						aria-describedby="basic-addon1"
						type="text"
						value={this.target.value}
						onChange={this.handleChange}
					/>
				</InputGroup> */}

				{/* PASSWORD */}
				<input
					className="mb-3 inputs"
					type="password"
					name="password-input"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				{/* <InputGroup className="mb-3 inputs">
					<InputGroup.Prepend>
						<InputGroup.Text id="basic-addon1"><Key /></InputGroup.Text>
					</InputGroup.Prepend>
					<FormControl
						name="password-input"
						aria-label="Password"
						aria-describedby="basic-addon1"
						type="password"
						value={this.state.currentUser.password}
						onChange={this.handleChange}
					/>
				</InputGroup> */}

				<div className="button-div">
					<Button variant="primary" className="buttons" onClick={this.handleSubmit}>LOGIN</Button>
					<Button variant="primary" className="buttons" onClick={this.handleClear}>CLEAR</Button>
				</div>

			</div>

		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 	  currentUser: state.currentUser,
// 	};
//   };

//   const mapDispatchToProps = {
// 	setAuth,
//   };  

export default connect(null, { setAuth })(LoginPage);