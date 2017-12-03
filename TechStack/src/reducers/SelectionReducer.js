//reducers by convention, always called with first argument state and second argument actions
//state cannot be undefiend, always placed default value that will be an object!!!
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};

