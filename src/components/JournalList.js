//import libraries
import React, { Component } from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
import {listUpdate} from '../actions';
import {connect} from 'react-redux';

//import components
import Input from './input';
import Entry from './entry';

//import styles
import './journallist.css';

export class JournalList extends React.Component {


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

		let list;
		let input = {};

		if (this.props.type === "affirmation") {
			list = 
				<div>
					<Entry
                        type="text"
                        name={this.props.type+'-one'}
                        id={this.props.type+'-one'}
                        value={this.props.entries[0]}
                        onEdit={e => {
                        	e.preventDefault();
                        	console.log('onEdit from journalList');
                        }}
                    />
				</div>

		} else {
			list = 
				<div>
					<Entry
                        type="text"
                        name={this.props.type+'-one'}
                        id={this.props.type+'-one'}
                        value={this.props.entries[0]}
                    />
                    <Entry
                        type="text"
                        name={this.props.type+'-two'}
                        id={this.props.type+'-two'}
                        value={this.props.entries[1]}
                    />
                    <Entry
                        type="text"
                        name={this.props.type+'-three'}
                        id={this.props.type+'-three'}
                        value={this.props.entries[2]}
                    />
				</div>

		} 

		return (

			<div className="journal">
				{list}				
			</div>

		)
	}

}

const mapStateToProps = state => ({
    // lists: state
});

export default connect()(JournalList);


	// render() {

	// 	let list;

	// 	if (this.props.type === "affirmations") {
	// 		list = 
	// 			<div>
	// 				<form className="journal-form">
	// 					<input className="journal-list-item"/>
	// 				</form>
	// 			</div>

	// 	} else {
	// 		list = 
	// 			<div>
	// 				<form className="journal-form" onSubmit={e => this.checkInput(e)}>
	// 					<input className="journal-list-item" ref={input => this.journalInputOne = input}/>
	// 					<input className="journal-list-item" ref={input => this.journalInputTwo = input}/>
	// 					<input className="journal-list-item" ref={input => this.journalInputThree = input}/>
	// 					<button type="submit">Save</button>
	// 				</form>
	// 			</div>

	// 	}

	// 	return (

	// 		<div className="journal-">
	// 			{list}
				
	// 		</div>


	// 	)
	// }