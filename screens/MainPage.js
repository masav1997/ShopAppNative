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
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Modal from 'react-native-modal';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';

const { width, height } = Dimensions.get('window');
const Screen = (props) => (
	<TouchableOpacity style={{ width: '100%', height: 153, alignItems: 'center' }} onPress={props.onPress}>
		<Image source={require('../assets/icons/slide.png')} style={{ width: '100%', height: '120%' }} />
	</TouchableOpacity>
);

export default class MainPage extends React.Component {
	state = {
		isModalVisible: false,
		isModalVisible1: false,
		isModalVisible2: false,
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	toggleModal1 = () => {
		this.setState({ isModalVisible: false, isModalVisible1: !this.state.isModalVisible1 });
	};
	toggleModal2 = () => {
		this.setState({ isModalVisible2: !this.state.isModalVisible2 });
	};
	SCREENS = [
		<Screen text="first screen" onPress={() => this.props.navigation.navigate('Catalog')} />,
		<Screen text="second screen" />,
		<Screen text="third screen" />,
	];

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0,
		};
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
						<Modal isVisible={this.state.isModalVisible1}>
							<View
								style={{
									width: width - 30,
									height: 'auto',
									backgroundColor: '#19232F',
									borderTopLeftRadius: 16,
									borderTopRightRadius: 16,
									borderBottomLeftRadius: 16,
									paddingRight: 15,
									paddingLeft: 15,
									paddingTop: 32,
								}}
							>
								<Text
									style={{
										fontSize: 20,
										color: '#fff',
										marginBottom: 10,
										fontWeight: 'bold',
										textAlign: 'center',
									}}
								>
									Внимание!
								</Text>
								<Text
									style={{
										fontSize: 16,
										color: '#fff',
										marginBottom: 20,
										fontWeight: '500',
										textAlign: 'center',
										lineHeight: 20,
									}}
								>
									Вы действительно хотите поучаствовать в этой викторине. Стоимость участия{' '}
									<Text
										style={{
											fontSize: 16,
											color: '#FEAC5E',
											marginBottom: 10,
											fontWeight: '700',
											textAlign: 'center',
										}}
									>
										250 руб.
									</Text>
								</Text>
								<TouchableOpacity onPress={this.toggleModal}>
									<Text
										style={{
											fontSize: 16,
											color: '#FF3358',
											marginBottom: 25,
											fontWeight: 'bold',
											textAlign: 'center',
										}}
									>
										Назад
									</Text>
								</TouchableOpacity>
							</View>
						</Modal>
						<Carousel
							ref={(ref) => (this.carouselRef = ref)}
							data={this.SCREENS}
							renderItem={({ item }) => item}
							onSnapToItem={(i) => this.setState({ activeTab: i })}
							sliderWidth={width}
							sliderHeight={180}
							itemWidth={width}
							slideStyle={{ width: width, height: 180, marginTop: 24 }}
							inactiveSlideOpacity={1}
							inactiveSlideScale={1}
						/>
						<Pagination
							containerStyle={{ width: '100%', alignSelf: 'flex-start', height: 65 }}
							dotStyle={{
								width: 8,
								height: 8,
								borderRadius: 8,
								marginHorizontal: 8,
								backgroundColor: '#043E85',
							}}
							inactiveDotOpacity={0.4}
							inactiveDotScale={0.6}
							activeDotIndex={this.state.activeTab}
							dotsLength={3}
						/>
						<Text
							style={{
								fontSize: 20,
								color: '#1E264E',
								fontWeight: '600',
								alignSelf: 'flex-start',
								marginLeft: 12,
							}}
						>
							Категории товаров
						</Text>
						<View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 12 }}>
							<MainCard
								img={require('../assets/icons/sale.png')}
								title="Акции и скидки"
								onPress={() => this.props.navigation.navigate('Age')}
							/>
							<MainCard
								img={require('../assets/icons/vodka.png')}
								title="Водка"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
							<MainCard
								img={require('../assets/icons/beer.png')}
								title="Пиво"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
							<MainCard
								img={require('../assets/icons/wine.png')}
								title="Вино"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
							<MainCard
								img={require('../assets/icons/cognac.png')}
								title="Коньяк"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
							<MainCard
								img={require('../assets/icons/whiskey.png')}
								title="Виски"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
							<MainCard
								img={require('../assets/icons/champagne.png')}
								title="Шампанское"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
							<MainCard
								img={require('../assets/icons/rum.png')}
								title="Ром"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
						</View>
						<View style={{ flexDirection: 'row', marginTop: 5, paddingHorizontal: 12 }}>
							<MainCard
								img={require('../assets/icons/liquor.png')}
								title="Ликёры"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
							<MainCard
								img={require('../assets/icons/snack.png')}
								title="Закуски"
								onPress={() => this.props.navigation.navigate('Catalog')}
							/>
						</View>
						<Footer phone="8 800 112 02 99" up="11:00" to="20:00" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
