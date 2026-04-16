import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";

/* eslint-disable react/no-unknown-property */
const AnimatedSphere = () => {
  return (
    /* Float adds gentle movement and helps the object feel contained */
    <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron args={[1, 15]} scale={1.1}>
        <MeshDistortMaterial color="#0ea5e9" distort={0.5} speed={2} />
      </Icosahedron>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <Canvas
      style={{ position: "absolute", width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 3.5], fov: 75 }} // Moved camera back slightly
      className="cursor-grab active:cursor-grabbing"
    >
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={Math.PI * 2} decay={0} />
      <pointLight position={[-10, -10, -10]} intensity={Math.PI} color="#06b6d4" decay={0} />

      <AnimatedSphere />

      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
    </Canvas>
  );
};

export default HeroCanvas;
