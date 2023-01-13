import React from 'react';

import './Preview.css';

export default function Preview({ top, mid, bot }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/top/${top}.jpg`} />
      <img src={`${process.env.PUBLIC_URL}/mid/${mid}.jpg`} />
      <img src={`${process.env.PUBLIC_URL}/bot/${bot}.jpg`} />
    </div>
  );
}
