import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Greeting } from "./components/prop";
import { Blinker } from "./components/blinker";
import { textStyles } from "./styles/textStyles";
import { backgrounds } from "./styles/backgroundStyles";

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{  flex: 1 }}>
        <Text>Hello, world!</Text>
        <Greeting name="Piyush"></Greeting>
        <Greeting name="Piyush2"></Greeting>
        <Text style={textStyles.red}>Piyush styled</Text>
        <Text style={textStyles.boldBlue}>Piyush styled2</Text>
        <Blinker text="Welcome!!!"></Blinker>
        <Text style={backgrounds.smallBlue}>Text with background</Text>
        <Text style={backgrounds.mediumBlue}>Text with background2</Text>
      </View>
    );
  }
}
