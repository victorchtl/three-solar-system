import { Box } from "@mui/material"
import { useStore } from "../../store"
import HudDisplayItem from "./HudDisplayItem"
import HudSearchBar from "./HudSearchBar"

function Hud() {

    const {isOrbitLines, setIsOrbitLines} = useStore()
    const {isCaptions, setIsCaptions} = useStore()

    const displayOptions = [
        {
            label: 'Captions',
            state: isCaptions,
            setter: setIsCaptions
        },
        {
            label: 'Orbit Lines',
            state: isOrbitLines,
            setter: setIsOrbitLines
        },
        {
            label: 'Satellites',
            state: isOrbitLines,
            setter: setIsOrbitLines
        },
    ]

    return (
        <Box
            sx={{
                zIndex: 9999,
                position: 'absolute',
                display:'flex',
                width: '100%',
                height: 'auto',
                top: 0,
                background: 'black',
                borderWidth: '1px 0 0 0',
                borderStyle: 'solid',
                borderColor: 'rgba(45, 102, 156, .2)',
                userSelect:'none'
            }}>

            <Box display={'flex'}>
                {displayOptions.map((opt, index) => (
                    <HudDisplayItem key={index} opt={opt} />
                ))}
            </Box>
            <HudSearchBar />
        </Box>
    )
}

export default Hud