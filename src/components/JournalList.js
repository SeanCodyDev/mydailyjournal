//import libraries
import React, { Component } from 'react';
import {Field, reduxForm, focus} from 'redux-form';

//import components
import Input from './input';
//import styles
import './journallist.css';

export class JournalList extends React.Component {

	onSubmit(values){
		console.log(values);
	}

	render() {

		let list;

		if (this.props.type === "affirmations") {
			list = 
				<div>
					<input className="journal-list-item"/>
				</div>

		} else if (this.props.type === "grateful") {
			list = 
				<div>
					<Field
						component={Input}
                        type="text"
                        name="grateful-one"
                        id="grateful-one"
                    />
                    <Field
						component={Input}
                        type="text"
                        name="grateful-two"
                        id="grateful-two"
                    />
                    <Field
						component={Input}
                        type="text"
                        name="grateful-three"
                        id="grateful-three"
                    />
				</div>

		} else {
			list = 
				<div>
					<Field
						component={Input}
                        type="text"
                        name="greatness-one"
                        id="greatness-one"
                    />
                    <Field
						component={Input}
                        type="text"
                        name="greatness-two"
                        id="greatness-two"
                    />
                    <Field
						component={Input}
                        type="text"
                        name="greatness-three"
                        id="greatness-three"
                    />
				</div>

		}

		return (

			<div className="journal">
				<form 
					className="journal-form"
					onSubmit={
                        this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
					{list}
					<button type="submit">Save</button>
				</form>
				
			</div>

		)
	}

}

export default reduxForm({form: 'journal'})(JournalList);


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