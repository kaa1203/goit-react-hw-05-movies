import css from "./MovieCastsItem.module.css";
import PropTypes from "prop-types";

export const MovieCastsItem = ({ cast }) => {
   const { profile_path, original_name, name } = cast;
   
   return (
      <li className={css.castItem}>
         <img
            src={profile_path !== null ?
               `https://image.tmdb.org/t/p/w500/${profile_path}` 
               : 
               `https://fakeimg.pl/300x450?text=Image`}

            alt={original_name}
            className={css.castImage}
            loading="lazy"
         />
         <p className={css.castName}>{name}</p>
      </li>
   );
}

MovieCastsItem.propTypes = {
   cast: PropTypes.object.isRequired
}