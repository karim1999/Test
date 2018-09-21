import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Grid, Col, Title, Text, Button } from 'native-base';
import AppTemplate from '../screens/app/appTemplate'
import car from '../png/car.png'
import pickup from '../png/pickup-car.png'

import { Img } from './common';

class CarType extends Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Container style={style.container}>
                    <Grid>
                        <Col style={{ height: 200 }}  >
                            <Text style={style.text}>سيدان</Text>
                            <Img source={car} />
                        </Col>
                        <Col style={{ height: 200 }}>
                            <Text style={style.text}>بيك أب</Text>
                            <Img source={pickup} />
                        </Col>
                    </Grid>
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


}

export default CarType;