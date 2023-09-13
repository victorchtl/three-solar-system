import { Box, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { data } from '../../data/SolarSystemData'

function HudSearchBar() {

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const searchData = data
    
    const handleClick = () => {
        setSearch('')
        setSearchResults([])
    }

    useEffect(() => {
        if (search.length > 0) {
            const filteredResults = searchData.planets.filter(planet =>
                planet.name.toLowerCase().includes(search.toLowerCase())
            );
            setSearchResults(filteredResults);
        } else setSearchResults([])
        return () => {

        }
    }, [search])

    return (
        <Box display={'flex'} alignItems={'center'}>
            <Typography>SEARCH: </Typography>
            <Box>
                <TextField type="search" size='small' value={search} onChange={(e) => setSearch(e.target.value)}>HudCustomInput</TextField>

                {searchResults.length > 0 ?
                    <Box position={'absolute'} top={64} sx={{ border: 'solid 1px', borderColor: 'secondary.main' }}>
                        <List>
                            {searchResults.map((el, index) => (
                                <ListItem disablePadding key={el.name + index}>
                                    <ListItemButton>
                                        <ListItemText onClick={handleClick} primary={el.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    :
                    undefined
                }

            </Box>

        </Box>
    )
}

export default HudSearchBar