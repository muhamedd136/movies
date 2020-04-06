import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { tvshows, movies } from '../../api';
import './Details.scss';

const Details = (props: any) => {
  const BASE_BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';
  const BASE_VIDEO_URL = 'https://www.youtube.com/embed/';

  const params = new URLSearchParams(props.location.search);
  const id = params.get('id') || '0';
  const tab = params.get('tab');

  const [titleDetails, setTitleDetails] = useState({
    backdrop: '',
    video: '',
    title: '',
    overview: '',
  });

  const getDetails = async () => {
    if (tab === '1') {
      await movies
        .getDetails(parseInt(id))
        .then((response) =>
          setTitleDetails({
            backdrop: response.data.backdrop_path,
            video: response.data?.videos.results.filter((result: any) => result.type === 'Trailer')[0].key || '',
            title: response.data?.name || response.data?.title,
            overview: response.data.overview,
          })
        )
        .catch((error) => console.log(error));
    } else {
      await tvshows
        .getDetails(parseInt(id))
        .then((response) =>
          setTitleDetails({
            backdrop: response.data.backdrop_path,
            video: response.data?.videos.results.filter((result: any) => result.type === 'Trailer')[0].key || '',
            title: response.data?.name || response.data?.title,
            overview: response.data.overview,
          })
        )
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className='Details'>
      <div className='Details-Container'>
        <span style={{ cursor: 'pointer' }} onClick={() => props.history.goBack()}>
          Go back
        </span>
        {titleDetails.video.length ? (
          <iframe allowFullScreen height='auto' className='Details-Video' src={`${BASE_VIDEO_URL}${titleDetails.video}`}></iframe>
        ) : (
          <img className='Details-Image' src={`${BASE_BACKDROP_URL}${titleDetails?.backdrop}`} />
        )}
        <div className='Details-Title'>{titleDetails?.title || 'Title'}</div>
        <div className='Details-Overview'>{titleDetails?.overview || 'Overview'}</div>
      </div>
    </div>
  );
};

export default withRouter(Details);
