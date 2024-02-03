import { View, Text, StyleSheet } from "react-native";

import ThreeDots from "@Assets/icons/ThreeDots.svg";

export const Header = () => (
  <View style={styles.container}>
    <View style={styles.userContainer}>
      <View style={styles.userAvatar} />
      <View>
        <Text>Руслан Л.</Text>
        <Text>Начинающий</Text>
      </View>
    </View>

    <ThreeDots />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userAvatar: {
    width: 40,
    height: 40,
    backgroundColor: "#FFCBA9",
    borderRadius: 50,
  },
  userContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
});
