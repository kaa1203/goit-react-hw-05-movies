import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { fetchMovieReviews } from "api";
import { MovieReviewsItem } from "components/MovieReviewsItem/MovieReviewsItem";

const MovieReviews = () => {
   const [reviews, setReviews] = useState([]);

   const { movieId } = useParams();

   useEffect(() => {
      const loadMovieReviews = async() => {
         try {
            fetchMovieReviews(movieId).then(val => {
               setReviews(val.results);
            })
         } catch (error) {
            console.error(error);
         }
      }
      loadMovieReviews();
   }, [movieId]);
   
   
   return (
      <ul style={{
         display: "flex",
         flexDirection:"column",
         gap: "10px",
      }}>
         {
            reviews.length !== 0 ?
               reviews.map(review => (
                  <MovieReviewsItem
                     key={review.id}
                     review={review}
                  />
               ))
            : "No reviews"
         }
      </ul>
   );
}

export default MovieReviews;