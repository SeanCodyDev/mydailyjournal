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

	// onSubmit(values){
	// 	// console.log(values);
	// 	// this.props.dispatch(values);
	// 	this.props.onSubmit(values);
	// }

	onSubmit(values){
		// console.log('onSubmit from JournalList');
		// console.log('props:', this.props);
		console.log('values:', values);
		this.props.dispatch(listUpdate(this.props, values));
	}

	render() {

		let list;

		if (this.props.type === "affirmations") {
			list = 
				<div>
					<input className="journal-list-item"/>
				</div>

		} else {
			list = 
				<div>
					<input
                        type="text"
                        name={this.props.type+'-one'}
                        id={this.props.type+'-one'}
                    />
                    <input
                        type="text"
                        name={this.props.type+'-two'}
                        id={this.props.type+'-two'}
                    />
                    <input
                        type="text"
                        name={this.props.type+'-three'}
                        id={this.props.type+'-three'}
                    />
				</div>

		} 

		return (

			<div className="journal">
				<form 
					className="journal-form"
					onSubmit={values => this.onSubmit(values)}
                >
					{list}
					<button type="submit">Save</button>
				</form>
				
			</div>

		)
	}

}

const mapStateToProps = state => ({
    // lists: state.boards.lists
});

export default connect(mapStateToProps)(JournalList);


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