import { Line } from '@react-three/drei';
import React from 'react'

function SatelliteOrbitLine({radius}) {

    const isOrbitLines = true

    const points = [];
    const segments = 256;

    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = Math.cos(theta) * radius;
        const y = 0; // Si vous souhaitez positionner le cercle dans l'espace 3D, vous pouvez modifier cette valeur
        const z = Math.sin(theta) * radius;
        points.push(x, y, z);
    }

    return (
        <>
            {isOrbitLines ?
                <Line
                    points={points}
                    color="grey"
                    lineWidth={1}
                    linecap="round"
                    linejoin="round"
                    transparent
                />
                :
                undefined
            }
        </>
    )
}

export default SatelliteOrbitLine