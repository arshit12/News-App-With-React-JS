

import React from 'react';
import '../App.css';

export default function ThemeChanger({ setDarkMode, isDarkMode }) {
  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`theme-changer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className=" buttonofdark"onClick={handleToggle}>{isDarkMode ? 'Light' : 'Dark'}</button>
    </div>
  );
}
