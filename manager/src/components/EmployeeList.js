import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

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
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(employees);
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
    const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid };
    });
  
    return { employees };
  };

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);