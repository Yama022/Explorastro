import React, { useContext } from 'react';
import useMousePosition from 'src/hooks/useMousePosition';
import { MouseContext } from 'src/context/mouse-context';

const DotRing = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`ring ${cursorType}`}
      />
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
};

export default DotRing;
