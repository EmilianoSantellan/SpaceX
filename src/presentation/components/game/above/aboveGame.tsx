import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';
import { IAboveGameProps } from '../../../../application/interfaces/game.interface';
class AboveGame extends React.Component<IAboveGameProps> {

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{MSG.GAME.INSTRUCTIONS}
                        <Text style={styles.boldText}> {MSG.GAME.OBJECTIVE}</Text>
                    </Text>
                </View>

                <TouchableOpacity onPress={this.props.onRestart}>
                    <View style={styles.newGameContainer}>
                        <Text style={styles.newGame}>{MSG.GAME.NEW_GAME}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AboveGame;