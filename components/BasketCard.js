import React from 'react';
import { View, Dimensions, SafeAreaView, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

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

export default class BasketCard extends React.Component {
	render() {
		const { img, title, onPress, type, min, max } = this.props;
		return (
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 1, alignSelf: 'center' }}>
						<Image
							source={img}
							style={{ width: 60, height: 60, alignSelf: 'center' }}
						/>
					</View>
					<View style={{ flex: 3 }}>
						<Text
							style={{
								fontSize: 13,
								color: '#1E264E',
								fontWeight: '500',
								alignSelf: 'flex-start',
							}}
						>
							{title}
						</Text>
						<Text
							style={{
								fontSize: 13,
								color: '#7285A4',
								fontWeight: '500',
								alignSelf: 'flex-start',
								marginTop: 5,
							}}
						>
							{type}
						</Text>
					</View>
					<TouchableOpacity style={{ flex: 1, justifyContent: 'center', height: 'auto' }}>
						<Image
							source={require('../assets/icons/del.png')}
							style={{ width: 22, height: 22, alignSelf: 'flex-end' }}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ flexDirection: 'row', marginTop: 8 }}>
					<View style={{ flex: 1 }}></View>
					<View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
						<Text
							style={{
								fontSize: 13,
								color: '#1E264E',
								fontWeight: 'bold',
								alignSelf: 'center',
								marginRight: 3,
							}}
						>
							{min}
						</Text>
						<TouchableOpacity style={{ justifyContent: 'center', height: 'auto' }}>
							<Image
								source={require('../assets/icons/min.png')}
								style={{ width: 16, height: 16, alignSelf: 'center', marginRight: 3 }}
							/>
						</TouchableOpacity>
						<TextInput
							style={{
								height: 30,
								borderWidth: 1,
								width: 53,
								borderColor: '#C0D0EA',
								fontSize: 13,
								borderRadius: 4,
								marginRight: 3,
							}}
						/>
						<TouchableOpacity style={{ justifyContent: 'center', height: 'auto' }}>
							<Image
								source={require('../assets/icons/plus.png')}
								style={{ width: 16, height: 16, alignSelf: 'center', marginRight: 3 }}
							/>
						</TouchableOpacity>
						<Text
							style={{
								fontSize: 13,
								color: '#1E264E',
								fontWeight: 'bold',
								alignSelf: 'center',
								marginRight: 3,
							}}
						>
							{max}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}
