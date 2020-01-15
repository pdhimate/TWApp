import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Greeting } from "./components/prop";
import { Blinker } from "./components/blinker";
import { textStyles } from "./styles/textStyles";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', top: 50 }}>
        <Text>Hello, world!</Text>
        <Greeting name="Piyush"></Greeting>
        <Greeting name="Piyush2"></Greeting>
        <Text style={textStyles.red}>Piyush styled</Text>
        <Text style={textStyles.boldBlue}>Piyush styled2</Text>
        <Blinker text="Welcome!!!"></Blinker>
      </View>
    );
  }
}
