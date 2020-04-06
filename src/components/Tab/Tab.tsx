import { TitleCard } from '..';
import React from 'react';
import './Tab.scss';

export interface TabProps {
  list: any;
}

export const Tab = ({ list }: TabProps) => {
  return (
    <div className='Tab'>
      {list?.map((data: any, index: number) => {
        return <TitleCard key={`TitleCard${index}`} id={data.id} name={data?.name} title={data?.title} poster={data.poster_path} />;
      })}
    </div>
  );
};
