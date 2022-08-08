import React from 'react';
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { IGameOverProp } from '../../../../application/interfaces/message.interface';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';

class GameOver extends React.Component<IGameOverProp> {
    render(): React.ReactNode {
        return (
            <Modal animationType="slide" transparent={true} visible={this.props.over}>
                <View style={[styles.container]}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{MSG.GAME_OVER.TITLE}</Text>
                        <View style={styles.lower}>
                            <TouchableOpacity onPress={this.props.onTryAagin}>
                                <View style={[styles.buttonContainer, styles.tryAgainContainer]}>
                                    <Text style={styles.textButton}>{MSG.GAME_OVER.TRY_AGAIN}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default GameOver;