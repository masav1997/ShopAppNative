import React from 'react';
import {
	View,
	Dimensions,
	SafeAreaView,
	ImageBackground,
	Image,
	TouchableOpacity,
	Text,
	TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

export default class Age extends React.Component {
	state = {
		isModalVisible1: true,
	};
	toggleModal = () => {
		this.setState({ isModalVisible1: false });
	};
	render() {
		return (
			<View style={{ backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12 }}>
				<View
					style={{
						alignSelf: 'center',
						marginTop: 100,
						backgroundColor: '#FFFFFF',
						borderRadius: 16,
						paddingRight: 15,
						paddingLeft: 15,
						paddingTop: 32,
						width: '100%',
						height: 243,
					}}
				>
					<Text style={{ fontSize: 44, textAlign: 'center', color: '#ED5565', fontWeight: 'bold' }}>18+</Text>
					<Text style={{ fontSize: 13, textAlign: 'center', color: '#7285A4' }}>
						Подтвердите, что Вам уже есть 18 лет
					</Text>
					<View
						style={{
							width: '100%',
							height: 1,
							backgroundColor: '#E4E8ED',
							marginTop: 12,
						}}
					/>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('MainPage')}
						style={{ marginTop: 16 }}
					>
						<Image
							source={require('../assets/icons/age_button.png')}
							style={{ width: 265, height: 38, alignSelf: 'center' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-start' }}
						onPress={() => this.props.navigation.navigate('MainPage')}
					>
						<Text
							style={{
								fontSize: 13,
								color: '#043E85',
								marginTop: 24,
								marginLeft: 10,
								fontWeight: '600',
							}}
						>
							Нет, мне меньше 18
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
