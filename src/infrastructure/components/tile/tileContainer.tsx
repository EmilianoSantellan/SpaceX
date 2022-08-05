import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Tile from './tile';

const TileContainer = (props: any) => {
    const children = props.tiles;
    console.log(children);
    return (
        <View style={styles.container}>
            {
                children.map((item: any) => {
                    return <Tile 
                            x={item.x} 
                            y={item.y} 
                            value={item.value} 
                            key={item.prog} 
                            />
                })
            }
        </View>
    )
}

export default TileContainer;