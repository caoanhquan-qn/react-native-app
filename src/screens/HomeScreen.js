import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Images Demo"
        onPress={() => props.navigation.navigate("Images")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Counter Hooks Demo"
        onPress={() => props.navigation.navigate("CounterHooks")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => props.navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 45,
  },
  textBody: {
    fontSize: 20,
  },
});

export default HomeScreen;
