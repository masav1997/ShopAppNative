import React from 'react';
import { View, Dimensions, SafeAreaView, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import InputForm from '../components/InputForm';

const { width } = Dimensions.get('window');

export default class Profile extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView>
					<View
						style={{
							backgroundColor: '#E5E5E5',
							height: '100%',
							width: width,
							alignItems: 'center',
						}}
					>
						<Header
							phone="8 800 112 02 99"
							up="11:00"
							to="20:00"
							onPress1={() => this.props.navigation.navigate('Catalog')}
							onPress2={() => this.props.navigation.navigate('Basket')}
							onPress2={() => this.props.navigation.navigate('Basket')}
							onPress3={() => this.props.navigation.navigate('SignIn')}
							onCall={() => this.props.navigation.navigate('CallMe')}
						/>
						<Text
							style={{
								fontSize: 20,
								color: '#1E264E',
								fontWeight: '600',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginTop: 24,
							}}
						>
							Профиль
						</Text>
						<View
							style={{
								width: width - 24,
								height: 'auto',
								padding: 12,
								backgroundColor: '#FFF',
								borderRadius: 8,
								marginTop: 10,
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									marginTop: 12,
								}}
							>
								<View style={{ flex: 1 }}>
									<Text
										style={{
											fontSize: 13,
											color: '#7285A4',
											fontWeight: '500',
										}}
									>
										Номер телефона:
									</Text>
									<Text
										style={{
											fontSize: 13,
											color: '#1E264E',
											fontWeight: '500',
										}}
									>
										+8 800 112 02 99
									</Text>
								</View>
								<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
									<TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePhone')}>
										<Image
											source={require('../assets/icons/change_phone.png')}
											style={{ width: 96, height: 9 }}
										/>
									</TouchableOpacity>
								</View>
							</View>
							<InputForm title="ФИО" />
							<InputForm title="Почта" />
							<InputForm title="Адрес доставки (город, улица, дом)" />
							<InputForm title="Адрес 2" />
							<InputForm title="Адрес 3" />
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Friendship')}>
								<Image
									source={require('../assets/icons/save_button.png')}
									style={{ width: 277, height: 40, alignSelf: 'center', marginTop: 16 }}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require('../assets/icons/exit_button.png')}
									style={{
										width: 140,
										height: 13,
										alignSelf: 'center',
										marginTop: 32,
										marginBottom: 20,
									}}
								/>
							</TouchableOpacity>
						</View>
						<Text
							style={{
								fontSize: 20,
								color: '#1E264E',
								fontWeight: '600',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginTop: 24,
							}}
						>
							Реф. система
						</Text>
						<View
							style={{
								width: width - 24,
								height: 'auto',
								padding: 12,
								backgroundColor: '#FFF',
								borderRadius: 8,
								marginTop: 10,
							}}
						>
							<Text
								style={{
									fontSize: 13,
									color: '#7285A4',
									fontWeight: '500',
									marginTop: 10,
								}}
							>
								Количество баллов
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: '#1E264E',
									fontWeight: '600',
								}}
							>
								54161
							</Text>
							<Text
								style={{
									fontSize: 13,
									color: '#7285A4',
									fontWeight: '500',
									marginTop: 10,
								}}
							>
								Текущая скидка
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: '#1E264E',
									fontWeight: '600',
								}}
							>
								1%
							</Text>
							<Text
								style={{
									fontSize: 13,
									color: '#7285A4',
									fontWeight: '500',
									marginTop: 10,
								}}
							>
								Баллов до следующего уровня
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: '#1E264E',
									fontWeight: '600',
								}}
							>
								5151
							</Text>
							<Text
								style={{
									fontSize: 13,
									color: '#7285A4',
									fontWeight: '500',
									marginTop: 10,
								}}
							>
								Реферальная ссылка
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: '#1E264E',
									fontWeight: '600',
								}}
							>
								newrefererlink.com/gfgfd/fd
							</Text>

							<TouchableOpacity>
								<Image
									source={require('../assets/icons/copy_button.png')}
									style={{
										width: 158,
										height: 13,
										alignSelf: 'flex-start',
									}}
								/>
							</TouchableOpacity>
						</View>

						<Footer phone="8 800 112 02 99" up="11:00" to="20:00" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
