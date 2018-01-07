import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

// export const createCourse = (course) => {
// 	return {
// 		type: types.CREATE_COURSE,
// 		course
// 	}
// }

export const loadCourses = () => {
	return (dispatch) => {
		return courseApi.getAllCourses().then(courses => {
			dispatch(loadCoursesSuccess(courses))
		}).catch(err => {throw(err) })
	}
}

const loadCoursesSuccess = (courses) =>{
	return {
		type: types.LOAD_COURSES_SUCCESS,
		courses
	}
}