import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function FloatingOrb({
  position=[0,0,0],
  scale=1
}){
  const meshRef=useRef();

  useFrame((state)=>{
    const time=state.clock.getElapsedTime();

    if(meshRef.current){
      meshRef.current.rotation.x=time*.2;
      meshRef.current.rotation.y=time*.25;
      meshRef.current.position.y=
        position[1]+Math.sin(time)*.12;
    }
  });

  return(
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
    >
      <sphereGeometry
        args={[1,64,64]}
      />

      <meshPhysicalMaterial
        roughness={.15}
        metalness={.1}
        transmission={.2}
        thickness={1}
      />
    </mesh>
  );
}

export default FloatingOrb;