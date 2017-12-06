import {
    EMPLOYEE_UPDATE
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
        default:
            return state
    }
}