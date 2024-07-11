import css from "./MovieReviewsItem.module.css";
import PropTypes from "prop-types";

export const MovieReviewsItem = ({review}) => {
   const { author, author_details, content, url } = review;
   const { avatar_path, rating } = author_details;
   
   return (
      <li className={css.reviewItem}>
         <a href={url}
            target=""
            className={css.reviewLink}
         >
            <img
               src={avatar_path !== null ?
                  `https://image.tmdb.org/t/p/w500/${avatar_path}` 
                  : 
                  `https://fakeimg.pl/50x50?text=Image`}
               alt="user-profile"
               className={css.userAvatar}
            />
            <div className={css.reviewDetails}>
               <p className={css.author}>{author}</p>
               {rating !== null &&
                  <p className={css.rating}>{rating}/10</p>
               }
               <p className={css.content}>{content}</p>
            </div>
         </a>
      </li>
   );
}

MovieReviewsItem.propTypes = {
   review: PropTypes.object.isRequired
}
