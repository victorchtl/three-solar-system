/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Sphere } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { Color, Fresnel, LayerMaterial, Texture } from 'lamina';
import { useRef } from 'react'
import { TextureLoader } from 'three';


function Planet({ diameter, base }) {

    const planetMeshRef = useRef();

    const baseColor = useLoader(TextureLoader, base)

    useFrame(() => (
        planetMeshRef.current.rotation.y += 0.0005
    ))

    return (
        <Sphere
            args={[diameter / 2, 64, 64]}
            ref={planetMeshRef}
        >
            <LayerMaterial
                color="red"
                lighting="physical"
                transmission={0}
            >
                <Color color="white" />
                <Texture map={baseColor} />
                <Fresnel color={baseColor} power={5} intensity={10} mode='softlight' />
            </LayerMaterial>
        </Sphere>
    )
}

export default Planet