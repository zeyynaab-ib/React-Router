import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/moviesData";

function Home() {
  return (
    <div>
      <h2>Movie List</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.description.substring(0, 50)}...</p>
            <Link to={`/movie/${movie.id}`}>See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
