import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieCredits } from 'components/Services/Api';
import { CastList } from './Cast.styled';

const Cast = () => {
  const [dataCast, setDataCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => setDataCast(response.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <CastList>
      {dataCast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                  : 'https://irc-volvol.info-gkh.com.ua/assets/images/noimage.png'
              }
              width="240"
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        );
      })}
    </CastList>
  );
};

export default Cast;
