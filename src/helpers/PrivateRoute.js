import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Auth from '../classes/Auth';

class PrivateRoute extends React.Component {
    state = {
        loading: true,
        isAuthenticated: false,
    }
    componentDidMount() {
        Auth.isUserAuthenticated()
            .then((res) => {
                if (res.data.success) {
                    this.setState({
                        loading: false,
                        isAuthenticated: true,
                    });
                } else {
                    this.setState({
                        loading: false,
                        isAuthenticated: false,
                    });
                }
            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    isAuthenticated: false,
                });
            });
    }
    render() {
        const { component: Component, ...rest } = this.props;
        if (this.state.loading) {
            return <div>LOADING</div>;
        } else {
            return (
                <Route {...rest} render={props => (
                    <div>
                        {!this.state.isAuthenticated && <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />}
                        <Component {...this.props} />
                    </div>
                )}
                />
            )
        }
    }
}

export default PrivateRoute;