import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";

import Todo from "./components/Task";

export default function App() {
  const [Task, setTask] = useState(""); // For single Task
  const [AllTasks, setAllTasks] = useState([]); // For all Tasks

  const handleTask = () => {
    Keyboard.dismiss();
    console.log(Task);
    setAllTasks([...AllTasks, Task]); // Adds new Task in all Tasks
    // setTask(null); // Set Task state to null again
    console.log(AllTasks);
  };

  return (
    <View style={styles.container}>
      {/* Tasks Wrapper */}
      <View style={styles.mainWrapper}>
        <Text style={styles.Heading}>Today's Task</Text>

        {/* All Tasks goes Here, hehe :D */}
        <View style={styles.taskItems}>
          {AllTasks.map((item) => {
            <Todo task={item} />;
          })}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.taskWriterWrapper}>
        <TextInput
          placeholder="Write Task"
          style={styles.taskInput}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleTask}>
          <View style={styles.addBtnWrapper}>
            <Text style={styles.addBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  taskWriterWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",

    position: "absolute",
    bottom: 60,
    paddingHorizontal: 20,
  },

  taskInput: {
    backgroundColor: "#FFF",
    color: "#1C1C21",
    paddingHorizontal: 15,
    paddingVertical: 30,
    width: 500,
    borderRadius: 10,
    fontSize: 18,
  },

  addBtnWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    borderRadius: "50%",
  },
  addBtn: { fontSize: 40, paddingHorizontal: 10, color: "#4A00E0" },

  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  mainWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  taskItems: {
    marginTop: 20,
  },

  Heading: {
    fontWeight: "bold",
    fontSize: 32,
  },
});
