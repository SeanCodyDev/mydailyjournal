//import libraries
import React, { Component } from 'react';

//import components
import JournalBox from './JournalBox';
import Header from './header';
import Footer from './Footer';

//import styling
import './journal.css';


export class Journal extends React.Component {

	render() {

//conditionally display title only on landing page screens
//display save and logout header on main screens
		return (

			<div>
				<Header />
				<JournalBox className="journal-box" type="grateful" />
				<JournalBox className="journal-box" type="greatness" />
				<JournalBox className="journal-box" type="affirmations" />
				<Footer />
			</div>

		)
	}

}

export default Journal;