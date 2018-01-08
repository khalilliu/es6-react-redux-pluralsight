import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

// export const createCourse = (course) => {
// 	return {
// 		type: types.CREATE_COURSE,
// 		course
// 	}
// }

export const loadAuthors = () => {
	return (dispatch) => {
		dispatch(beginAjaxCall())
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch(loadAuthorsSuccess(authors))
		}).catch(err => {throw(err) })
	}
}

const loadAuthorsSuccess = (authors) =>{
	return {
		type: types.LOAD_AUTHORS_SUCCESS,
		authors
	}
}