/* eslint-disable react/prop-types */
import { Html } from '@react-three/drei'
import { useStore } from '../store'
import { Box } from '@mui/material'

function PlanetCaption({ name, action }) {

    const isCaptions = useStore((state) => state.isCaptions)

    return (
        <>
            {isCaptions ?
                <Html zIndexRange={1} zIndex={1}>
                    <Box
                        className="caption"
                        onClick={action}
                        sx={{
                            zIndex: 900,
                            color: 'primary.main',
                            userSelect: 'none',
                            fontSize: '10px',
                            cursor:'pointer',
                            '&:hover':{
                                color: 'primary.light'
                            }
                        }}>
                        {name}
                    </Box>
                </Html>
                :
                undefined
            }
        </>
    )
}

export default PlanetCaption