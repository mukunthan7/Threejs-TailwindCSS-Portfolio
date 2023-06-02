import { OrbitControls, Float, Decal, useTexture, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'

const Ball = (props) => {
    const [texture] = useTexture([props.imgUrl])

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} intensity={0.2} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 5]} />
                <meshStandardMaterial
                    color="#fff"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[Math.PI * 2, 0, 6.25]}
                    flatShading
                    map={texture}
                />
            </mesh>
        </Float>
    )
}

const TechCanvas = ({ icon }) => {
    return (
        <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
            <Preload all />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Ball imgUrl={icon} />
            </Suspense>
        </Canvas>
    )
}

export default TechCanvas