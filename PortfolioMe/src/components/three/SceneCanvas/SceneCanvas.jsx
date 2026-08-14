import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';

function SceneCanvas({children,controls=false}){
  return(
    <Canvas
      camera={{
        position:[0,0,6],
        fov:45
      }}
      dpr={[1,2]}
      gl={{
        antialias:true,
        alpha:true
      }}
    >
      <ambientLight intensity={1.2}/>
      <directionalLight
        position={[3,4,5]}
        intensity={2}
      />

      <Environment preset="studio"/>

      {children}

      {controls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
      )}
    </Canvas>
  );
}

export default SceneCanvas;