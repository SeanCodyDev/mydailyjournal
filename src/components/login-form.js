//libraries
import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';

import {login} from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

//import components
import Input from './input';

//styling
import './login-form.css';

export class LoginForm extends React.Component {
    onSubmit(values) {
        console.log('hello from LoginForm')
        const {username, password } = values;
        const user = {username, password };
        return this.props
            .dispatch(login(username, password));
    }

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
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, isTrimmed]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Login
                </button>
                    
            </form>

		)

	}
}

const mapStateToProps = state => ({}); 

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(LoginForm);