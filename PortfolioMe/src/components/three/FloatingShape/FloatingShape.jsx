import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function FloatingShape({
  position=[0,0,0],
  rotation=[0,0,0],
  scale=1
}){
  const meshRef=useRef();

  useFrame((state)=>{
    const time=state.clock.getElapsedTime();

    if(meshRef.current){
      meshRef.current.rotation.x=
        rotation[0]+time*.15;

      meshRef.current.rotation.y=
        rotation[1]+time*.2;

      meshRef.current.position.y=
        position[1]+Math.sin(time*1.2)*.15;
    }
  });

  return(
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <torusKnotGeometry
        args={[.65,.18,128,32]}
      />

      <meshPhysicalMaterial
        roughness={.2}
        metalness={.15}
        transmission={.15}
        thickness={.8}
      />
    </mesh>
  );
}

export default FloatingShape;