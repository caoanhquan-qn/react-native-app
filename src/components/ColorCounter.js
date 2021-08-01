import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ title, increaseDegree, descreaseDegree }) => {
  return (
    <View>
      <Text style={styles.textHeader}>{title}</Text>
      <Button title={`More ${title}`} onPress={increaseDegree} />
      <Button title={`Less ${title}`} onPress={descreaseDegree} />
    </View>
  );
};
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 45,
  },
});

export default ColorCounter;
