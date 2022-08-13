import React from 'react';
import { View, Text, Image } from 'react-native';
// import { SvgUri } from 'react-native-svg';
import { styles } from './styles';
import { getPlanet } from '../../../application/common/planets';
import Dimensions from '../../../application/utils/dimensions';
import { ITile } from '../../../application/interfaces';
const { width } = Dimensions.get('window')

const MARGIN_WIDTH = Dimensions.size["2"];
const ITEM_WIDTH = (width - Dimensions.size["10"] - MARGIN_WIDTH * 10) / 4;

const Tile = (props: ITile) => {
    const tilePositionStyle = {
        left: props.x * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
        top: props.y * (ITEM_WIDTH + MARGIN_WIDTH * 2) + MARGIN_WIDTH * 2,
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
    };

    return (
        <View style={[styles.tile, tilePositionStyle]}>
            {/* <Text style={[styles.tileText]}>{props.value}</Text> */}
            <Image style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }} source={getPlanet(props.value)}></Image>
        </View>
    );
};

export default Tile;