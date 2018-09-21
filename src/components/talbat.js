import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTemplate from '../screens/app/appTemplate';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Right,
    Left,
    Thumbnail,
    Icon
} from 'native-base';

// You can import from local files
import Box from './common/box';

export default class Talbat extends React.Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Box header={'توصيل شاشه'} footer={'حي النصر- شارع الوحده'} icon={'compass'} statusIcon={'navigate'} />
                <Box header={'توصيل اثاث منزلي'} footer={'شارع خالد بن الوليد'} icon={'compass'} statusIcon={'navigate'} />
                <Box header={'توصيل اجهزه كهربائيه'} footer={'حي الامل'} icon={'compass'} statusIcon={'navigate'} />
            </AppTemplate>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    right: {
        margin: 0,
        padding: 0,
    },
});
