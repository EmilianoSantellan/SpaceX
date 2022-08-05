import { StyleSheet } from 'react-native';
import Dimensions from '../../../application/utils/dimensions';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        borderRadius: Dimensions.size["1"],
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    tileText: {
        fontSize: Dimensions.size["14"],
        color: '#776E65',
        textAlign: 'center',
        textAlignVertical: "center",
        flex: 1
    },
    tilesuper: {
        backgroundColor: '#3c3a33',
        fontSize: Dimensions.size["5"]
    },
    tilesuperText: {
        color: '#f9f6f2',
    },
    container: {
        width: width - Dimensions.size["10"],
        height: width - Dimensions.size["10"],
        position: 'absolute',
        left: 0,
        top: 0,
        overflow: 'hidden',
    }
});