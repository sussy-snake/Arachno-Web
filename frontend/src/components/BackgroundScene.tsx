"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, useTexture } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    float ripple = sin(uv.y * 10.0 + uTime) * 0.02;
    uv.x += ripple;
    uv.y += sin(uv.x * 10.0 + uTime) * 0.02;
    
    vec4 texColor = texture2D(uTexture, uv);
    gl_FragColor = texColor;
  }
`;

function ShaderPlane() {
  const texture = useTexture("/Gemini_Generated_Image_wragklwragklwrag.png");
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const scaleX = viewport.width * 1.5;
  const scaleY = viewport.height * 1.5;

  return (
    <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
      <mesh scale={[scaleX, scaleY, 1]}>
        <planeGeometry args={[1, 1, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTexture: { value: texture },
            uTime: { value: 0 }
          }}
        />
      </mesh>
    </Float>
  );
}

function DustParticles() {
  const count = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 + 5; 
    }
    return pos;
  }, [count]);

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3);
    const green = new THREE.Color("#00ff99");
    const blue = new THREE.Color("#0099ff");
    for (let i = 0; i < count; i++) {
      const mixed = Math.random() > 0.5 ? green : blue;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return col;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }} gl={{ preserveDrawingBuffer: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <ShaderPlane />
        <DustParticles />
      </Canvas>
    </div>
  );
}
