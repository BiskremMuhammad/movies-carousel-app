import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CONSTANTS } from "../constants";

interface RatingProps {
  value: number;
}

export const Rating = ({ value }: RatingProps) => {
  const filledStars: React.ReactNode[] = [];
  const emptyStars: React.ReactNode[] = [];

  Array(5)
    .fill(1)
    .map((v, i) => {
      if (i < value) {
        filledStars.push(
          <View key={i} style={RatingStyles.star}>
            <AntDesign
              name="star"
              style={RatingStyles.star}
              color={CONSTANTS.RATE_COLOR}
            />
          </View>
        );
      } else {
        emptyStars.push(
          <View key={i} style={RatingStyles.star}>
            <AntDesign
              name="staro"
              style={RatingStyles.star}
              color={CONSTANTS.RATE_COLOR}
            />
          </View>
        );
      }
    });
  return (
    <View style={RatingStyles.starsContainer}>
      {filledStars.map((s) => s)}
      {emptyStars.map((s) => s)}
    </View>
  );
};

const RatingStyles = StyleSheet.create({
  starsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  star: {
    width: 14,
    height: 14,
  },
});
