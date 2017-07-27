import React, {propTypes} from 'react';
import {Link} from 'react-router';


class CoursesPage extends React.Component{
	render(){
		return(
			<div className= "jumbotron">
				<h1>Courses Page</h1>
				<Link to="about" className="btn btn-primary">More About</Link>
				
			</div>
		)
	}
}

export default CoursesPage;