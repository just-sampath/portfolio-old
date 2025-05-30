import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useSpring } from '@react-spring/web';

function StarField({ count = 5000 }) {
  const points = useRef<any>();
  const sphere = random.inSphere(new Float32Array(count * 3), { radius: 1.5 });

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
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800" />
      
      {/* Animated stars */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
      
      {/* Colored gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5" />
      
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
           style={{ 
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
             backgroundRepeat: 'repeat',
             backgroundSize: '200px 200px'
           }} 
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
      
      {/* Animated glow spots */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-pulse" 
           style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl animate-pulse" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />
    </div>
  );
}
