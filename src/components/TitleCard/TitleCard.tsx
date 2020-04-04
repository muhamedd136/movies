import React from 'react';
import './TitleCard.scss';
import { withRouter } from 'react-router-dom';

export interface TitleCardProps {
  /** unique id of the title */
  id: number;
  /** name of tv show (optional) */
  name?: string;
  /** name of movie (optional) */
  title?: string;
  /** path for building posters */
  poster: string;
  /** other props */
  props?: any;
}

const TitleCard = (props: any) => {
  const { id, name, title, poster, history } = props;

  const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';

  return (
    <div
      className='TitleCard'
      onClick={() => {
        history.push(`/details/${id}`);
      }}>
      <img className='TitleCard-Image' src={`${BASE_POSTER_URL}${poster}`} alt='' />
      <div className='TitleCard-Title'>{title || name}</div>
    </div>
  );
};

export default withRouter(TitleCard);
