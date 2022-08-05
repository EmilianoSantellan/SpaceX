import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { IMessageProps } from '../../../../application/interfaces/message.interface';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';
const { width } = Dimensions.get('window');
class GameMessage extends React.Component<IMessageProps> {
    genMessage() {
        if (this.props.won) {
            return (
                <View style={styles.row}>
                    <Text style={styles.won}>{MSG.GAME_WON.TITLE}</Text>
                    <View style={styles.lower}>
                        <TouchableWithoutFeedback onPress={this.props.onKeepGoing}>
                            <View style={styles.keepGoingContainer}>
                                <Text style={styles.keepGoing}>{MSG.GAME_WON.KEEP_GOING}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        }
        if (this.props.over) {
            return (
                <View style={styles.row}>
                    <Text style={styles.over}>{MSG.GAME_OVER.TITLE}</Text>
                    <View style={styles.lower}>
                        <TouchableWithoutFeedback onPress={this.props.onTryAagin}>
                            <View style={styles.tryAgainContainer}>
                                <Text style={styles.tryAgain}>{MSG.GAME_OVER.TRY_AGAIN}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        }
        return (<View></View>);
    }

    render() {
        const message = this.genMessage();
        const containerStyle = (this.props.won || this.props.over) ? { width: width - 40, height: width - 40 } : { width: 0, height: 0 };
        return (
            <View style={[styles.container, containerStyle]}>{message}</View>
        )
    }
}

export default GameMessage;