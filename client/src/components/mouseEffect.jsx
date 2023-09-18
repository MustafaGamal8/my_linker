import React, { useState, useEffect } from 'react';

function MouseEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track cursor position
  const trackCursorPosition = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', trackCursorPosition);
    return () => {
      document.removeEventListener('mousemove', trackCursorPosition);
    };
  }, []);



  const style = {
    position: "fixed",
    width: "25px",
    height: "25px",
    border: "2px solid #007bff",
    borderRadius: "50%",
    pointerEvents: "none", 
    transform: "translate(-50%, -50%)",
    zIndex: "100" ,
    left: cursorPosition.x,
    top: cursorPosition.y
  };

  return (
    <div
      style={style}
    ></div>
  );
}

export default MouseEffect;
