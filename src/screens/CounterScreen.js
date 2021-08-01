import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class CounterScreen extends React.Component {
  state = { counter: 0 };
  render() {
    return (
      <View>
        <Button
          title="Increase"
          onPress={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            this.setState({ counter: this.state.counter - 1 });
          }}
        />
        <Text style={styles.textBody}>
          Current Counter: {this.state.counter}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBody: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
});
export default CounterScreen;
