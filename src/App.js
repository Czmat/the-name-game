import React, { useState } from 'react';
import faker from 'faker';
import Buttons from './components/Buttons';
import Words from './components/Words';
import Stats from './components/Stats';

import './App.css';
const generateWord = type => {
  const method =
    type === 'noun' ? faker.company.bsNoun : faker.company.bsAdjective;
  return {
    type,
    text: method(),
  };
};

//console.log(generateWord('adjective'));
function App() {
  const [words, setWords] = useState([]);

  const printNoun = type => {
    const noun = [...words, generateWord('noun')];
    setWords(noun);
  };

  const printAdjective = type => {
    const adjective = [...words, generateWord('adjective')];
    setWords(adjective);
  };

  return (
    <div className="App">
      <h1>The Word Game ({words.length})</h1>
      <Stats words={words} />
      <Buttons printNoun={printNoun} printAdjective={printAdjective} />
      <Words words={words} />
      <Buttons printNoun={printNoun} printAdjective={printAdjective} />
    </div>
  );
}

export default App;
