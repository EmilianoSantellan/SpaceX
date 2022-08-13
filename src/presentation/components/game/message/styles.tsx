import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import D from '../../../../application/utils/dimensions';
import Colors from '../../../../application/common/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: Colors.background,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wonContainer: {
        // backgroundColor: Colors.primaryVariant,
    },
    overContainer: {
        // backgroundColor: Colors.primary,
    },
    row: {
        width: width - 40,
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: { width: 200, height: 200, marginTop: 20 },
    imageBackground: { flex: 1, justifyContent: "center" },
    title: {
        fontSize: D.size["18"],
        color: 'white',
        textAlign: 'center',
    },
    font: {
        fontFamily: 'Cartoon Fun',
    },
    score: {
        fontSize: D.size["12"]
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
        justifyContent:'center',
        backgroundColor: '#8f7a66'
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
        backgroundColor: '#FF5959',
    }
});