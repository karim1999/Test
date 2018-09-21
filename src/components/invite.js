import * as React from 'react';
import { StyleSheet } from 'react-native';
import AppTemplate from '../screens/app/appTemplate';
import userBtn from '../png/user-btn.png'
import {
    Content, Item, Input, Text, View, Button, Icon
} from 'native-base';

// You can import from local files
import Box from './common/box';

export default class Invite extends React.Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <View style={{ display: 'flex', backgroundColor: '#F1F1F1', height: '100%' }}>
                    <Content style={{ margin: 20 }}>
                        <Text style={{ marginTop: 50, marginBottom: 20, marginRight: 50, marginLeft: 50, fontWeight: 'bold' }}>قم بدعوه صديق للحصول علي خصومات رائعه</Text>
                        <Item regular style={style.item}>
                            <Input placeholder='qe11459n' value='qe11459n' />
                        </Item>
                        <Button iconLeft style={{ flex: 1, alignSelf: 'center', backgroundColor: '#15588D', marginTop: 20, paddingRight: 10, paddingLeft: 10, borderRadius: 12, }}>
                            <Icon name='person' />
                            <Text>دعوه صديق</Text>
                        </Button>
                        <Text style={{ borderBottomWidth: 1, borderBottom: 'bold', margin: 40 }}></Text>
                        <Text style={{ marginTop: 50, marginBottom: 20, marginRight: 50, marginLeft: 50, fontWeight: 'bold' }}>قم بوضع كود الخصم المرسل من صديقك</Text>
                        <Item regular style={style.item}>
                            <Input placeholder='qe11459n' value='qe11459n' />
                        </Item>
                        <Button style={{ flex: 1, alignSelf: 'center', backgroundColor: '#15588D', marginTop: 20, paddingRight: 10, paddingLeft: 10, borderRadius: 12, marginBottom: 80 }}>
                            <Text>ادخال</Text>
                        </Button>
                    </Content>
                </View>
            </AppTemplate>
        );
    }
}

const style = {
    item: {
        marginRight: 10,
        marginLeft:10,
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 12, },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 12,
    }
}