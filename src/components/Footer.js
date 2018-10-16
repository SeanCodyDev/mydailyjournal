//import libraries
import React, { Component } from 'react';
import {connect} from 'react-redux';

//import components
//none yet

//import styles
import './footer.css';

export class Footer extends React.Component {

	render() {

		return (

			<footer>
				<h1>Footer Box</h1>
			</footer>

		)
	}

}

export default connect()(Footer);