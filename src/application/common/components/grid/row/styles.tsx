import { StyleSheet } from 'react-native';
import Dimensions from '../../../../utils/dimensions';

const { height, width } = Dimensions.get('window');
const MARGIN_WIDTH = Dimensions.size["2"];
const ITEM_WIDTH = (width - Dimensions.size["10"] - MARGIN_WIDTH * 10) / 4;

export const styles = StyleSheet.create({
    container: {
        height: ITEM_WIDTH,
        marginVertical: Dimensions.size["2"],
        flexDirection: 'row',
    }
});