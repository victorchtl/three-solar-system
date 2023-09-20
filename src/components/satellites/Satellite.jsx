/* eslint-disable react/prop-types */
import { Sphere } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

function Satellite({radius}) {

    const satelliteMaterial = new MeshStandardMaterial({
        color: 'red'
    })

    return (
        <Sphere args={[radius, 64, 64]} material={satelliteMaterial}>

        </Sphere>
    )
}

export default Satellite