import { useState, useEffect } from "react";
import { fetchTrending } from "api";
import { MovieList } from "components/MovieList/MovieList";

const Home = () => {
   const [trendingMovies, setTrendingMovies] = useState([]);

   useEffect(() => {
      const loadTrendingMovies = async() => {
         try {
            
            fetchTrending().then(val => {
               setTrendingMovies(val.results);
            });
         } catch (error) {
            console.log(error);
         }
      }

      loadTrendingMovies();
   }, []);

   
   useEffect(() => {
      const handleOnScroll = () => {
         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
               console.log("You've reached the end!")
            }
      }
      
      window.addEventListener("scroll", handleOnScroll);
      
      // return () => {
      //    window.removeListener("scroll", handleOnScroll);
      // } 
   }, []);
   
   return (
      <>
         <h1 style={{textAlign: "center"}}>Trending Movies</h1>
         <MovieList movies={trendingMovies}></MovieList>
      </>
   );
}

export default Home;