import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={setName}
      />

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

      <Button title="Register" onPress={() => router.push("/Login")} />

      <Text style={styles.link} onPress={() => router.push("/Login")}>
        Already have an account ?
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
