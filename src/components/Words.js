import React from 'react';

const Words = ({ words }) => {
  console.log(words);
  return (
    <div className="word-container">
      <div>
        {words
          .filter(word => {
            if (word['type'] === 'noun') {
              //console.log(word.text);
              return word.text;
            }
          })
          .map(text => {
            return (
              <div className="noun" key={text.text}>
                {text.text} (noun)
              </div>
            );
          })}
      </div>
      <div>
        {words
          .filter(word => {
            if (word['type'] !== 'noun') {
              //console.log(word.text);
              return word.text;
            }
          })
          .map(text => {
            return (
              <div className="adjective" key={text.text}>
                {text.text} (adjective)
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Words;
