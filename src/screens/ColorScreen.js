import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColor([...colors, generateRandomColor()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            ></View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 50,
    textAlign: "center",
  },
});

export default ColorScreen;
