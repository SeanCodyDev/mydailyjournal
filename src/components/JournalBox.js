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

		if (this.props.type === "grateful"){
			prompt = "I am grateful for...";
		} else if (this.props.type === "greatness") {
			prompt = "What will I do to make today great?";
		} else if (this.props.type === "affirmations") {
			prompt = "Daily affirmations. I am...";
		}

		return (

			<div className="box-wrapper">
				<h3 className="box-prompt">{prompt}</h3>
				<JournalList type={this.props.type} onSubmit={values => this.onSubmit(values)}/>
			</div>

		)
	}

}

export default connect()(JournalBox);