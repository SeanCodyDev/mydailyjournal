//import libraries
import React, { Component } from 'react';
// import {Field, reduxForm, focus} from 'redux-form';
import {listUpdate} from '../actions';
import {connect} from 'react-redux';

//import components
import Input from './input';
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

		console.log('journalList props:', this.props);

		let list;
		let input = {};

		if (this.props.type === "affirmation") {
			list = 
				<div>
					<input
                        type="text"
                        name={this.props.type+'-one'}
                        id={this.props.type+'-one'}
                        ref={node => input.one = node}
                        value={this.props.entries[0]}
                        onChange={e => {
						e.preventDefault();
						this.onSubmit(input)}}
                    />
				</div>

		} else {
			list = 
				<div>
					<input
                        type="text"
                        name={this.props.type+'-one'}
                        id={this.props.type+'-one'}
                        ref={node => input.one = node}
                        value={this.props.entries[0]}
                    />
                    <input
                        type="text"
                        name={this.props.type+'-two'}
                        id={this.props.type+'-two'}
                        ref={node => input.two = node}
                        value={this.props.entries[1]}
                    />
                    <input
                        type="text"
                        name={this.props.type+'-three'}
                        id={this.props.type+'-three'}
                        ref={node => input.three = node}
                        value={this.props.entries[2]}
                    />
				</div>

		} 

		return (

			<div className="journal">
				<form 
					className="journal-form"
					onSubmit={e => {
						e.preventDefault();
						console.log("form e:", e)
						console.log("input", input)
						this.onSubmit(input)}}
                >
					{list}
					<button type="submit">Save</button>
				</form>
				
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