import React, { useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import PointSvg from "@Assets/icons/Point.svg";
import FireSvg from "@Assets/icons/Fire.svg";
import { palette } from "@Constants/colors";

type Props = {
  name: string;
  difficulty: number;
  timeToComplete: string;
  date: Date;
};

const getDate = (enteredDate: Date) => {
  const monthName = enteredDate.toLocaleString("default", { month: "long" });
  const displayedDate =
    enteredDate.toString() === new Date().toString()
      ? "Сегодня"
      : `${enteredDate.getDate()} ${monthName}`;

  return displayedDate;
};

export const ExerciseCard = ({
  name,
  difficulty,
  timeToComplete,
  date,
}: Props) => {
  const cachedDifficulty = useMemo(() => [...Array(difficulty)], [difficulty]);
  const cachedDate = useCallback(() => getDate(date), [date]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.time}>
            <Text>{timeToComplete}</Text>
            <PointSvg />
            <View style={styles.diffuculty}>
              {cachedDifficulty.map((e, index) => (
                <FireSvg key={index} />
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.day}>
        <Text>{cachedDate()}</Text>
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
    borderRadius: 12,
  },
  leftContainer: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 36,
    height: 36,
    backgroundColor: palette.primary100,
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
