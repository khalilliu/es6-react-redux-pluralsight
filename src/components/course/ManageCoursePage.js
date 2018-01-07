import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			course: Object.assign({},this.props.course),
			errors: {}
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.props.course.id != nextProps.course.id){
			this.setState({course: Object.assign({},nextProps.course)})
		}
	}

	updateCourseState(ev){
		const field = ev.target.name;
		let course = this.state.course;
		course[field] = ev.target.value;
		return this.setState({course: course})
	}

	saveCourse(ev){
		ev.preventDefault();
		this.props.actions.saveCourse(this.state.course)
			.then(()=>this.redirect())
		
		//console.log(this.state.course )
	}

	redirect(){
		this.context.router.push('/courses')
	}

	render(){
		return(
			<div>
				<h1>Manage Course</h1>
				<CourseForm 
					onSave={this.saveCourse.bind(this)}
					onChange={this.updateCourseState.bind(this)}
					course={this.state.course} 
					errors={this.state.errors}
					allAuthors={this.props.authors}/>
			</div>
		)
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

ManageCoursePage.contextTypes = {
	router: PropTypes.object
}

const getCourseById = (courses,id ) => {
	const course = courses.filter(course => course.id==id);
	if(course){return course[0]}
	else{return null;}
}

const mapStateToProps = (state, ownProps) => {
	const courseId = ownProps.params.id;
	let course = {id: '', watchHref:'',title:'',authorId:'',length:"",category:''};
	if(courseId && state.courses.length>0){
		course = getCourseById(state.courses, courseId);
	}

	const authorsFormattedFormDropdown = state.authors.map(author => {
		return {
			value: author.id, text: author.firstName + ' ' + author.lastName
		}
	})
	return {
		course: course,
		authors: authorsFormattedFormDropdown
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);