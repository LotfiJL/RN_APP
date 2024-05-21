import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "./component/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/*  task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.taskTitle}>Main Task</Text>

        {/* first task */}
        <View style={styles.items}>
          <Task text="Task 1" />
          <Task text="Task 2" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // alignItems: "center",
    // justifyContent: "center",
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E1F20",
    marginBottom: 20,
  },
  items: {},
});
