import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import D from '../../../application/utils/dimensions';
import Colors from '../../../application/common/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: Colors.background,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        width: width - 40,
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: D.size["18"],
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Cartoon Fun',
    },
});