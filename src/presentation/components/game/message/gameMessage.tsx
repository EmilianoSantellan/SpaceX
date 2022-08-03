import React from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
const { width } = Dimensions.get('window');

export interface MessageProps {
    won: boolean;
    over: boolean;
    onKeepGoing: any;
    onTryAagin: any;
}

class GameMessage extends React.Component<MessageProps, {}> {
    genMessage() {
        if (this.props.won) {
            return (
                <View style={styles.row}>
                    <Text style={styles.won}>¡Felicidades, acabas de ganar!</Text>
                    <View style={styles.lower}>
                        <TouchableWithoutFeedback onPress={this.props.onKeepGoing}>
                            <View style={styles.keepGoingContainer}>
                                <Text style={styles.keepGoing}>Sigue adelante</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        }
        if (this.props.over) {
            return (
                <View style={styles.row}>
                    <Text style={styles.over}>Game over!</Text>
                    <View style={styles.lower}>
                        <TouchableWithoutFeedback onPress={this.props.onTryAagin}>
                            <View style={styles.tryAgainContainer}>
                                <Text style={styles.tryAgain}>Intentar otra vez</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            );
        }
        return (<View></View>);
    }

    render() {
        const message = this.genMessage()
        const containerStyle = (this.props.won || this.props.over) ? { width: width - 40, height: width - 40 } : { width: 0, height: 0 }
        return (
            <View style={[styles.container, containerStyle]}>{message}</View>
        )
    }
}

export default GameMessage;