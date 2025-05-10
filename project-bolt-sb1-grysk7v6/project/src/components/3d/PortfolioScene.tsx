import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  PerspectiveCamera, 
  Environment, 
  Float, 
  OrbitControls, 
  useTexture,
  Text,
  Box,
  Sphere
} from '@react-three/drei';
import * as THREE from 'three';

interface PortfolioSceneProps {
  activeSection: string;
}

const SceneContent = ({ activeSection }: { activeSection: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Camera positions for each section
  const cameraPositions = {
    hero: [0, 2, 10],
    experience: [-5, 2, 10],
    projects: [5, 3, 8],
    skills: [3, 1, 5],
    certifications: [-3, 0, 8],
    education: [0, -2, 10],
    contact: [0, 0, 6]
  };
  
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle floating animation
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    
    // Smooth camera transitions based on active section
    const targetPosition = cameraPositions[activeSection as keyof typeof cameraPositions] || cameraPositions.hero;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetPosition[0], 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetPosition[1], 0.05);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetPosition[2], 0.05);
    
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Experience Atrium */}
      <group position={[-6, 2, -2]} rotation={[0, Math.PI / 4, 0]}>
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#e0eefe"
              metalness={0.2}
              roughness={0.3} 
              transparent
              opacity={0.7}
            />
          </Box>
          <Text
            position={[0, 0, 0.2]}
            fontSize={0.3}
            color="#0071c5"
            anchorX="center"
            anchorY="middle"
          >
            EXPERIENCE
          </Text>
        </Float>
      </group>
      
      {/* Project Gallery */}
      <group position={[6, 3, -1]} rotation={[0, -Math.PI / 4, 0]}>
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#b9e6fe"
              metalness={0.3}
              roughness={0.3} 
              transparent
              opacity={0.7}
            />
          </Box>
          <Text
            position={[0, 0, 0.2]}
            fontSize={0.3}
            color="#0284c7"
            anchorX="center"
            anchorY="middle"
          >
            PROJECTS
          </Text>
        </Float>
      </group>
      
      {/* Skills Pavilion */}
      <group position={[3, -1, -3]} rotation={[0, -Math.PI / 6, 0]}>
        <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.4}>
          <Sphere args={[1.2, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#f3f4f6"
              metalness={0.1}
              roughness={0.4} 
              transparent
              opacity={0.6}
            />
          </Sphere>
          <Text
            position={[0, 0, 1.3]}
            fontSize={0.3}
            color="#374151"
            anchorX="center"
            anchorY="middle"
          >
            SKILLS
          </Text>
        </Float>
      </group>
      
      {/* Certifications Wall */}
      <group position={[-3, -2, -2]} rotation={[0, Math.PI / 6, 0]}>
        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.3}>
          <Box args={[2.5, 1.5, 0.1]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#ffffff"
              metalness={0.3}
              roughness={0.2} 
              transparent
              opacity={0.8}
            />
          </Box>
          <Text
            position={[0, 0, 0.2]}
            fontSize={0.25}
            color="#0c4a6e"
            anchorX="center"
            anchorY="middle"
          >
            CERTIFICATIONS
          </Text>
        </Float>
      </group>
      
      {/* Education Tower */}
      <group position={[0, -4, -4]} rotation={[0, 0, 0]}>
        <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
          <Box args={[1, 4, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial 
              color="#e5e7eb"
              metalness={0.2}
              roughness={0.3} 
              transparent
              opacity={0.7}
            />
          </Box>
          <Text
            position={[0, 2.1, 0.6]}
            fontSize={0.25}
            color="#1f2937"
            anchorX="center"
            anchorY="middle"
            rotation={[0, 0, Math.PI / 2]}
          >
            EDUCATION
          </Text>
        </Float>
      </group>
      
      {/* Central sphere */}
      <group position={[0, 0, 0]}>
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Sphere args={[0.8, 32, 32]}>
            <meshStandardMaterial 
              color="#0c8ee7"
              metalness={0.5}
              roughness={0.2} 
              emissive="#36a6f5"
              emissiveIntensity={0.2}
            />
          </Sphere>
        </Float>
      </group>
      
      {/* Ambient particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Float 
          key={i}
          speed={Math.random() * 2 + 0.5}
          rotationIntensity={Math.random() * 0.5}
          floatIntensity={Math.random() * 0.5 + 0.5}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10
          ]}
        >
          <Box args={[0.1, 0.1, 0.1]}>
            <meshStandardMaterial 
              color={Math.random() > 0.5 ? "#b9ddfd" : "#f3f4f6"} 
              transparent
              opacity={Math.random() * 0.4 + 0.1}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
};

export const PortfolioScene: React.FC<PortfolioSceneProps> = ({ activeSection }) => {
  return (
    <Canvas dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <SceneContent activeSection={activeSection} />
      <Environment preset="city" />
    </Canvas>
  );
};