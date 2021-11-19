import React from 'react';
import './Card.scss';
import { IData } from '../../types';
interface Props {
  heading: string;
  latestUpdate: string;
  total: number;
  data: IData[];
  categories: string[];
}

function Card({ heading, latestUpdate, total, data, categories }: Props): JSX.Element {
  return (
    <div className="react-app-card">
      <div className="react-app-card__heading">
        <div>
          <h2 className="react-app-card__heading-title">{heading}</h2>
          <p>Latest Update: {latestUpdate}</p>
        </div>
        <p>{total}</p>
      </div>
      <div className="react-app-card__items">
        {categories.map((category) => (
          <div className="react-app-card__item" key={category}>
            <h3 className="react-app-card__item-title">{category}</h3>
            <ul className="react-app-card__item-list">
              {data.map(({ id, name, lastSeenDate, categories }) => {
                if (!categories.includes(category)) return;
                return (
                  <li key={id}>
                    <p>
                      {name} <span>{lastSeenDate}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
