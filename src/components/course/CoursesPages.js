import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../actions/courseActions';

class CoursesPages extends Component{
	constructor(props,context){
		super(props,context)
		this.state = {
			course: {title:""}
		}
	}

	onTitleChange(ev){
		const course = this.state.course;
		course.title = ev.target.value;
		this.setState({course})
	}

	onClickSave(ev){
		this.props.actions.createCourse(this.state.course);
		setTimeout(() => {this.setState({course: {title:""}}},0)
	}

	courseRow(course,index){
		return(
			<div key={index}>{course.title}</div>
		)
	}

	render(){
		return(
			<div>
				<h1>Course</h1>
				{this.props.courses.map(this.courseRow)}
				<h2>Add Course</h2>
				<input type='text'
					onChange={this.onTitleChange.bind(this)}
					value={this.state.course.title} />
				<input 
					type='submit'
					value='Save'
					onClick={this.onClickSave.bind(this)} />
			</div>
		)
	}
}

// CoursesPages.propTypes = {
// 	dispatch: PropTypes.func.isRequired,
// 	courses: PropTypes.array.isRequired
// }

const mapStateToProps = (state, ownProps) => {
	return {
		courses: state.courses
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		createCourse: (course) => dispatch(courseActions.createCourse(course))
// 	}
// }

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPages);