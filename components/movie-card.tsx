import React, { ReactNode } from "react";
import { View, Image } from "react-native";

interface MovieCardProps {
  children: ReactNode;
  poster: string;
}

export const MovieCard = ({ children, poster }: MovieCardProps) => {
  return (
    <View>
      <Image source={{ uri: poster }} />
      {children}
    </View>
  );
};
