import React, { Component } from 'react';
import { Text,TextInput, View } from 'react-native';

export class TextInput2 extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }


    render() {
        return (
            <View style={{ padding: 8 }}>
                <TextInput
                    style={{ height: 32 }}
                    placeholder='type here...'
                    onChangeText={(text) => this.setState(state => state.text = text)}
                    value={this.state.text}>
                </TextInput>
                <Text >
                    Words: {this.state.text.split(' ').length}
                </Text>
            </View>
        );
    }
}
