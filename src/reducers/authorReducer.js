import * as types from '../actions/actionTypes';
import initialState from './initialState';

const authorReducer = (state=initialState.authors, action)=>{
	switch (action.type) {
		case types.LOAD_AUTHORS_SUCCESS :
			return [...action.authors];
			break;
		default :
			return [...state];
			break;
	}
}


export default authorReducer;