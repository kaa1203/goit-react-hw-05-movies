import { useEffect, useState, Suspense } from "react";
import { fetchMovieDetails } from "api";
import { NavLink, Outlet, useParams, useLocation, Link } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
   const [movie, setMovie] = useState([]);
   const { movieId } = useParams();
   
   const { title, poster_path, genres, release_date, overview } = movie;
   
   const location = useLocation();
   const goBack = location.state?.from ?? "/";

   useEffect(() => {
      const loadMovieDetails = async() => {
         try {
            fetchMovieDetails(movieId).then(val => {
               setMovie(val);
            });
         } catch (error) {
            console.error(error)
         }
      }

      loadMovieDetails();

   }, [movieId]); 

   const formatDate = release_date => {
      const monthArray = [
         "January", "February", 
         "March", "April", 
         "May", "June", 
         "July", "August", 
         "September", "October", 
         "November", "December"];

      if (release_date === undefined || release_date === "") { return "N/A"}
      
      let d = new Date(release_date);
      let month = d.getMonth();
      let year = d.getFullYear();
      let date = d.getDate();
      date = date < 10 ? "0"+ date : date; 
   
      let formattedDate = monthArray[month] + " " + date + ". " + year
   
      return formattedDate;
   }

   return(
      <>
         <div className={css.movieContainer}>
         <Link to={goBack}>
            <button className={css.goBack}>
               Go Back
            </button>
         </Link>
            <div className={css.movieWrapper}>
               <img 
                  src={ poster_path !== null ? 
                     `https://image.tmdb.org/t/p/w500/${poster_path}` 
                     :
                     `https://fakeimg.pl/300x450?text=${title}`}
                  alt={title}
                  className={css.movieImage}
                  loading="lazy"/>
               <div className={css.movieDetailsWrapper}>
                  <h2 className={css.movieTitle}>{title}</h2>
                  <div className={css.movieDetails}>
                     <div>
                        <h3 className={css.subTitle}>Original Title</h3>
                        <p>{title}</p>
                     </div>
                     <div>
                        <h3 className={css.subTitle}>Genre</h3>
                        <p>
                           { genres !== undefined ? 
                              genres.map(genre => genre.name).join(", ")
                              : "N/A"}
                        </p>
                     </div>
                     <div>
                        <h3 className={css.subTitle}>Released Date</h3>
                        <p>{formatDate(release_date)}</p>
                     </div>
                     <div>
                        <h3 className={css.subTitle}>Summary</h3>
                        <p>{overview}</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <ul className={css.linkList}>
               <li className={css.linkItem}>
                  <NavLink 
                     to={`casts`}
                     className={({isActive}) => (isActive ? css.active : css.link)}>
                     Casts
                  </NavLink>
               </li>
               <li className={css.linkItem}>
                  <NavLink 
                     to={`reviews`}
                     className={({isActive}) => (isActive ? css.active : css.link)}>
                     Reviews
                  </NavLink>
               </li>
            </ul>  
            <Suspense fallback={<Loader/>}>
               <Outlet/>
            </Suspense>             
         </div>
      </>
   ); 
}

export default MovieDetails;