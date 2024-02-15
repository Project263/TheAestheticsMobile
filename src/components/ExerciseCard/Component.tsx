import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PointSvg from "@Assets/icons/Point.svg";
import FireSvg from "@Assets/icons/Fire.svg";
type Props = {
  name: string;
  diffuculty: number;
  time: string;
};

export const ExerciseCard = ({ name, diffuculty, time }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.time}>
            <Text>{time}</Text>
            <PointSvg />
            <View style={styles.diffuculty}>
              {[...Array(diffuculty)].map((e, index) => (
                <FireSvg key={index} />
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.day}>
        <Text>Сегодня</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderColor: "#CAC4D0",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 36,
    height: 36,
    backgroundColor: "#FFE2C8",
    borderRadius: 4,
  },
  name: {
    color: "#1D1B20",
    fontWeight: "700",
  },
  time: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  diffuculty: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  day: {
    justifyContent: "flex-end",
  },
});
