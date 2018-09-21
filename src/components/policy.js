import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTemplate from '../screens/app/appTemplate';
import {
    Content, Text, Card, CardItem, Body, Left, Right, Radio, ListItem
} from 'native-base';

import Box from './common/box';

export default class Policy extends React.Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Content padder>
                    <Text>
                        عند استخدام خدماتنا فانك تاتمنا علي معلوماتك. نحن ندرك  انها مسؤوليه كبيره ونعمل بجديه لحمايه معلوماتك
                    </Text>
                    <Card style={{ height: 350, overflow: 'scroll' }}>
                        <CardItem>
                            <Body >
                                <Text>عند استخدام خدماتنا فانك تاتمنا علي معلوماتك. نحن ندرك  انها مسؤوليه كبيره ونعمل بجديه لحمايه معلوماتكعند استخدام خدماتنا فانك تاتمنا علي معلوماتك. نحن ندرك  انها مسؤوليه كبيره ونعمل بجديه لحمايه معلوماتكعند استخدام خدماتنا فانك تاتمنا علي معلوماتك. نحن ندرك  انها مسؤوليه كبيره ونعمل بجديه لحمايه معلوماتكعند استخدام خدماتنا فانك تاتمنا علي معلوماتك. نحن ندرك  انها مسؤوليه كبيره ونعمل بجديه لحمايه معلوماتك</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Content>
                        <ListItem>
                            <Left>
                                <Text>قرات سياسه الخصوصيه واوافق عليها</Text>
                            </Left>
                            <Right>
                                <Radio selected={true} />
                            </Right>
                        </ListItem>
                    </Content>
                </Content>
            </AppTemplate>
        );
    }
}
