//import libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';

//import components
import JournalList from './JournalList';

import {listUpdate} from '../actions';

//import styles
import './journalbox.css';

//can this be made a functional component as a best practice?
export class JournalBox extends React.Component {

	render() {

		//determine prompt for the JournalList
		let prompt = "";
		let entries = this.props.lists[this.props.type];

		if (this.props.type === "grateful"){
			prompt = "I am grateful for...";
		} else if (this.props.type === "greatness") {
			prompt = "What will I do to make today great?";
		} else if (this.props.type === "affirmation") {
			prompt = "Daily affirmations. I am...";
		}

		return (

			<div className="box-wrapper">
				<h3 className="box-prompt">{prompt}</h3>
				<JournalList type={this.props.type} form={this.props.type} />
			</div>

		)
	}

}

const mapStateToProps = state => ({
    lists: state.journal.dayEntries
});

export default connect(mapStateToProps)(JournalBox);

//this was modified because entries can be retrieved from the store
// <JournalList type={this.props.type} entries={entries} />