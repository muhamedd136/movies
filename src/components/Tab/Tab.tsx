import { TitleCard } from '..';
import React from 'react';
import './Tab.scss';

export interface TabProps {
  list: any;
}

export const Tab = ({ list }: TabProps) => {
  return (
    <div className={list?.length ? 'Tab' : 'Tab-Empty'}>
      {list?.length ? (
        list?.map((data: any, index: number) => {
          return <TitleCard key={`TitleCard${index}`} id={data.id} name={data?.name} title={data?.title} poster={data.poster_path} />;
        })
      ) : (
        <img src='https://cdn.dribbble.com/users/1554526/screenshots/3399669/no_results_found.png' alt='' />
      )}
    </div>
  );
};
