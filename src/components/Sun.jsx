/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Sphere } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Sun = ({diameter, base}) => {

    const baseColor = useLoader(TextureLoader, base)

    return (
        <Sphere position={[0, 0, 0]} args={[diameter/2, 64, 64]} name='sun'>
            <meshStandardMaterial
                map={baseColor}
                emissive={'white'}
                emissiveMap={baseColor}
                emissiveIntensity={10}
                toneMapped={false}
            />
        </Sphere>
    )
}

export default Sun