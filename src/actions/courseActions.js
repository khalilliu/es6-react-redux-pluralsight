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

export const saveCourse = (course) => {
	return  (dispacth) => {
		return courseApi.saveCourse(course).then(savedCourse => {
			course.id ? dispacth(updateCourseSuccess(savedCourse, course.id))
				: dispacth(createCourseSuccess(savedCourse));
		}).catch(err => {throw(err)})
	}
}
 
const updateCourseSuccess = (course,id) => {
	return {
		type: types.UPDATE_COURSE_SUCCESS,
		course:course,
		id: id
	}
}

const createCourseSuccess = (course) => {
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