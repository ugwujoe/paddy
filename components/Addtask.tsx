import { StyleSheet, Text, TextInput, View } from "react-native";
import { Label } from "./Label";
import { CustomButton } from "./CustomButton";
import { useState } from "react";
import { Todo } from "./Todos";
import { useTodo } from "@/Lib/zustand/useTodo";

type Props = {
  closeBottomSheet: () => void;
};
export const Addtask = ({ closeBottomSheet }: Props) => {
  const [value, setValue] = useState("");
  const addTodo = useTodo((state) => state.addTodo);
  const [category, setCategory] = useState("Personal");
  const onSelectCategory = (cat: "Personal" | "Work") => {
    setCategory(cat);
  };
  const [description, setDescription] = useState("");

  const newTodo = {
    name: value,
    category: category,
    description,
    isCompleted: false,
  };
  const isValid = value.length > 2 && description.length > 2;
  const onAddTodo = () => {
    addTodo(newTodo);
    closeBottomSheet();
    setValue("");
    setDescription("");
  };
  const isActivePersonal = category === "Personal" ? "skyblue" : "#eee";
  const isActiveWork = category === "Work" ? "skyblue" : "#eee";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <Label text="Title Task" />
        <TextInput
          style={styles.input}
          placeholder="Add task Name"
          value={value}
          onChangeText={(text) => setValue(text)}
        />
      </View>
      {/* end of input container  */}
      {/* category */}
      <View style={styles.inputContainer}>
        <Label text="Category" />
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={() => onSelectCategory("Personal")}
            backgroundcolor={isActivePersonal}
            title="Personal"
          />
          <CustomButton
            onPress={() => onSelectCategory("Work")}
            backgroundcolor={isActiveWork}
            title="Work"
          />
        </View>
      </View>
      {/* end of category */}
      <View style={styles.inputContainer}>
        <Label text="Description" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Add Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <View
          style={[
            styles.btnContainer,
            {
              marginTop: 50,
            },
          ]}
        >
          <CustomButton
            backgroundcolor="skyblue"
            title="Cancel"
            onPress={closeBottomSheet}
          />
          <CustomButton
            onPress={onAddTodo}
            backgroundcolor="#eee"
            title="Create"
            disabled={!isValid}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    backgroundColor: "#ccc",
    width: "60%",
    marginHorizontal: "auto",
    height: 2,
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 20,
    gap: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
});
