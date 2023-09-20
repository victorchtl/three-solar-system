import { AppBar, Box, ToggleButton, Toolbar, Typography } from '@mui/material'
import RadarRoundedIcon from '@mui/icons-material/RadarRounded';
import { useStore } from '../../store';

function Topbar() {

    const {
        isOverview,
        setIsOverview,
        isOrbitLines,
        setIsOrbitLines,
        isCaptions,
        setIsCaptions
    } = useStore()

    function setCamera() {
        setIsOverview(prev => !prev)
    }

    return (
        <AppBar position="absolute" elevation={0} sx={{ top: 0 }}>
            <Toolbar>
                <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box></Box>
                    <Box><Typography color={'primary'}>Solar System</Typography></Box>
                    <Box display={'flex'} gap={1}>
                        {/* <ToggleButton
                        color='primary'
                        value="check"
                        selected={isOverview}
                        onChange={setCamera}
                    >
                        <RadarRoundedIcon color={isOverview ? 'primary' : 'disabled'} />
                    </ToggleButton> */}
                        <ToggleButton
                            color='primary'
                            value="check"
                            selected={isCaptions}
                            onChange={setIsCaptions}
                        >
                            <Typography fontSize={'.6rem'}>captions</Typography>
                        </ToggleButton>
                        <ToggleButton
                            color='primary'
                            value="check"
                            selected={isOrbitLines}
                            onChange={setIsOrbitLines}
                        >
                            <Typography fontSize={'.6rem'}>orbits</Typography>
                        </ToggleButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Topbar