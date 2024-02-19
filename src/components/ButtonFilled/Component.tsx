import { colors } from "@Constants/colors";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  children?: React.ReactNode;
  onPress?: () => void;
};

export const ButtonFilled = ({ children, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.btn.filledBtn.backgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  buttonText: { color: "#fff", textAlign: "center" },
  pressed: {
    opacity: 0.82,
  },
});
