import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Blinker extends Component {
    //state object
    state = { isShowingText: true };

    componentDidMount() {
        // Toggle the state every second
        setInterval(() => (
            this.setState(state => (
                { isShowingText: !state.isShowingText }
            ))
        ), 1000);
    } 

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}
