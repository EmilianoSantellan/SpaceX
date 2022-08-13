import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

// Views
import Slider from '../../components/planets/slider/slider';

class PlanetsContainer extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <Slider />
            </View>
        );
    }
}

export default PlanetsContainer;
