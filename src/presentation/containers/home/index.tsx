import React from 'react';
import { View } from 'react-native';
import SpaceX from '../spacex/spacex-container';
import { styles } from './styles';

class HomeContainer extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <SpaceX startTiles={3} size={4} />
            </View>
        );
    }
}

export default HomeContainer;
