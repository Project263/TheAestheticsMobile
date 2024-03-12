import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "@Constants/colors";

type ButtonTypes = "filled" | "outlined" | "text";

type Props = {
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  type?: ButtonTypes;
};

export const Button = ({
  children,
  onPress,
  disabled,
  type = "filled",
}: Props) => {
  const buttonOuterContainerStyles = {
    backgroundColor: {
      filled: colors.btn.filledBtn.backgroundColor,
      outlined: colors.btn.outlinedBtn.backgroundColor,
      text: colors.btn.textBtn.backgroundColor,
    }[type],
    borderColor: type === "outlined" ? colors.btn.outlinedBtn.border : undefined,
    borderWidth: type === "outlined" ? 1 : undefined,
  };

  const buttonPressedStyles = {
    backgroundColor: {
      filled: colors.btn.filledBtn.onPress,
      outlined: colors.btn.outlinedBtn.onPress,
      text: colors.btn.textBtn.onPress,
    }[type],
  };

  const buttonTextStyles = {
    color: {
      filled: colors.btn.filledBtn.textColor,
      outlined: colors.btn.outlinedBtn.textColor,
      text: colors.btn.textBtn.textColor,
    }[type],
  };

  return (
    <View style={[styles.buttonOuterContainer, buttonOuterContainerStyles]}>
      <Pressable
        disabled={disabled}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && buttonPressedStyles,
        ]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, buttonTextStyles]}>{children}</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonPressed: {
    opacity: 0.8,
  },
});
