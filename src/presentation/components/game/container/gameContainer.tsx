import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import GridContainer from '../../../../infrastructure/components/grid/container/gridContainer';
import TileContainer from '../../../../infrastructure/components/tile/tileContainer';

import { IGame } from '../../../../application/interfaces/game.interface'

class GameContainer extends React.Component<IGame> {
    render(): React.ReactNode {
        const { tiles = [] } = this.props;
        return (
            <View style={styles.container}>
                <GridContainer />
                <TileContainer tiles={tiles} />
            </View>
        );
    }
}

export default GameContainer;