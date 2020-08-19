import React, { useState } from 'react';
import bg from '../../assets/jay-manTREE.jpg';

const Background = () => {
  const [loading, setLoading] = useState(false);

  return loading ? <div className="background" /> : <div className="not-background" />;
};

export default Background;
