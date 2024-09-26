import React, { useState, useEffect } from 'react';
import { FaCannabis, FaShieldAlt } from 'react-icons/fa';
import { GiPoliceOfficerHead } from 'react-icons/gi';

const GRID_SIZE = 8;
const POLICE_COUNT = 10;

type Cell = {
  isPolice: boolean;
  isRevealed: boolean;
  neighborCount: number;
};

const WeedGame: React.FC = () => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    initializeGrid();
  }, []);

  const initializeGrid = () => {
    const newGrid: Cell[][] = Array(GRID_SIZE).fill(null).map(() =>
      Array(GRID_SIZE).fill(null).map(() => ({
        isPolice: false,
        isRevealed: false,
        neighborCount: 0,
      }))
    );

    let policePlaced = 0;
    while (policePlaced < POLICE_COUNT) {
      const x = Math.floor(Math.random() * GRID_SIZE);
      const y = Math.floor(Math.random() * GRID_SIZE);
      if (!newGrid[y][x].isPolice) {
        newGrid[y][x].isPolice = true;
        policePlaced++;
      }
    }

    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (!newGrid[y][x].isPolice) {
          newGrid[y][x].neighborCount = countNeighborPolice(newGrid, x, y);
        }
      }
    }

    setGrid(newGrid);
    setGameOver(false);
    setScore(0);
  };

  const countNeighborPolice = (grid: Cell[][], x: number, y: number) => {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && ny < GRID_SIZE && nx >= 0 && nx < GRID_SIZE && grid[ny][nx].isPolice) {
          count++;
        }
      }
    }
    return count;
  };

  const revealCell = (x: number, y: number) => {
    if (gameOver || grid[y][x].isRevealed) return;

    const newGrid = [...grid];
    newGrid[y][x].isRevealed = true;

    if (newGrid[y][x].isPolice) {
      setGameOver(true);
    } else {
      setScore(score + 1);
      if (newGrid[y][x].neighborCount === 0) {
        revealNeighbors(x, y, newGrid);
      }
    }

    setGrid(newGrid);
  };

  const revealNeighbors = (x: number, y: number, newGrid: Cell[][]) => {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny >= 0 && ny < GRID_SIZE && nx >= 0 && nx < GRID_SIZE && !newGrid[ny][nx].isRevealed) {
          newGrid[ny][nx].isRevealed = true;
          setScore(score => score + 1);
          if (newGrid[ny][nx].neighborCount === 0) {
            revealNeighbors(nx, ny, newGrid);
          }
        }
      }
    }
  };

  const renderCell = (cell: Cell, x: number, y: number) => {
    let content = null;
    let cellClass = 'w-12 h-12 border border-green-300 flex items-center justify-center cursor-pointer transition-all duration-300';

    if (cell.isRevealed) {
      if (cell.isPolice) {
        content = <GiPoliceOfficerHead className="text-blue-600 w-8 h-8" />;
        cellClass += ' bg-red-200';
      } else {
        const growthLevel = Math.min(cell.neighborCount, 4);
        content = <FaCannabis className={`text-green-${500 + growthLevel * 100} w-${4 + growthLevel} h-${4 + growthLevel}`} />;
        cellClass += ' bg-green-100';
      }
    } else {
      cellClass += ' bg-green-400 hover:bg-green-300';
      content = <FaShieldAlt className="text-green-700 w-6 h-6 opacity-50" />;
    }

    return (
      <div
        key={`${x}-${y}`}
        className={cellClass}
        onClick={() => revealCell(x, y)}
      >
        {content}
      </div>
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-green-50 p-6 rounded-xl shadow-lg">
      <div className="mb-4 flex justify-between items-center">
        <p className="text-2xl font-bold text-green-800">Skóre: {score}</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          onClick={initializeGrid}
        >
          Nová hra
        </button>
      </div>
      <div className="grid grid-cols-8 gap-1 bg-green-200 p-2 rounded-lg">
        {grid.map((row, y) => row.map((cell, x) => renderCell(cell, x, y)))}
      </div>
      {gameOver && (
        <div className="mt-4 text-xl font-bold text-red-600 text-center">
          Hra skončila! Našla tě policie.
        </div>
      )}
      <p className="mt-4 text-green-700 text-center">
        Klikej na políčka a pěstuj marihuanu, ale vyhni se policii!
      </p>
    </div>
  );
};

export default WeedGame;