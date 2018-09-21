import React from 'react';
// import { Image, View } from 'react-native';
import { Item, Input, Label, Text, View, Container, Content } from 'native-base'

// make a component
const FormItem = (props) => {
    // const { viewStyle, imageStyle } = styles;

    return (
        <View style={style.view}>
            <Label style={style.label} >{props.label}</Label>
            <Item rounded>
                <Input />
            </Item>
        </View>
    )
};
const style = {
    view: {
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10,
    }
}


export { FormItem }