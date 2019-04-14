import React from 'react';

function Square({ value, onClick: clickHandler }) {
  return (
    <button type="button" onClick={clickHandler} className="box">
      {value}
    </button>
  );
}

export default Square;