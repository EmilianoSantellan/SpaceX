import { StyleSheet } from 'react-native';
import Dimensions from '../../../application/utils/dimensions';
import colors from '../../../application/common/colors';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        backgroundColor: colors.background
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
});