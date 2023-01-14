import React from 'react';

export default function Count({ topCount, midCount, botCount }) {
  return (
    <div>
      <p>You have changed your portrait {topCount} times </p>
      <p>You have changed your armor {midCount} times</p>
      <p>You have changed your armor {botCount} times</p>
    </div>
  );
}
