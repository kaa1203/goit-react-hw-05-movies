import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./MovieListItem.module.css";

export const MovieListItem = ({ movie }) => {
   const { id, title, poster_path } = movie;
   const location = useLocation();
   return(
      <li className={css.movieListItem}>
         <Link to={`/movies/${id}`} state={{from: location}}>
            <img 
               src={ poster_path !== null ? 
                  `https://image.tmdb.org/t/p/w500/${poster_path}` 
                  :
                  `https://fakeimg.pl/300x450?text=${title}`
               } 
               alt={title}
               className={css.movieImage}
               loading="lazy"/>
            <p>{title}</p>
         </Link>
      </li>
   );
}

MovieListItem.propTypes = {
   movie: PropTypes.object.isRequired,
}