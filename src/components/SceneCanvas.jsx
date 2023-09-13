/* eslint-disable react/no-unknown-property */
import { Canvas, extend, useThree } from '@react-three/fiber'
import Sun from './Sun'
import { data } from '../data/SolarSystemData'
import { Effects, Environment, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import PlanetSystem from './PlanetSystem'
import hdr3 from '../assets/textures/hdr3.hdr'
import CameraSystem from './CameraSystem'
import { UnrealBloomPass } from 'three-stdlib'
import { Bloom, EffectComposer, SelectiveBloom } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'
import { useRef } from 'react'
import PostProcessing from './PostProcessing'

extend({ UnrealBloomPass })

function SceneCanvas() {

    const planetScale = (number) => { return (number / 14000) }

    const planetDistanceScale = (number) => { return (number / 10000000) }

    return (
        <Canvas linear>

            <Sun
                diameter={planetScale(data.parent.diameter)}
                base={data.parent._3d.textures.base}
            />

            {data.planets.map((planet, index) => (
                <PlanetSystem key={planet.name + index} planet={planet} />
            ))}

            {/* <Stars radius={10000} depth={100} count={10000} factor={4} saturation={0} speed={1} /> */}
            <pointLight position={[0, 0, 0]} name='sunlight' castShadow/>
            {/* <ambientLight intensity={1} /> */}
            <CameraSystem />
            <PostProcessing />
            
        </Canvas>
    )
}

export default SceneCanvas