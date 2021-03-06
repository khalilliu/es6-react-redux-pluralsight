import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedFormDropdown} from '../../selectors/Selectors';

export class ManageCoursePage extends Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			course: Object.assign({},this.props.course),
			errors: {},
			saving: false
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
		this.setState({saving: true});
		this.props.actions.saveCourse(this.state.course)
			.then(()=>this.redirect())
			.catch(error => {
				toastr.error(error);
				this.setState({saving:false})
			})
		
		//console.log(this.state.course )
	}

	redirect(){
		this.setState({saving:false});
		toastr.success("Course saved");
		this.context.router.push('/courses');
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
					allAuthors={this.props.authors}
					saving={this.state.saving}/>
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


	return {
		course: course,
		authors: authorsFormattedFormDropdown(state.authors)
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