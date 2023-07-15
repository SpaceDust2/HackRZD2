'use client'
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { FlyControls, useGLTF } from "@react-three/drei";
import { Vector3, Euler } from "three";

function TrainModel() {
  const { scene } = useGLTF("/lastochka.glb");
  return <primitive object={scene} scale={10} />;
}

export default function TrainScene() {
  const controlsRef = useRef();

  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <TrainModel />
      <FlyControls
        ref={controlsRef}
        movementSpeed={1}
        dragToLook={false}
        rollSpeed={0.1}
        dragRotate={true}
        dragToPan={true}
        onMove={(e) => {
          const { movementX, movementY } = e;
          const rotation = new Euler().setFromQuaternion(controlsRef.current.camera.quaternion, 'YXZ');

          rotation.y -= movementX * 0.002;
          rotation.x -= movementY * 0.002;
          rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.x));

          controlsRef.current.camera.quaternion.setFromEuler(rotation);
        }}
      />
    </Canvas>
  );
}
