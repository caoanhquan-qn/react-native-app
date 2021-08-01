import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Sam", key: "1", age: 20 },
    { name: "Jill", key: "2", age: 45 },
    { name: "Tasha", key: "3", age: 32 },
    { name: "Jess", key: "4", age: 27 },
    { name: "Hanna", key: "5", age: 53 },
    { name: "David", key: "6", age: 30 },
    { name: "Jonas", key: "7", age: 34 },
  ];

  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={true}
      keyExtractor={(friend) => friend.key}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
