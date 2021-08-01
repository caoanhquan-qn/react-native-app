import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View style={styles.layoutFormat}>
      <Image source={props.imageSource} />
      <Text style={styles.textBody}>{props.title}</Text>
      <Text style={styles.textBody}>Image Score - {props.imageScore}</Text>
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
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  layoutFormat: {
    marginVertical: 10,
  },
});

export default ImageDetail;
