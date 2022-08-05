import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import D from '../../../../application/utils/dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 15, 0.5)',
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
        fontFamily: 'Retro Gaming',
        fontSize: D.size["18"],
        color: 'white',
        textAlign: 'center',
    },
    lower: {
        flex: 1,
        marginTop: 20,
        height: 120,
    },
    buttonContainer: {
        height: 60,
        borderRadius: 3,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent:'center'
    },
    textButton: {
        fontSize: 24,
        color: '#f9f6f2',
        textAlign: 'center',
    },
    keepGoingContainer: {
        backgroundColor: '#8f7a66',
    },
    tryAgainContainer: {
        backgroundColor: 'red',
    }
});