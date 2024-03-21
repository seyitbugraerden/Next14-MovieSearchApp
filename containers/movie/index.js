import FeaturedMovie from "@/components/featured-movie";
import MoviesSection from "@/components/movies-section";
import Movies from "@/mocks/movies.json"
import React from "react";

function MovieContainer({ movie }) {
  return (
    <>
      <FeaturedMovie movie={movie} isCompact={false} />
      <MoviesSection
        title="Recommended Movies"
        movies={Movies.results.slice(11, 30)}
      />
    </>
  );
}

export default MovieContainer;
