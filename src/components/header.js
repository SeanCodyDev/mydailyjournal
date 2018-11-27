//libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

//import actions
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

//components
import {Navbar, Nav, NavItem} from 'react-bootstrap';

//styling
import './header.css';

export class Header extends React.Component{

	logOut(){
		this.props.dispatch(setCurrentUser(null));
		this.props.dispatch(setAuthToken(null));
		clearAuthToken();
	}

	render(){

		let welcome;
        if (this.props.loggedIn) {
            welcome = (
                <Navbar.Text>
                  Signed in as: {this.props.user.username}
                </Navbar.Text>
            );
        }

		let navMenu;
		if (this.props.loggedIn){
			navMenu = (
				<Nav pullRight>
                    <NavItem onClick={() => this.logOut()}>Log out</NavItem>
                </Nav>
			)
		} else {
			navMenu = (
				<Nav pullRight>
                    <NavItem href='/register'>Register</NavItem>
                    <NavItem href='/login'>Login</NavItem>
                </Nav>
			)
		}


		return (
			<Navbar className="header" collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand className="brand">
						<a href="/">MyDailyJournal</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					{welcome}
					{navMenu}
				</Navbar.Collapse>
			</Navbar>

		)
	}
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(Header);