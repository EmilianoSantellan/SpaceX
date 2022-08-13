import { IPlanet } from "../interfaces/planet.interface";

export const planets : IPlanet[] = [
    {
        key: 2,
        name: 'Asteroides',
        src: require('../images/asteroid.png')
    },
    {
        key: 4,
        name: 'Plutón',
        src: require('../images/pluto.png'),
        description: `Es el planeta más pequeño del sistema solar, es también el más distante y el más frío.\n\nSu distancia media al Sol es de 5.900.000.000 kilómetros y su temperatura media superficial llega a -238º C.\n\nComposición\nNitrógeno	90 %\nMetano	10%`
    },
    {
        key: 8,
        name: 'Neptuno',
        src: require('../images/neptune.png'),
        description: `Es el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas.\n\nComposición\nHidrógeno	>84 %\nHelio	>12 %\nMetano	2 %\nAmoníaco	0,01 %\nEtano	0,00025 %\nAcetileno	0,00001 %\n\nDistancia media al Sol:	30,05 UA = 4,4951x109 km`
    },
    {
        key: 16,
        name: 'Urano',
        src: require('../images/uranus.png'),
        description: `Es el planeta más pequeño del sistema solar, es también el más distante y el más frío.\n\nSu distancia media al Sol es de 5.900.000.000 kilómetros y su temperatura media superficial llega a -238º C.\n\nComposición\nNitrógeno	90 %\nMetano	10%`
    },
    {
        key: 32,
        name: 'Saturno',
        src: require('../images/saturn.png')
    },
    {
        key: 64,
        name: 'Jupiter',
        src: require('../images/jupiter.png')
    },
    {
        key: 128,
        name: 'Marte',
        src: require('../images/mars.png')
    },
    {
        key: 256,
        name: 'Tierra',
        src: require('../images/eart.png')
    },
    {
        key: 512,
        name: 'Venus',
        src: require('../images/venus.png')
    },
    {
        key: 1024,
        name: 'Mercurio',
        src: require('../images/mercury.png')
    },
    {
        key: 2048,
        name: 'Sol',
        src: require('../images/sun.png')
    }
];

export const getPlanet = (value: number) => {
    const index = planets.findIndex(x => x.key === value);
    return planets[index].src;
}