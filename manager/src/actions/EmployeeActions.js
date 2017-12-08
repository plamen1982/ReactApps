import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE
 } from './types';


//employeeUpdate is our Action Creator that return Action. employeeUpdate is call as callback in EmployeeCreate.js every time when we typing
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeCreate = ({ name, phone, shift }) => { 
    //extract current user from firebase
    const { currentUser }  = firebase.auth(); 
    // we returning object so we can pass the requirement of redux-thunk that ActionCreator needs to return a plain object(Action)
    return() => {
    //users/currentUser.id/employees follow our JSON structure of the database in firebase with our current user
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => Actions.employeeList({ type: 'reset' }))
    }
    
 }

