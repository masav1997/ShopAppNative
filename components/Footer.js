import React from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

const viewStyle = {
	width: '100%',
	height: 'auto',
	backgroundColor: '#FFFFFF',
	padding: 24,
	position: 'relative',
	bottom: 0 ,
	alignItems: 'center',
	marginTop: 50
};

const phoneStyle = {
	width: 12,
	height: 12,
	marginRight: 5,
};

const textPhoneStyle = {
	fontSize: 13,
	color: '#043E85',
	marginRight: 10,
};

const textTimeStyle = {
	fontSize: 11,
	color: '#7285A4',
};

const imgLogoStyle = {
	width: 173,
	height: 32,
	marginTop: 10,
};

const imgSearchStyle = {
	width: 16,
	height: 16,
	marginRight: 6,
};

const touchBurgerStyle = {
	flex: 3,
	alignItems: 'flex-end',
	justifyContent: 'flex-end',
	width: 14,
	height: '100%',
};

const imgBurgerStyle = {
	width: 18,
	height: 14,
	marginRight: 5,
	marginBottom: 11,
};

export default class Footer extends React.Component {
	render() {
		const { phone, up, to } = this.props;
		return (
			<View style={viewStyle}>
				<Image source={require('../assets/icons/logo.png')} style={imgLogoStyle} />
				<View
					style={{
						width: '100%',
						height: 'auto',
						backgroundColor: '#F3F6F7',
						borderRadius: 8,
						marginTop: 10,
						flexDirection: 'row',
						paddingHorizontal: 8,
						paddingVertical: 10,
						alignItems: 'center',
					}}
				>
					<Image source={require('../assets/icons/search.png')} style={imgSearchStyle} />
					<TextInput
						style={{ height: 'auto', borderWidth: 0, width: '90%', color: '#7285A4', fontSize: 13 }}
						placeholder="поиск"
					/>
				</View>
				<View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
					<View style={{ flex: 3, alignItems: 'flex-end', justifyContent: 'center', marginRight: 5 }}>
						<Text style={{ fontSize: 24, color: '#FF4C4B' }}>18+</Text>
					</View>
					<View style={{ flex: 9 }}>
						<Text style={{ fontSize: 13, color: '#5E697F' }}>
							Мы не доставляем алкогольную продукцию людям младше 18 лет
						</Text>
					</View>
				</View>
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Image source={require('../assets/icons/phone.png')} style={phoneStyle} />
					<Text style={textPhoneStyle}>{phone}</Text>
					<Text style={textTimeStyle}>
						с {up} до {to}
					</Text>
				</View>
				<Text style={{fontSize: 13, color:'#1E264E', alignItems: 'center', marginTop: 14}}>newsite@gmail.com</Text>
				<Text style={{fontSize: 13, color:'#1E264E', alignItems: 'center', marginTop: 8}}>115280, Москва, ул. Ленинская, 14 47</Text>
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						alignTop: 16
					}}
				>
					<Image source={require('../assets/icons/telegram.png')} style={{width: 20, height: 20, marginRight: 20}} />
					<Image source={require('../assets/icons/instagram.png')} style={{width: 20, height: 20, marginRight: 20}} />
					<Image source={require('../assets/icons/facebook.png')} style={{width: 20, height: 20, marginRight: 20}} />
					<Image source={require('../assets/icons/twitter.png')} style={{width: 20, height: 20, marginRight: 20}} />
				</View>
			</View>
		);
	}
}
