import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import { useState } from 'react';
import React from 'react';
import './Home.css';

export default function Home() {
  const [top, setTop] = useState('0');
  const [mid, setMid] = useState('0');
  const [bot, setBot] = useState('0');

  return (
    <main>
      <Editor top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} />

      <Preview top={top} mid={mid} bot={bot} />
    </main>
  );
}
