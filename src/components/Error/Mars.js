/* eslint-disable import/no-unresolved */
import React from 'react';
import { useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three';
import MarsTexture from 'src/assets/textures/8k_mars.jpg';

export default function Earth() {
  const [MarsMap] = useLoader(
    TextureLoader,
    [MarsTexture],
  );

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[2.7, 300, 300]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={MarsMap}
        />
      </mesh>
    </>
  );
}
