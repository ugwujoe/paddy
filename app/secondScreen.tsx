import { Button, Text, View } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function secondScreen() {
  const onPress = () => {
    console.warn("pressed");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 50, fontWeight: "bold", color: "blue" }}>
        Welcome to secondScreen.
      </Text>
      <Button title="go to top" onPress={onPress} />
    </View>
  );
}
