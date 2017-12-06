import { EMPLOYEE_UPDATE } from './types';

//employeeUpdate is our Action Creator that return Action. employeeUpdate is call as callback in EmployeeCreate.js every time when we typing
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

