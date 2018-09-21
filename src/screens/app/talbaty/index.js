import React, { Component } from 'react';
import { Form, View, Card, CardItem, Left, Icon, Text, Right, Body } from 'native-base';
import AppTemplate from '../appTemplate';
import ListCard from '../../../components/common/card';

export default class Talabaty extends Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="البيانات الشخصيه">
                <View style={{flex: 1, flexDirection: 'row',justifyContent:'center' }}>
                    <View style={{width:'90%'}}>
                        <ListCard header={'توصيل شاشه'} footer={'حي النصر- شارع الوحده'} rightIcon={'map-marker'} leftIcon={'dot-single'} />
                        <ListCard header={'توصيل اثاث منزلي'} footer={'شارع خالد بن الوليد'} rightIcon={'map-marker'} leftIcon={'dot-single'} />
                        <ListCard header={'توصيل اجهزه كهربائيه'} footer={'حي الامل'} rightIcon={'map-marker'} leftIcon={'check'} />
                    </View>
                </View>
            </AppTemplate>
        );
    }
}