import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 500 }) {
  const points = useRef()

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 10
      temp[i * 3 + 1] = (Math.random() - 0.5) * 10
      temp[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return temp
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    points.current.rotation.y = time * 0.1
    points.current.rotation.x = time * 0.05
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ff1a1a"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function BackgroundParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  )
}
