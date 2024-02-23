import { StyleSheet, Text } from "react-native";

type Props = {
  type?: "large" | "medium" | "small";
  children?: React.ReactNode;
};

export const TextComponent = ({ type = "large", children }: Props) => {
  return <Text style={[styles.text, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  large: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  medium: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  small: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
  },
});
