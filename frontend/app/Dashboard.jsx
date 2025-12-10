import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Tasks</Text>

      <Button title="Add Task" onPress={() => router.push("/AddTask")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
});
