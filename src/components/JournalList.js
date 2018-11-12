//import libraries
import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {listUpdate, setEditing, updateEntry} from '../actions';
import {connect} from 'react-redux';

//import components
import Input from './input';
import Entry from './entry';

//import styles
import './journallist.css';

export class JournalList extends React.Component {

	componentDidMount(){
		this.handleInitialize();

	}

	handleInitialize(){

		let initDataActual = {};

		for (let i=0; i<this.props.entries.length; i++){
			initDataActual[`${this.props.type}-${i}`] = this.props.entries[i].text;
		}

		this.props.initialize(initDataActual);
	}

	editEntry(entryList, entryIndex){
		this.props.dispatch(setEditing(entryList, entryIndex));


	}

	updateEntry(e, entryList, entryIndex){
		console.log('e.target', e.target)
		this.props.dispatch(updateEntry(entryList, entryIndex));
	}

	onSubmit(input){

		console.log('values', input);
		// console.log('input.length', Object.keys(input).length);
		// let entries = {};

		// //filter 'input' object to create a key (name) and value (value)
		// //object 'entries'
		// for (let i=0; i<Object.keys(input).length; i++){
		// 	// console.log('for loop:', input[Object.keys(input)[i]].name);
		// 	entries[input[Object.keys(input)[i]].name] = input[Object.keys(input)[i]].value;
		// }

		// console.log('entries', entries);
		// this.props.dispatch(listUpdate(this.props, entries));
	}

	render() {

		// console.log('journalList props', this.props)
		let input;

		const entries = this.props.entries.map((entry, index) =>
            <li className="journal-list-item" key={index}>
            	<Field
            		component={Input}
                    type="text"
                    name={`${this.props.type}-${index}`}
                    id={`${this.props.type}-${index}`}
                    onEdit={e => {
                        e.preventDefault();
                        console.log('input', input);
                        this.editEntry(this.props.type, {index});
                    }}
                    onUpdate={e => {
                        e.preventDefault();
                        this.updateEntry(this.props.type, {index});
                    }}
                />
            </li>
        );

		return (

			<div className="journal">
				<form onSubmit={
                        this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
					{entries}
					<button type='submit' className="save-button">Save</button>
				</form>				
			</div>

		)
	}

}

const mapStateToProps = (state) => ({
    dayEntries: state
});

export default reduxForm()(connect(mapStateToProps)(JournalList));

