import React from 'react';
import './Card.scss';
import { IData } from '../../types';
import { format } from 'date-fns';
import { formatDate } from '../../utils';

interface Props {
  heading: string;
  latestUpdate: Date | null;
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
          {latestUpdate && <p>Latest Update: {format(new Date(latestUpdate), 'MMM dd, y')}</p>}
        </div>
        <p>{total}</p>
      </div>
      <div className="react-app-card__items">
        {categories.map((category) => (
          <div className="react-app-card__item" key={category}>
            <h3 className="react-app-card__item-title">{category}</h3>
            <ul className="react-app-card__item-list">
              {data.map(({ id, name, firstSeenDate, lastSeenDate, categories }) => {
                if (!categories.includes(category)) return;
                return (
                  <li key={id}>
                    <p>
                      {name}
                      <span>({formatDate(firstSeenDate, lastSeenDate)})</span>
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
