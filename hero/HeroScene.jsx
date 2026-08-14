import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  Float,
  MeshDistortMaterial,
  Sparkles
} from '@react-three/drei';
import { useRef } from 'react';

function MainObject(){
  const meshRef=useRef();
  const {viewport}=useThree();

  useFrame((state)=>{
    if(!meshRef.current)return;

    const mouseX=state.pointer.x;
    const mouseY=state.pointer.y;

    meshRef.current.rotation.x+=(
      mouseY*.35-meshRef.current.rotation.x
    )*.03;

    meshRef.current.rotation.y+=(
      mouseX*.5-meshRef.current.rotation.y
    )*.03;
  });

  return(
    <Float
      speed={2}
      rotationIntensity={.6}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.7,5]}/>
        <MeshDistortMaterial
          color="#8B5CF6"
          roughness={.15}
          metalness={.25}
          distort={.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingShape({position,size,color,rotationSpeed=.5}){
  const ref=useRef();

  useFrame(()=>{
    if(ref.current){
      ref.current.rotation.x+=.003*rotationSpeed;
      ref.current.rotation.y+=.005*rotationSpeed;
    }
  });

  return(
    <Float
      speed={1.5}
      rotationIntensity={.4}
      floatIntensity={1}
    >
      <mesh
        ref={ref}
        position={position}
        scale={size}
      >
        <torusGeometry args={[.5,.12,24,48]}/>
        <meshStandardMaterial
          color={color}
          roughness={.25}
          metalness={.5}
        />
      </mesh>
    </Float>
  );
}

function HeroScene(){
  const pixelRatio=Math.min(window.devicePixelRatio,1.5);
  
  return(
    <div className="hero-scene">

      <Canvas
        camera={{
          position:[0,0,6],
          fov:45
        }}
        dpr={[1,window.devicePixelRatio>1?1.5:1]}
        gl={{
          antialias:true,
          alpha:true
        }}
      >

        <ambientLight intensity={1.5}/>

        <directionalLight
          position={[4,5,6]}
          intensity={3}
        />

        <pointLight
          position={[-4,-2,3]}
          intensity={4}
          color="#EC4899"
        />

        <pointLight
          position={[4,2,2]}
          intensity={3}
          color="#06B6D4"
        />

        <Environment preset="studio"/>

        <MainObject/>

        <FloatingShape
          position={[-2.3,1.5,0]}
          size={.65}
          color="#EC4899"
          rotationSpeed={.8}
        />

        <FloatingShape
          position={[2.3,-1.3,-.5]}
          size={.45}
          color="#06B6D4"
          rotationSpeed={.6}
        />

        <Sparkles
          count={80}
          scale={[7,7,5]}
          size={2}
          speed={.25}
        />

      </Canvas>

    </div>
  );
}

export default HeroScene;