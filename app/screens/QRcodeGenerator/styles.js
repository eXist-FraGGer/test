import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	statusBar: {
		height: 300,
		width: width,
		alignItems: 'center',
		justifyContent: 'center',
	},
	statusBarText: {
		fontSize: 20,
	}
});