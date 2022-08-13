import { StyleSheet } from 'react-native';
import colors from '../../../../application/common/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
    },
    posterImage: {
        width: 200,
        height: 200,
        resizeMode: "cover",
        // borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
});