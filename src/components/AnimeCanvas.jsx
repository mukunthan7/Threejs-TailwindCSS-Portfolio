import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations, Stars, Preload } from "@react-three/drei"
import React, { Suspense } from 'react'
import tw from "tailwind-styled-components"
import CanvasLoader from './CanvasLoader'

const Anime = () => {

    const { scene, animations } = useGLTF("./anime/scene.gltf")

    const { actions } = useAnimations(animations, scene)

    useFrame(() => {
        actions["happy"].play()
    })

    return (
        <mesh>
            <pointLight position={[0, 0, 0]} intensity={1} castShadow />
            <primitive object={scene} scale={5} position={[0, -5, 0]} rotation={[0, -1.5, 0]} />
        </mesh>
    )
}


const AnimeCanvas = () => {

    return (
        <AnimeContainer>
            <Canvas camera={{ position: [100, 0, 0], fov: 6 }} gl={{ preserveDrawingBuffer: true }}>
                <Suspense fallback={<CanvasLoader />}>
                    <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableZoom={false} />
                    <Anime />
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </AnimeContainer>
    )
}

const AnimeContainer = tw.div`
                h-[50vh]
                w-full
                relative
                overflow-hidden
                bg-background
`

export default AnimeCanvas