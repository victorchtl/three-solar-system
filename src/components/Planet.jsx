/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Sphere } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { Color, Depth, Fresnel, LayerMaterial, Texture } from 'lamina';
import { useRef } from 'react'
import { TextureLoader } from 'three';
import * as THREE from 'three'

function Planet({ diameter, base }) {

    const planetMeshRef = useRef();

    const baseColor = useLoader(TextureLoader, base)

    const planetMaterial = new THREE.MeshStandardMaterial({
        map: baseColor,


    })

    const sphereMaterial = (
        <LayerMaterial
            color="red"
            lighting="basic"
            transmission={0}
        >
            {/* <Depth
          colorA="#810000" //
          colorB="#ffd0d0"
          alpha={0.5}
          mode="multiply"
          near={0}
          far={2}
          origin={[1, 1, 1]}
        /> */}
            <Color color={'red'} />
        </LayerMaterial>
    );

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