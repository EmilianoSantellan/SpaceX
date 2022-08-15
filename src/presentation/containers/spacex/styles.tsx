import { StyleSheet } from 'react-native';
import Dimensions from '../../../application/utils/dimensions';
import colors from '../../../application/common/colors';
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        backgroundColor: colors.background,
        paddingHorizontal: Dimensions.size["5"],
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
    gameContainer: {
        flex: 1, 
        flexDirection: 'column'
    },
    heading: {
        flex: 2, 
        justifyContent: 'flex-end'
    },
    above: {
        flex: 1, 
        justifyContent: 'center'
    }, 
    game: {
        flex: 7, 
        justifyContent: 'center'
    }
});