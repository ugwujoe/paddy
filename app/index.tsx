import { CustomButton } from "@/components/CustomButton";
import { Todo, Todos } from "@/components/Todos";
import { router } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { NewButton } from "@/components/navigation/NewButton";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Addtask } from "@/components/Addtask";
import { useMemo, useRef, useState } from "react";
import { useTodo } from "@/Lib/zustand/useTodo";
export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const todos = useTodo((state) => state.todo);
  const [category, setCategory] = useState("Personal");
  const snapShots = useMemo(() => ["50%", "90%"], []);
  const filteredTodos = useMemo(
    () =>
      todos.filter(
        (todo) => todo.category.toLowerCase() === category.toLowerCase()
      ),
    [todos, category]
  );
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };
  
  const isActivePersonal = category === "Personal" ? "skyblue" : "#eee";
  const isActiveWork = category === "Work" ? "skyblue" : "#eee";
  return (
    <View style={styles.container}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.date}>October 5,2023</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Keep it up! Complete your tasks. You are almost there!
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          onPress={() => setCategory("Personal")}
          backgroundcolor={isActivePersonal}
          title="Personal"
        />
        <CustomButton
          onPress={() => setCategory("Work")}
          backgroundcolor={isActiveWork}
          title="Work"
        />
      </View>
      <Todos
        todos={filteredTodos}
      />
      <NewButton onPress={openBottomSheet} />
      {/* end of card */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapShots}
        index={-1}
        enablePanDownToClose
      >
        <BottomSheetScrollView style={{ flex: 1 }}>
          <Addtask
            closeBottomSheet={closeBottomSheet}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 15,
  },
  today: {
    color: "#ccc",
    fontSize: 20,
  },
  date: {
    color: "black",
    fontSize: 30,
    fontWeight: "700",
  },
  card: {
    marginTop: 20,
    height: 150,
    width: "100%",
    backgroundColor: "skyblue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cardText: { fontSize: 25, color: "white", fontWeight: "600" },
  btnContainer: { flexDirection: "row", gap: 20, marginTop: 20 },
});
