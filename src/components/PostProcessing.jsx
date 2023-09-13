import { Bloom, EffectComposer } from '@react-three/postprocessing'

function PostProcessing() {

    return (
        <EffectComposer>
            <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
        </EffectComposer>
    )
}

export default PostProcessing