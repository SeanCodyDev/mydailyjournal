//import libraries
import React, { Component } from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
import {listUpdate, setEditing, updateEntry} from '../actions';
import {connect} from 'react-redux';

//import components
import Input from './input';
import Entry from './entry';

//import styles
import './journallist.css';

export class JournalList extends React.Component {

	editEntry(entryList, entryIndex){
		this.props.dispatch(setEditing(entryList, entryIndex));


	}

	updateEntry(e, entryList, entryIndex){
		console.log('e.target', e.target)
		this.props.dispatch(updateEntry(entryList, entryIndex));
	}

	onSubmit(input){

		console.log('input.one.name', input.one.name);
		console.log('input.length', Object.keys(input).length);
		let entries = {};

		//filter 'input' object to create a key (name) and value (value)
		//object 'entries'
		for (let i=0; i<Object.keys(input).length; i++){
			// console.log('for loop:', input[Object.keys(input)[i]].name);
			entries[input[Object.keys(input)[i]].name] = input[Object.keys(input)[i]].value;
		}

		console.log('entries', entries);
		this.props.dispatch(listUpdate(this.props, entries));
	}

	render() {

		console.log('journalList props', this.props)
		let input;

		const entries = this.props.entries.map((entry, index) =>
            <li className="journal-list-item" key={index}>
                <Entry {...entry}
                	type="text"
                	ref={node => input = node}
                	// refKey={`${this.props.type} ${index}`}
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
				<form onSubmit={e => { 
					e.preventDefault();
					this.updateEntry(e)}}>
					{entries}
					<button type='submit' className="save-button">Save</button>
				</form>				
			</div>

		)
	}

}

const mapStateToProps = state => ({
    // lists: state
});

export default connect()(JournalList);

