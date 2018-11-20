//import libraries
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

//import components
import SignUpForm from './signup-form';

//import styling
import './signup-page.css';

export function SignUpPage(props) {

    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
	if (props.loggedin){
		<Redirect to="/dashboard" />
	}

	return (

		<div>
			<div className="signup-card">
				<SignUpForm />
			</div>
			<div className="signup-nav">
				<button className="login-button">Login</button>
			</div>
		</div>

	)
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(SignUpPage);