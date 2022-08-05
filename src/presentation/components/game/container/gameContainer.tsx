import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import GameMessage from '../message/gameMessage';
import GridContainer from '../../../../infrastructure/components/grid/container/gridContainer';
import TileContainer from '../../../../infrastructure/components/tile/tileContainer';

import { IGame } from '../../../../application/interfaces/game.interface'

class GameContainer extends React.Component<IGame> {
    render(): React.ReactNode {
        const { tiles = [], won, over, onKeepGoing, onTryAagin } = this.props;
        return (
            <View style={styles.container}>
                <GridContainer />
                <TileContainer tiles={tiles} />
                <GameMessage
                    won={won}
                    over={over}
                    onKeepGoing={onKeepGoing}
                    onTryAagin={onTryAagin}
                />
            </View>
        );
    }
}

export default GameContainer;