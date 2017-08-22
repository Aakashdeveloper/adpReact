import  * as types from '../actions/actionsTypes';


export default function courseReducer(state=[], action){
    switch (action.type){
        case types.LOAD_COURSES_SUCCESS:
            return actions.courses;

        default:
            return state;
    }
}