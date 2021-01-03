import React from 'react';
import { logout } from '../services/auth';
import './LogoutPage.css';

class LogoutPage extends React.Component {

    constructor(props) {
		super(props);
	}

    componentDidMount() {
        logout()
            .then((res) => {
                console.log(res);
                this.props.history.push('/login');
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (
            <div>
                You are now logged out
            </div>
        );
    }



}

export default LogoutPage;