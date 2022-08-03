import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import GridRow from '../row/gridRow';

const GridContainer = () => {
    return (
        <View style={styles.container}>
            <GridRow />
            <GridRow />
            <GridRow />
            <GridRow />
        </View>
    )
}

export default GridContainer;