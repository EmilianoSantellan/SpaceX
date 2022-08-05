import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Tile from './tile';

const TileContainer = (props: any) => {
    const children = props.tiles;
    return (
        <View style={styles.container}>
            {
                children.map((item: any, index: number) => {
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