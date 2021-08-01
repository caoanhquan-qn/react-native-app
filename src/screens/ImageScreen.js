import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const images = [
    { title: "Forest", url: require("../../assets/forest.jpg"), score: 9 },
    { title: "Beach", url: require("../../assets/beach.jpg"), score: 7 },
    {
      title: "Mountain",
      url: require("../../assets/mountain.jpg"),
      score: 4,
    },
  ];
  const renderImages = images.map((img, index) => {
    return (
      <ImageDetail
        title={img.title}
        key={index}
        imageSource={img.url}
        imageScore={img.score}
      />
    );
  });
  return <View>{renderImages}</View>;
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 45,
  },
  textBody: {
    fontSize: 20,
  },
});

export default ImageScreen;
