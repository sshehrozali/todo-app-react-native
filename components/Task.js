import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.taskWrapper}>
      <Text style={styles.taskContent}>{props.task}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskWrapper: {
    // backgroundColor: "#FFFFFF",
    backgroundColor: "#4A00E0",
    marginVertical: 10,
    borderRadius: 10,
  },

  taskContent: {
    paddingHorizontal: 10,
    paddingVertical: 25,

    fontSize: 18,

    color: "#FFF",
  },
});
