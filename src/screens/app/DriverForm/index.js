import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Form, Text, Col, Button, Icon, View, Item, Input, Label } from 'native-base';
import AppTemplate from '../appTemplate'
import FormInput from '../../../components/common/input'
import Square from '../../../components/common/square'

const car = 'https://image.flaticon.com/icons/png/128/334/334998.png'
const pickup = 'https://image.flaticon.com/icons/png/128/335/335028.png'


export default class AccountType extends Component {
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="البيانات الشخصيه">
        <Form style={{ width: '80%', alignSelf: 'center' }}>
          <FormInput label='الاسم الكامل' />
          <FormInput label='رقم الهاتف' />
          <FormInput label='تاريخ الميلاد' />
          <Text style={{ textAlign: 'right',color:'#266A8F',fontSize:20, marginTop: '2%' }}>نوع السياره</Text>
        </Form>
        <View style={{alignItems:'center' }}>
            <Square leftImg={pickup} leftInnerText='بيك أب' rightImg={car} rightInnerText='سيدان' height={150} width={'60%'} />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center',alignItems:'center'}} >
          <Button iconLeft  style={styles.btnBot}>
            <Icon name='add' />
            <Text style={{fontSize:20,fontWeight:'bold'}}>ارفق صوره الرخصه</Text>
          </Button >
          <Button iconLeft  style={styles.btnBot}>
            <Icon name='add' />
            <Text style={{fontSize:20,fontWeight:'bold'}}>ارفق صوره السياره</Text>
          </Button >
        </View>
      </AppTemplate>
    );
  }
}

const styles = {
  btnBot: {
    marginBottom: 10,
    backgroundColor: '#15588D',
    borderRadius: 20,
    alignSelf:'center',
    paddingRight:'10%',
    paddingLeft:'10%',
  },
  box: {
    flexDirection: 'row',
    marginTop: '2%',
    // marginLeft:20,
    width: '50%',
    height: 90,
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
    color: '#266A8F',
    justifyContent: 'flex-end',
  },
}