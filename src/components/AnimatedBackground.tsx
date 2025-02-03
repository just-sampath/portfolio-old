import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useSpring } from '@react-spring/web';

function StarField({ count = 3000 }) {
  const points = useRef<any>();
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 1.2 });

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 15;
      points.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8ab4f8"
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:to-primary/10" />
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
    </div>
  );
}
