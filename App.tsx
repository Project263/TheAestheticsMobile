import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Header } from "./src/components";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
