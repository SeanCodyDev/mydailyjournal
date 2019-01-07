//import libraries
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';

//import components
import JournalBox from './JournalBox';
import Header from './header';
import Footer from './Footer';

//import styling
import './dashboard.css';

//import actions
import {getEntries} from '../actions';


export class Dashboard extends React.Component {

	componentWillMount(){
		console.log('dashboard mounted!')
		if (!this.props.loggedIn){
			return 
		}

		let date = moment().format("MMM D YYYY");
		console.log('fetching for dashboard with date:', date);
		//hardcoded for now
		this.props.dispatch(getEntries("Dec 20 2018"));
	}

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
    loggedIn: state.auth.currentUser !== null,
    dayEntries: state.journal.dayEntries
});

export default connect(mapStateToProps)(Dashboard);