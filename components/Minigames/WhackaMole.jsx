import { useState, useEffect } from 'react';

function WhackAMole() {
  const [score, setScore] = useState(0);
  const [moles, setMoles] = useState([]);

  useEffect(() => {
    createGameBoard();
  }, []);

  function createGameBoard() {
    const molesArray = [];
    for (let i = 0; i < 9; i++) {
      molesArray.push({
        id: i,
        up: false
      });
    }
    setMoles(molesArray);
  }

  function moveMole() {
    const randomIndex = Math.floor(Math.random() * 9);
    const updatedMoles = [...moles];
    updatedMoles.forEach(mole => mole.up = false);
    updatedMoles[randomIndex].up = true;
    setMoles(updatedMoles);
    setTimeout(moveMole, 500);
  }

  function whackMole(id) {
    const moleIndex = moles.findIndex(mole => mole.id === id);
    if (moles[moleIndex].up) {
      const updatedMoles = [...moles];
      updatedMoles[moleIndex].up = false;
      setMoles(updatedMoles);
      setScore(score + 1);
    }
  }

  function endGame() {
    setMoles(moles.map(mole => ({ ...mole, up: false })));
    alert(`Game over! Your score is ${score}`);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">Whack-a-Mole</h1>
      <p className="text-lg font-bold mb-8 text-center">Score: <span id="score">{score}</span></p>
      <div className="flex flex-wrap w-72 mb-8">
        <button onClick={() => { setScore(0); createGameBoard(); setTimeout(endGame, 10000); setTimeout(moveMole, 500); }} className="px-4 py-2 text-lg font-bold text-white uppercase bg-green-500 rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-600">Start Game</button>
      </div>
      <div className="flex flex-wrap w-72">
        {moles.map(mole => (
          <div key={mole.id} onClick={() => whackMole(mole.id)} className={`w-16 h-16 rounded-full ${mole.up ? 'bg-yellow-500' : 'bg-yellow-300'} m-2 transition-transform duration-300 ease-in-out transform hover:scale-105`} />
        ))}
      </div>
    </div>
  );
}

export default WhackAMole;
