import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';
import { IAboveGameProps } from '../../../../application/interfaces/game.interface';
class AboveGame extends React.Component<IAboveGameProps> {

    render(): React.ReactNode {
        const { onRestart } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{MSG.GAME.INSTRUCTIONS}
                        <Text style={styles.boldText}> {MSG.GAME.OBJECTIVE}</Text>
                    </Text>
                </View>
                <TouchableWithoutFeedback onPress={onRestart}>
                    <View style={styles.newGameContainer}>
                        <Text style={styles.newGame}>{MSG.GAME.NEW_GAME}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default AboveGame;