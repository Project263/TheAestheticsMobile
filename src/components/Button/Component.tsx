import { View, Text, Pressable, StyleSheet } from "react-native";
import { palette } from "@Constants/colors";

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
      filled: palette.primary,
      outlined: 'transparent',
      text: 'transparent',
    }[type],
    borderColor: type === "outlined" ? palette.primary : undefined,
    borderWidth: type === "outlined" ? 1 : undefined,
  };

  const buttonPressedStyles = {
    backgroundColor: {
      filled: palette.primary50,
      outlined: palette.primary70 + '2F',
      text: palette.primary70 + '2F',
    }[type],
  };

  const buttonTextStyles = {
    color: {
      filled: palette.white,
      outlined: palette.primary,
      text: palette.primary,
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
