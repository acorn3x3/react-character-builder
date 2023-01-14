import React from 'react';
import './Editor.css';
import Count from '../Count/Count';
import { useState } from 'react';

export default function Editor({ top, setTop, mid, setMid, bot, setBot }) {
  const [topCount, setTopcount] = useState(0);
  const [midCount, setMidcount] = useState(0);

  const topHandler = (e) => {
    setTop(e.target.value);
    setTopcount((currentState) => {
      return currentState + 1;
    });
  };
  const midHandler = (e) => {
    setMid(e.target.value);
    setMidcount((currentState) => {
      return currentState + 1;
    });
  };
  const botHandler = (e) => {
    setBot(e.target.value);
  };

  return (
    <div>
      <div>
        <h2>Design Your Character</h2>
        <label>Head</label>
        <select value={top} onChange={topHandler}>
          <option value="1">Bella</option>
          <option value="2">Robo</option>
          <option value="3">Cloud</option>
          <option value="4">Orlo</option>
          <option value="5">Mustadio</option>
          <option value="6">Alma</option>
          <option value="7">Ramza</option>
          <option value="8">Becs</option>
          <option value="9">Linda</option>
          <option value="0">Agatha</option>
        </select>
      </div>

      <label>Body Armor</label>
      <select value={mid} onChange={midHandler}>
        <option value="1">Leather</option>
        <option value="2">Padded</option>
        <option value="3">Plate</option>
        <option value="4">Greater Leather</option>
        <option value="5">Greater Padded</option>
        <option value="6">Greater Plate</option>
        <option value="7">Dragon Leather</option>
        <option value="8">Dragon Padded</option>
        <option value="9">Dragon Plate</option>
        <option value="0">Grand Dragon Almighty</option>
      </select>

      <label>Boots</label>
      <select value={bot} onChange={botHandler}>
        <option value="1">Boots</option>
        <option value="2">Reinforced Boots</option>
        <option value="3">Steel</option>
        <option value="4">Plate</option>
        <option value="5">Swift</option>
        <option value="6">Ninja</option>
        <option value="7">Excaliboot</option>
      </select>
      <div>
        <Count topCount={topCount} midCount={midCount} />
        
      </div>
    </div>
  );
}
