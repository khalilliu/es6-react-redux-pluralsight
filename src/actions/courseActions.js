import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusActions';
// export const createCourse = (course) => {
// 	return {
// 		type: types.CREATE_COURSE,
// 		course
// 	}
// }

export const loadCourses = () => {
	return (dispatch) => {
		dispatch(beginAjaxCall())
		return courseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses))
		}).catch(err => {throw(err) })
	}
}

export const saveCourse = (course) => {
	return (dispatch) => {
		dispatch(beginAjaxCall())
		return courseApi.saveCourse(course).then(savedCourse => {
			course.id ? dispatch(updateCourseSuccess(savedCourse, course.id))
				: dispatch(createCourseSuccess(savedCourse));
		}).catch(err => {
			dispatch(ajaxCallError(err))
			throw(err)
		})
	}
}
 
const updateCourseSuccess = (course,id) => {
	return {
		type: types.UPDATE_COURSE_SUCCESS,
		course:course,
		id: id
	}
}

export const createCourseSuccess = (course) => {
	return {
		type: types.CREATE_COURSE_SUCCESS,
		course
	}
}

const loadCoursesSuccess = (courses) =>{
	return {
		type: types.LOAD_COURSES_SUCCESS,
		courses
	}
}