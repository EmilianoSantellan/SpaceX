const planets = [
    {
        key: 2,
        name: 'Rocket',
        src: require('../images/rocket.png')
    },
    {
        key: 4,
        name: 'Pluto',
        src: require('../images/pluto.png')
    },
    {
        key: 8,
        name: 'Neptune',
        src: require('../images/neptune.png')
    },
    {
        key: 16,
        name: 'Uranus',
        src: require('../images/uranus.png')
    },
    {
        key: 32,
        name: 'Saturn',
        src: require('../images/saturn.png')
    },
    {
        key: 64,
        name: 'Jupiter',
        src: require('../images/jupiter.png')
    },
    {
        key: 128,
        name: 'Mars',
        src: require('../images/mars.png')
    },
    {
        key: 256,
        name: 'Eart',
        src: require('../images/eart.png')
    },
    {
        key: 512,
        name: 'Venus',
        src: require('../images/venus.png')
    },
    {
        key: 1024,
        name: 'Mercury',
        src: require('../images/mercury.png')
    },
    {
        key: 2048,
        name: 'Sun',
        src: require('../images/sun.png')
    }
];

export default (value: number) => {
    const index = planets.findIndex(x => x.key === value);
    return planets[index];
}