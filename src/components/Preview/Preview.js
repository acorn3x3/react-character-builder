import React from 'react';

import './Preview.css';

export default function Preview({ top, mid, bot, hand }) {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/top/${top}.jpg`} />
      <br></br>
      <img src={`${process.env.PUBLIC_URL}/hand/${hand}.jpg`} />
      <br></br>
      <img src={`${process.env.PUBLIC_URL}/mid/${mid}.jpg`} />
      <br></br>
      <img src={`${process.env.PUBLIC_URL}/bot/${bot}.jpg`} />
    </div>
  );
}
