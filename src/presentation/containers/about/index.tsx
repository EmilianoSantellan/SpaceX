import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { styles } from './styles';
import MSG from '../../../application/common/messages';

class AboutContainer extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../application/images/background.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.content}>
                        <Image style={styles.astronaut} source={require('../../../application/images/astronaut.png')} />
                        <Text style={styles.game}>
                            {MSG.HEADING.NAME}
                        </Text>
                        <View style={styles.info}>
                            <Text style={styles.textInfo}>
                                {MSG.ABOUT.INFO}
                            </Text>
                            <Text style={[styles.textInfo, styles.textDev]}>
                                {MSG.ABOUT.INFO_DEVELOPER}
                            </Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default AboutContainer;
