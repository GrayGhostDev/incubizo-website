"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

interface HexagonProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  rotationSpeed?: number;
}

function Hexagon({ position, color, scale = 1, rotationSpeed = 0 }: HexagonProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a hexagon shape
  const shape = new THREE.Shape();
  const sides = 6;
  const radius = 1;
  
  for (let i = 0; i < sides; i++) {
    const angle = (i * Math.PI * 2) / sides;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  
  shape.closePath();
  
  // Slight rotation for hexagon alignment
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.PI / 2;
    }
  }, []);
  
  // Apply rotation if specified
  useFrame(() => {
    if (meshRef.current && rotationSpeed) {
      meshRef.current.rotation.z += rotationSpeed;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      <extrudeGeometry 
        args={[
          shape, 
          { 
            depth: 0.2, 
            bevelEnabled: false 
          }
        ]} 
      />
      <meshStandardMaterial 
        color={color} 
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
}

interface LogoProps {
  size?: number;
  isInteractive?: boolean;
}

export default function Logo3D({ size = 100, isInteractive = true }: LogoProps) {
  // Hexagon positions and colors to match the logo
  const hexagons = [
    { position: [0, 0, 0], color: "#FFDD00", scale: 1 },         // Center - Bright yellow
    { position: [1.75, 0, 0], color: "#FFDD00", scale: 1 },      // Right - Bright yellow
    { position: [0.875, 1.5, 0], color: "#FFDD00", scale: 1 },   // Top right - Bright yellow
    { position: [-0.875, 1.5, 0], color: "#FFDD00", scale: 1 },  // Top left - Bright yellow
    { position: [-1.75, 0, 0], color: "#FFDD00", scale: 1 },     // Left - Bright yellow
    { position: [-0.875, -1.5, 0], color: "#FFDD00", scale: 1 }, // Bottom left - Bright yellow
    { position: [0.875, -1.5, 0], color: "#000000", scale: 1 },  // Bottom right - Black
  ];
  
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <group position={[0, 0, 0]}>
          {hexagons.map((hex, index) => (
            <Float 
              key={index}
              speed={1} 
              rotationIntensity={0.1} 
              floatIntensity={0.1}
              enabled={isInteractive}
            >
              <Hexagon 
                position={hex.position as [number, number, number]} 
                color={hex.color} 
                scale={hex.scale}
                rotationSpeed={isInteractive ? 0.001 : 0}
              />
            </Float>
          ))}
        </group>
        {isInteractive && (
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        )}
      </Canvas>
    </div>
  );
} 