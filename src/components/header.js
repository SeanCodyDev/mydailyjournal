//libraries
import React, {Component} from 'react';

//components

//styling
import './header.css';

export default class Header extends React.Component{

	render(){

		return (
			<div className="header">
				<h1 className="app-title">MyDailyJournal</h1>
				<button className="logout-button">Logout(Dummy)</button>
			</div>

		)
	}
}