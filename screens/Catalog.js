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
import { Dropdown } from 'react-native-material-dropdown';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';
import CatalogCard from '../components/CatalogCard';

const { width } = Dimensions.get('window');

export default class Catalog extends React.Component {
	render() {
		let data = [
			{
				value: 'От дорогих к дешёвым',
			},
			{
				value: 'По популярности',
			},
			{
				value: 'По рейтингу',
			},
		];
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
							Вина
						</Text>
						<View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 12 }}>
							<View style={{ flex: 3 }}>
								<Text
									style={{
										fontSize: 11,
										color: '#1E264E',
										fontWeight: '500',
										marginBottom: 20,
									}}
								>
									Сортировка:
								</Text>
								<Dropdown data={data} containerStyle={{ marginTop: -50, width: 200 }} rippleOpacity={0}/>
							</View>
							<TouchableOpacity
								style={{ flex: 1, alignItems: 'flex-end' }}
								onPress={() => this.props.navigation.navigate('Filters')}
							>
								<Image
									source={require('../assets/icons/filter.png')}
									style={{ width: 20, height: 20, justifyContent: 'flex-start', marginRight: 12 }}
								/>
								<Text
									style={{
										fontSize: 11,
										color: '#1E264E',
									}}
								>
									Фильтры
								</Text>
							</TouchableOpacity>
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
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
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
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
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
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
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
								onPress={() => this.props.navigation.navigate('About')}
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								newPrice="499.28 ₽/шт"
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
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
								onPress={() => this.props.navigation.navigate('About')}
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
