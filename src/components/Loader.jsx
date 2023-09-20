/* eslint-disable react/prop-types */
import { LinearProgress, Typography } from '@mui/material'
import { Html } from '@react-three/drei'

function Loader({ progress }) {
    return (
        <Html center>
            <Typography
                textAlign={'center'}
                fontSize={'.8rem'}
                letterSpacing={1}
                mb={1}
            >
                Loading {Math.round(progress)} %
            </Typography>
            <LinearProgress
                variant="determinate"
                color='primary'
                value={progress}
                sx={{ width: '300px', borderRadius: 2 }}
            />
        </Html>
    )
}

export default Loader