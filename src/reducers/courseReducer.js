import * as types from '../actions/actionTypes';

const courseReducer = (state=[], action)=>{
	switch (action.type) {
		case types.CREATE_COURSE :
			return [...state, Object.assign({},action.course)]
			break;
		default :
			return [...state];
			break;
	}
}


export default courseReducer;