import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}


//dispatch - sending the action to the different reducers in out app
export const loginUser = ({email, password}) => {
    //return a dispatch as a first argument. where dispatch is a method
    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            //dispatch will return the action after we received the user from firebase
            dispatch({type: 'LOGIN_USER_SUCCESS', payload: user})
        })
    }
}
