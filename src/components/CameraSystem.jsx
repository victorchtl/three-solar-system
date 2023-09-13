import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

function CameraSystem() {




    return (
        <>
            <OrbitControls makeDefault autoRotate autoRotateSpeed={-0.1} />
            <PerspectiveCamera position={[0, 200, 400]} makeDefault far={100000000000} />
        </>
    )
}

export default CameraSystem