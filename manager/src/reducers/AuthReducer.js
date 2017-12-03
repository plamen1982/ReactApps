import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types'

//We assigning INITIAL_STATE, so we can know what kind of props we will have in the reducer
const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: ''
 }

export default(state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email:  action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload}
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload }
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.'}
        default:
            return state;
    }
}