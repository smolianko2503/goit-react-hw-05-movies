import { useEffect, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { getSearchMovie } from 'components/Services/Api';
import {
  SearchForm,
  Input,
  SearchButton,
  MoviesContainer,
  MovieList,
  MovieItem,
  MovieImg,
  FilmName,
} from './Movies.styled';

const Movies = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const movieQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieQuery !== '') {
      getSearchMovie(movieQuery)
        .then(response => setDataMovies(response.results))
        .catch(error => console.log(error));
    }
    return;
  }, [movieQuery]);

  const updateQueryString = evt => {
    evt.preventDefault();
    const inputValue = evt.target.query.value.trim();
    if (inputValue === '') {
      toast.error('Please enter the query parameters!');
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue });
    evt.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={updateQueryString}>
        <Input
          type="text"
          name="query"
          placeholder="Enter the name of the movie..."
        />
        <SearchButton type="submit">
          <FcSearch />
        </SearchButton>
      </SearchForm>

      <MoviesContainer>
        <MovieList>
          {dataMovies.map(movie => {
            return (
              <Link
                to={`${movie.id}`}
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
      </MoviesContainer>
    </div>
  );
};

export default Movies;
