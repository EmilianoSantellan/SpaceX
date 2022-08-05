import React from 'react';
import { View, Text } from 'react-native';
import MSG from '../../../application/common/messages';
import { styles } from './styles';

const Heading = (props: any) => {
    return (
        <View style={styles.heading}>
            <Text style={styles.headingTitle}>{MSG.HEADING.NAME}</Text>
            <View style={styles.scores}>
                <View style={[styles.container, styles.containerScores]}>
                    <Text style={styles.containerTitle}>{MSG.HEADING.SCORE}</Text>
                    <Text style={styles.containerValue}>{props.score}</Text>
                </View>
                <View style={[styles.container, styles.containerBest]}>
                    <Text style={styles.containerTitle}>{MSG.HEADING.BEST_SCORE}</Text>
                    <Text style={styles.containerValue}>{props.best}</Text>
                </View>
            </View>
        </View>
    );
};

export default Heading;