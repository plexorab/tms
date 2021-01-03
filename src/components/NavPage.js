import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { authenticate, isAuthenticated } from '../services/auth';

import './NavPage.css';

class NavPage extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			authenticated: false,
    	}
	}

    componentDidMount() {
        isAuthenticated()
            .then((res) => {
                // console.log(res);
                if (res.data.success) {
                    console.log('LOGGED IN');
                    this.setState({ authenticated: true });
                } else {
                    console.log('NOT LOGGED IN');
                    this.setState({ authenticated: false });
                }
            })
            .catch((err) => {
                this.setState({ authenticated: false });
                console.error(err);
            });
    }

    render() {
        return (
            <div className="navbar-div">
            {this.state.authenticated === true &&
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Plexor - TMS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/clients">Clients</Nav.Link>
                        <Nav.Link href="/logout">Log out</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            }
            </div>
        );
    }



}

export default NavPage;