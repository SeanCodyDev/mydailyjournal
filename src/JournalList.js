//import libraries
import React, { Component } from 'react';

//import components
//none yet

//import styles
import './journallist.css';

export class JournalList extends React.Component {

	render() {

		let list;

		if (this.props.type === "affirmations") {
			list = 
				<div>
					<form className="journal-form">
						<input className="journal-list-item"/>
					</form>
				</div>

		} else {
			list = 
				<div>
					<form className="journal-form">
						<input className="journal-list-item"/>
						<input className="journal-list-item"/>
						<input className="journal-list-item"/>
					</form>
				</div>

		}

		return (

			<div className="journal-">
				{list}
			</div>


		)
	}

}

export default JournalList;