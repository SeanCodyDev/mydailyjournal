//libraries
import React from 'react';

//components

//styling
import './login-form.css';

export default class LoginForm extends React.Component {

	render () {

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

		return (
            <div>
                <h1 className="login-title"><span className="fa fa-sign-in"></span>Login</h1>
                <form className="login-form">
                    {error}
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>

		)

	}
}