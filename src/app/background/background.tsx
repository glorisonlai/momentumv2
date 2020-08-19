import React, { useState } from 'react';
import bg from '../../assets/jay-manTREE.jpg';
import './background.css';

const Background = () => {
  const [loading, setLoading] = useState(false);

  return <img className="main-bg" src={bg} onLoad={() => setLoading(true)} />;
};

export default Background;
