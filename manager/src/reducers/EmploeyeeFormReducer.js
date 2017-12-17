import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} 
from '../actions/types';

const INITIAL_STATE = {
    name : '',
    phone : '',
    shift : ''
};

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case EMPLOYEE_UPDATE:
            //[action.type.prop]: action.payload.value - ES6 feature(key interpolation) for creating in runtime, props
            //action.payload - { prop: 'name', value: 'jane }, this will create prop name with value jane 
            return {...state, [action.payload.prop]: action.payload.value}
        case EMPLOYEE_CREATE:
            // we can also return only the INITIAL_STATE-> return INITIAL_STATE
            return INITIAL_STATE
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE
        default:
            return state
    }
}