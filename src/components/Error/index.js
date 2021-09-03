import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { BiHome } from 'react-icons/bi';
import Mars from './Mars';

export default function Error() {
  return (
    <div className="error">
      <Canvas className="earth-model">
        <Suspense fallback={null}>
          <Mars />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
      <div className="error__content">
        <h2>404</h2>
        <p>Cette page n'a pas été trouvée!</p>
        <button type="button" className="button purple">
          <span className="icon">
            <BiHome />
          </span>
          <span>
            Retourner à l'accueil
          </span>
        </button>
      </div>
    </div>
  );
}
