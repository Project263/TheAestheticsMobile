import { useMemo } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
};

export const TextComponent = ({ size = "medium", children }: Props) => {
  const textSizeStyles = useMemo(
    () => ({
      large: { fontSize: 16, letterSpacing: 0.5 },
      medium: { fontSize: 14, lineHeight: 20, letterSpacing: 0.25 },
      small: { fontSize: 12, lineHeight: 16, letterSpacing: 0.4 },
    }),
    []
  );

  return <Text style={[styles.text, textSizeStyles[size]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});
