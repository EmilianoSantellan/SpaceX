import React from 'react';
import { View, Text, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { styles, getStyle } from './styles';
import Dimensions from '../../../utils/dimensions';

const { height, width } = Dimensions.get('window')

const MARGIN_WIDTH = Dimensions.size["2"];
const ITEM_WIDTH = (width - Dimensions.size["10"] - MARGIN_WIDTH * 10) / 4;

const Tile = (props: any) => {
    // const tileStyle = props.value <= 2048 && getStyle(props.value)?.bg ? getStyle(props.value)?.bg : styles['tilesuper'];
    const tilePositionStyle = {
        left: props.x * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
        top: props.y * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
    };
    // const tileTextStyle = props.value <= 2048 && getStyle(props.value)?.text ? getStyle(props.value)?.text : styles['tilesuperText'];

    return (
        <View style={[styles.tile, tilePositionStyle]}>
            {/* <Text style={[styles.tileText, tileTextStyle]}>{props.value}</Text> */}
            <Image style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }} source={getStyle(props.value)?.src}></Image>
        </View>
    );
};

export default Tile;