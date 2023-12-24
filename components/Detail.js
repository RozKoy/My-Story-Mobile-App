import * as React from 'react';
import {
	TouchableOpacity,
	View,
	StyleSheet,
	Text,
	Button,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default Detail = ({ navigation }) => {
	const [sound, setSound] = React.useState();

	async function playSound() {
		console.log('Loading Sound');
		const { sound } = await Audio.Sound.createAsync(require('../assets/audio/sound.mp3')
		);
		setSound(sound);

		console.log('Playing Sound');
		await sound.playAsync();
	}

	React.useEffect(() => {
		return sound
			? () => {
					console.log('Unloading Sound');
					sound.unloadAsync();
				}
			: undefined;
	}, [sound]);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" size={30} color="#fff" />
				</TouchableOpacity>
				<Text style={styles.heading}>My Music</Text>
			</View>
			<View style={styles.body}>
				<Text style={styles.text}>Hello!!! My name is Muhammad Rozin Asy Syaddad. I am an Informatics Engineering Student in Institut Teknologi Sumatera with 1+ years of WEB Developer in FullStack Engineering Position</Text>
				<Button title="Play Sound" onPress={playSound} />
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
		marginLeft: 10, 
		marginRight: 10,
		backgroundColor: 'white',
		borderRadius: '5px',
		padding: 10,
		top: 100,
		textAlign: 'center',
	},
	text: {
		marginBottom: 20,
	},
});