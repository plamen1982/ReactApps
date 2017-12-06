import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmploeyeeFormReducer';

//combineReudcers: attaching auth and employeeForm to the global state
export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});