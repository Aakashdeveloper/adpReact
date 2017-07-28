import {combineReducer} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducer({
    courses
})

export default rootReducer;