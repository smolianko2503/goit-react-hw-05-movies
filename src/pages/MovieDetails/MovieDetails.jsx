import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';

import { getMovieById } from 'components/Services/Api';
import {
  MovieDetailsContainer,
  LinkGoBack,
  FilmInfo,
  FilmInfoItem,
} from './MovieDetails.styled';
import MovieCard from 'components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId)
      .then(response => {
        setDataMovie(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <LinkGoBack to={backLinkLocationRef.current}>Go back</LinkGoBack>
      {!dataMovie ? (
        <Loader></Loader>
      ) : (
        <MovieCard data={dataMovie}></MovieCard>
      )}

      <FilmInfo>
        <FilmInfoItem>
          <Link to="cast">Cast</Link>
        </FilmInfoItem>
        <FilmInfoItem>
          <Link to="reviews">Reviews</Link>
        </FilmInfoItem>
      </FilmInfo>

      <Suspense fallback={<Loader></Loader>}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
