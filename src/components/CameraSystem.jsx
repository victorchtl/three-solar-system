import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useStore } from '../store'

function CameraSystem() {

    const { isOverview } = useStore()

    return (
        <>
            <OrbitControls
            makeDefault
            autoRotate
            autoRotateSpeed={-0.05}
            enableRotate={isOverview ? false : true}
            enableDamping={false}
            enablePan={false}
            maxDistance={isOverview ? 30000 : 10000}
            />
            <PerspectiveCamera position={[0,200,400]} makeDefault={isOverview ? false : true} far={100000000000} />
            <PerspectiveCamera position={[0,30000,0]} makeDefault={isOverview ? true : false} far={100000000000} />
        </>
    )
}

export default CameraSystem