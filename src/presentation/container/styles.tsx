import { StyleSheet } from 'react-native';
import Dimensions from '../../application/utils/dimensions';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        backgroundColor: '#484156',
        paddingHorizontal: Dimensions.size["5"],
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
});