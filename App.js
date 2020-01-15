import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Greeting } from "./components/prop";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', top: 50 }}>
        <Text>Hello, world!</Text>
        <Greeting name="Piyush"></Greeting>
        <Greeting name="Piyush2"></Greeting>
        <Greeting name="Piyush3"></Greeting>
      </View>
    );
  }
}
