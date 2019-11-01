import React, { Component } from 'react';
import { Navbar, Nav, Alert, Form, FormControl, Button } from 'react-bootstrap';
import { validateUser } from '../actions/User';
import { getUsers } from '../actions/User';
import './navigation.css';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { searchProducts } from '../actions/products';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import DiscountNotificationContainer from './DiscountNotificationContainer';
class Navigation extends Component {
    state = {
        username: '',
        password: '',
        search: '',
        authorisedUser: '',
        authorisedUsername: '',
        isVisible: true
    };

    componentDidMount() {
        this.props.getUsers();
    }

    closeModal = () => {
        this.setState({ isVisible: false });
    };

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
    handleSearch = event => {
        event.preventDefault();

        this.props.searchProducts(this.state.search);
        this.setState({ search: '' });
    };
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        <Link to="/">FlipKart</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {(this.state.authorisedUser === '' ||
                            this.state.authorisedUser === false) && (
                            <Form
                                inline
                                className="form-inline"
                                onSubmit={this.handleSubmit}
                            >
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
                        )}
                        {this.state.authorisedUser && (
                            <Button
                                variant="outline-success"
                                onClick={() =>
                                    this.setState({ authorisedUser: '' })
                                }
                            >
                                Logout
                            </Button>
                        )}
                        <Nav className="mr-auto"></Nav>
                        <Nav className="wishlist-cart-icons">
                            <Link to="/wishlist">
                                <FaHeart
                                    size="2rem"
                                    color="red"
                                    className="spacing"
                                />
                            </Link>
                            (<span>{this.props.wishCount}</span>)
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
                        <Form inline onSubmit={this.handleSearch}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                name="search"
                                value={this.state.search}
                                onChange={this.handleChange}
                            />
                            <Button type="submit" variant="outline-success">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                {this.state.authorisedUser === false && (
                    <Alert variant={'danger'}>Invalid User or Password</Alert>
                )}
                {this.state.authorisedUser === true && (
                    <Alert variant={'success'}>
                        Hi {this.state.authorisedUsername}
                    </Alert>
                )}
                {this.state.authorisedUser && (
                    <DiscountNotificationContainer
                        show={this.state.isVisible}
                        closeModal={this.closeModal}
                    />
                )}
            </div>
        );
    }
}
const mapStateToProps = reduxState => {

    console.log('mapstate?', reduxState.users.users);
    return {
        users: reduxState.users.users,
        validUser: reduxState.validUser,
        wishCount: reduxState.wishlist.wishlist.length,
        cartCount: reduxState.cart.cart.length
    };

};
export default connect(
    mapStateToProps,
    { validateUser, getUsers, searchProducts }
)(Navigation);
