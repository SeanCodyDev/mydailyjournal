//import libraries
import React, { Component } from 'react';

//import components

export class JournalList extends React.Component {

	render() {

		return (

			<div>
				<h1>{this.props.type} List</h1>
				<ul>
					<li>{this.props.type} List Item</li>
					<li>{this.props.type} List Item</li>
				</ul>
			</div>

		)
	}

}

export default JournalList;