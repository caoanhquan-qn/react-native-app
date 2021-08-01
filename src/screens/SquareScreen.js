import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(Math.floor(Math.random() * 256));
  const [green, setGreen] = useState(Math.floor(Math.random() * 256));
  const [blue, setBlue] = useState(Math.floor(Math.random() * 256));

  const AMOUNT_OF_CHANGE = 20;

  return (
    <View>
      <ColorCounter
        title="Red"
        increaseDegree={() => {
          setRed(red + AMOUNT_OF_CHANGE);
        }}
        descreaseDegree={() => {
          setRed(red - AMOUNT_OF_CHANGE);
        }}
      />

      <ColorCounter
        title="Green"
        value={green}
        increaseDegree={() => {
          setGreen(green + AMOUNT_OF_CHANGE);
        }}
        descreaseDegree={() => {
          setGreen(green - AMOUNT_OF_CHANGE);
        }}
      />

      <ColorCounter
        title="Blue"
        value={blue}
        increaseDegree={() => {
          setBlue(blue + AMOUNT_OF_CHANGE);
        }}
        descreaseDegree={() => {
          setBlue(blue - AMOUNT_OF_CHANGE);
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 45,
  },
});

export default SquareScreen;
