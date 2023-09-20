/* eslint-disable react/no-unknown-property */
import { Canvas, extend } from '@react-three/fiber'
import Sun from './Sun'
import { data } from '../data/SolarSystemData'
import PlanetSystem from './planets/PlanetSystem'
import CameraSystem from './CameraSystem'
import { UnrealBloomPass } from 'three-stdlib'
import PostProcessing from './PostProcessing'
import { Stars, useProgress } from '@react-three/drei'
import { useStore } from '../store'
import { Suspense } from 'react'
import Loader from './Loader'

extend({ UnrealBloomPass })

function SceneCanvas() {

    const { planetScale } = useStore()

    const { progress } = useProgress()

    return (
        <Canvas linear>
            <Suspense fallback={<Loader progress={progress} />}>
                <Sun
                    diameter={data.parent.diameter / planetScale}
                    base={data.parent._3d.textures.base}
                />
                {data.planets.map((planet, index) => (
                    <PlanetSystem key={planet.name + index} planet={planet} />
                ))}
                <Stars radius={10000} depth={100} count={10000} factor={4} saturation={0} speed={1} />
                <pointLight position={[0, 0, 0]} name='sunlight' castShadow />
                <CameraSystem />
                <PostProcessing />
            </Suspense>
        </Canvas>
    )
}

export default SceneCanvas