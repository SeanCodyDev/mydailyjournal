//import libraries
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';


//import styling
import './App.css';

//import components
import Journal from './Journal';
import Footer from './Footer';
import LoginPage from './login-page';
import SignUpPage from './signup-page';

class App extends Component {

  componentDidMount(){
    // console.log(this.props);
  }

  render() {
    return (
    	<Router>
	    	<div className="App">
		    	<Route exact path="/" component={Journal} />
		    	<Route exact path="/register" component={SignUpPage} />		    	
		    	<Route exact path="/login" component={LoginPage} />
	    	</div>
    	</Router>
    );
  }
}



export default connect()(App);