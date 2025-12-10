import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={() => router.push("/Dashboard")} />

      <Text style={styles.link} onPress={() => router.push("/Register")}>
        Create new account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", gap: 20 },
  title: { textAlign: "center", fontSize: 26, marginBottom: 20, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#aaa", padding: 10, borderRadius: 8 },
  link: { color: "blue", textAlign: "center", marginTop: 10 },
});
