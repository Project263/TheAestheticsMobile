import React, { useMemo } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  size?: "large" | "medium" | "small";
  children?: React.ReactNode;
};

const fontSizes = {
  large: 64,
  medium: 45,
  small: 36,
};

export const Title = ({ size = "medium", children }: Props) => {
  const fontSize = useMemo(() => fontSizes[size], [size]);

  return <Text style={[styles.text, { fontSize }]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontWeight: "400",
  },
});
