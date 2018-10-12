//import libraries
import React, {Component} from 'react';

//import components
import SignUpForm from './signup-form';

//import styling
import './signup-page.css';

export default function SignUpPage(props) {

    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
	// if (props.loggedin){
	// 	<Redirect to="/" />
	// }

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