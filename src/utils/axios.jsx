import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjliYjkyNjJkZmM3MmEzNWFkYWQ5NjhkNWI3YWU1OCIsIm5iZiI6MTcyMzkxNzU4Ny4yMzEwMTksInN1YiI6IjY2YzA4YTMxNzkwN2EwODllOTE2YTg0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zqNjDQuVVSQ-Pf3LYc1JwSXDQNPTS5_gtsfEohqKSF8",
  },
});

export default instance