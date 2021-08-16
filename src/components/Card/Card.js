import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='card'>
      <div className='card__bg'></div>
      <div className='card__content'>
        <div className='card__user-logo'></div>
        <div className='card__user-info'>
          <div className='card__tweets'>
            777
            <br />
            tweets
          </div>
          <div className='card__followers'>
            100,500
            <br />
            followers
          </div>
        </div>
        <button className='card__action-button'>Follow</button>
      </div>
    </div>
  );
}

export default Card;
