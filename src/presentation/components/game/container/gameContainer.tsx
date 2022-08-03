import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import GameMessage from '../message/gameMessage';
import GridContainer from '../../../../application/common/components/grid/container/gridContainer';
import TileContainer from '../../../../application/common/components/tile/tileContainer';

const GameContainer = (props: any) => {
    return (
        <View style={styles.container}>
            <GridContainer />
            <TileContainer tiles={props.tiles} />
            <GameMessage
                won={props.won}
                over={props.over}
                onKeepGoing={props.onKeepGoing}
                onTryAagin={props.onTryAagin}
            />
        </View>
    );
}

export default GameContainer;