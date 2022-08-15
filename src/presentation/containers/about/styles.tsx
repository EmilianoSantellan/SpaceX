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
        justifyContent: "center",
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    astronaut: {
        width: 230,
        height: 300,
        resizeMode: 'cover'
    },
    game: {
        fontSize: Dimensions.size["18"],
        color: '#FCFBF7',
        // fontWeight: 'bold',
        fontFamily: 'Cartoon Fun',
    },
    info: {
        position: 'absolute', bottom: 20
    },
    textInfo: {
        textAlign: 'center',
        fontSize: Dimensions.size["8"],
    },
    textDev: {
        marginTop: 10,
        fontWeight: 'bold'
    }
});