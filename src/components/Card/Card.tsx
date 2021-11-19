import React from 'react';
import './Card.scss';
import { IData } from '../../types';
interface Props {
  heading: string;
  latestUpdate: string;
  total: number;
  data: IData[];
}

function Card({ heading, latestUpdate, total, data }: Props) {
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
        {data.map(({ id, name }) => (
          <div className="react-app-card__item" key={id}>
            <h3 className="react-app-card__item-title">{name}</h3>
            <ul className="react-app-card__item-list">
              <li>
                <p>
                  sdk 1 <span>date</span>
                </p>
              </li>
              <li>
                <p>
                  sdk 1 <span>date</span>
                </p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
