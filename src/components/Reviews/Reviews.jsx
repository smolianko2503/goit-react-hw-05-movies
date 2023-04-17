import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieReviews } from 'components/Services/Api';
import { ReviewsListItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [dataReviews, setDataReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => setDataReviews(response.results))
      .catch(error => console.log(error));
  }, [movieId]);

  if (dataReviews.length > 0) {
    return (
      <div>
        <ul>
          {dataReviews.map(item => {
            return (
              <ReviewsListItem key={item.id}>
                <h3>Author: {item.author}</h3>
                <p>{item.content}</p>
              </ReviewsListItem>
            );
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <p>We don't have any reviews for this movie</p>
      </div>
    );
  }
};

export default Reviews;
