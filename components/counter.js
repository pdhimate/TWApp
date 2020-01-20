import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export class Counter extends Component {
    //state object
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <View>
                <Button onPress={this.increment} title="+"></Button>
                <Text >{this.state.count}</Text>
                <Button onPress={this.decrement} title="-"></Button>
            </View>
        );
    }
}
