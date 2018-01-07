import * as types from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer = (state=initialState.authors, action)=>{
	switch (action.type) {
		case types.LOAD_COURSES_SUCCESS :
			return [...action.courses];
			break;
		case types.UPDATE_COURSE_SUCCESS:
			let existingIndex = state.findIndex(course=>course.id == action.id)
			return [...state.slice(0,existingIndex),Object.assign({},action.course),...state.slice(existingIndex+1)]
			break;
		case types.CREATE_COURSE_SUCCESS:
			return [
				...state,
				Object.assign({},action.course)
			];
			break;
		default :
			return [...state];
			break;
	}
}


export default courseReducer;