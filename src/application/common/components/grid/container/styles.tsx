import { StyleSheet } from 'react-native';
import Dimensions from '../../../../utils/dimensions';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width - Dimensions.size["10"],
        height: width - Dimensions.size["10"],
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        paddingHorizontal: Dimensions.size["2"],
        paddingVertical: Dimensions.size["2"],
        flexDirection: 'column',
    }
});