export default function courseReducer(state=[], action){
    switch(action.type){
        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.course)
            ];
            //state.push(action.course);
            //return state;
    default:
        return state;

    }
}