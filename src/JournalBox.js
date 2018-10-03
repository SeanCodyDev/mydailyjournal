//import libraries
import React, { Component } from 'react';

//import components
import JournalList from './JournalList';

export class JournalBox extends React.Component {

	render() {
		let prompt = "";

		if (this.props.type === "grateful"){
			prompt = "I am grateful for...";
		} else if (this.props.type === "greatness") {
			prompt = "What will I do to make today great?";
		} else if (this.props.type === "affirmations") {
			prompt = "Daily affirmations. I am...";
		}

		return (

			<div>
				<h1>{this.props.type} Box</h1>
				<h2>{prompt}</h2>
				<JournalList type={this.props.type}/>
			</div>

		)
	}

}

export default JournalBox;