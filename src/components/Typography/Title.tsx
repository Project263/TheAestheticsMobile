import { StyleSheet, Text } from "react-native";

type Props = {
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
};

export const Title = ({ size = "medium", children }: Props) => {
  return <Text style={[styles.text, styles[size]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  large: {
    fontSize: 64,
  },
  medium: {
    fontSize: 45,
  },
  small: {
    fontSize: 36,
  },
});
