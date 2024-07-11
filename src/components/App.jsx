import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PageNotFound } from "pages/PageNotFound";
import { SharedLayout } from "components/SharedLayout/SharedLayout";

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieCasts = lazy(() => import('./MovieCastsList/MovieCastsList'));
const MovieReviews = lazy(() => import('./MovieReviewsList/MovieReviewsList'));

export const App = () => {
  
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="movies/:movieId" element={<MovieDetails/>}>
              <Route path="casts" element={<MovieCasts/>}/>
              <Route path="reviews" element={<MovieReviews/>}/>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Suspense>
    </>
  );
};
