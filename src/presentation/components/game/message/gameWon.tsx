import React from 'react';
import { Text, View, Modal, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { IGameWonProp } from '../../../../application/interfaces/message.interface';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';

class GameWon extends React.Component<IGameWonProp> {
    render(): React.ReactNode {
        return (
            <Modal animationType="fade" transparent={true} visible={this.props.won}>
                <View style={[styles.container, styles.wonContainer]}>
                    <ImageBackground source={require('../../../../application/images/background.png')} resizeMode="cover" style={styles.imageBackground}>
                        <View style={styles.row}>
                            <Text style={[styles.title, styles.font]}>{MSG.GAME_WON.TITLE}</Text>
                            <Image
                                source={require('../../../../application/images/astronaut2.png')}
                                style={styles.image}
                            />
                            <Text style={[styles.title, styles.font]}>{this.props.score}</Text>
                            <Text style={[styles.title, styles.font, styles.score]}>{MSG.GAME.SCORE}</Text>
                            <View style={styles.lower}>
                                <TouchableOpacity onPress={this.props.onKeepGoing}>
                                    <View style={[styles.buttonContainer]}>
                                        <Text style={styles.textButton}>{MSG.GAME_WON.KEEP_GOING}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </Modal>
        );
    }
}

export default GameWon;