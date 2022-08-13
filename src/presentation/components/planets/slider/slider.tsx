import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
    ImageBackground,
    ScrollView
} from "react-native";

// import { styles } from './styles';
import { IPlanet } from '../../../../application/interfaces/planet.interface';
import { planets } from '../../../../application/common/planets';
import { styles } from "./styles";

const { width } = Dimensions.get('window');

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;

export default function Slider() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../../../application/images/background.png')} resizeMode="cover" style={styles.image}>
                <Animated.FlatList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    snapToAlignment="start"
                    contentContainerStyle={{
                        paddingTop: 100,
                        paddingHorizontal: ESPACIO_CONTENEDOR,
                    }}
                    snapToInterval={ANCHO_CONTENEDOR}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    data={planets}
                    keyExtractor={(item: IPlanet) => item.name}
                    renderItem={({ item, index }) => {
                        const inputRange = [
                            (index - 1) * ANCHO_CONTENEDOR,
                            index * ANCHO_CONTENEDOR,
                            (index + 1) * ANCHO_CONTENEDOR,
                        ];

                        const scrollY = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, -50, 0],
                        });

                        return (
                            <View style={{ width: ANCHO_CONTENEDOR }}>
                                <Animated.View
                                    style={{
                                        marginHorizontal: ESPACIO,
                                        padding: ESPACIO,
                                        // borderRadius: 34,
                                        // backgroundColor: colors.background,
                                        alignItems: "center",
                                        transform: [{ translateY: scrollY }],
                                    }}
                                >
                                    <View style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                                        <Image style={styles.posterImage} source={item.src} />
                                        <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                                            {item.name}
                                        </Text>
                                        <ScrollView showsVerticalScrollIndicator={false}>
                                            <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>
                                                {item.description}
                                            </Text>
                                        </ScrollView>
                                    </View>
                                </Animated.View>
                            </View>
                        );
                    }}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}