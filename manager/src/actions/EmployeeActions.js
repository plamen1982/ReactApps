import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
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
    return(dispatch) => {
    //users/currentUser.id/employees follow our JSON structure of the database in firebase with our current user
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREATE })
            Actions.employeeList({ type: 'reset' })
            }
        )
    }
 }

 //once employeeFetch() is started it will work all the time
 export const employeesFetch = () => {
     const { currentUser } = firebase.auth();
     
     return(dispatch) => {
         //witch the watcher .on() every time when data is added/changed it will update the snapshot(object that describe the data)         
         firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', spanshot => {
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: spanshot.val() })
            })
     }
 }

 export const employeeSave = ({ name, phone, shift, uid }) => {
     const { currentUser } = firebase.auth()

     return (dispatch) => {
         firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
         .set({ name, phone, shift })
         .then(() => {
             dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
             Actions.employeeList({ type: 'reset' })
         })
     }
 }

