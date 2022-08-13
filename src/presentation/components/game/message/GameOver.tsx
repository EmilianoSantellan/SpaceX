import React from 'react';
import { Text, View, TouchableOpacity, Modal, ImageBackground, Image } from 'react-native';
import { IGameOverProp } from '../../../../application/interfaces/message.interface';
import MSG from '../../../../application/common/messages';
import { styles } from './styles';

class GameOver extends React.Component<IGameOverProp> {
    render(): React.ReactNode {
        return (
            <Modal animationType="fade" transparent={true} visible={this.props.over}>
                <View style={[styles.container, styles.overContainer]}>
                    <ImageBackground source={require('../../../../application/images/background.png')} resizeMode="cover" style={styles.imageBackground}>
                        <View style={styles.row}>
                            <Text style={[styles.title, styles.font]}>{MSG.GAME_OVER.TITLE}</Text>
                            <Image
                                source={require('../../../../application/images/astronaut3.png')}
                                style={styles.image}
                            />
                            <Text style={[styles.title, styles.font]}>{this.props.score}</Text>
                            <Text style={[styles.title, styles.font, styles.score]}>{MSG.GAME.SCORE}</Text>
                            <View style={styles.lower}>
                                <TouchableOpacity onPress={this.props.onTryAagin}>
                                    <View style={[styles.buttonContainer]}>
                                        <Text style={styles.textButton}>{MSG.GAME_OVER.TRY_AGAIN}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </Modal >
        );
    }
}

export default GameOver;