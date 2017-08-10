import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import '../../style/course.css'


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
		this.props.dispatch(courseActions.createCourse(this.state.course));

	}

	CreateRow(course, index){
		return <div key={index}>{course.title}</div>
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

CoursesPage.propTypes ={
	actions: PropTypes.array.isRequired;
	createCourse:PropTypes.func.isRequired;
}
function mapStateToProps(state, ownProp){
	return{
		courses: state.courses
	}
}

function mapDisptachToProps(dispatch){
	return{
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDisptachToProps)(CoursesPage);