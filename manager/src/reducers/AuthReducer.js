import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types'

//We assigning INITIAL_STATE, so we can know what kind of props we will have in the reducer
const INITIAL_STATE = { 
    email: '',
    password: ''
 }

export default(state = INITIAL_STATE, action) => {
    console.log(action);

    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email:  action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload}
        default:
            return state
    }
}