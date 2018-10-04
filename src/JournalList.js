//import libraries
import React, { Component } from 'react';

//import components

export class JournalList extends React.Component {

	render() {

		let list;

		if (this.props.type === "affirmations") {
			list = <div><li>Affirmations List Item</li></div>

		} else {
			list = 
				<div>
					<li>{this.props.type} List Item</li>
					<li>{this.props.type} List Item</li>
					<li>{this.props.type} List Item</li>
				</div>

		}

		return (

			<div>
				<h1>{this.props.type} List</h1>
				<ul>
					{list}
				</ul>
			</div>

		)
	}

}

export default JournalList;