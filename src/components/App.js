//import libraries
import React, { Component } from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from 'moment';


//import styling
import './App.css';

//import actions
import {getEntries} from '../actions';

//import components
import Dashboard from './dashboard';
import Footer from './Footer';
import LoginPage from './login-page';
import SignUpPage from './signup-page';
import LandingPage from './landing';

class App extends Component {

  componentDidMount(){
    // console.log(this.props);
  }

  //   componentWillMount(){
  //     console.log('app mounted');
  //   if (!this.props.loggedIn){
  //     return 
  //   }

  //   let date = moment().format("MMM D YYYY");
  //   console.log('fetching for App with date:', date);
  //   //hardcoded for now
  //   this.props.dispatch(getEntries("Dec 20 2018"));
  // }

  render() {
    return (
	    	<div className="App">
          <Route exact path="/" component={LandingPage} />
		    	<Route exact path="/dashboard" component={Dashboard} />
		    	<Route exact path="/register" component={SignUpPage} />		    	
		    	<Route exact path="/login" component={LoginPage} />
	    	</div>
    );
  }
}



export default withRouter(connect()(App));