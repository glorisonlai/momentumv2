import React, { useState } from 'react';
import bg from '../../assets/jay-manTREE.jpg';
import './background.css';

const Background = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg" style={loading ? {} : { display: 'none' }}>
      <img className="bg cover" src={bg} onLoad={() => setLoading(false)} alt={''} />
    </div>
  );
};

export default Background;
