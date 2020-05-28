import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const titleTextStyle = {
	fontSize: 20,
	color: '#1E264E',
	fontWeight: '600',
	alignSelf: 'flex-start',
	marginLeft: 12,
	marginTop: 16,
};

const descTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	fontWeight: '500',
	alignSelf: 'flex-start',
	marginLeft: 12,
	marginTop: 5,
};

const oldPriceTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	fontWeight: '500',
	alignSelf: 'flex-start',
	marginTop: 12,
	marginLeft: 12,
	textDecorationLine: 'line-through',
};

const newPriceTextStyle = {
	fontSize: 24,
	color: '#FF4C4B',
	fontWeight: 'bold',
	alignSelf: 'flex-start',
	marginTop: 5,
	marginLeft: 12,
};

const viewStyle = {
	flexDirection: 'row',
	justifyContent: 'center',
	paddingHorizontal: 12,
	marginTop: 18,
};

const bonusTextStyle = {
	fontSize: 16,
	color: '#1E264E',
};

export default class AboutDescription extends React.Component {
	render() {
		const { title, description, oldPrice, newPrice, bonus, onPress } = this.props;
		return (
			<View>
				<Text style={titleTextStyle}>{title}</Text>
				<Text style={descTextStyle}>{description}</Text>
				<Text style={oldPriceTextStyle}>{oldPrice}</Text>
				<Text style={newPriceTextStyle}>{newPrice}</Text>
				<View style={viewStyle}>
					<View style={{ flex: 1 }}>
						<Text
							style={{
								fontSize: 13,
								color: '#7285A4',
								fontWeight: '500',
							}}
						>
							Бонусы за покупку:
						</Text>
					</View>
					<View style={{ flex: 1, alignItems: 'flex-end' }}>
						<Text style={bonusTextStyle}>{bonus}</Text>
					</View>
				</View>
				<TouchableOpacity style={{ marginTop: 16, alignSelf: 'center' }} onPress={onPress}>
					<Image source={require('../assets/icons/basket_button1.png')} style={{ width: 295, height: 40 }} />
				</TouchableOpacity>
			</View>
		);
	}
}
