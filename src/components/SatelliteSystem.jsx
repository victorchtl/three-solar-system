/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react'
import Satellite from './Satellite'
import SatelliteOrbitLine from './SatelliteOrbitLine'
import PlanetCaption from './PlanetCaption'

function SatelliteSystem({ satellites, parentRadius }) {

  const planetScale = (number) => { return (number / 1000) }

  const planetDistanceScale = (number) => { return (number / 1000) }

  

  return (
    <group position={[0, 0, 0]}>
      {satellites.map((stl, index) => (
        <>
        <group>
          <Satellite key={stl.name + index} radius={planetScale(stl.diameter / 2)} />
          <PlanetCaption name={stl.name} action={null} />
        </group>
         
          <SatelliteOrbitLine radius={planetDistanceScale(stl.distanceFromParent)} />
        </>
      ))}
    </group>
  )
}

export default SatelliteSystem