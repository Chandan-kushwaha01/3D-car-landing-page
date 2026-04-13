import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react'
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { Monkey } from './models/Monkey';
import { Hyundai_SUV } from './models/2024_hyundai';

const ModelViewer = () => {

  const [webglSupported, setWebglSupported] = useState(true);


  // Device support check for WebGL
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) return <div>
    Webgl is not supported in your browser. Please use a compatible browser to view the 3D model.
  </div>

  return (
    <Canvas
      camera={{ position: [0.1, 0.1, 0.2], fov: 20 }}
      gl={{
        antialias: true,
        preserveDrawingBuffer: 'high-performance',
      }}
      style={{ width: '100%', height: '100%' }}
      onCreated={({ gl }) => {
        gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          alert("WebGL context lost. Please reload the page.");
        })
      }}
    >

      <Suspense fallback={null}>
        <Stage environment={'city'} intensity={0.6}>
          {/* PUT ANY MODEL ON STAGE */}
          {/* <Monkey /> */}
          <Hyundai_SUV />
        </Stage>

        {/* Lighting */}
        <Environment preset="city" />

        {/* CONTROLLER: Scene UX */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
          minDistance={6}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />

      </Suspense>

    </Canvas>
  )
}

export default ModelViewer
