import React from 'react';
import './Editor.css';
import Count from '../Count/Count';
import { useState } from 'react';

export default function Editor({ top, setTop, mid, setMid, bot, setBot, hand, setHand }) {
  const [topCount, setTopcount] = useState(0);
  const [midCount, setMidcount] = useState(0);
  const [botCount, setBotcount] = useState(0);
  const [handCount, setHandcount] = useState(0);
  const [catchPhrase, setCatchphrase] = useState([]);
  const [textInput, setTextinput] = useState('');

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
    setBotcount((currentState) => {
      return currentState + 1;
    });
  };
  const handHandler = (e) => {
    setHand(e.target.value);
    setHandcount((currentState) => {
      return currentState + 1;
    });
  };

  const catchphraseHandler = () => {
    setCatchphrase((currentState) => [...currentState, textInput]);
    setTextinput('');
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
      <br></br>
      <label>Weapon</label>
      <select value={hand} onChange={handHandler}>
        <option value="1">Bow</option>
        <option value="3">Flail</option>
        <option value="4">Gunblade</option>
        <option value="5">Pistol</option>
        <option value="9">Sword</option>
        <option value="7">Katana</option>
        <option value="8">Dagger</option>
      </select>
      <br></br>
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
        <Count topCount={topCount} midCount={midCount} botCount={botCount} handCount={handCount} />
      </div>
      <div>
        <label>Catchphrase</label>
        <input type="text" value={textInput} onChange={(e) => setTextinput(e.target.value)}></input>
        <button onClick={catchphraseHandler}>Submit</button>
        <ul>
          {catchPhrase.map((e) => {
            return <li key={e}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
