import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MovieCard } from "./components/movie-card";
import { Rating } from "./components/rating";

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
      <FlatList
        data={moviesList}
        horizontal={true}
        renderItem={({ item }: { item: Movie }) => (
          <MovieCard poster={item.poster}>
            <Text style={styles.movieTitle}>{item.title}</Text>
            <Rating value={item.rating} />
            <Text style={styles.movieDescription}>{item.description}</Text>
          </MovieCard>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "10%",
  },
  movieTitle: {
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 12,
  },
  movieDescription: {
    fontSize: 11,
  },
});
