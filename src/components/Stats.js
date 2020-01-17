import React from 'react';
const Stats = ({ words }) => {
  // console.log('stats');
  return (
    <div>
      <p>
        You've generated{' '}
        <span className="noun">
          {
            words.filter(word => {
              if (word['type'] === 'noun') {
                //console.log(word.text);
                return word.text;
              }
            }).length
          }
        </span>{' '}
        noun(s) and{' '}
        <span className="adjective">
          {
            words.filter(word => {
              if (word['type'] !== 'noun') {
                //console.log(word.text);
                return word.text;
              }
            }).length
          }
        </span>{' '}
        adjectives!
      </p>
    </div>
  );
};

export default Stats;
