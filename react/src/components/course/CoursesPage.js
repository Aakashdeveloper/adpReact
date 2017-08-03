import React, {propTypes} from 'react';
import {Link} from 'react-router';


class CoursesPage extends React.Component{
	constructor(props, context){
		super(props,context);

		this.state ={
			course: {title:""}
		};

		this.onTitleChange =this.onTitleChange.bind(this);
		this.onClickSubmit =this.onClickSubmit.bind(this);
	}

	onTitleChange(event){
		const course = this.state.course;
		course.title= event.target.value;
		this.setState({course:course})

	}

	onClickSubmit(){
		alert(`Saving the value ${this.state.course.title}`)
	}
	
	render(){
		return(
			<div>
				<h1>Courses Page</h1>
				<h2>Add Course</h2>
			    <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
				<input type="submit" value="Submit" onClick={this.onClickSubmit} />
				
			</div>
		)
	}
}

export default CoursesPage;