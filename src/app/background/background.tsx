import React, { useState } from 'react';
import bg from '../../assets/jay-manTREE.jpg';
import './background.css';

const Background = () => {
  const [loading, setLoading] = useState(true);
  const imgStyle = {
    display: loading ? 'none' : 'block',
    minHeight: window.screen.height,
    minWidth: window.screen.width,
  };

  return (
    <div className="bg">
      <img className="bg fade-in" style={{ ...imgStyle }} src={bg} onLoad={() => setLoading(false)} alt={''} />
    </div>
  );
};

export default Background;
