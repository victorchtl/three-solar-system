/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Sphere } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { LayerMaterial, Texture } from 'lamina'
import { TextureLoader } from 'three'

const Sun = ({ diameter, base }) => {

    const baseColor = useLoader(TextureLoader, base)

    let x = 0

    useFrame(() => (
        x += 100
    ))

    return (
        <Sphere position={[0, 0, 0]} args={[diameter / 2, 64, 64]} name='sun'>
            {/* <meshStandardMaterial
                map={baseColor}
                emissive={'white'}
                emissiveMap={baseColor}
                emissiveIntensity={10}
                toneMapped={false}
            /> */}
            <LayerMaterial
                lighting="physical"
                emissiveMap={baseColor}
                emissive={'white'}
                emissiveIntensity={10}
                toneMapped={false}
            >
                <Texture
                    map={baseColor}
                />
            </LayerMaterial>
        </Sphere>
    )
}

export default Sun