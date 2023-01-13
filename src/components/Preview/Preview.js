import React from 'react';

import './Preview.css';

export default function Preview({ top }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/top/${top}.jpg`} />
    </div>
  );
}
