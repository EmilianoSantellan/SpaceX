import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { IGameWonProp } from '../../../../application/interfaces/message.interface';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';

class GameWon extends React.Component<IGameWonProp> {
    render(): React.ReactNode {
        return (
            <Modal animationType="slide" transparent={true} visible={this.props.won}>
                <View style={[styles.container]}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{MSG.GAME_WON.TITLE}</Text>
                        <View style={styles.lower}>
                            <TouchableOpacity onPress={this.props.onKeepGoing}>
                                <View style={[styles.buttonContainer, styles.keepGoingContainer]}>
                                    <Text style={styles.textButton}>{MSG.GAME_WON.KEEP_GOING}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default GameWon;