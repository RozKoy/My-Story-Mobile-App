import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

export default Home = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>My Story</Text>
			</View>
			<View style={styles.body}>
				<TouchableOpacity onPress={() => navigation.navigate('Detail')}>
					<Text style={styles.button}>Play</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
					<Text style={styles.button}>My Profile</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		overflow: 'hidden',
	},

	header: {
		width: '100%',
		backgroundColor: '#bbb',
		padding: 30,
	},
	title: {
		color: '#fff',
		margin: 'auto',
		fontSize: 30,
		fontWeight: 'bold',
	},

	body: {
		margin: 'auto',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#fff',
		borderRadius: '5px',
		padding: 10,
		margin: 5,
		width: 100,
		textAlign: 'center',
	},
});