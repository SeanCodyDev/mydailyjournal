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
		if (!this.props.loggedIn){
			return 
		}

		//today - formatted
		let date = moment().format("MMM D YYYY");
		date = "Dec 20 2018";

		//if entries already exist for today, load them into the state
		this.props.dispatch(getEntries(date));
	}

	render() {

		if (!this.props.loggedIn){
			return <Redirect to="/" />;
		}

		return (
			<div>
				<Header />
				<JournalBox className="journal-box" type="grateful" />

				<Footer />
			</div>

		)
	}

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Dashboard);

				// <JournalBox className="journal-box" type="greatness" />
				// <JournalBox className="journal-box" type="affirmation" />