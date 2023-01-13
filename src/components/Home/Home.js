import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import { useState } from 'react';

import './Home.css';

export default function Home() {
  const [top, setTop] = useState('1');

  return (
    <main>
      <Editor top={top} setTop={setTop} />

      <Preview />
    </main>
  );
}
