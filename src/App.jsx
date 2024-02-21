import React, { useState, useRef } from 'react';
import './styles.css';
import Header from './components/Header';
import FrontMessage from './components/FrontMessage';
import InnerMessage from './components/InnerMessage';

export default function App() {
  const [cardOpen, setCardOpen] = useState(false);
  const cardRef = useRef(null);
  const initialMouseX = useRef(null);

  const handleMouseDown = (e) => {
    initialMouseX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (initialMouseX.current !== null) {
      const deltaX = e.clientX - initialMouseX.current;
      if (deltaX > -50) {
        setCardOpen(false); // Swipe right (close the card)
      } else if (deltaX < -50) {
        setCardOpen(true); // Swipe left (open the card)
      }
    }
  };

  const handleMouseUp = () => {
    initialMouseX.current = null;
  };

  return (
    <div className='wrapper'>
      <Header />
      <div className='card'>
        <InnerMessage />

        <div
          ref={cardRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`cover ${cardOpen ? 'open' : ''}`}
        >
          <FrontMessage />
          <img src='./images/forLoop.png' alt='Card Image' />
        </div>
      </div>
    </div>
  );
}
