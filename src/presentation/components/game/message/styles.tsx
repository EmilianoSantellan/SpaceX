import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
        backgroundColor: 'rgba(238, 228, 218, 0.5)',
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
    won: {
        fontSize: 60,
        color: '#776E65',
        textAlign: 'center',
    },
    over: {
        fontSize: 60,
        color: '#776E65',
        textAlign: 'center',
    },
    lower: {
        flex: 1,
        height: 120,
    },
    keepGoingContainer: {
        height: 40,
        backgroundColor: '#8f7a66',
        borderRadius: 3,
        paddingHorizontal: 15,
    },
    keepGoing: {
        fontSize: 24,
        color: '#f9f6f2',
        textAlign: 'center',
    },
    tryAgainContainer: {
        height: 40,
        backgroundColor: '#8f7a66',
        borderRadius: 3,
        paddingHorizontal: 15,
    },
    tryAgain: {
        fontSize: 24,
        color: '#f9f6f2',
        textAlign: 'center',
    }
});