import React, { useState, useEffect } from 'react';
import '../game/Game.css'; // Ensure this file is created with the provided CSS

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const winner = calculateWinner(board);

  useEffect(() => {
    // Load scores from localStorage
    const savedScores = JSON.parse(localStorage.getItem('ticTacToeScores')) || { X: 0, O: 0 };
    setScores(savedScores);
  }, []);

  useEffect(() => {
    // Save scores to localStorage when they change
    localStorage.setItem('ticTacToeScores', JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    if (winner) {
      // Update score when a player wins
      setScores(prevScores => ({
        ...prevScores,
        [winner]: prevScores[winner] + 1
      }));
      // Delay board reset to show the winner
      setTimeout(() => handleRestart(), 1000);
    }
  }, [winner]);

  const handleClick = (index) => {
    if (board[index] || winner) return; // Ignore click if square is filled or game is won

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button onClick={handleRestart} className="restart-button">Restart Game</button>
      <div className="scores">
        <div>Score X: {scores.X}</div>
        <div>Score O: {scores.O}</div>
      </div>
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
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
};

export default TicTacToe;
