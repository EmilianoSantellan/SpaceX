import React from 'react';
import { View } from 'react-native';
import GridCell from '../cell/gridCell';
import { styles } from './styles';

const GridRow = () => {
    return (
        <View style={styles.container}>
            <GridCell />
            <GridCell />
            <GridCell />
            <GridCell />
        </View>
    )
}

export default GridRow;