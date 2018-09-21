import React from 'react';
import { Image, View } from 'react-native';

// make a component
const Img = (props) => {
    const { viewStyle, imageStyle } = styles;

    return (
        <View style={viewStyle}>
            <Image source={props.source} style={imageStyle} />
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 9,
        borderColor: '#ddd',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        margin: 15,
        padding: 0,
    },
    imageStyle: {
        height: 50,
        width: 50,
        // flex: 1,
        borderRadius: 0,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
}
export { Img }