import React from 'react';
import { View, Dimensions, SafeAreaView, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';
import CatalogCard from '../components/CatalogCard';
import AboutCard from '../components/AboutCard';
import { ceil } from 'react-native-reanimated';
import BasketCard from '../components/BasketCard';
import { Dropdown } from 'react-native-material-dropdown';

const { width } = Dimensions.get('window');

export default class Basket extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					value: 'Москва',
					label: 'Москва',
				},
				{
					value: 'Санкт-Петербург',
					label: 'Санкт-Петербург',
				},
				{
					value: 'Казань',
					label: 'Казань',
				},
			],
			value: '',
		};
	}

	componentDidMount() {
		const value = this.state.data[0].value;
		this.setState({
			value,
		});
	}
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
						<Header phone="8 800 112 02 99"
							up="11:00"
							to="20:00"
							onPress1={() => this.props.navigation.navigate('Catalog')}
							onPress2={() => this.props.navigation.navigate('Basket')}
							onPress2={() => this.props.navigation.navigate('Basket')}
							onPress3={() => this.props.navigation.navigate('SignIn')}
							onCall={() => this.props.navigation.navigate('CallMe')} />
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
							Товары в корзине
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
							<BasketCard
								img={require('../assets/icons/jim.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
							<View
								style={{
									width: '100%',
									height: 1,
									backgroundColor: '#E4E8ED',
									marginTop: 12,
									marginBottom: 12,
								}}
							/>
							<BasketCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
							<View
								style={{
									width: '100%',
									height: 1,
									backgroundColor: '#E4E8ED',
									marginTop: 12,
									marginBottom: 12,
								}}
							/>
							<BasketCard
								img={require('../assets/icons/jim.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
							<View
								style={{
									width: '100%',
									height: 1,
									backgroundColor: '#E4E8ED',
									marginTop: 12,
									marginBottom: 12,
								}}
							/>
							<BasketCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
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
							Оформление
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
										Товаров:
									</Text>
								</View>
								<View style={{ flex: 1, alignItems: 'flex-end' }}>
									<Text
										style={{
											fontSize: 16,
											color: '#1E264E',
											fontWeight: '600',
										}}
									>
										8
									</Text>
								</View>
							</View>
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
										Итоговая цена:
									</Text>
								</View>
								<View style={{ flex: 1, alignItems: 'flex-end' }}>
									<Text
										style={{
											fontSize: 16,
											color: '#1E264E',
											fontWeight: '600',
										}}
									>
										9653.04 ₽
									</Text>
								</View>
							</View>
							<View
								style={{
									width: '100%',
									height: 1,
									backgroundColor: '#E4E8ED',
									marginTop: 12,
								}}
							/>
							<Text
								style={{
									fontSize: 13,
									color: '#7285A4',
									fontWeight: '500',

									marginTop: 12,
								}}
							>
								ФИО
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
									fontWeight: '500',
									marginTop: 12,
								}}
							>
								Почта
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
									fontWeight: '500',
									marginTop: 12,
								}}
							>
								Номер телефона
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
									fontWeight: '500',
									marginTop: 12,
								}}
							>
								Адрес доставки (город, улица, дом)
							</Text>
							<View
								style={{
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
									height: 33,
									borderWidth: 0,
									width: '100%',
									backgroundColor: '#F3F6F7',
									fontSize: 13,
									borderRadius: 8,
									marginRight: 3,
									marginTop: 4,
								}}
							>
								<Dropdown
									value={this.state.label}
									data={this.state.data}
									overlayStyle={{ borderColor: 'white', borderWidth: 0 }}
									dropdownOffset={{ top: 0 }}
									containerStyle={{ width: '95%', height: 32 }}
									onChangeText={(value) => {
										this.setState({
											value,
										});
									}}
									rippleOpacity={0}
								/>
							</View>
							<View
								style={{
									width: '100%',
									height: 1,
									backgroundColor: '#E4E8ED',
									marginTop: 12,
									marginBottom: 12,
								}}
							/>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
								<Image
									source={require('../assets/icons/pay_button.png')}
									style={{ width: 277, height: 40, alignSelf: 'center' }}
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
