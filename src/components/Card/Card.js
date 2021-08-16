import React, { useState } from 'react';
import './Card.css';

function Card() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(100500);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    isFollowing ? setFollowers(followers - 1) : setFollowers(followers + 1);
  };

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
            {followers.toLocaleString()} <br />
            followers
          </div>
        </div>
        <button
          data-testid='action-button'
          className={`card__action-button ${isFollowing ? 'following' : ''}`}
          onClick={handleFollow}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
}

export default Card;
