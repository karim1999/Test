import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { ImageBackground } from 'react-native';


export default class Square extends Component {

  firstColText() {
    if (this.props.leftText) {
      return (
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.text} >{this.props.leftText}</Text>
        </View>
      )
    } else {
      null
    }
  }

  secondColText() {
    if (this.props.leftText) {
      return (
        <View style={{ flexDirection: 'row' }} >
          <Text style={styles.text} >{this.props.rightText}</Text>
        </View>
      )
    } else {
      null
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', marginTop: '2%',height:this.props.height, width:this.props.width, alignItems: 'center', justifyContent: 'center' }} >
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center',paddingTop:5 }} >
          {this.firstColText()}
          <View style={styles.box} >
            <ImageBackground source={{ uri: this.props.leftImg }} imageStyle={{ resizeMode: 'stretch' }} style={styles.image}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#266A8F', fontSize: 20, fontWeight: 'bold' }}>{this.props.leftInnerText}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center',justifyContent: 'center', paddingTop:5 }} >
          {this.secondColText()}
          <View style={styles.box} >
            <ImageBackground source={{ uri: this.props.rightImg }} imageStyle={{ resizeMode: 'stretch' }} style={styles.image}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#266A8F', fontSize: 20, fontWeight: 'bold' }}>{this.props.rightInnerText}</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  text: {
    // marginTop: '9%',
    color: '#266A8F',
    fontSize: 20,
    fontWeight: 'bold'
  },
  box: {
    flexDirection: 'row',
    // marginTop: '2%',
    margin:20,
    marginTop:5,
    width: '80%',
    height:'70%',
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
