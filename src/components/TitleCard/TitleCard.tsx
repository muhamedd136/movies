import { withRouter } from 'react-router-dom';
import React from 'react';
import './TitleCard.scss';

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
  const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w300';
  const { id, name, title, poster, history } = props;

  return (
    <div
      className='TitleCard'
      onClick={() => {
        history.push(`/details?id=${id}`);
      }}>
      <img
        className='TitleCard-Image'
        src={poster ? `${BASE_POSTER_URL}${poster}` : `https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg`}
        alt=''
      />
      <div className='TitleCard-Title'>{title || name}</div>
    </div>
  );
};

export default withRouter(TitleCard);
