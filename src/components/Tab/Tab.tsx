import TitleCard from '../TitleCard/TitleCard';
import React from 'react';
import './Tab.scss';

export interface TabProps {
  list: any;
}

export const Tab = ({ list }: TabProps) => {
  const mockData = [
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 1',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 2',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 3',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 4',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 5',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 6',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 7',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 8',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 9',
    },
    {
      image: 'https://i.pinimg.com/originals/96/a0/0d/96a00d42b0ff8f80b7cdf2926a211e47.jpg',
      title: 'Title 10',
    },
  ];

  return (
    <div className='Tab'>
      {list?.map((data: any, index: number) => {
        return <TitleCard key={`TitleCard${index}`} id={data.id} name={data?.name} title={data?.title} poster={data.poster_path} />;
      })}
    </div>
  );
};
