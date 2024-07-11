import { fetchMovieCredits } from "api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieCastsItem } from "components/MovieCastsItem/MovieCastsItem";
import css from "./MovieCastsList.module.css";

const MovieCasts = () => {
   const [casts, setCasts] = useState([]);
   const { movieId } = useParams();
   
   useEffect(() => {
      const loadCast = async() => {
         try {
            fetchMovieCredits(movieId).then(val => {
               const { cast } = val;
               setCasts(cast);
            });
         } catch (error) {
            console.error(error);
         }
      }
      loadCast();
   }, [movieId]);

   return (
      <ul className={css.castList}>
         {
            casts.map(cast => (
               <MovieCastsItem
                  key={cast.id}
                  cast={cast}
               />
            ))
         }
      </ul>
   );
}

export default MovieCasts;