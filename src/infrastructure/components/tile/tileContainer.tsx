import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Tile from './tile';
import { ITiles, ITile } from '../../../application/interfaces';

const TileContainer = (props: ITiles) => {
    const children = props.tiles;
    return (
        <View style={styles.container}>
            {
                children.map((item: ITile, index: number) => {
                    return <Tile
                        x={item.x}
                        y={item.y}
                        value={item.value}
                        key={index}
                    />
                })
            }
        </View>
    )
}

export default TileContainer;