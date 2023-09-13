/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Html, Sphere } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { useMemo, useRef, useState } from 'react';
import { Clock, Quaternion, TextureLoader, Vector3 } from 'three';
import { data } from '../data/SolarSystemData';
import image from './../assets/textures/mars.jpeg'
import * as THREE from 'three'
import PlanetObject from './Planet';
import PlanetOrbitLine from './PlanetOrbitLine';
import { useStore } from '../store';
import PlanetCaption from './PlanetCaption';
import PlanetRing from './PlanetRing';
import Planet from './Planet';
import SatelliteSystem from './SatelliteSystem';

function PlanetSystem({ planet }) {

    const planetRef = useRef();
    const captionRef = useRef();

    const { camera, controls } = useThree();

    const getNewCameraPosition = (endPosition, distance) => {
        const result = new THREE.Vector3();
        const sun = new THREE.Vector3(0, 0, 0);
        const planet = new THREE.Vector3(endPosition.x, endPosition.y, endPosition.z)
        const totalDistance = sun.distanceTo(planet);
        const factor = distance / totalDistance; // Facteur ajusté pour obtenir une distance fixe
        result.lerpVectors(planet, sun, factor);
        return result;
    }

    const randomAroundOrbitPosition = useMemo(() => {
        const angle = Math.random() * Math.PI * 2; // Angle aléatoire entre 0 et 2PI
        const x = Math.cos(angle) * planet.distanceFromParent / 500000;
        const y = 0; // La planète reste sur le même plan (par exemple, le plan XY)
        const z = Math.sin(angle) * planet.distanceFromParent / 500000;
        return [x, y, z];
    }, [planet.distanceFromParent]);

    const zoomToPlanet = () => {
        controls.target.copy(planetRef.current.position)
        camera.position.copy(getNewCameraPosition(planetRef.current.position, planet.diameter / 500))
    }

    return (
        <group>
            <group ref={planetRef} position={randomAroundOrbitPosition}>
                <Planet diameter={planet.diameter / 1000} base={planet._3d.textures.base} />
                {planet.rings != false ?
                    <PlanetRing ring={planet.rings} />
                    :
                    undefined
                }
                {/* {planet.satellites.length > 0 ?
                    <SatelliteSystem satellites={planet.satellites} parentRadius={planet.diameter/2}/>
                    :
                    undefined
                } */}
                <group
                    position={[0, planet.diameter / 1000, 0]}
                    rotation={[0, 0, 0]}
                    ref={captionRef}
                >
                   <PlanetCaption name={planet.name} action={zoomToPlanet} />
                </group>
            </group>

            <PlanetOrbitLine radius={planet.distanceFromParent / 500000}/>
        </group>
    )
}

export default PlanetSystem