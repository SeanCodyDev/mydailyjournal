//import libraries
import React, { Component } from 'react';

//import components
// import GratefulBox from './GratefulBox';
// import GreatnessBox from './GreatnessBox';
import JournalBox from './JournalBox';


export class Journal extends React.Component {

	render() {

		return (

			<div>
				<h1>Journal Wrapper</h1>
				<JournalBox type="grateful" />
				<JournalBox type="greatness" />
				<JournalBox type="affirmations" />
			</div>

		)
	}

}

export default Journal;