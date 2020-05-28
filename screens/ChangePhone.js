import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import InputForm from '../components/InputForm';

const viewStyle = { backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12 };

const titleTextStyle = { fontSize: 13, textAlign: 'center', color: '#7285A4' };

const viewStyle1 = {
	alignSelf: 'center',
	marginTop: 50,
	backgroundColor: '#FFFFFF',
	borderRadius: 16,
	paddingRight: 15,
	paddingLeft: 15,
	paddingTop: 32,
	width: '100%',
	height: 400,
};

const touchStyle = { flex: 1, alignSelf: 'center', alignItems: 'flex-start' };

const textStyle = {
	fontSize: 13,
	color: '#043E85',
	marginTop: 52,
	marginLeft: 10,
	fontWeight: '600',
};

const viewStyle2 = {
	width: '100%',
	height: 1,
	backgroundColor: '#E4E8ED',
	marginTop: 12,
};

const imgStyle = { width: 265, height: 38, alignSelf: 'center' };

export default class ChangePhone extends React.Component {
	render() {
		return (
			<View style={viewStyle}>
				<View style={viewStyle1}>
					<Text style={titleTextStyle}>
						Для смены номера телефона, на текущий номер телефона придет смс с кодом
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputForm title="Код из смс старого телефона" />
						</View>
						<TouchableOpacity style={touchStyle}>
							<Text style={textStyle}>Выслать код</Text>
						</TouchableOpacity>
					</View>
					<InputForm title="Новый номер телефона" />
					<View
						style={{
							width: '100%',
							height: 1,
							backgroundColor: '#E4E8ED',
							marginTop: 12,
						}}
					/>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<InputForm title="Код из смс" />
						</View>
						<TouchableOpacity style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-start' }}>
							<Text style={textStyle}>Выслать код</Text>
						</TouchableOpacity>
					</View>
					<View style={viewStyle2} />
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('Profile')}
						style={{ marginTop: 16 }}
					>
						<Image source={require('../assets/icons/savenum_button.png')} style={imgStyle} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
