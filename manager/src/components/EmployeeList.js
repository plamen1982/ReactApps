import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import  ListItem  from './ListItem'

import { employeesFetch } from '../actions';

class EmployeeList extends Component{

    componentWillMount(){

        this.props.employeesFetch();
        this.createDataSource(this.props)
        

    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component
        //will be rendered where
        //this.props is still the old set of props
        this.createDataSource(nextProps)

    }

    //each time when we receive new objects from firebase our dataSource will be updated
    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.employees)
        
    }

    renderRow(employee) {

        return <ListItem employee = {employee} />

    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource = {this.dataSource}
                renderRow = {this.renderRow}
            />
        )
    }
}


const mapStateToProps = state => {
    //convert object from firebase(state.employees) to an array
    //(val is going to be the value(the employee model with props: name, phone, shift),
    // uid is going to be the unique key that coming from firebase)
    const employees = _.map(state.employees, (val, uid) => {
        //end result in every object in this array will be [{ shift: 'Monday', phone: '5153' name: 'someName', uid: 'jasdfdfi830jf' }, {...}]
        return { ...val, uid };
    });

    return { employees }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);