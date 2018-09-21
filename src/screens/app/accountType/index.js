import React, { Component } from 'react';
import { AppRegistry, ImageBackground, Image, Dimensions } from 'react-native';
import { Header, Left, Button, Icon, Right, Body, Title, Container, Content, Row, Col, Card, CardItem, Text, View } from 'native-base';
import AppTemplate from '../appTemplate';
import Square from '../../../components/common/square';

const uri = 'https://image.flaticon.com/icons/png/128/542/542137.png';
const user = 'https://image.flaticon.com/icons/png/128/149/149455.png';

export default class AccountType extends Component {
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="نوع الحساب">
        <Square leftImg={uri} leftText='سائق' rightImg={user} rightText='مستخدم' height={250} />
        <View style={{ flex: 1, justifyContent: 'center' }} >
          <Button rounded style={styles.btn}>
            <Text style={{ color: 'white', fontSize: 25, paddingRight:'20%', paddingLeft:'20%', fontWeight:'bold'}}>التالي</Text>
          </Button>
        </View>
      </AppTemplate>
    );
  }
}

const styles = {
  box: {
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
    width: '80%',
    height: 150,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    width: '90%',
    height: '90%',
    alignSelf: 'center',
    color: '#1B5686'
  },
  text: {
    marginTop: '9%',
    color: '#266A8F',
    fontSize: 18
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#15588D',
  }
}
