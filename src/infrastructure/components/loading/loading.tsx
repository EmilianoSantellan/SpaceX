import React from 'react';
import { Text, View, Modal, Image } from 'react-native';
import { ILoading } from '../../../application/interfaces/loading.interface';
import MSG from '../../../application/common/messages';
import { styles } from './styles';

class Loading extends React.Component<ILoading> {
    render(): React.ReactNode {
        return (
            <Modal animationType="fade" transparent={true} visible={this.props.show}>
                <View style={[styles.container]}>
                    <View style={styles.row}>
                        <Image
                            source={require('../../../application/images/astronaut1.png')}
                            style={{ width: 200, height: 200 }}
                        />
                        <Text style={[styles.title]}>{MSG.GAME.LOADING}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default Loading;