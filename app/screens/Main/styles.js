import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        backgroundColor: '#3c77c5',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textTestItem: {
        fontSize: 30,
	    color: 'blue',
	    fontWeight: 'bold'
    }
});