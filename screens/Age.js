import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const viewStyle = { backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12 };

const viewStyle1 = {
	alignSelf: 'center',
	marginTop: 100,
	backgroundColor: '#FFFFFF',
	borderRadius: 16,
	paddingRight: 15,
	paddingLeft: 15,
	paddingTop: 32,
	width: '100%',
	height: 243,
};

const textStyle = { fontSize: 44, textAlign: 'center', color: '#ED5565', fontWeight: 'bold' };

const textStyle1 = { fontSize: 13, textAlign: 'center', color: '#7285A4' };

const viewStyle2 = {
	width: '100%',
	height: 1,
	backgroundColor: '#E4E8ED',
	marginTop: 12,
};

const imgStyle = { width: 265, height: 38, alignSelf: 'center' };

const touchStyle = { flex: 1, alignSelf: 'center', alignItems: 'flex-start' };

const textStyle2 = {
	fontSize: 13,
	color: '#043E85',
	marginTop: 24,
	marginLeft: 10,
	fontWeight: '600',
};

export default class Age extends React.Component {
	state = {
		isModalVisible1: true,
	};
	toggleModal = () => {
		this.setState({ isModalVisible1: false });
	};
	render() {
		return (
			<View style={viewStyle}>
				<View style={viewStyle1}>
					<Text style={textStyle}>18+</Text>
					<Text style={textStyle1}>Подтвердите, что Вам уже есть 18 лет</Text>
					<View style={viewStyle2} />
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('MainPage')}
						style={{ marginTop: 16 }}
					>
						<Image source={require('../assets/icons/age_button.png')} style={imgStyle} />
					</TouchableOpacity>
					<TouchableOpacity style={touchStyle} onPress={() => this.props.navigation.navigate('MainPage')}>
						<Text style={textStyle2}>Нет, мне меньше 18</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
