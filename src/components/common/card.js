import React, { Component } from 'react';
import { Left, Icon, Right, Card, CardItem, Text} from 'native-base';


export default class ListCard extends Component {
  render() {
    return (
    
      <Card style={{flex:1, borderRadius: 9 }} >
        <CardItem style={{ borderRadius: 9 }}>
            <Left style={{ flex: 0.1 }} >
              <Icon name={this.props.leftIcon}  type="Entypo" style={{ color: this.props.LeftIconColor }} />
            </Left>
            <Right style={{ flex: 1, backgroundColor: '', alignContent: 'flex-end' }}>
              <Text style={{ color: '#266A8F',fontSize:20 ,fontWeight:'bold'}} >{this.props.header}</Text>
              <Text note style={{ color: '#707070',fontSize:15 ,fontWeight:'bold' }} >{this.props.footer}</Text>
            </Right>
            <Right style={{ flex: 0.1 }}>
              <Icon name={this.props.rightIcon} type="FontAwesome" style={{ color: 'black', marginTop: 20, marginLeft: 0 }} />
            </Right>
        </CardItem>
      </Card>
      
    );
  }
}