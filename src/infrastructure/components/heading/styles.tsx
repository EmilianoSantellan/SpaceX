import { StyleSheet } from 'react-native';
import Dimensions from '../../../application/utils/dimensions';
import colors from '../../../application/common/colors';

export const styles = StyleSheet.create({
    heading: {
        height: Dimensions.size["20"],
        // marginTop: Dimensions.size["12"],
        flexDirection: 'row',
    },
    headingTitle: {
        flex: 4,
        fontSize: Dimensions.size["10"],
        color: '#FCFBF7',
        // fontWeight: 'bold',
        fontFamily: 'Cartoon Fun',
    },
    scores: {
        flex: 6,
        flexDirection: 'row',
        // justifyContent: 'flex-end',
        // flexWrap: 'wrap',
        // alignItems: 'flex-start',
    },
    container: {
        flex: 1,
        paddingLeft: Dimensions.size["5"],
        paddingRight: Dimensions.size["5"],
        paddingTop: Dimensions.size["2"],
        paddingBottom: Dimensions.size["2"],
        borderRadius: Dimensions.size["2"],
        marginLeft: Dimensions.size["2"],
        height: 50,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerScores: {
        // backgroundColor: '#3473ce'
        backgroundColor: colors.primary
    },
    containerBest: {
        // backgroundColor: '#0cb0c1'
        backgroundColor: colors.primaryVariant
    },
    containerTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: Dimensions.size["3"]
    },
    containerValue: {
        color: '#fff',
        textAlign: 'center',
        fontSize: Dimensions.size["6"],
        fontWeight: 'bold',
    },
});