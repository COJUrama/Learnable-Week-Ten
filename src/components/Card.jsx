/* eslint-disable react/prop-types */

import './Card.css';

function Card({ title, img, quantity, percentage, duration }) {
  return (
    <div className="statcard">
      <div className="statcard__name">
        <p>{title}</p>
        <img src={img} alt="" />
      </div>
      <p className="statcard__figure">{quantity}</p>
      <div className="statcard__stat">
        <div
          className="statcard__rise"
          data-sign={percentage > 0 ? 'plus' : 'minus'}
        >
          {percentage > 0 ? (
            <img src="/images/rise.svg" alt="" />
          ) : (
            <img src="/images/fall.svg" alt="" />
          )}
          {Math.abs(percentage)}
        </div>
        <p className="statcard__duration">over the past {duration}</p>
      </div>
    </div>
  );
}

export default Card;
