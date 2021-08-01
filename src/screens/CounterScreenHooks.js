import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreenHooks = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text style={styles.textBody}>Current Counter: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBody: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
});
export default CounterScreenHooks;
