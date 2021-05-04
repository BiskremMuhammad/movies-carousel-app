import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Movie {
  id: string;
  title: string;
  rating: number;
  genres: string[];
  description: string;
  poster: string;
}

const moviesList: Movie[] = [
  {
    id: "1",
    title: "Movie 1",
    rating: 4,
    genres: ["Mystery", "Drama"],
    description:
      "this is the movie number one description, and that may go fo a long long long lines..",
    poster:
      "https://i.pinimg.com/originals/5a/aa/ff/5aaaff7e53d392dd6f117de4b6095cb6.jpg",
  },
  {
    id: "2",
    title: "movie 2",
    rating: 3,
    genres: ["Drama", "Adventure", "Comedy"],
    description: "this is descriiption",
    poster:
      "https://i.pinimg.com/originals/24/89/7e/24897e520c52d25c1ccfcc1e8637620c.jpg",
  },
  {
    id: "3",
    title: "movie 3",
    rating: 2,
    genres: ["Comedy", "Sci-fi"],
    description: "this is descriiption",
    poster: "https://live.staticflickr.com/2581/4118118684_fa5856d4d6_z.jpg",
  },
  {
    id: "4",
    title: "movie 4",
    rating: 2,
    genres: ["Drama", "Animation"],
    description: "this is descriiption",
    poster:
      "https://i5.walmartimages.com/asr/513352a3-4917-441e-913a-7c5d91b10db7_1.cc9e30ae5daecca6607e1979d05c98fc.jpeg",
  },
  {
    id: "5",
    title: "movie 5",
    rating: 5,
    genres: ["Horror", "Comedy", "Sci-fi", "Animation", "Mystery"],
    description: "this is descriiption",
    poster: "https://fandangogroovers.files.wordpress.com/2009/12/the-box.jpg",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
