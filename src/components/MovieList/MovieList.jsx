import { MovieListItem } from "components/MovieListItem/MovieListItem";
import PropTypes from "prop-types";
import css from "./MovieList.module.css";

export const MovieList = ({ movies }) => {
   
   return (
      <ul className={css.movieList}>
         {
            movies.map((movie) => (
               <MovieListItem
                  key={movie.id}
                  movie={movie}
               />
            ))
         }
      </ul>
   );
}

MovieList.propTypes = {
   movies: PropTypes.array.isRequired,
}