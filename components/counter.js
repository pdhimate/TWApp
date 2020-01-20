import React, { Fragment, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';


export class Counter extends Component {
    state = { count: 0 };

    decrement() {
        let count = this.state.count - 1;
        this.setState({
            count
        })
    }

    increment() {
        let count = this.state.count + 1;
        this.setState({
            count
        })
    }

    render() {
        const { count } = this.state;
        return (
            <View styles={styles.container}>
                <Button
                    title="increment"
                    onPress={() => this.increment()}
                />
                <Text>Count: {count}</Text>
                <Button
                    title="decrement"
                    onPress={() => this.decrement()}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
