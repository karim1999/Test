import React, { Component } from 'react';
import { AppRegistry, ImageBackground, Image, Dimensions } from 'react-native';
import { Header, Left, Button, Icon, Right, Body, Title, Container, Content, Row, Col, Card, CardItem, Text, View,Form,Textarea } from 'native-base';
import AppTemplate from '../appTemplate';
import {Map} from '../../../png/map1.png'
import ListCard from '../../../components/common/card';

export default class Map1 extends Component {
  render() {
    const nav = this.props.navigation
    return (
      <AppTemplate navigation={nav} name="نوع الحساب">
            <View style={{flexDirection:'row', height:300}}>
                <Image
                    style={styles.img}
                    source={require('../../../png/map1.png')}
                    />
            </View>
        <ListCard header={'متجر بلايستيشن'} footer={'حي النصر - شارع الوحده'}  rightIcon={'map-marker'} />
      </AppTemplate>
    );
  }
}


    
const styles = {   
    img:{
        width:'100%',
        height:'100%',
    }
   }