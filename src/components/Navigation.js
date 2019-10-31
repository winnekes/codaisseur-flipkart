import React, { Component } from 'react';
import { Navbar, Nav, Alert, Form, FormControl, Button } from 'react-bootstrap';
import { validateUser } from '../actions/User';
import { getUsers } from '../actions/User';
import './navigation.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    state = {
        username: '',
        password: '',
        authorisedUser: '',
        authorisedUsername: ''
    };

    componentDidMount() {
        this.props.getUsers();
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            const userFound = this.findUser(
                this.props.users,
                this.state.username
            );

            if (userFound !== undefined) {
                if (userFound.password === this.state.password) {
                    this.props.validateUser(true);
                    this.setState({
                        authorisedUser: true,
                        authorisedUsername: this.state.username
                    });
                } else {
                    this.props.validateUser(false);
                    this.setState({ authorisedUser: false });
                }
            } else {
                this.props.validateUser(false);
                this.setState({ authorisedUser: false });
            }
        }
        this.setState({
            username: '',
            password: ''
        });
    };

    findUser = (users, uname) => {
        const getUser = users.find(user => user.username === uname);

        return getUser;
    };
    render() {
        console.log(this.state.authorisedUser);
        return (
            <div>
                {this.state.authorisedUser === false && (
                    <Alert variant={'danger'}>Invalid User or Password</Alert>
                )}
                {this.state.authorisedUser === true && (
                    <Alert variant={'success'}>
                        Hi {this.state.authorisedUsername}
                    </Alert>
                )}

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Flipkart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline onSubmit={this.handleSubmit}>
                            <FormControl
                                type="text"
                                placeholder="Enter Username"
                                className="mr-sm-2"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <FormControl
                                type="text"
                                placeholder="Enter Password"
                                className="mr-sm-2"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <Button variant="outline-success" type="submit">
                                Login
                            </Button>
                        </Form>
                        <Nav className="mr-auto"></Nav>
                        <Nav className="shopping-cart-icon">
                            <Link to="/cart">
                                <FaShoppingCart
                                    size="2rem"
                                    color="darkgray"
                                    className="spacing"
                                />
                                (<span>{this.props.cartCount}</span>)
                            </Link>
                        </Nav>
                        <Nav className="mr-auto"></Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = reduxState => {
    console.log('mapstate?', reduxState.users.users);
    return {
        users: reduxState.users.users,
        validUser: reduxState.validUser,
        cartCount: reduxState.cart.cart.length
    };
};
export default connect(
    mapStateToProps,
    { validateUser, getUsers }
)(Navigation);
