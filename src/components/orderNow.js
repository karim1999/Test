import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTemplate from '../screens/app/appTemplate';
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    Icon,
    Form,
    Textarea,
    Button
} from 'native-base';

// You can import from local files
import Box from './common/box';

export default class OrderNow extends React.Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Container>

                    <Box header={'حدد مكان الاستلام'} footer={'اختر موقع استلام الشحنه'} sideIcon={'compass'} />
                    <Box header={'حدد مكان التسليم'} footer={'اختر موقع تسليم الشحنه'} sideIcon={'compass'} />
                    <Box header={'حدد وقت التسليم'} footer={'اضغط للتحديد'} sideIcon={'compass'} />
                    <Box header={'حدد نوع السياره'} footer={'بيك أب - سيدان'} sideIcon={'compass'} />
                    <Content padder>
                        <Card transparent style={{ alignItems: 'center' }}>
                            <CardItem header>
                                <Text>تفاصيل الطلب</Text>
                            </CardItem>
                            <CardItem>
                                <Body style={{ alignItems: 'center' }}>
                                    <Text>
                                        اكتب هنا تفاصبل العرض الذي ترغب في ارساله
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Form>
                            <Textarea rowSpan={5} bordered placeholder="التفاصيل" />
                        </Form>
                        <Button block style={{ margin: 50, borderRadius: 9, width: 200 }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>اطلب الان!</Text>
                        </Button>
                    </Content>
                </Container>
            </AppTemplate>
        );
    }
}
