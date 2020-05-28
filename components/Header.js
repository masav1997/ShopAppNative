import React from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modal';
const { width, height } = Dimensions.get('window');

const viewStyle = {
	flexDirection: 'row',
	width: '100%',
	height: 85,
	backgroundColor: '#FFFFFF',
	padding: 12,
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
	width: 208,
	height: 32,
	marginTop: 10,
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

const imgSearchStyle = {
	width: 16,
	height: 16,
	marginRight: 6,
};

export default class Header extends React.Component {
	state = {
		isModalVisible: false,
		isModalVisible1: false,
		isModalVisible2: false,
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	toggleModal2 = () => {
		this.setState({ isModalVisible2: !this.state.isModalVisible2 });
	};
	render() {
		const { phone, up, to, onPress1, onPress2, onPress3, onCall } = this.props;
		return (
			<View style={viewStyle}>
				<View style={{ flex: 9 }}>
					<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
						onPress={onCall}>
						<Image source={require('../assets/icons/phone.png')} style={phoneStyle} />
						<Text style={textPhoneStyle}>{phone}</Text>
						<Text style={textTimeStyle}>
							с {up} до {to}
						</Text>
					</TouchableOpacity>
					<Image source={require('../assets/icons/logo.png')} style={imgLogoStyle} />
				</View>
				<TouchableOpacity style={touchBurgerStyle} onPress={this.toggleModal}>
					<Image source={require('../assets/icons/burger.png')} style={imgBurgerStyle} />
				</TouchableOpacity>
				<Modal
					isVisible={this.state.isModalVisible}
					style={{
						backgroundColor: 'white',
						marginLeft: 0,
						marginTop: 0,
						marginBottom: 0,
						width: width / 1.4,
						alignItems: undefined,
						justifyContent: undefined,
						padding: 13,
					}}
					onBackdropPress={this.toggleModal}
				>
					<TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50 }} onPress={this.toggleModal}
						onPressIn={(this.toggleModal, onCall)}>
						<Image source={require('../assets/icons/phone.png')} style={phoneStyle} />
						<Text style={textPhoneStyle}>{phone}</Text>
						<Text style={textTimeStyle}>
							с {up} до {to}
						</Text>
					</TouchableOpacity>
					<View style={{ alignSelf: 'center' }}>
						<Image source={require('../assets/icons/logo.png')} style={imgLogoStyle} />
					</View>
					<View
						style={{
							width: '100%',
							height: 'auto',
							backgroundColor: '#F3F6F7',
							borderRadius: 8,
							marginTop: 26,
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
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignSelf: 'flex-start',
							justifyContent: 'center',
							marginTop: 32,
						}}
						onPress={this.toggleModal}
						onPressIn={(this.toggleModal, onPress1)}
					>
						<Image
							source={require('../assets/icons/catalog.png')}
							style={{ width: 32, height: 32, marginRight: 5 }}
						/>
						<Text style={{ fontSize: 11, color: '#1E264E', fontWeight: '500', alignSelf: 'center' }}>
							Каталог
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignSelf: 'flex-start',
							justifyContent: 'center',
							marginTop: 32,
						}}
						onPress={this.toggleModal}
						onPressIn={(this.toggleModal, onPress2)}
					>
						<Image
							source={require('../assets/icons/basket.png')}
							style={{ width: 24, height: 24, marginRight: 5 }}
						/>
						<View>
							<Text style={{ fontSize: 11, color: '#1E264E', fontWeight: '500', alignSelf: 'center' }}>
								Корзина (5)
							</Text>
							<Text
								style={{
									fontSize: 11,
									color: '#7285A4',
									fontWeight: 'normal',
									alignSelf: 'flex-start',
								}}
							>
								152,058₽
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignSelf: 'flex-start',
							justifyContent: 'center',
							marginTop: 32,
						}}
						onPress={this.toggleModal}
						onPressIn={(this.toggleModal, onPress3)}
					>
						<Image
							source={require('../assets/icons/profile.png')}
							style={{ width: 24, height: 24, marginRight: 5 }}
						/>
						<Text style={{ fontSize: 11, color: '#1E264E', fontWeight: '500', alignSelf: 'center' }}>
							Вход / Регистрация
						</Text>
					</TouchableOpacity>
				</Modal>
				<Modal
					isVisible={this.state.isModalVisible1}
					style={{
						backgroundColor: 'white',
						marginLeft: 0,
						marginTop: 0,
						marginBottom: 0,
						width: width / 1.4,
						alignItems: undefined,
						justifyContent: undefined,
						padding: 13,
					}}
					onBackdropPress={this.toggleModal}
				>
					<View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 50 }}>
						<Image source={require('../assets/icons/phone.png')} style={phoneStyle} />
						<Text style={textPhoneStyle}>{phone}</Text>
						<Text style={textTimeStyle}>
							с {up} до {to}
						</Text>
					</View>
					<View style={{ alignSelf: 'center' }}>
						<Image source={require('../assets/icons/logo.png')} style={imgLogoStyle} />
					</View>
					<View
						style={{
							width: '100%',
							height: 'auto',
							backgroundColor: '#F3F6F7',
							borderRadius: 8,
							marginTop: 26,
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
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignSelf: 'flex-start',
							justifyContent: 'center',
							marginTop: 32,
						}}
						onPress={onPress1}
					>
						<Image
							source={require('../assets/icons/catalog.png')}
							style={{ width: 32, height: 32, marginRight: 5 }}
						/>
						<Text style={{ fontSize: 11, color: '#1E264E', fontWeight: '500', alignSelf: 'center' }}>
							Каталог
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignSelf: 'flex-start',
							justifyContent: 'center',
							marginTop: 32,
						}}
						onPress={onPress2}
					>
						<Image
							source={require('../assets/icons/basket.png')}
							style={{ width: 24, height: 24, marginRight: 5 }}
						/>
						<View>
							<Text style={{ fontSize: 11, color: '#1E264E', fontWeight: '500', alignSelf: 'center' }}>
								Корзина (5)
							</Text>
							<Text
								style={{
									fontSize: 11,
									color: '#7285A4',
									fontWeight: 'normal',
									alignSelf: 'flex-start',
								}}
							>
								152,058₽
							</Text>
						</View>
					</TouchableOpacity>
				</Modal>
			</View>
		);
	}
}
