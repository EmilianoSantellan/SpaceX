import { IPlanet } from "../interfaces/planet.interface";

export const planets : IPlanet[] = [
    {
        key: 2,
        name: 'Asteroides',
        src: require('../images/asteroid.png'),
        description: `Es un cuerpo celeste rocoso, más pequeño que un planeta y mayor que un meteoroide. La mayoría orbita entre Marte y Júpiter, en la región del sistema solar conocida como cinturón.`
    },
    {
        key: 4,
        name: 'Plutón',
        src: require('../images/pluto.png'),
        description: `Es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón.`
    },
    {
        key: 8,
        name: 'Neptuno',
        src: require('../images/neptune.png'),
        description: `Es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. Forma parte de los denominados planetas exteriores, y dentro de estos, es uno de los gigantes helados, y es el primero que fue descubierto gracias a predicciones matemáticas.`
    },
    {
        key: 16,
        name: 'Urano',
        src: require('../images/uranus.png'),
        description: `Es el séptimo planeta del sistema solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano, el padre de Crono y el abuelo de Zeus.`
    },
    {
        key: 32,
        name: 'Saturno',
        src: require('../images/saturn.png'),
        description: `Es el sexto planeta del sistema solar contando desde el Sol, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde la Tierra. Su nombre proviene del dios romano Saturno. Forma parte de los denominados planetas exteriores o gaseosos.`
    },
    {
        key: 64,
        name: 'Jupiter',
        src: require('../images/jupiter.png'),
        description: `Es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol. Es un gigante gaseoso que forma parte de los denominados planetas exteriores. Recibe su nombre del dios romano Júpiter.`
    },
    {
        key: 128,
        name: 'Marte',
        src: require('../images/mars.png'),
        description: `Es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.`
    },
    {
        key: 256,
        name: 'Tierra',
        src: require('../images/eart.png'),
        description: `Es el tercero que orbita alrededor del Sol (estrella de tipo G2V, quien se encuentra en su juventud de acuerdo con la evolución estelar), es un planeta terrestre metálico, clasificado en esta categoría junto con Mercurio, Venus y Marte debido a la composición de sus núcleos.`
    },
    {
        key: 512,
        name: 'Venus',
        src: require('../images/venus.png'),
        description: `Es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. Al igual que Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor.`
    },
    {
        key: 1024,
        name: 'Mercurio',
        src: require('../images/mercury.png'),
        description: `Es el planeta del sistema solar más cercano al Sol y el más pequeño. Forma parte de los denominados planetas interiores y carece de satélites naturales al igual que Venus.`
    },
    {
        key: 2048,
        name: 'Sol',
        src: require('../images/sun.png'),
        description: `Es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.`
    }
];

export const getPlanet = (value: number) => {
    const index = planets.findIndex(x => x.key === value);
    return planets[index].src;
}