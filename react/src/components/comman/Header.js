import React, {propTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
	return (
		<nav className="navbar navbar-inverse">
		  <div className="container-fluid">
		    <div className="navbar-header">
		      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>
		        <span className="icon-bar"></span>                        
		      </button>
		      <a className="navbar-brand" href="#">React</a>
		    </div>
		    <div className="collapse navbar-collapse" id="myNavbar">
		      <ul className="nav navbar-nav">
		        <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
		        <li><Link to="/about" activeClassName="active">About</Link></li>
		        <li><Link to="/courses" activeClassName="active">Courses</Link></li>
		        <li></li>
		      </ul>
		      <ul className="nav navbar-nav navbar-right">
		        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
		        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>	
	);
};

export default Header;