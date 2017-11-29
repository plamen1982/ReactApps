import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return <Text>{library.description}</Text>;
        }
    }
     
    render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
        return (
            <TouchableWithoutFeedback
                    onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>

                        {this.renderDescription()}

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

//by convention second argument of mapStateToProps is a ownProps that is equal to this.props in this component
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};
//first argument of the connect helper will be always mapStateToProps, the second argument
//we will passing actions that will attached these actions to this.porps in the ListItem component
export default connect(mapStateToProps, actions)(ListItem);
