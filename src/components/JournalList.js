//import libraries
import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {listUpdate, setEditing, updateEntry} from '../actions';
import {connect} from 'react-redux';
import moment from 'moment';

//import actions
import {getEntries} from '../actions';

//import components
import Input from './input';
import Entry from './entry';

//import styles
import './journallist.css';

export class JournalList extends React.Component {

	componentWillMount(){
		console.log('hello from componentWillMount');
		//today - formatted
		let date = moment().format("MMM D YYYY");
		//hardcoded for testing
		date = "Dec 20 2018";

		//if entries already exist for today, load them into the state
		//this may not be best syntax practice for using Promises, but it seems to be working.
		this.props.dispatch(getEntries(date)).then(res => {
			this.handleInitialize()
		})
		.catch(err => console.error(err));

	}

	handleInitialize(){
		console.log('hello from handleInitialize');

		let initDataActual = {};

		for (let i=0; i<this.props.dayEntries[this.props.type].length; i++){
			// initDataActual[`${this.props.type}-${i}`] = this.props.entries[i].text;
			initDataActual[`${this.props.type}-${i}`] = this.props.dayEntries[this.props.type][i].text;

		}

		this.props.initialize(initDataActual);
	}

	//stubbed... not yet functional
	//will be used as conditional for what is returned with the entries.map
	editEntry(entryList, entryIndex){
		this.props.dispatch(setEditing(entryList, entryIndex));
	}

	//stubbed... not yet functional
	//will be used if(editing)... will POST an update to the modified entry
	updateEntry(e, entryList, entryIndex){
		console.log('e.target', e.target)
		this.props.dispatch(updateEntry(entryList, entryIndex));
	}

	onSubmit(input){
		console.log('values', input);
		//dispatch createEntry
	}

	render() {
		console.log('hello from JournalList render')

		//render, name, id, key for appropriate number of fields
		//if no entries exist for the day, default state is 3 for grateful/greatness, 1 for affirmation
		const entries = this.props.dayEntries[this.props.type].map((entry, index) => {
			return (
            	<Field
            		component='input'
                    type="text"
                    name={`${this.props.type}-${index}`}
                    id={`${this.props.type}-${index}`}
                    key={index}
                />
            )}
        );

		return (
			// <div className="journal">
				<form onSubmit={
                        this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
					{entries}
					<button type='submit' className="save-button">Save</button>
				</form>				
			// </div>

		)
	}

}

const mapStateToProps = (state) => ({
    dayEntries: state.journal.dayEntries
});
const myComponent = reduxForm()(JournalList);
export default connect(mapStateToProps)(myComponent);

