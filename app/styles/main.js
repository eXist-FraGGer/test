import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 0,
		width: width,
		height: height
	},
	textWrapper: {
		backgroundColor: '#fff',
		width: 250,
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10
	},
	text: {
		color: '#000',
		fontSize: 20,
    	fontWeight: 'bold'
	}
});