import React from 'react';

const Buttons = ({ printNoun, printAdjective }) => {
  //console.log(printNoun);
  return (
    <div className="button">
      <button className="noun" onClick={printNoun}>
        Print Noun
      </button>
      <button className="adjective" onClick={printAdjective}>
        Print Adjective
      </button>
    </div>
  );
};

export default Buttons;
