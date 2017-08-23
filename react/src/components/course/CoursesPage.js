import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; 
import {Link} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import '../../style/course.css';
import CourseList from './CourseList';


class CoursesPage extends React.Component{
	constructor(props, context){
		super(props,context);
	}

	courseRow(course, index){
		return <tr><td key={index}>{course.title}</td></tr>;
	}
	
	render(){
		const {courses}  = this.props;
		return(
			<div>
				<h1>Courses Page</h1>
				<h2>Add Course</h2>
			    <CourseList courses={courses}/>
				
			</div>
		)
	}
}
CoursesPage.propTypes={
	//dispatch: PropTypes.func.isRequired,
	courses: PropTypes.array.isRequired,
	//createCourse: PropTypes.func.isRequired,
	actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
	return {
		courses: state.courses
	}
}

function mapDispatchToProps(dispatch){
	return{
		//createCourse: course=>dispatch(courseActions.createCourse(course))
		actions: bindActionCreators(courseActions,dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);