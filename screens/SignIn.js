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

export default class SignIn extends React.Component {
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
						height: 339,
					}}
				>
					<Text style={{ fontSize: 13, textAlign: 'center', color: '#7285A4' }}>
						Введите ваш номер телефона чтобы войти
					</Text>
					<Text
						style={{
							fontSize: 13,
							color: '#7285A4',
							marginTop: 24,
						}}
					>
						Ваш номер телефона
					</Text>
					<TextInput
						style={{
							height: 32,
							borderWidth: 0,
							width: '100%',
							backgroundColor: '#F3F6F7',
							fontSize: 13,
							borderRadius: 8,
							marginRight: 3,
							marginTop: 4,
						}}
					/>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontSize: 13,
									color: '#7285A4',
									marginTop: 16,
								}}
							>
								Код из смс
							</Text>
							<TextInput
								style={{
									height: 32,
									borderWidth: 0,
									width: '100%',
									backgroundColor: '#F3F6F7',
									fontSize: 13,
									borderRadius: 8,
									marginRight: 3,
									marginTop: 4,
								}}
							/>
						</View>
						<TouchableOpacity style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-start' }}>
							<Text
								style={{
									fontSize: 13,
									color: '#043E85',
									marginTop: 32,
									marginLeft: 10,
									fontWeight: '600',
								}}
							>
								Выслать код
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							width: '100%',
							height: 1,
							backgroundColor: '#E4E8ED',
							marginTop: 12,
						}}
					/>
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('Profile')}
						style={{ marginTop: 16 }}
					>
						<Image
							source={require('../assets/icons/signin_button.png')}
							style={{ width: 265, height: 38, alignSelf: 'center' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-start' }}
						onPress={() => this.props.navigation.navigate('SignUp')}
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
							Зарегистрироваться
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
