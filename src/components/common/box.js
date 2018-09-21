import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
    Card,
    CardItem,
    Body,
    Text,
    Right,
    Left,
    Thumbnail,
    Icon
} from 'native-base';

// You can import from local 

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    sideIcon(icon) {
        if (icon) {
            return <Icon name={icon} />
        }
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        {this.sideIcon(this.props.statusIcon)}
                        <Body style={{ marginLeft: 200 }}>
                            <Text>{this.props.header}</Text>
                            <Text note style={{fontsize:8}}>{this.props.footer}<Text>{this.sideIcon(this.props.icon)}</Text></Text>
                        </Body>
                        {this.sideIcon(this.props.sideIcon)}
                    </Left>
                </CardItem>
            </Card>
        );
    }
};

const styles = StyleSheet.create({
    box: {
        margin: 15,
        padding: 0,
    },
});