import React, { Component } from 'react';
import { FormItem, Img } from './common';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Form, Item, Input, Label, DatePicker, Grid, Col, Row, Icon } from 'native-base';
import car from '../png/car.png'
import pickup from '../png/pickup-car.png'
import AppTemplate from '../screens/app/appTemplate';
class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Container style={style.container}>
                    <Content>
                        <Form>
                            <FormItem label={'الاسم الكامل'} />
                            <FormItem label={'رقم الهاتف'} />
                            <Item style={style.item} rounded last>
                                <Text>
                                    تاريخ الميلاد: {this.state.chosenDate.toString().substr(4, 12)}
                                </Text>
                                <DatePicker
                                    defaultDate={new Date(2018, 4, 4)}
                                    minimumDate={new Date(2018, 1, 1)}
                                    maximumDate={new Date(2018, 12, 31)}
                                    locale={"en"}
                                    timeZoneOffsetInMinutes={undefined}
                                    modalTransparent={false}
                                    animationType={"fade"}
                                    androidMode={"default"}
                                    placeHolderText="Select date"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={this.setDate}
                                />

                            </Item>
                        </Form>
                    </Content>
                    <Text style={{ marginTop: 10, alignSelf: 'flex-end', color: '#266A8F', fontWeight: 'bold', marginRight: 10 }}>نوع السياره</Text>
                    <Grid>
                        <Row size={2}>
                            <Col style={{ height: 200 }}  >
                                <Text style={style.text}>سيدان</Text>
                                <Img source={car} />
                            </Col>
                            <Col style={{ height: 200 }}>
                                <Text style={style.text} >بيك أب</Text>
                                <Img source={pickup} />
                            </Col>
                        </Row>
                        <Row size={2}>
                            <Col>
                                <Button iconLeft block style={style.btn} >
                                    <Icon name={'add'} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ارفق صوره الرخصه</Text>
                                </Button>
                                <Button iconLeft block style={style.btn} >
                                    <Icon name={'add'} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}> ارفق صوره السياره </Text>
                                </Button>
                            </Col>
                        </Row>
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
    input: {
        borderWidth: 1,
        borderRadius: 9,
        borderColor: '#ddd',
    },
    item: {
        marginTop: 15,
        marginRight: 15,
        marginLeft: 15
    },
    text: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#266A8F',
        fontWeight: 'bold',
    },
    btn: {
        marginTop: 15,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 9,
    }
}

export default UserData;