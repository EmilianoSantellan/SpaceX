import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

const AboveGame = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Colisionar los planetas y estrellas hasta obtener el
                    <Text style={styles.boldText}> Planeta Tierra!</Text>
                </Text>
            </View>
            <TouchableWithoutFeedback onPress={props.onRestart}>
                <View style={styles.newGameContainer}>
                    <Text style={styles.newGame}>Nuevo Juego</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default AboveGame;