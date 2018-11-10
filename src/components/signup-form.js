//libraries
import React from 'react';
import {connect} from 'react-redux';


//components

//styling
import './signup-form.css';

export class SignUpForm extends React.Component {



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
                <h1 className="signup-title"><span className="fa fa-sign-in"></span>Sign-Up</h1>
                <form className="signup-form" onSubmit={e => e.preventDefault()}>
                    {error}
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="text" name="passwordConfirm" />
                </form>
            </div>

		)

	}
}


export default connect()(SignUpForm);