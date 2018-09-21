import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native'
import { Container, Card, CardItem, Content, Thumbnail, Header, Left, Right, Body, Grid, Col, Title, Row, Text, Icon, Button } from 'native-base';
import driver from '../png/taxi-driver.png';
import user from '../png/user.png';
import { Img } from './common';
import AppTemplate from '../screens/app/appTemplate'


class Splach extends Component {
    render() {
        const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Container style={style.container}>
                    <Grid>
                        <Col style={{ height: 200 }}  >
                            <Text style={style.text}>سائق</Text>
                            <Img source={driver} />
                        </Col>
                        <Col style={{ height: 200 }}>
                            <Text style={style.text}>مستخدم</Text>

                            <Img source={user} />

                        </Col>
                    </Grid>
                    <Button style={style.btn} block >
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>التالي</Text>
                    </Button>
                </Container >
            </AppTemplate>
        )
    }
}

const style = {
    container: {
        backgroundColor: '#F1F1F1',
    },
    content: {
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
        marginTop: 5,
        padding: 0,
    },
    thumbnail: {
        alignSelf: 'center',
        alignContent: 'center',
        // marginTop: 15,
        // marginBottom: 15,
        // marginRight: 5,
        // marginLeft: 5,
        // padding:20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 0,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#266A8F',
        fontWeight: 'bold',
    },
    btn: {
        width: 300,
        marginBottom: 70,
        alignSelf: 'center',
        borderRadius: 9,
    },

}

export default Splach;