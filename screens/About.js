import React from 'react';
import {
	View,
	Dimensions,
	SafeAreaView,
	ImageBackground,
	Image,
	TouchableOpacity,
	Text,
	ScrollView,
} from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';
import CatalogCard from '../components/CatalogCard';
import AboutCard from '../components/AboutCard';

const { width } = Dimensions.get('window');

export default class About extends React.Component {
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
						<View style={{ flexDirection: 'row', marginTop: 24, paddingHorizontal: 12 }}>
							<AboutCard img={require('../assets/icons/jim.jpeg')} />
						</View>
						<Text
							style={{
								fontSize: 20,
								color: '#1E264E',
								fontWeight: '600',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginTop: 16,
							}}
						>
							Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%
						</Text>
						<Text
							style={{
								fontSize: 13,
								color: '#7285A4',
								fontWeight: '500',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginTop: 5,
							}}
						>
							0.5 л, Жестяная банка
						</Text>
						<Text
							style={{
								fontSize: 13,
								color: '#7285A4',
								fontWeight: '500',
								alignSelf: 'flex-start',
								marginTop: 12,
								marginLeft: 12,
								textDecorationLine: 'line-through',
							}}
						>
							5050.12 ₽/шт
						</Text>
						<Text
							style={{
								fontSize: 24,
								color: '#FF4C4B',
								fontWeight: 'bold',
								alignSelf: 'flex-start',
								marginTop: 5,
								marginLeft: 12,
							}}
						>
							499.28 ₽/шт
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
								marginTop: 18,
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
									Бонусы за покупку:
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 16,
										color: '#1E264E',
									}}
								>
									9653
								</Text>
							</View>
						</View>
						<TouchableOpacity
							style={{ marginTop: 16 }}
							onPress={() => this.props.navigation.navigate('Basket')}
						>
							<Image
								source={require('../assets/icons/basket_button1.png')}
								style={{ width: 295, height: 40 }}
							/>
						</TouchableOpacity>
						<Text
							style={{
								fontSize: 16,
								color: '#1E264E',
								fontWeight: '500',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginTop: 16,
							}}
						>
							Характеристики
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Объем, л
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									0,5
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Количество штук в упаковке
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									24
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Крепость
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									4.4%
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Цвет
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Светлое
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Упаковка
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Жестяная банка
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Тип
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Фильтрованное
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Пивоварня
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Plzensky Prazdroj
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Вид
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Пилснер (Pilsner)
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Размеры
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									ящик: 404 x 268 x 171 мм
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Страна-производитель товара
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Чехия
								</Text>
							</View>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'center',
								paddingHorizontal: 12,
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
									Страна регистрации бренда
								</Text>
							</View>
							<View style={{ flex: 1, alignItems: 'flex-end' }}>
								<Text
									style={{
										fontSize: 13,
										color: '#1E264E',
									}}
								>
									Чехия
								</Text>
							</View>
						</View>
						<Text
							style={{
								fontSize: 20,
								color: '#1E264E',
								fontWeight: '600',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginTop: 40,
							}}
						>
							С этим товаром берут
						</Text>
						<View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 12 }}>
							<CatalogCard
								img={require('../assets/icons/jim.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
							<CatalogCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('MainPage')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 12 }}>
							<CatalogCard
								img={require('../assets/icons/jim.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
							<CatalogCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('MainPage')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 12 }}>
							<CatalogCard
								img={require('../assets/icons/jim.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
							<CatalogCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('MainPage')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 12 }}>
							<CatalogCard
								img={require('../assets/icons/jim.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
							<CatalogCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								onPress={() => this.props.navigation.navigate('MainPage')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<Footer phone="8 800 112 02 99" up="11:00" to="20:00" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
