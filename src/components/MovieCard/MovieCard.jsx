import PropTypes from 'prop-types';

import {
  MoviePoster,
  MovieInformation,
  MovieInformationItem,
} from 'pages/MovieDetails/MovieDetails.styled';

const MovieCard = ({
  data: {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  }
}) => {
  return (
    <MoviePoster>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : 'https://wikireviews.com/blog/wp-content/uploads/2015/06/Movies-where-nothing-happens.jpg'
        }
        alt={original_title}
      />
      <MovieInformation>
        <ul>
          <MovieInformationItem>
            <h1>
              {original_title} ({release_date.slice(0, 4)})
            </h1>
          </MovieInformationItem>
          <MovieInformationItem>
            <h3>User Score: {Math.round(vote_average * 10)} %</h3>
          </MovieInformationItem>
          <MovieInformationItem>
            <h3>Overview</h3>
            <p>{overview}</p>
          </MovieInformationItem>
          <MovieInformationItem>
            <h3>Genres</h3>
            {genres === null ? (
              <p>No genres</p>
            ) : (
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            )}
          </MovieInformationItem>
        </ul>
      </MovieInformation>
    </MoviePoster>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieCard;
