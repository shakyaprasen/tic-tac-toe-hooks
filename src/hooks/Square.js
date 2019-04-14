import { useState } from 'react';


function useSquareHooks(squares, setSquares) {
  const [isXNext, setXNext] = useState(true);


  function getHeader() {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (isXNext ? 'X' : 'O');
    }
    return status;
  }

  function getValue() {
    return isXNext ? 'X' : '0';
  }

  function handleClick(i) {
    const newSquares = [...squares];
    newSquares[i] = getValue();
    setXNext(!isXNext);
    setSquares(newSquares);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return {
    handleClick,
    getHeader,
  };
}

export default useSquareHooks;