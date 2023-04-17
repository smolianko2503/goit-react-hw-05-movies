import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'components/Services/Api';
import {
  MovieList,
  MovieItem,
  HomeContainer,
  FilmName,
} from '../Home/Home.styled';
import { MovieImg } from 'pages/Movies/Movies.styled';

const Home = () => {
  const [trendingMovies, setTrandingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(response => setTrandingMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <HomeContainer>
      <h1>Trending Today</h1>
      <MovieList>
        {trendingMovies.map(movie => {
          return (
            <Link
              to={`movies/${movie.id}`}
              key={movie.id}
              state={{ from: location }}
            >
              <li>
                <MovieItem>
                  {movie.backdrop_path !== null ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                      alt={movie.title}
                      title={movie.title}
                    />
                  ) : (
                    <MovieImg
                      src="https://cdn.icon-icons.com/icons2/1674/PNG/512/film_110981.png"
                      alt="default"
                    />
                  )}
                  <FilmName>{movie.title}</FilmName>
                </MovieItem>
              </li>
            </Link>
          );
        })}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;
