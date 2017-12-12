import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmploeyeeFormReducer';
import EmployeeReducer  from './EmployeeReducer'

//combineReudcers: attaching auth, employeeForm and employees to the global state
export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
});