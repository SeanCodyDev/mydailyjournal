//import libraries
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import Header from './header';
import Footer from './Footer';

//import styling
// import './landing.css';


export class LandingPage extends React.Component {


	render() {

		// console.log("currentUser", this.props)

		if (this.props.loggedIn){
			return <Redirect to="/dashboard" />;
		}

//conditionally display title only on landing page screens
//display save and logout header on main screens
		return (

			<div>
				<Header />
				<div>Welcome to MyDailyJournal</div>
				<Footer />
			</div>

		)
	}

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(LandingPage);