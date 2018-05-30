import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

class Input extends Component{
    render(){
        const { label, value, onChangeText, placeholder, secureTextEntry } = this.props;
        const { containerStyle, inputStyle, labelStyle } = styles;
        return(
            <View style={ containerStyle }>
                <Text style={ labelStyle }>{ label }</Text>
                <TextInput 
                    autoCapitalize= 'none'
                    placeholder={ placeholder }
                    autocorrect={ false }
                    style={ inputStyle }
                    value={ value }
                    onChangeText={ onChangeText }
                    secureTextEntry={ secureTextEntry }
                />
            </View>
        );
    }
};

const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
