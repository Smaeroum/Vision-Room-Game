// @ts-nocheck
import React, { useState } from 'react';
import { Users, DollarSign, Target, Clock } from 'lucide-react';

const VisionRoomGame = () => {
  const [gameState, setGameState] = useState({
    money: 1000,
    influence: 500,
    loyalty: 300,
    visionScore: 0
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>Vision Room Game</h1>
      <p><DollarSign size={18} /> Money: {gameState.money}</p>
      <p><Users size={18} /> Influence: {gameState.influence}</p>
      <p><Target size={18} /> Loyalty: {gameState.loyalty}</p>
      <p><Clock size={18} /> Vision Score: {gameState.visionScore}</p>
    </div>
  );
};

export default VisionRoomGame;
