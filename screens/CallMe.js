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
	ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

export default class CallMe extends React.Component {
	state = {
		isModalVisible1: true,
	};
	toggleModal = () => {
		this.setState({ isModalVisible1: false });
	};
	render() {
		return (
			<ScrollView style={{ backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12 }}>
				<View
					style={{
						alignSelf: 'center',
						marginTop: 40,
						backgroundColor: '#FFFFFF',
						borderRadius: 16,
						paddingRight: 15,
						paddingLeft: 15,
						paddingTop: 32,
						width: '100%',
						height: 640,
						marginBottom: 50,
					}}
				>
					<Text style={{ fontSize: 13, textAlign: 'center', color: '#7285A4' }}>
						Заполните поля чтобы заказать обратный звонок
					</Text>
					<Text
						style={{
							fontSize: 13,
							color: '#7285A4',
							marginTop: 24,
						}}
					>
						Имя
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
						Телефон
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
						Удобное время звонка
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
						Email
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
						Номер заказа
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
						Сообщение
					</Text>
					<TextInput
						style={{
							height: 64,
							borderWidth: 0,
							width: '100%',
							backgroundColor: '#F3F6F7',
							fontSize: 13,
							borderRadius: 8,
							marginRight: 3,
							marginTop: 4,
						}}
					/>
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
							source={require('../assets/icons/callme_button.png')}
							style={{ width: 265, height: 38, alignSelf: 'center' }}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
