import React from 'react';

export default function Count({ topCount, midCount, botCount, handCount }) {
  return (
    <div>
      <p>You have changed your portrait {topCount} times </p>
      <p>You have changed your weapon {handCount} times</p>
      <p>You have changed your armor {midCount} times</p>
      <p>You have changed your boots {botCount} times</p>
    </div>
  );
}
