import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Heading = (props: any) => {
    return (
        <View style={styles.heading}>
            <Text style={styles.headingTitle}>Space X</Text>
            <View style={styles.scores}>
                <View style={[styles.container, styles.containerScores]}>
                    <Text style={styles.containerTitle}>PUNTAJE</Text>
                    <Text style={styles.containerValue}>{props.score}</Text>
                </View>
                <View style={[styles.container, styles.containerBest]}>
                    <Text style={styles.containerTitle}>MEJOR</Text>
                    <Text style={styles.containerValue}>{props.best}</Text>
                </View>
            </View>
        </View>
    );
};

export default Heading;