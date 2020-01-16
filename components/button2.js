import React, { Component } from 'react';
import { View, Button } from 'react-native';

export class Button2 extends Component {
    _onPress() {
        alert("button pressed");
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this._onPress}
                    color="red"
                    title="Press me"
                >

                </Button>
            </View>
        );
    }
}
