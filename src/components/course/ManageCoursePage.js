import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';


class ManageCoursePage extends Component {
	constructor(props,context){
		super(props,context)
	}

	render(){
		return(
			<div>
				<h1>Manage Course</h1>
			</div>
		)
	}
}


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

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);