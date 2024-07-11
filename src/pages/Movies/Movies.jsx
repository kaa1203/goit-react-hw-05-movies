import { useState, useEffect, Suspense } from "react";
import { fetchSearchResult } from "api";
import { MovieList } from "components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./Movies.module.css";
import { Loader } from "components/Loader/Loader";

const Movies = () => {
   const [movies, setMovies] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();

   let movieName = searchParams.get('movie') ;

   useEffect(() => {
      const loadSearchResult = async() => {
         try { 
            fetchSearchResult(searchParams).then(val => setMovies(val.results));
         } catch (error) {
            console.error(error)
         }
      }
      loadSearchResult();
   }, [searchParams]);

   const handleOnChange = e => {
      const movie = e.target.value;
      
      const nextParams = movie !== "" ? {movie} : {};
      
      setSearchParams(nextParams);
   }

   return (
      <>
         <div className={css.searchWrapper}>
            <input 
               type="text" 
               name="search"
               className={css.searchBar}
               autoComplete="off"
               placeholder="Search movies..."
               value={movieName === null ? "" : movieName}
               onChange={handleOnChange}
               />
         </div>
         <Suspense fallback={<Loader/>}>
            <MovieList movies={movies}/>
         </Suspense>
      </>
   );   
}

export default Movies;