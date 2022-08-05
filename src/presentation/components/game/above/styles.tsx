import { StyleSheet } from 'react-native';
import Dimensions from '../../../../application/utils/dimensions';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: Dimensions.size["5"],
        marginBottom: Dimensions.size["5"],
    },
    textContainer: {
        flex: 1,
        marginRight: Dimensions.size["4"],
    },
    text: {
        color: '#D5E4CF',
        fontSize: Dimensions.size["6"],
        lineHeight: Dimensions.size["8"],
    },
    boldText: {
        fontWeight: 'bold',
    },
    newGameContainer: {
        backgroundColor: '#66acff',
        paddingHorizontal: Dimensions.size["4"],
        paddingVertical: Dimensions.size["4"],
        borderRadius: Dimensions.size["2"],
        justifyContent: 'center'
    },
    newGame: {
        color: '#fff',
        fontSize: Dimensions.size["6"],
        lineHeight: Dimensions.size["8"]
    }
});