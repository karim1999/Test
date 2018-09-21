import React, { Component } from 'react';
import { AppRegistry, ImageBackground, Image,Dimensions,View } from 'react-native';
import{Header,Left,Button,Icon,Right,Body,Title,Container,Content,Row, Col,Card,CardItem,Text } from 'native-base';
import AppTemplate from '../appTemplate';
import Square from '../../../components/common/square';

const car = 'https://image.flaticon.com/icons/png/128/334/334998.png'
const pickup = 'https://image.flaticon.com/icons/png/128/335/335028.png'

export default class CarType extends Component {
  render() {
    const nav = this.props.navigation
    return (
        <AppTemplate navigation={nav} name="حدد نوع السياره">
             <Square leftImg={pickup} leftInnerText='بيك أب' rightImg={car} rightInnerText='سيدان' height={250} />
        </AppTemplate>
    );
  }
}

const styles = {
  box:{
        flexDirection:'row',
        // marginTop:'2%',
        marginRight:20,
        marginLeft:20,
        width: '80%',
        height:150,
        borderRadius:12,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        alignItems:'center',
        justifyContent:'center'
  },
  image:{
    marginTop:10,
    marginLeft:10,
        width: '90%',
        height: '90%',
        alignSelf:'center',
        color:'#1B5686'
        },
    text:{
      marginTop:'9%',
      color:'#266A8F',
      fontSize:18
      },
    btn:{
      alignSelf:'center',
      backgroundColor:'#15588D',
      paddingRight:'18%',
      paddingLeft:'18%'
    }
}
