import React, { useRef, useEffect, useState } from 'react';
import './Game.css'; // Import the CSS file

const Game = () => {
  const canvasRef = useRef(null);
  const [playerY, setPlayerY] = useState(570); // Initial position of the player
  const [velocity, setVelocity] = useState(0); // Initial velocity of the player
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const gravity = 0.5; // Gravity effect
    const jumpPower = -10; // Initial jump velocity

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'blue';
      ctx.fillRect(50, playerY, 30, 30);

      // Update velocity and position
      if (isJumping) {
        setVelocity(prev => prev + gravity); // Apply gravity
        setPlayerY(prevY => Math.min(570, prevY + velocity));
        
        // Stop jump when player lands
        if (playerY === 570) {
          setVelocity(0); // Stop downward movement when hitting the ground
          setIsJumping(false); // Reset jumping state
        }
      } else {
        // Apply gravity if not jumping
        setVelocity(prev => prev + gravity);
        setPlayerY(prevY => Math.min(570, prevY + velocity));
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleKeyDown = (event) => {
      if (event.code === 'Space' && playerY === 570) {
        setVelocity(jumpPower); // Set initial jump velocity
        setIsJumping(true); // Trigger jump
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isJumping, playerY, velocity]);

  return (
    <div className="game-container">
      <canvas ref={canvasRef} width={800} height={600}></canvas>
    </div>
  );
};

export default Game;
