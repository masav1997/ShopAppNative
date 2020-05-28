import React from 'react';
import { View, Dimensions, SafeAreaView, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CatalogCard from '../components/CatalogCard';
import AboutCard from '../components/AboutCard';
import AboutDescription from '../components/AboutDescription';
import AboutRow from '../components/AboutRow';

const { width } = Dimensions.get('window');

const viewStyle = {
	backgroundColor: '#E5E5E5',
	height: '100%',
	width: width,
	alignItems: 'center',
};

const titleTextStyle = {
	fontSize: 16,
	color: '#1E264E',
	fontWeight: '500',
	alignSelf: 'flex-start',
	marginLeft: 12,
	marginTop: 16,
};

const titleTextStyle1 = {
	fontSize: 20,
	color: '#1E264E',
	fontWeight: '600',
	alignSelf: 'flex-start',
	marginLeft: 12,
	marginTop: 40,
};

export default class About extends React.Component {
	render() {
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={viewStyle}>
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
						<AboutDescription
							title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
							description="0.5 л, Жестяная банка"
							oldPrice="5050.12 ₽/шт"
							newPrice="499.28 ₽/шт"
							bonus="9653"
							onPress={() => this.props.navigation.navigate('Basket')}
						/>
						<Text style={titleTextStyle}>Характеристики</Text>
						<AboutRow title="Объем, л" description="0.5" />
						<AboutRow title="Количество штук в упаковке" description="24" />
						<AboutRow title="Крепость" description="4.4%" />
						<AboutRow title="Цвет" description="Светлое" />
						<AboutRow title="Упаковка" description="Жестяная банка" />
						<AboutRow title="Тип" description="Фильтрованное" />
						<AboutRow title="Пивоварня" description="Plzensky Prazdroj" />
						<AboutRow title="Вид" description="Пилснер (Pilsner)" />
						<AboutRow title="Размеры" description="ящик: 404 x 268 x 171 мм" />
						<AboutRow title="Страна-производитель товара" description="Чехия" />
						<AboutRow title="Страна регистрации бренда" description="Чехия" />
						<Text style={titleTextStyle1}>С этим товаром берут</Text>
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
