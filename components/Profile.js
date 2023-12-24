import {
	TouchableOpacity,
	View,
	StyleSheet,
	Text,
	Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default Profile = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={30} color="#fff" />
				</TouchableOpacity>
				<Text style={styles.heading}>My Profile</Text>
			</View>
			<View style={styles.body}>
				<Image style={styles.image} source={require('../assets/rozin.jpg')}></Image>
				<Text style={styles.p}>Muhammad Rozin Asy Syaddad</Text>
				<Text style={styles.p}>120140006</Text>
				<Text style={styles.p}>Pengembangan Aplikasi Mobile RA</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#bbb',
		flex: 1,
		flexDirection: 'row',
		paddingTop: 30,
		paddingBottom: 30,
		height: 100,
	},
	button: {
		left: 20,
		top: 10,
	},
	heading: {
		color: '#fff',
		fontSize: 30,
		marginLeft: 'auto',
		marginRight: 'auto',
		fontWeight: 'bold',
	},

	body: {
		margin: 'auto',
		backgroundColor: 'white',
		borderRadius: '5px',
		padding: 10,
		top: 100,
		textAlign: 'center',
	},
	image: {
		borderRadius: 5,
		margin: 'auto',
		width: 200,
		height: 200,
		marginBottom: 10,
	},
	p: {
		padding: 5,
	},
});