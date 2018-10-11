//import libraries
import React, {Component} from 'react';

//import components
import LoginForm from './login-form';

//import styling
import './login-page.css';

export default function LoginPage(props) {

    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
	// if (props.loggedin){
	// 	<Redirect to="/" />
	// }

	return (

		<div className="login-card">
			<LoginForm />
		</div>

	)
}