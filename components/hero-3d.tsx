"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as THREE from "three";
import Logo3D from "@/components/logo-3d";

// Hexagon grid component for the background
interface HexagonGridProps {
  count?: number;
  size?: number;
  spacing?: number;
  opacity?: number;
}

function HexagonGrid({ count = 50, size = 0.5, spacing = 2, opacity = 0.1 }: HexagonGridProps) {
  const group = useRef<THREE.Group>(null);
  
  // Rotate the entire grid slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.z += 0.0005;
    }
  });
  
  // Generate random positions for hexagons
  const hexagons = [];
  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * spacing * 10;
    const y = (Math.random() - 0.5) * spacing * 10;
    const z = (Math.random() - 0.5) * spacing * 2;
    
    hexagons.push({
      position: [x, y, z] as [number, number, number],
      scale: Math.random() * size + size / 2,
      color: Math.random() > 0.8 ? "#FFDD00" : "#000000"  // 80% black, 20% yellow
    });
  }
  
  return (
    <group ref={group}>
      {hexagons.map((hex, index) => (
        <mesh key={index} position={hex.position} scale={[hex.scale, hex.scale, hex.scale]}>
          <cylinderGeometry args={[1, 1, 0.1, 6, 1]} />
          <meshStandardMaterial 
            color={hex.color} 
            transparent={true} 
            opacity={opacity}
            roughness={0.7}
            metalness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-screen w-full">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          {/* Background hexagon grid */}
          <HexagonGrid />
          
          {/* Main logo in the center */}
          <group position={[0, 0, 2]} scale={[2, 2, 2]}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
              {/* This is just a placeholder - the actual Logo3D component is rendered in the overlay */}
              <mesh visible={false}>
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial color="white" />
              </mesh>
            </Float>
          </group>
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Logo3D size={300} isInteractive={true} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Innovate. Incubate. Accelerate.
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Incubizo helps startups and businesses grow through innovation, mentorship, and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 