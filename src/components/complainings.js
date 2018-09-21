import React, { Component } from 'react';
import { Container, Button, Icon } from 'native-base';
import AppTemplate from '../screens/app/appTemplate'
import Box from './common/box'

import { Img } from './common';

class Complainings extends Component {
    render() {
        const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.Home">
                <Container>
                    <Box style={{ margin: 15 }} header={'شكوي بخصوص التسجيل'} footer={'لم يتم التسجيل ..الرجاء متابعه الموضوع'} />
                    <Box style={{ margin: 15 }} header={'شكوي بخصوص التوصيل'} footer={'التوصيل يتاخر'} />
                    <Button rounded style={{ marginTop: 200, marginLeft: 40, padding: 20 }}>
                        <Icon name='add' />
                    </Button>
                </Container>
            </AppTemplate>
        )
    }
}

const style = {
    container: {
        backgroundColor: '#F1F1F1',
    },
}

export default Complainings;