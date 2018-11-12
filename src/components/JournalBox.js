//import libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';

//import components
import JournalList from './JournalList';

import {listUpdate} from '../actions';

//import styles
import './journalbox.css';

export class JournalBox extends React.Component {

	// onSubmit(values){
	// 	console.log('onSubmit from JournalBox');
	// 	console.log('props:', this.props);
	// 	console.log('values:', values);
	// 	this.props.dispatch(listUpdate(this.props, values));
	// }

	render() {
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
				<JournalList form={this.props.type} type={this.props.type} onSubmit={values => this.onSubmit(values)} entries={entries} />
			</div>

		)
	}

}

const mapStateToProps = state => ({
    lists: state.journal.dayEntries
});

export default connect(mapStateToProps)(JournalBox);