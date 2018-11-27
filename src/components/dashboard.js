//import libraries
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

//import components
import JournalBox from './JournalBox';
import Header from './header';
import Footer from './Footer';

//import styling
import './dashboard.css';


export class Dashboard extends React.Component {

	render() {

		if (!this.props.loggedIn){
			return <Redirect to="/" />;
		}

//conditionally display title only on landing page screens
//display save and logout header on main screens
		return (

			<div>
				<Header />
				<JournalBox className="journal-box" type="grateful" />
				<JournalBox className="journal-box" type="greatness" />
				<JournalBox className="journal-box" type="affirmation" />
				<Footer />
			</div>

		)
	}

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);