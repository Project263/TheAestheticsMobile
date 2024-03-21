import { View, Text, StyleSheet } from "react-native";

import ThreeDots from "@Assets/icons/ThreeDots.svg";
import { palette } from "@Constants/colors";

type Props = {
  username: string;
  userLvl: string;
};

export const Header = ({ username, userLvl }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userAvatar} />
        <View>
          <Text>{username}</Text>
          <Text>{userLvl}</Text>
        </View>
      </View>

      <ThreeDots />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  userAvatar: {
    width: 40,
    height: 40,
    backgroundColor: palette.primary100,
    borderRadius: 50,
  },
  userContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
});
