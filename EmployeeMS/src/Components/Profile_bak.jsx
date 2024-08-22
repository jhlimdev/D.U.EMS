// Profile.js

import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name1] = useState('Jaehoon Lim');
  const [name2] = useState('Sehyeong Jo');
  const [name3] = useState('Jinsu Han');
  const [name4] = useState('Hyeonsu No');
  const [name5] = useState('Yangsu Jo');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`profile-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="profile-header">
        <img
          src="https://placekitten.com/200/200" 
          alt="프로필 이미지"
          className="profile-image"
        />
        <h1 className="profile-name">
          {name1}
        </h1>
        <button className="toggle-dark-mode" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
      </div>
      <p className="profile-bio">Fullstack/DB</p>
      </div>
    
    
  );
};

export default Profile;
