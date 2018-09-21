import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTemplate from '../screens/app/appTemplate';
import {
    Content, Textarea, Form, Text, Button, Icon
} from 'native-base';

// You can import from local files
import Box from './common/box';

export default class AddComplainings extends React.Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Content padder>
                    <Form>
                        <Text>عنوان الشكوي</Text>

                        <Textarea rowSpan={2} bordered placeholder="عنوان الشكوي" />

                        <Text>نص الشكوي</Text>
                        <Textarea rowSpan={5} bordered placeholder="نص الشكوي" />

                    </Form>
                    <Button iconLeft block style={{ margin:50, borderRadius: 9, width: 200 }} >
                        <Icon name={'done'} />
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>ارسال</Text>
                    </Button>
                </Content>
            </AppTemplate>
        );
    }
}
