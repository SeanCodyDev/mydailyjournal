//import libraries
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import LoginForm from './login-form';

//import styling
import './login-page.css';

export function LoginPage(props) {

    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard

    console.log("LoginPage props:", props);
	if (props.loggedIn){
		console.log('logged in!');
		return <Redirect to="/" />
	}

	return (
		<div>
			<div className="login-card">
				<LoginForm />
			</div>
			<div className="login-nav">
				<button className="signup-button">Register</button>
			</div>
		</div>

	)
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);