import React from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';
import InputForm from '../components/InputForm';

const viewStyle = {
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
};

const titleTextStyle = { fontSize: 13, textAlign: 'center', color: '#7285A4' };

const viewStyle1 = { backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12 };

const labelTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	marginTop: 24,
};

const inputStyle = {
	height: 64,
	borderWidth: 0,
	width: '100%',
	backgroundColor: '#F3F6F7',
	fontSize: 13,
	borderRadius: 8,
	marginRight: 3,
	marginTop: 4,
};

const viewStyle2 = {
	width: '100%',
	height: 1,
	backgroundColor: '#E4E8ED',
	marginTop: 12,
};

const imgStyle = { width: 265, height: 38, alignSelf: 'center' };

export default class CallMe extends React.Component {
	render() {
		return (
			<ScrollView style={viewStyle1}>
				<View style={viewStyle}>
					<Text style={titleTextStyle}>Заполните поля чтобы заказать обратный звонок</Text>
					<InputForm title="Имя" />
					<InputForm title="Телефон" />
					<InputForm title="Удобное время звонка" />
					<InputForm title="Email" />
					<InputForm title="Номер заказа" />
					<Text style={labelTextStyle}>Сообщение</Text>
					<TextInput style={inputStyle} />
					<View style={viewStyle2} />
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('MainPage')}
						style={{ marginTop: 16 }}
					>
						<Image source={require('../assets/icons/callme_button.png')} style={imgStyle} />
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
