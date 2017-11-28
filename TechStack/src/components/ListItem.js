import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library
        return (
            <TouchableWithoutFeedback
                    onPress={()=> this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                 </View>
                    
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

//first argument of the connector will be always mapStateToProps in this case for now is null
//second argument we passing actions that will attached these actions to this.porps in the ListItem component
export default connect(null, actions)(ListItem);
