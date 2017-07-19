import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component{
	render(){
		return(
			<div className= "jumbotron">
				<h1>I am doing React</h1>
				<Link to="about" className="btn btn-primary">More About</Link>
			</div>
		);
	}
}

export default HomePage;

