/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import React from 'react'

function HudDisplayItem({ index, opt }) {
  return (
    <Box
      key={index}
      onClick={opt.setter}
      style={{
        width: 'fit-content',
        cursor: 'pointer',
        background: opt.state ? 'rgba(45, 102, 156, .4)' : 'rgba(45, 102, 156, .2)',
        transform: 'skew(30deg)',
        marginRight: '1px'
      }}>
      <Box
        sx={{
          transform: 'skew(-30deg)',
          margin: '10px'
        }}
      >
        <Typography>
          {opt.label}
        </Typography>
      </Box>

      <Box
        style={{
          width: '100%',
          height: '2px',
          background: opt.state ? 'rgba(45, 102, 156, 1)' : 'rgba(45, 102, 156, .4)',
          filter: opt.state ? 'brightness(200%)' : 'none',
          boxShadow: opt.state ? '0 0 8px 1px #2d669c' : 'none'
        }} />
    </Box>
  )
}

export default HudDisplayItem