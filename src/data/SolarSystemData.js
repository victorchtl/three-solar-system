export const data = {
    "oort_cloud": {
        "diameter": 18921460945160,
        "radius": 9460730472580
    },
    "parent": {
        "id": "0",
        "name": "Sun",
        "diameter": 1391016,
        "mass": 1988500,
        "gravity": 274,
        "density": 1408,
        "rotationPeriod": 609.12,
        "distanceFromParent": null,
        "orbitalPeriod": null,
        "orbitalVelocity": null,
        "orbitalInclination": null,
        "axialTilt": null,
        "meanTemperature": "5778 K",
        "solarConstant": 1.365,
        "composition": {
            "majorElements": [
                {
                    "abbr": "H",
                    "element": "Hydrogen",
                    "percentageOfComposition": 90.965
                },
                {
                    "abbr": "He",
                    "element": "Helium",
                    "percentageOfComposition": 8.889
                }
            ]
        },
        "_3d": {
            "textures": {
                "base": "/src/assets/textures/sun.jpg"
            }
        }
    },
    "planets": [
        {
            "id": 1,
            "name": "Mercury",
            "diameter": 4879,
            "mass": 0.330,
            "gravity": 3.7,
            "density": 5427,
            "rotationPeriod": 1407.6,
            "lengthOfDay": 4222.6,
            "distanceFromParent": 57900000,
            "orbitalPeriod": 88,
            "orbitalVelocity": 47.4,
            "orbitalInclination": 7,
            "axialTilt": 0.01,
            "orbitPositionOffset": 48,
            "meanTemperature": 167,
            "surfaceTemps": {
                "min": 100,
                "mean": 340,
                "max": 700
            },
            "rings": false,
            "satellites": [],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/mercury.jpg",
                    "topo": "/src/assets/textures/mercury_topo.jpg"
                }
            }
        },
        {
            "id": 2,
            "name": "Venus",
            "diameter": 12104,
            "mass": 4.87,
            "gravity": 8.9,
            "density": 5243,
            "rotationPeriod": -5832.5,
            "lengthOfDay": 2802,
            "distanceFromParent": 108200000,
            "orbitalPeriod": 224.7,
            "orbitalVelocity": 35,
            "orbitalInclination": 3.4,
            "axialTilt": 177.4,
            "orbitPositionOffset": 155,
            "meanTemperature": 464,
            "surfaceTemps": {
                "min": 655,
                "mean": 735,
                "max": 1100
            },
            "rings": false,
            "satellites": [],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/venus.jpg",
                    "topo": "/src/assets/textures/venus_topo.jpg"
                }
            }
        },
        {
            "id": 3,
            "name": "Earth",
            "diameter": 12756,
            "mass": 5.97,
            "gravity": 9.8,
            "density": 5514,
            "rotationPeriod": 23.9,
            "lengthOfDay": 24,
            "distanceFromParent": 149600000,
            "orbitalPeriod": 365.2,
            "orbitalVelocity": 29.8,
            "orbitalInclination": 0,
            "axialTilt": 23.4,
            "orbitPositionOffset": 0,
            "meanTemperature": 15,
            "surfaceTemps": {
                "min": 185,
                "mean": 288,
                "max": 331
            },
            "rings": false,
            "satellites": [
                {
                    "id": "3a",
                    "name": "Moon",
                    "diameter": 3476.2,
                    "mass": 0.07342,
                    "distanceFromParent": 384400,
                    "orbitalPeriod": 27.3,
                    "orbitalInclination": 21,
                    "gravity": 1.62,
                    "surfaceTemps": {
                        "min": -110,
                        "max": 130
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "satellites_mech": [
                {
                    "ISS": {
                        "distanceFromParent": 400
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/earth.jpg",
                    "topo": "/src/assets/textures/earth_topo_4k.jpg",
                    "specular": "/src/assets/textures/earth_ocean_reflectance_10k.jpg",
                    "clouds": "/src/assets/textures/earth_clouds_active2.png"
                }
            }
        },
        {
            "id": 4,
            "name": "Mars",
            "diameter": 6792,
            "mass": 0.642,
            "gravity": 3.7,
            "density": 3933,
            "rotationPeriod": 24.6,
            "lengthOfDay": 24.7,
            "distanceFromParent": 227900000,
            "orbitalPeriod": 687,
            "orbitalVelocity": 24.1,
            "orbitalInclination": 1.85,
            "axialTilt": 25.2,
            "orbitPositionOffset": 85,
            "meanTemperature": -65,
            "surfaceTemps": {
                "min": 130,
                "mean": 210,
                "max": 293
            },
            "rings": false,
            "satellites": [
                {
                    "id": "4a",
                    "name": "Phobos",
                    "diameter": 22,
                    "mass": "1.0659 * 10^16",
                    "distanceFromParent": 5989,
                    "orbitalPeriod": 0.31875,
                    "orbitalInclination": 1.093,
                    "gravity": 0.0057,
                    "surfaceTemps": {
                        "min": -40.15,
                        "max": -40.15,
                        "mean": -40.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "4b",
                    "name": "Deimos",
                    "diameter": 12.4,
                    "mass": "1.4762 * 10^15",
                    "distanceFromParent": 23455,
                    "orbitalPeriod": 1.25,
                    "orbitalInclination": 0.93,
                    "gravity": 0.003,
                    "surfaceTemps": {
                        "min": -40.15,
                        "max": -40.15,
                        "mean": -40.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/mars.jpg",
                    "topo": "/src/assets/textures/mars_topo.jpg"
                }
            }
        },
        {
            "id": 5,
            "name": "Jupiter",
            "diameter": 142984,
            "mass": 1898,
            "gravity": 23.1,
            "density": 1326,
            "rotationPeriod": 9.9,
            "lengthOfDay": 9.9,
            "distanceFromParent": 778600000,
            "orbitalPeriod": 4331,
            "orbitalVelocity": 13.1,
            "orbitalInclination": 1.303,
            "axialTilt": 3.13,
            "orbitPositionOffset": 2692,
            "meanTemperature": -110,
            "surfaceTemps": {
                "min": null,
                "mean": 125,
                "max": null
            },
            "rings": {
                "innerRadius": 110500,
                "outerRadius": 129000,
                "textures": {
                    "base": "/src/assets/textures/jupiter_ring_color.png",
                    "alpha": "/src/assets/textures/jupiter_ring_alpha.png"
                }
            },
            "satellites": [
                {
                    "id": "5a",
                    "name": "Europa",
                    "diameter": 3121.6,
                    "mass": "4.799844 * 10^22",
                    "distanceFromParent": 670900,
                    "orbitalPeriod": 3.55,
                    "orbitalInclination": 0.47,
                    "gravity": 1.314,
                    "surfaceTemps": {
                        "min": -214.15,
                        "max": -148.15,
                        "mean": -171.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/jupiter/satellites/europa.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "5b",
                    "name": "Io",
                    "distanceFromParent": 421700,
                    "orbitalPeriod": 1.769,
                    "orbitalInclination": 0.05,
                    "diameter": 3643.2,
                    "mass": "8.931938 * 10^22",
                    "gravity": 1.796,
                    "surfaceTemps": {
                        "min": -183.15,
                        "max": -143.15,
                        "mean": -163.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/jupiter/satellites/io.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "5c",
                    "name": "Ganymede",
                    "distanceFromParent": 1070400,
                    "orbitalPeriod": 7.155,
                    "orbitalInclination": 0.204,
                    "diameter": 5268.2,
                    "mass": "1.4819 * 10^23",
                    "gravity": 1.428,
                    "surfaceTemps": {
                        "min": -203.15,
                        "max": -121.15,
                        "mean": -163.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/jupiter/satellites/ganymede.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "5d",
                    "name": "Callisto",
                    "distanceFromParent": 1882700,
                    "orbitalPeriod": 16.689,
                    "orbitalInclination": 0.205,
                    "diameter": 4820.6,
                    "mass": "1.075938 * 10^23",
                    "gravity": 1.235,
                    "surfaceTemps": {
                        "min": 80,
                        "max": 134,
                        "mean": 165
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5e",
                    "name": "Amalthea",
                    "distanceFromParent": 181366,
                    "orbitalPeriod": 0.498,
                    "orbitalInclination": 0.374,
                    "diameter": 187,
                    "mass": "2.08 * 10^15",
                    "gravity": 0.02,
                    "surfaceTemps": {
                        "min": -195,
                        "max": -108.15,
                        "mean": -153.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5f",
                    "name": "Adrastea",
                    "distanceFromParent": 128690,
                    "orbitalPeriod": 0.29826,
                    "orbitalInclination": 0.03,
                    "diameter": 20,
                    "mass": "0.2 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5g",
                    "name": "Lysithea",
                    "distanceFromParent": 11740560,
                    "orbitalPeriod": 259.89,
                    "orbitalInclination": 28.30,
                    "diameter": 36,
                    "mass": "6.3 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5h",
                    "name": "Leda",
                    "distanceFromParent": 11187781,
                    "orbitalPeriod": 240.82,
                    "orbitalInclination": 29.01,
                    "diameter": 16,
                    "mass": "0.6 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5i",
                    "name": "Anake",
                    "distanceFromParent": 21454952,
                    "orbitalPeriod": "-640.38",
                    "orbitalInclination": 149.9,
                    "diameter": 28,
                    "mass": "3.0 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5j",
                    "name": "Carme",
                    "distanceFromParent": 23197992,
                    "orbitalPeriod": "−763.95",
                    "orbitalInclination": 167.53,
                    "diameter": 46,
                    "mass": "13 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5k",
                    "name": "Pasiphae",
                    "distanceFromParent": 23609042,
                    "orbitalPeriod": "−739.8",
                    "orbitalInclination": 143.04,
                    "diameter": 60,
                    "mass": "30 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5l",
                    "name": "Elara",
                    "distanceFromParent": 11778034,
                    "orbitalPeriod": 257.62,
                    "orbitalInclination": 30.66,
                    "diameter": 86,
                    "mass": "87 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5m",
                    "name": "Themisto",
                    "distanceFromParent": 7393216,
                    "orbitalPeriod": 129.87,
                    "orbitalInclination": 47.48,
                    "diameter": 8,
                    "mass": "0.069 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5n",
                    "name": "Himalia",
                    "distanceFromParent": 11451971,
                    "orbitalPeriod": 250.23,
                    "orbitalInclination": 29.59,
                    "diameter": 170,
                    "mass": "670 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5o",
                    "name": "Metis",
                    "distanceFromParent": 127690,
                    "orbitalPeriod": 0.24,
                    "orbitalInclination": 0.06,
                    "diameter": 60,
                    "mass": "3.6 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5p",
                    "name": "Thebe",
                    "distanceFromParent": 221889,
                    "orbitalPeriod": 0.6745,
                    "orbitalInclination": 1.076,
                    "diameter": 58,
                    "mass": "43 * 10^16",
                    "gravity":null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5q",
                    "name": "Dia",
                    "distanceFromParent": 12570424,
                    "orbitalPeriod": 274,
                    "orbitalInclination": 28.2,
                    "diameter": 4,
                    "mass": "0.009 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5r",
                    "name": "Carpo",
                    "distanceFromParent": 17144873,
                    "orbitalPeriod": 458.62,
                    "orbitalInclination": 55,
                    "diameter": 3,
                    "mass": "0.0045 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5s",
                    "name": "Euporie",
                    "diameter": 2,
                    "distanceFromParent": 19088434,
                    "orbitalPeriod": "−538.78",
                    "orbitalInclination": 144.694,
                    "mass": "0.0045 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5t",
                    "name": "Thelxinoe",
                    "diameter": 2,
                    "distanceFromParent": 20453753,
                    "orbitalPeriod": "−597.607",
                    "orbitalInclination": 153,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5u",
                    "name": "Euanthe",
                    "diameter": 3,
                    "distanceFromParent": 20464854,
                    "orbitalPeriod": "−598.093",
                    "orbitalInclination": 142,
                    "mass": "0.0045 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5v",
                    "name": "Helike",
                    "diameter": 4,
                    "distanceFromParent": 20540266,
                    "orbitalPeriod": "−601.402",
                    "orbitalInclination": 156,
                    "mass": "0.0090 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5w",
                    "name": "Praxidike",
                    "diameter": 7,
                    "distanceFromParent": 20823948,
                    "orbitalPeriod": "−613.904",
                    "orbitalInclination": 143,
                    "mass": "0.043 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5x",
                    "name": "Sinope",
                    "diameter": 38,
                    "distanceFromParent": 24057865,
                    "orbitalPeriod": "−724.1",
                    "orbitalInclination": 153.12,
                    "mass": "7.5 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5y",
                    "name": "Pasithee",
                    "diameter": 2,
                    "distanceFromParent": 23307318,
                    "orbitalPeriod": "−726.93",
                    "orbitalInclination": 164,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5z",
                    "name": "Thyone",
                    "diameter": 4,
                    "distanceFromParent": 21406000,
                    "orbitalPeriod":  "-639.803",
                    "orbitalInclination": 147,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5aa",
                    "name": "Aitne",
                    "diameter": 3,
                    "distanceFromParent": 22285000,
                    "orbitalPeriod":  "-679.641",
                    "orbitalInclination": 164,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5bb",
                    "name": "Chaldene",
                    "diameter": 3.8,
                    "distanceFromParent": 22713000,
                    "orbitalPeriod":  "-699.327",
                    "orbitalInclination": 169,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5cc",
                    "name": "Megaclite",
                    "diameter": 5.4,
                    "distanceFromParent": 24687000,
                    "orbitalPeriod":  "-792.437",
                    "orbitalInclination": 150,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "5dd",
                    "name": "Megaclite",
                    "diameter": 5.4,
                    "distanceFromParent": 21064000,
                    "orbitalPeriod":  "-624.542",
                    "orbitalInclination": 148,
                    "mass": "0.0015 * 10^16",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/jupiter.jpg"
                }
            }
        },
        {
            "id": 6,
            "name": "Saturn",
            "diameter": 120536,
            "mass": 568,
            "density": 687,
            "gravity": 9,
            "rotationPeriod": 10.7,
            "lengthOfDay": 10.7,
            "distanceFromParent": 1433500000,
            "orbitalPeriod": 10747,
            "orbitalVelocity": 9.7,
            "orbitalInclination": 2.48524,
            "axialTilt": 26.73,
            "orbitPositionOffset": 13753,
            "meanTemperature": -140,
            "surfaceTemps": {
                "min": null,
                "mean": 95,
                "max": null
            },
            "rings": {
                "innerRadius": 74510,
                "outerRadius": 140220,
                "textures": {
                    "base": "/src/assets/textures/saturn_ring_color.png",
                    "alpha": "/src/assets/textures/saturn_ring_alpha.png"
                }
            },
            "satellites": [
                {
                    "id": "6a",
                    "name": "Pan",
                    "distanceFromParent": 133584,
                    "orbitalPeriod": 0.575,
                    "orbitalInclination": 0.001,
                    "diameter": 86.2,
                    "mass": "159.5 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6b",
                    "name": "Prometheus",
                    "distanceFromParent": 139380,
                    "orbitalPeriod": 0.613,
                    "orbitalInclination": 0.008,
                    "diameter": 28.2,
                    "mass": "4.95 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6c",
                    "name": "Pandora",
                    "distanceFromParent": 141720,
                    "orbitalPeriod": 0.6285,
                    "orbitalInclination": 0.05,
                    "diameter": 81.4,
                    "mass": "137.1 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6d",
                    "name": "Epimetheus",
                    "distanceFromParent": 151422,
                    "orbitalPeriod": 0.694,
                    "orbitalInclination": 0.351,
                    "diameter": 116.2,
                    "mass": "526.6 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6e",
                    "name": "Janus",
                    "distanceFromParent": 151472,
                    "orbitalPeriod": 0.695,
                    "orbitalInclination": 0.165,
                    "diameter": 179,
                    "mass": "1897.5 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6f",
                    "name": "Aegaeon",
                    "distanceFromParent": 167500,
                    "orbitalPeriod": 0.80812,
                    "orbitalInclination": 0.001,
                    "diameter": 1,
                    "mass": "0.0001 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6g",
                    "name": "Tethys",
                    "distanceFromParent": 294619,
                    "orbitalPeriod": 1.8878,
                    "orbitalInclination": 1.12,
                    "diameter": 1062,
                    "mass": "617449 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/saturn/satellites/tethys.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "6h",
                    "name": "Hyperion",
                    "distanceFromParent": 1481010,
                    "orbitalPeriod": 21.276,
                    "orbitalInclination": 0.43,
                    "diameter": 270,
                    "mass": "5620 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6i",
                    "name": "Titan",
                    "distanceFromParent": 1221870,
                    "orbitalPeriod": 15.945,
                    "orbitalInclination": 0.34854,
                    "diameter": 5151,
                    "mass": "1.3452 * 10^23",
                    "gravity": 1.352,
                    "surfaceTemps": {
                        "min": -179.45,
                        "max": -179.45,
                        "mean": -179.45
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6j",
                    "name": "Enceladus",
                    "distanceFromParent": 237948,
                    "orbitalPeriod": 1.37,
                    "orbitalInclination": 0.019,
                    "diameter": 504.2,
                    "mass": "1.08022 * 10^20",
                    "gravity": 0.113,
                    "surfaceTemps": {
                        "min": -240,
                        "max": -128,
                        "mean": -198
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/saturn/satellites/enceladus.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "6k",
                    "name": "Dione",
                    "distanceFromParent": 377396,
                    "orbitalPeriod": 2.737,
                    "orbitalInclination": 0.02,
                    "diameter": 1122.8,
                    "mass": "1.095452 * 10^21",
                    "gravity": 0.232,
                    "surfaceTemps": {
                        "min": -186,
                        "max": -186,
                        "mean": -186
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/saturn/satellites/dione.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "6l",
                    "name": "Rhea",
                    "distanceFromParent": 527108,
                    "orbitalPeriod": 4.518,
                    "orbitalInclination": 0.345,
                    "diameter": 1527.6,
                    "mass": "2.306518 * 10^21",
                    "gravity": 0.264,
                    "surfaceTemps": {
                        "min": -220.15,
                        "max": -174.15,
                        "mean": -197.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/saturn/satellites/rhea.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "6m",
                    "name": "Mimas",
                    "distanceFromParent": 185539,
                    "orbitalPeriod": 0.942,
                    "orbitalInclination": 1.574,
                    "diameter": 396.4,
                    "mass": "3.7493 * 10^19",
                    "gravity": 0.064,
                    "surfaceTemps": {
                        "min": -209.15,
                        "max": -209.15,
                        "mean": -209.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6n",
                    "name": "Iapetus",
                    "distanceFromParent": 3560820,
                    "orbitalPeriod": 79.32,
                    "orbitalInclination": 15.47,
                    "diameter": 1469,
                    "mass": "1.805635 * 10^21",
                    "gravity": 0.223,
                    "surfaceTemps": {
                        "min": -183.15,
                        "max": -143.15,
                        "mean": -163.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/saturn/satellites/iapetus.jpg",
                            "topo": null
                        }
                    }
                },
                {
                    "id": "6o",
                    "name": "Daphnis",
                    "diameter": 7.6,
                    "distanceFromParent": 136505,
                    "orbitalPeriod": 0.59408,
                    "orbitalInclination": 0.0036,
                    "mass": "0.084 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6p",
                    "name": "Atlas",
                    "diameter": 30.2,
                    "distanceFromParent": 137670,
                    "orbitalPeriod": 0.60169,
                    "orbitalInclination": 0.003,
                    "mass": "6.6 * 10^15",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6q",
                    "name": "Methone",
                    "diameter": 3.2,
                    "mass": "0.02 * 10^15",
                    "distanceFromParent": 194440,
                    "orbitalPeriod": 1.00957,
                    "orbitalInclination": 0.007,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6r",
                    "name": "Anthe",
                    "diameter": 1,
                    "mass": "0.007 * 10^15",
                    "distanceFromParent": 197700,
                    "orbitalPeriod": 1.03650,
                    "orbitalInclination": 0.1,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6s",
                    "name": "Pallene",
                    "diameter": 6,
                    "mass": "0.05 * 10^15",
                    "distanceFromParent": 212280,
                    "orbitalPeriod": 1.15375,
                    "orbitalInclination": 0.181,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6t",
                    "name": "Telesto",
                    "diameter": 24.8,
                    "mass": "9.41 * 10^15",
                    "distanceFromParent": 294619,
                    "orbitalPeriod": 1.887802,
                    "orbitalInclination": 1.19,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6u",
                    "name": "Calypso",
                    "diameter": 21.4,
                    "mass": "6.3 * 10^15",
                    "distanceFromParent": 294619,
                    "orbitalPeriod": 1.887802,
                    "orbitalInclination": 1.56,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6v",
                    "name": "Helene",
                    "diameter": 35.2,
                    "mass": "24.46 * 10^15",
                    "distanceFromParent": 377396,
                    "orbitalPeriod": 2.736915,
                    "orbitalInclination": 0.199,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6w",
                    "name": "Kiviuq",
                    "diameter": 16,
                    "mass": "2.79 * 10^15",
                    "distanceFromParent": 11294800,
                    "orbitalPeriod": 448.16,
                    "orbitalInclination": 49.087,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6x",
                    "name": "Ijiraq",
                    "diameter": 12,
                    "mass": "1.18 * 10^15",
                    "distanceFromParent": 11355316,
                    "orbitalPeriod": 451.77,
                    "orbitalInclination": 50.212,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6y",
                    "name": "Albiorix",
                    "diameter": 32,
                    "mass": "22.3 * 10^15",
                    "distanceFromParent": 16266700,
                    "orbitalPeriod": 774.58,
                    "orbitalInclination": 38.042,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6z",
                    "name": "Siarnaq",
                    "diameter": 40,
                    "mass": "43.5 * 10^15",
                    "distanceFromParent": 17776600,
                    "orbitalPeriod": 884.88,
                    "orbitalInclination": 45.798,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "6aa",
                    "name": "Tarvos",
                    "diameter": 15,
                    "mass": "2.3 * 10^15",
                    "distanceFromParent": 18562800,
                    "orbitalPeriod": 944.23,
                    "orbitalInclination": 34.679,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/saturn.jpg"
                }
            }
        },
        {
            "id": 7,
            "name": "Uranus",
            "mass": 86.8,
            "diameter": 51118,
            "density": 1271,
            "gravity": 8.7,
            "rotationPeriod": -17.2,
            "lengthOfDay": 17.2,
            "distanceFromParent": 2872500000,
            "orbitalPeriod": 30589,
            "orbitalVelocity": 6.8,
            "orbitalInclination": 0.8,
            "axialTilt": 97.8,
            "orbitPositionOffset": 29654,
            "meanTemperature": -195,
            "surfaceTemps": {
                "min": null,
                "mean": 57,
                "max": null
            },
            "rings": false,
            "satellites": [
                {
                    "id": "7a",
                    "name": "Cordelia",
                    "distanceFromParent": 49770,
                    "orbitalPeriod": 0.335,
                    "orbitalInclination": 0.08479,
                    "diameter": 40,
                    "mass": "0.044 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7b",
                    "name": "Ophelia",
                    "distanceFromParent": 53790,
                    "orbitalPeriod": 0.376,
                    "orbitalInclination": 0.1036,
                    "diameter": 43,
                    "mass": "0.053 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7c",
                    "name": "Cressida",
                    "distanceFromParent": 61780,
                    "orbitalPeriod": 0.464,
                    "orbitalInclination": 0.006,
                    "diameter": 80,
                    "mass": "0.34 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7d",
                    "name": "Juliet",
                    "distanceFromParent": 64350,
                    "orbitalPeriod": 0.493,
                    "orbitalInclination": 0.06546,
                    "diameter": 94,
                    "mass": "0.56 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7e",
                    "name": "Portia",
                    "distanceFromParent": 66090,
                    "orbitalPeriod": 0.513,
                    "orbitalInclination": 0.059,
                    "diameter": 135,
                    "mass": "1.7 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7f",
                    "name": "Belinda",
                    "distanceFromParent": 75260,
                    "orbitalPeriod": 0.623,
                    "orbitalInclination": 0.031,
                    "diameter": 90,
                    "mass": "0.49 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7g",
                    "name": "Puck",
                    "diameter": 162,
                    "distanceFromParent": 86010,
                    "orbitalPeriod": 0.762,
                    "orbitalInclination": 0.3192,
                    "mass": "2.9 * 10^18",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7h",
                    "name": "Miranda",
                    "distanceFromParent": 129390,
                    "orbitalPeriod": 1.413,
                    "orbitalInclination": 4.232,
                    "diameter": 471.6,
                    "mass": "6.59 * 10^19",
                    "gravity": 0.079,
                    "surfaceTemps": {
                        "min": -160.15,
                        "max": -189.15,
                        "mean": -213.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7i",
                    "name": "Ariel",
                    "distanceFromParent": 191020,
                    "orbitalPeriod": 2.52,
                    "orbitalInclination": 0.26,
                    "diameter": 1157.8,
                    "mass": "1.353 * 10^21",
                    "gravity": 0.269,
                    "surfaceTemps": {
                        "min": -160.15,
                        "max": -189.15,
                        "mean": -213.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7j",
                    "name": "Umbriel",
                    "distanceFromParent": 266000,
                    "orbitalPeriod": 4.144,
                    "orbitalInclination": 0.205,
                    "diameter": 1169.4,
                    "mass": "1.172 * 10^21",
                    "gravity": 0.2,
                    "surfaceTemps": {
                        "min": -160.15,
                        "max": -188.15,
                        "mean": -198.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7k",
                    "name": "Titania",
                    "distanceFromParent": 435910,
                    "orbitalPeriod": 8.706,
                    "orbitalInclination": 0.34,
                    "diameter": 1576.8,
                    "mass": "3.527 * 10^21",
                    "gravity": 0.379,
                    "surfaceTemps": {
                        "min": -213.15,
                        "max": -184.15,
                        "mean": -203.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7l",
                    "name": "Oberon",
                    "distanceFromParent": 583520,
                    "orbitalPeriod": 13.463,
                    "orbitalInclination": 0.058,
                    "diameter": 1522.8,
                    "mass": "3.014 * 10^21",
                    "gravity": 0.346,
                    "surfaceTemps": {
                        "min": -203.15,
                        "max": -193.15,
                        "mean": -198.15
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7m",
                    "name": "Francisco",
                    "distanceFromParent": 4276000,
                    "orbitalPeriod":"−266.56",
                    "orbitalInclination": 147.459,
                    "diameter": 22,
                    "mass": "0.0072 * 10^21",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7n",
                    "name": "Caliban",
                    "distanceFromParent": 7230000,
                    "orbitalPeriod":"−579.5",
                    "orbitalInclination": 139.885,
                    "diameter": 72,
                    "mass": "0.25 * 10^21",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7o",
                    "name": "Stephano",
                    "distanceFromParent": 8002000,
                    "orbitalPeriod": "−676.50",
                    "orbitalInclination": 141.873,
                    "diameter": 32,
                    "mass": "0.022 * 10^21",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7p",
                    "name": "Margaret",
                    "distanceFromParent": 14345000,
                    "orbitalPeriod": 1694.8,
                    "orbitalInclination": 51.455,
                    "diameter": 20,
                    "mass": "0.0054 * 10^21",
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7q",
                    "name": "Bianca",
                    "diameter": 51,
                    "mass": "0.092 * 10^18",
                    "distanceFromParent": 59170,
                    "orbitalPeriod": 0.434579,
                    "orbitalInclination": 0.193,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7r",
                    "name": "Desdemona",
                    "diameter": 64,
                    "mass": "0.18 * 10^18",
                    "distanceFromParent": 62680,
                    "orbitalPeriod": 0.47365,
                    "orbitalInclination": 0.11125,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7s",
                    "name": "Rosalind",
                    "diameter": 72,
                    "mass": "0.25 * 10^18",
                    "distanceFromParent": 69940,
                    "orbitalPeriod": 0.55846,
                    "orbitalInclination": 0.279,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7t",
                    "name": "Cupid",
                    "diameter": 18,
                    "mass": "0.0038 * 10^18",
                    "distanceFromParent": 74800,
                    "orbitalPeriod": 0.618,
                    "orbitalInclination": 0.1,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7u",
                    "name": "Perdita",
                    "diameter": 30,
                    "mass": "0.018 * 10^18",
                    "distanceFromParent": 76400,
                    "orbitalPeriod": 0.638,
                    "orbitalInclination": 0,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7v",
                    "name": "Mab",
                    "diameter": 25,
                    "mass": "0.01 * 10^18",
                    "distanceFromParent": 97700,
                    "orbitalPeriod": 0.923,
                    "orbitalInclination": 0.1335,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7w",
                    "name": "Trinculo",
                    "diameter": 18,
                    "mass": "0.0039 * 10^18",
                    "distanceFromParent": 8571000,
                    "orbitalPeriod": "-758.10",
                    "orbitalInclination": 166.252,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7x",
                    "name": "Sycorax",
                    "diameter": 165,
                    "mass": "2.3 * 10^18",
                    "distanceFromParent": 12179000,
                    "orbitalPeriod": "-1283.4",
                    "orbitalInclination": 152.456,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "7y",
                    "name": "Prospero",
                    "diameter": 50,
                    "mass": "0.085 * 10^18",
                    "distanceFromParent": 16418000,
                    "orbitalPeriod": "-1992.8",
                    "orbitalInclination": 146.017,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/uranus.jpg"
                }
            }
        },
        {
            "id": 8,
            "name": "Neptune",
            "mass": 102,
            "diameter": 49528,
            "density": 1638,
            "gravity": 11,
            "rotationPeriod": 16.1,
            "lengthOfDay": 16.1,
            "distanceFromParent": 4495100000,
            "orbitalPeriod": 59800,
            "orbitalVelocity": 5.4,
            "orbitalInclination": 1.8,
            "axialTilt": 28.3,
            "orbitPositionOffset": 62885,
            "meanTemperature": -200,
            "surfaceTemps": {
                "min": null,
                "mean": 59,
                "max": null
            },
            "rings": false,
            "satellites": [
                {
                    "id": "8a",
                    "name": "Naiad",
                    "diameter": 66,
                    "mass": "19 * 10^16",
                    "distanceFromParent": 48227,
                    "orbitalPeriod": 0.294,
                    "orbitalInclination": 4.75,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8b",
                    "name": "Thalassa",
                    "diameter": 82,
                    "mass": "35 * 10^16",
                    "distanceFromParent": 50074,
                    "orbitalPeriod": 0.311,
                    "orbitalInclination": 0.135,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8c",
                    "name": "Despina",
                    "diameter": 150,
                    "mass": "210 * 10^16",
                    "distanceFromParent": 52526,
                    "orbitalPeriod": 0.335,
                    "orbitalInclination": 0.216,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8d",
                    "name": "Galatea",
                    "diameter": 176,
                    "mass": "375 * 10^16",
                    "distanceFromParent": 61953,
                    "orbitalPeriod": 0.429,
                    "orbitalInclination": 0.052,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8e",
                    "name": "Larissa",
                    "diameter": 194,
                    "mass": "495 * 10^16",
                    "distanceFromParent": 73548,
                    "orbitalPeriod": 0.555,
                    "orbitalInclination": 0.251,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8f",
                    "name": "Triton",
                    "distanceFromParent": 354759,
                    "orbitalPeriod": -5.877,
                    "orbitalInclination": 156.885,
                    "diameter": 2706.8,
                    "mass": "2.14 * 10^22",
                    "gravity": 0.779,
                    "surfaceTemps": {
                        "min": -235,
                        "max": -235,
                        "mean": -235
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8g",
                    "name": "Nereid",
                    "distanceFromParent": 5513787,
                    "orbitalPeriod": 360.14,
                    "orbitalInclination": 32.55,
                    "diameter": 340,
                    "mass": "2.14 * 10^16",
                    "gravity": 0.002,
                    "surfaceTemps": {
                        "min": -223,
                        "max": -223,
                        "mean": -223
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8h",
                    "name": "Proteus",
                    "distanceFromParent": 117647,
                    "orbitalPeriod": 1.122,
                    "orbitalInclination": 0.524,
                    "diameter": 420,
                    "mass": "4.4 * 10^19",
                    "gravity": 0.07,
                    "surfaceTemps": {
                        "min": -222,
                        "max": -222,
                        "mean": -222
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8i",
                    "name": "Halimede",
                    "diameter": 62,
                    "mass": "16 * 10^16",
                    "distanceFromParent": 16611000,
                    "orbitalPeriod": "−1879.08",
                    "orbitalInclination": 112.898,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8j",
                    "name": "Sao",
                    "diameter": 44,
                    "mass": "6 * 10^16",
                    "distanceFromParent": 22228000,
                    "orbitalPeriod": 2912.72,
                    "orbitalInclination": 53.483,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8k",
                    "name": "Laomedeia",
                    "diameter": 42,
                    "mass": "5 * 10^16",
                    "distanceFromParent": 23567000,
                    "orbitalPeriod": 3171.33,
                    "orbitalInclination": 34.049,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8l",
                    "name": "Psamathe",
                    "diameter": 40,
                    "mass": "4 * 10^16",
                    "distanceFromParent": 48096000,
                    "orbitalPeriod": "-9074.30",
                    "orbitalInclination": 137.679,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "8m",
                    "name": "Neso",
                    "diameter": 60,
                    "mass": "15 * 10^16",
                    "distanceFromParent": 49285000,
                    "orbitalPeriod": "-9740.73",
                    "orbitalInclination": 131.265,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/neptune.jpg"
                }
            }
        },
        {
            "id": 9,
            "name": "Pluto",
            "mass": 102,
            "diameter": 2374,
            "density": 1638,
            "gravity": 11,
            "rotationPeriod": 16.1,
            "lengthOfDay": 6.39,
            "distanceFromParent": 5874000000,
            "orbitalPeriod": 90570,
            "orbitalVelocity": 4.67,
            "orbitalInclination": 17.2,
            "axialTilt": 119.59,
            "orbitPositionOffset": 20,
            "meanTemperature": -229,
            "surfaceTemps": {
                "min": 40,
                "mean": 45,
                "max": 50
            },
            "rings": false,
            "satellites": [
                {
                    "id": "9a",
                    "name": "Charon",
                    "distanceFromParent": 19571,
                    "orbitalPeriod": 6.387,
                    "orbitalInclination": 0.001,
                    "diameter": 1212,
                    "mass": "1.586 * 10^21",
                    "gravity": 0.288,
                    "surfaceTemps": {
                        "min": -220,
                        "max": -220,
                        "mean": -220
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "9b",
                    "name": "Styx",
                    "diameter": 7,
                    "mass": null,
                    "distanceFromParent": 42656,
                    "orbitalPeriod": 20.161,
                    "orbitalInclination": 0.81,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "9c",
                    "name": "Nix",
                    "distanceFromParent": 48694,
                    "orbitalPeriod": 24.85,
                    "orbitalInclination": 0.133,
                    "diameter": 54,
                    "mass": "4.5 * 10^16",
                    "gravity": 0.001,
                    "surfaceTemps": {
                        "min": -240,
                        "max": -218,
                        "mean": -231
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "9d",
                    "name": "Kerberos",
                    "diameter": 12,
                    "mass": null,
                    "distanceFromParent": 57783,
                    "orbitalPeriod": 32.168,
                    "orbitalInclination": 0.389,
                    "gravity": null,
                    "surfaceTemps": {
                        "min": null,
                        "max": null,
                        "mean": null
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                },
                {
                    "id": "9e",
                    "name": "Hydra",
                    "distanceFromParent": 64738,
                    "orbitalPeriod": 38.2,
                    "orbitalInclination": 0.242,
                    "diameter": 41,
                    "mass": "4.8 * 10^16",
                    "gravity": 0.001,
                    "surfaceTemps": {
                        "min": -240,
                        "max": -218,
                        "mean": -231
                    },
                    "_3d": {
                        "textures": {
                            "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
                            "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
                        }
                    }
                }
            ],
            "_3d": {
                "textures": {
                    "base": "/src/assets/textures/pluto.jpg"
                }
            }
        }
    ],
    // "dwarfPlanets": [
    //     {
    //         "id": 10,
    //         "name": "Ceres",
    //         "mass": "9.47 * 10^20",
    //         "diameter": 952.4,
    //         "density": 2.09,
    //         "gravity": 0.28,
    //         "rotationPeriod": 9.0,
    //         "lengthOfDay": 9.0,
    //         "distanceFromParent": 413690250,
    //         "orbitalPeriod": 1681.6,
    //         "orbitalVelocity": 17.878,
    //         "orbitalInclination": 9.647,
    //         "axialTilt": 4.0,
    //         "surfaceTemps": {
    //             "min": null,
    //             "mean": 168,
    //             "max": 235
    //         },
    //         "rings": false,
    //         "satellites": [],
    //         "_3d": {
    //             "textures": {
    //                 "base": "/src/assets/textures/ceres.png"
    //             }
    //         }
    //     },
    //     {
    //         "id": 11,
    //         "name": "Eris",
    //         "mass": "1.66 * 10^22",
    //         "diameter": 2326,
    //         "density": 2.52,
    //         "gravity": 0.82,
    //         "rotationPeriod": 25.9,
    //         "lengthOfDay": 25.9,
    //         "distanceFromParent": 10166000000,
    //         "orbitalPeriod": 203830,
    //         "orbitalVelocity": 3.4338,
    //         "orbitalInclination": 44.04,
    //         "axialTilt": 0,
    //         "meanTemperature": null,
    //         "surfaceTemps": {
    //             "min": 30,
    //             "mean": 42.5,
    //             "max": 55
    //         },
    //         "rings": false,
    //         "satellites": [],
    //         "_3d": {
    //             "textures": {
    //                 "base": "/src/assets/textures/pluto.jpg"
    //             }
    //         }
    //     },
    //     {
    //         "id": 12,
    //         "name": "Haumea",
    //         "mass": "4.006 * 10^21",
    //         "diameter": 1436,
    //         "density": 2.6,
    //         "gravity": 0.63,
    //         "rotationPeriod": 3.9155,
    //         "lengthOfDay": 3.9155,
    //         "distanceFromParent": 6166212800,
    //         "orbitalPeriod": 103774,
    //         "orbitalVelocity": 4.53,
    //         "orbitalInclination": 28.19,
    //         "axialTilt": 0,
    //         "meanTemperature": null,
    //         "surfaceTemps": {
    //             "min": 50,
    //             "mean": 50,
    //             "max": 50
    //         },
    //         "rings": false,
    //         "satellites": [
    //             {
    //                 "id": 12.1,
    //                 "name": "Namaka",
    //                 "distanceFromParent": 25657,
    //                 "orbitalPeriod": 18.278,
    //                 "orbitalInclination": 113.013,
    //                 "diameter": 170,
    //                 "mass": "1.79 * 10^18",
    //                 "gravity": 0.001,
    //                 "surfaceTemps": {
    //                     "min": 29,
    //                     "max": 32,
    //                     "mean": 35
    //                 },
    //                 "_3d": {
    //                     "textures": {
    //                         "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
    //                         "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
    //                     }
    //                 }
    //             },
    //             {
    //                 "id": 12.2,
    //                 "name": "Hiʻiaka",
    //                 "distanceFromParent": 49880,
    //                 "orbitalPeriod": 49.462,
    //                 "orbitalInclination": 126.356,
    //                 "diameter": 310,
    //                 "mass": "1.79 * 10^19",
    //                 "gravity": 0.001,
    //                 "surfaceTemps": {
    //                     "min": 29,
    //                     "max": 32,
    //                     "mean": 35
    //                 },
    //                 "_3d": {
    //                     "textures": {
    //                         "base": "/src/assets/textures/earth/satellites/moon_1k.jpg",
    //                         "topo": "/src/assets/textures/earth/satellites/moon_topo_1k.jpg"
    //                     }
    //                 }
    //             }
    //         ],
    //         "_3d": {
    //             "textures": {
    //                 "base": "/src/assets/textures/pluto.jpg"
    //             }
    //         }
    //     },
    //     {
    //         "id": 13,
    //         "name": "Makemake",
    //         "mass": "3 * 10^21",
    //         "diameter": 1440,
    //         "density": 2.6,
    //         "gravity": null,
    //         "rotationPeriod": 7.771,
    //         "lengthOfDay": 7.771,
    //         "distanceFromParent": 6838867000,
    //         "orbitalPeriod": 112897,
    //         "orbitalVelocity": 4.419,
    //         "orbitalInclination": 29,
    //         "axialTilt": null,
    //         "meanTemperature": null,
    //         "surfaceTemps": {
    //             "min": 32,
    //             "mean": 38,
    //             "max": 44
    //         },
    //         "rings": false,
    //         "satellites": [],
    //         "_3d": {
    //             "textures": {
    //                 "base": "/src/assets/textures/pluto.jpg"
    //             }
    //         }
    //     }
    // ],
    // "asteroidBelt": {
    //     "count": 5000,
    //     "distanceFromParent": {
    //         "min": 344100000,
    //         "max": 493700000
    //     },
    //     "_3d": {
    //         "textures": {
    //             "base": "/src/assets/textures/pluto.jpg"
    //         }
    //     }
    // },
    // "kuiperBelt": {
    //     "diameter": 14959787070,
    //     "radius": 7479893535,
    //     "count": 10000,
    //     "distanceFromParent": {
    //         "min": 4638000000,
    //         "max": 7480000000
    //     },
    //     "_3d": {
    //         "textures": {
    //             "base": "/src/assets/textures/pluto.jpg"
    //         }
    //     }
    // }
}