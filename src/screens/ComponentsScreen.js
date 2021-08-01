import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const myName = "Quan";
  return (
    <View>
      <Text style={styles.textHeader}>Getting started with React Native</Text>
      <Text style={styles.textBody}>My name is {myName}</Text>
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

export default ComponentsScreen;
