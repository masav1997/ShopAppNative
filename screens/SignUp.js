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

export default class SignUp extends React.Component {
	state = {
		isModalVisible1: true,
	};
	toggleModal = () => {
		this.setState({ isModalVisible1: false });
	};
	render() {
		return (
			<View style={{backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12}}>
				<View
					style={{
						alignSelf: 'center',
						marginTop: 50,
						backgroundColor: '#FFFFFF',
						borderRadius: 16,
						paddingRight: 15,
						paddingLeft: 15,
						paddingTop: 32,
						width: '100%',
						height: 500,
					}}
				>
					<Text style={{ fontSize: 13, textAlign: 'center', color: '#7285A4' }}>
					Заполните поля чтобы зарегистрироваться на сайте
					</Text>
					<Text
						style={{
							fontSize: 13,
							color: '#7285A4',
							marginTop: 24,
						}}
					>
						ФИО
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
					<Text
						style={{
							fontSize: 13,
							color: '#7285A4',
							marginTop: 24,
						}}
					>
						Почта
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
					<Text
						style={{
							fontSize: 13,
							color: '#7285A4',
							marginTop: 24,
						}}
					>
						Ваш номер телефона</Text>
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
							>Выслать код
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
					<TouchableOpacity onPress={() => this.props.navigation.navigate('MainPage')} style={{ marginTop: 16 }}>
						<Image
							source={require('../assets/icons/signup_button.png')}
							style={{ width: 265, height: 38, alignSelf: 'center' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-start' }} onPress={() => this.props.navigation.navigate('SignIn')}>
						<Text
							style={{
								fontSize: 13,
								color: '#043E85',
								marginTop: 24,
								marginLeft: 10,
								fontWeight: '600',
							}}
						>
							Войти на сайт
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
