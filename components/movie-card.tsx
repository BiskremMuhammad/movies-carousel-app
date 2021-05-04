import React, { ReactNode } from "react";
import { View, Image, StyleSheet, Dimensions, ScaledSize } from "react-native";
const window: ScaledSize = Dimensions.get("window");

interface MovieCardProps {
  children: ReactNode;
  poster: string;
}

export const MovieCard = ({ children, poster }: MovieCardProps) => {
  return (
    <View style={MovieCardStyles.cardContainer}>
      <Image source={{ uri: poster }} style={MovieCardStyles.poster} />
      {children}
    </View>
  );
};

const MovieCardStyles = StyleSheet.create({
  cardContainer: {
    width: window.width * 0.75,
    marginHorizontal: 12,
    padding: 18,
    backgroundColor: "#e7e7e7",
    borderRadius: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    flex: 0,
  },
  poster: {
    width: "100%",
    height: (window.width * 0.75 - 36) * (16 / 9),
    borderRadius: 16,
  },
});
