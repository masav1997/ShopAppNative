import React from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

const viewStyle = {
	width: '100%',
	height: 'auto',
	backgroundColor: '#FFFFFF',
	padding: 24,
	position: 'relative',
	bottom: 0,
	alignItems: 'center',
	marginTop: 50,
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

export default class AboutCard extends React.Component {
	render() {
		const { img, title, onPress, type, oldPrice, newPrice } = this.props;
		return (
			<TouchableOpacity
				style={{
					flex: 6,
					width: 145,
					height: 221,
					backgroundColor: '#FFFFFF',
					borderRadius: 16,
					marginRight: 5,
					alignItems: 'center',
					paddingHorizontal: 8,
				}}
				onPress={onPress}
			>
				<Image source={img} style={{ width: 160, height: 160, marginTop: 24 }} />
			</TouchableOpacity>
		);
	}
}
