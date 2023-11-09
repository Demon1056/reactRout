import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ContainerReviews } from './Reviews.styled';
import { getReviews } from 'servise/moviesApi';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const normalizeReviews = reviews =>
      reviews.map(({ author, content, id }) => ({ author, content, id }));

    const getMovieReviews = async id => {
      try {
        const res = await getReviews(id);
        if (res.length === 0) {
          return;
        }
        const updateReviews = normalizeReviews(res);
        setReviews(updateReviews);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <ContainerReviews>
      {reviews ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2> <p>{content}</p>
            </li>
          ))}{' '}
        </ul>
      ) : (
        <p>Not Reviews here now</p>
      )}
    </ContainerReviews>
  );
};

export default Reviews;
