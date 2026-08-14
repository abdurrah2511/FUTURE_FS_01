import SceneCanvas from '../../../components/three/SceneCanvas/SceneCanvas';
import FloatingOrb from '../../../components/three/FloatingOrb/FloatingOrb';
import FloatingShape from '../../../components/three/FloatingShape/FloatingShape';

function HeroScene(){
  return(
    <div className="hero-scene">
      <SceneCanvas>

        <FloatingOrb
          position={[0,0,0]}
          scale={1.25}
        />

        <FloatingShape
          position={[-1.6,1,.2]}
          rotation={[.4,.2,0]}
          scale={.45}
        />

        <FloatingShape
          position={[1.7,-1,.5]}
          rotation={[.2,.5,.2]}
          scale={.35}
        />

      </SceneCanvas>
    </div>
  );
}

export default HeroScene;