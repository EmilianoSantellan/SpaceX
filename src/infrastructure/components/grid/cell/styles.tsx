import { StyleSheet } from 'react-native';
import Dimensions from '../../../../application/utils/dimensions';

const { width } = Dimensions.get('window');

const MARGIN_WIDTH = Dimensions.size["2"];
const ITEM_WIDTH = (width - Dimensions.size["10"] - MARGIN_WIDTH * 10) / 4;

export const styles = StyleSheet.create({
    container: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        marginHorizontal: MARGIN_WIDTH,
        backgroundColor: 'rgba(56, 50, 66, 0.35)',
        borderRadius: Dimensions.size["1"]
    }
});