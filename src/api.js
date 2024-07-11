const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "334986b59c344f376defb99ce94fed26";


export const fetchTrending = async() => {
   const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
   const data = await res.json();
   return data;
}

export const fetchSearchResult = async query => {
   const res = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
   const data = await res.json();
   return data;
}

export const fetchMovieDetails = async movieId => {
   const res = await fetch (`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
   const data = await res.json();
   return data;
}

export const fetchMovieCredits = async movieId => {
   const res = await fetch (`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
   const data = await res.json();
   return data;
}

export const fetchMovieReviews = async movieId => {
   const res = await fetch (`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
   const data = await res.json();
   return data;
}
