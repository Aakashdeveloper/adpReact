import React from 'react';
import {Link} from 'react-router';
import '../../style/homestyle.css'


class HomePage extends React.Component{
	render(){
		return(
			<div className= "jumbotron">
				<h1 className="head">I am doing React</h1>
				<p className="one">test</p>
				<p className="two">test</p>
				<h1 className="two">test</h1>

				<Link to="about" className="btn btn-primary one">More About</Link>
				
			</div>
		);
	}
}

export default HomePage;

