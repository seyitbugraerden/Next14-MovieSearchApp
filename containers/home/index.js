import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Movies from "@/mocks/movies.json";
function HomeContainer() {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[0]} />
    </div>
  );
}

export default HomeContainer;
