/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

function PlanetRing({ ring }) {

    const base = useLoader(TextureLoader, ring.textures.base)

    const alpha = useLoader(TextureLoader, ring.textures.alpha)

    const material = new THREE.MeshBasicMaterial({
        map: base,
        side: THREE.DoubleSide,
        color: 0xffffff,
        transparent: true,
        alphaMap: alpha
      });

    const geometry = new THREE.RingGeometry(ring.innerRadius/1000, ring.outerRadius/1000, 256);
    var pos = geometry.attributes.position;
    var v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        geometry.attributes.uv.setXY(i, v3.length() < (((ring.outerRadius/1000)+(ring.innerRadius/1000))/2) ? 0 : 1, 1);
    }


    return (
        <mesh geometry={geometry} material={material} rotation={[Math.PI/2,0,0]} />
    )
}

export default PlanetRing