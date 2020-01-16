import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Greeting } from "./components/prop";
import { Blinker } from "./components/blinker";
import { textStyles } from "./styles/textStyles";
import { backgrounds } from "./styles/backgroundStyles";
import { TextInput2 } from "./components/textInput2";
import { Button2 } from './components/button2';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Hello, world!</Text>
        <Greeting name="Piyush"></Greeting>
        <Greeting name="Piyush2"></Greeting>
        <Text style={textStyles.red}>Piyush styled</Text>
        <Text style={textStyles.boldBlue}>Piyush styled2</Text>
        <Blinker text="Welcome!!!"></Blinker>
        <Text style={backgrounds.smallBlue}>Text with background</Text>
        <Text style={backgrounds.mediumBlue}>Text with background2</Text>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: 'space-between',
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: 'center',
        }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
        <TextInput2 text="">
        </TextInput2>
        <Button2>
          
        </Button2>
      </View>
    );
  }
}
