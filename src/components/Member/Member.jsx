import React from 'react';
import './Member.css';
import user_frame from '../../assets/user-frame.svg';
import member_img from '../../assets/member_img.png';

const Member = ({player}) => {
  return (
    <div className='member'>
      <div className='member-img'>
        <img className='frame' src={user_frame} alt="" />
        <div className='image-container'>
          <img className='image' src={member_img} alt="" />
        </div>
      </div>

      <div className='member-details'>
        <h2>{player.name}</h2>
        <p>post</p>
        <p style={{ color: '#17A1FA' }}>webmail</p>
      </div>
    </div>
  );
}

export default Member;
