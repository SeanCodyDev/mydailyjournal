//import libraries
import React, { Component } from 'react';

//import components
import JournalBox from './JournalBox';
import LoginPage from './login-page';
import SignUpPage from './signup-page';

//import styling
import './journal.css';


export class Journal extends React.Component {

	render() {

		return (

			<div>
				<h1 className="app-title">MyDailyJournal</h1>
				<JournalBox className="journal-box" type="grateful" />
				<JournalBox className="journal-box" type="greatness" />
				<JournalBox className="journal-box" type="affirmations" />
				<LoginPage />
				<SignUpPage />
			</div>

		)
	}

}

export default Journal;