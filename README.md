# Three.js Solar System

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## Images

![Screenshot](solarsystem_screenshot_01.png)

![alt text](https://github.com/victorchtl/three-solar-system/blob/main/src/assests/screenshots/solarsystem_screenshot_01.png?raw=true)

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- DEMO : [https://netflix-clone-6f7dc.web.app/](https://netflix-clone-6f7dc.web.app/) -->

A 3D solar system made with React three fiber, drei libraries.

Dependencies :

* [React](https://react.dev/)
* [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
* [React Drei](https://github.com/pmndrs/drei#readme)
* [React Postprocessing](https://docs.pmnd.rs/react-postprocessing/effect-composer)
* [React Lamina](https://github.com/pmndrs/lamina)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- APP ARCHITECTURE -->
## Architecture

  ```bash
├── src
│   ├── assets
│   │   ├── textures
│   ├── components
│   │   ├── CameraSystem
│   │   ├── Planet
│   │   ├── PlanetCaption
│   │   ├── PlanetOrbitLine
│   │   ├── PlanetRing
│   │   ├── PlanetSystem
│   │   ├── Postprocessing
│   │   ├── SceneCanvas
│   │   ├── Sun
│   ├── data
│   │   ├── SolarSystemData
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features

- [x] Interactive 3D Scene
- [x] Realistic Planet Textures
- [x] Postprocessed SunLight

### Planet

```js
function Planet({ diameter, planetTexture }) {

    // creating a reference to animate later our planet
    const planetMeshRef = useRef();

    // using useLoader to load a texture file like a .png in this example (planetTexture)
    const planetTextureFile = useLoader(TextureLoader, planetTexture)

    // Using useFrame to animate adding a little self-rotation to our planet
    useFrame(() => (
        planetMeshRef.current.rotation.y += 0.0005
    ))

    return (
        // Creating a Sphere with drei library and using the React Lamina Layer Material
        <Sphere
            args={[diameter / 2, 64, 64]}
            ref={planetMeshRef}
        >
            <LayerMaterial
                color="red"
                lighting="physical"
                transmission={0}
            >
                <Color color="white" />
                <Texture map={planetTextureFile} />
                <Fresnel color={planetTextureFile} power={5} intensity={10} mode='softlight' />
            </LayerMaterial>
        </Sphere>
    )
}

export default Planet
```

### Planet Orbit Line

```js
function PlanetOrbitLine({ radius }) {

    const points = [];
    const segments = 256;

    for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        const x = Math.cos(theta) * radius;
        const y = 0;
        const z = Math.sin(theta) * radius;
        points.push(x, y, z);
    }

    return (
        <Line
            points={points}
            color="grey"
            lineWidth={1}
            linecap="round"
            linejoin="round"
            transparent
        />
    )
}

export default PlanetOrbitLine
```

### Planet Caption

```js
import { Html } from '@react-three/drei'

function PlanetCaption({ name, action }) {

    return (
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
    )
}

export default PlanetCaption
```

### Planet Ring

```js
function PlanetRing({ ring }) {

    const base = useLoader(TextureLoader, ring.textures.base)

    const alpha = useLoader(TextureLoader, ring.textures.alpha)

    const material = new THREE.MeshBasicMaterial({
        map: base,
        side: THREE.DoubleSide,
        color: 0xffffff,
        transparent: true,
        alphaMap: alpha
      });

    const geometry = new THREE.RingGeometry(ring.innerRadius/1000, ring.outerRadius/1000, 256);
    var pos = geometry.attributes.position;
    var v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
        v3.fromBufferAttribute(pos, i);
        geometry.attributes.uv.setXY(i, v3.length() < (((ring.outerRadius/1000)+(ring.innerRadius/1000))/2) ? 0 : 1, 1);
    }


    return (
        <mesh
            geometry={geometry}
            material={material}
            rotation={[Math.PI/2,0,0]}
        />
    )
}

export default PlanetRing
```

### Sun

```js
const Sun = ({diameter, base}) => {

    const baseColor = useLoader(TextureLoader, base)

    return (
        <Sphere position={[0, 0, 0]} args={[diameter/2, 64, 64]} name='sun'>
            <meshStandardMaterial
                map={baseColor}
                emissive={'white'}
                emissiveMap={baseColor}
                emissiveIntensity={10}
                toneMapped={false}
            />
        </Sphere>
    )
}

export default Sun
```

### PostProcessing

```js
<EffectComposer>
    <Bloom luminanceThreshold={1} intensity={0.85} levels={9} mipmapBlur />
</EffectComposer>
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>




## Built With

This project was bootstrapped with [Vite](https://vitejs.dev/).


With NPM:
```sh
  npm create vite@latest
```

With YARN:
```sh
  yarn create vite
```

With PNPM:
```sh
  pnpm create vite
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/victorchtl/three-solar-system.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Victor Chatel - victor.chatel@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



