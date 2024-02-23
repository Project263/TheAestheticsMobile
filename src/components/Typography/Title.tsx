import { StyleSheet, Text } from "react-native";

type Props = {
  type?: "large" | "medium" | "small";
  children?: React.ReactNode;
};

export const Title = ({ type = "large", children }: Props) => {
  return <Text style={[styles.text, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  large: {
    fontSize: 64,
    lineHeight: 57,
  },
  medium: {
    fontSize: 45,
    lineHeight: 52,
  },
  small: {
    fontSize: 36,
    lineHeight: 44,
  },
});
