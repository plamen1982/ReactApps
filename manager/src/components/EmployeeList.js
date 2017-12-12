import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { employeesFetch } from '../actions';

class EmployeeList extends Component{

    componentWillMount(){

        this.props.employeesFetch();
        this.createDataSource(this.props)

    }

    componentWillReceiveProps(nextProps) {
        //nextProps are the next set of props that this component
        //will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.employees)
    }

    render(){
        console.log(this.props)
        return(
            <View>
                <Text>EmployeeList</Text>
            </View>
        )
    }
}

const styles = {
    textStyle: {

    }
}

const mapStateToProps = state => {
    //(val is going to be the value(the employee model with props: name, phone, shift),
    // uid is going to be the key)
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);