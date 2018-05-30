import React, { Component } from 'react';
import {View, Text} from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        const { viewStyle, textStyle} = styles;

        return(
            <View style={viewStyle}>
                <Text style={textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

// styles object
const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };