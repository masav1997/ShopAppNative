import React from 'react';
import { View, Dimensions, SafeAreaView, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BasketCard from '../components/BasketCard';
import BasketRegistration from '../components/BasketRegistration';

const { width } = Dimensions.get('window');

const viewStyle = {
	backgroundColor: '#E5E5E5',
	height: '100%',
	width: width,
	alignItems: 'center',
};

const titleTextStyle = {
	fontSize: 20,
	color: '#1E264E',
	fontWeight: '600',
	alignSelf: 'flex-start',
	marginLeft: 12,
	marginTop: 24,
};

const viewStyle1 = {
	width: '100%',
	height: 1,
	backgroundColor: '#E4E8ED',
	marginTop: 12,
	marginBottom: 12,
};

export default class Basket extends React.Component {
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
						<Text style={titleTextStyle}>Товары в корзине</Text>
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
							<View style={viewStyle1} />
							<BasketCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
							<View style={viewStyle1} />
							<BasketCard
								img={require('../assets/icons/jim.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
							<View style={viewStyle1} />
							<BasketCard
								img={require('../assets/icons/pilsner.jpeg')}
								title="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
								type="0.5 л, Стекляная бутылка"
								min="499.28₽"
								max="9653.04₽"
							/>
						</View>
						<BasketRegistration
							title="Оформление"
							label="Адрес доставки (город, улица, дом)"
							onPress={() => this.props.navigation.navigate('FinishPage')}
						/>
						<Footer phone="8 800 112 02 99" up="11:00" to="20:00" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
