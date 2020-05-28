import React from 'react';
import { View, Dimensions, SafeAreaView, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainCard from '../components/MainCard';
import CatalogCard from '../components/CatalogCard';
import AboutCard from '../components/AboutCard';
import { ceil } from 'react-native-reanimated';
import BasketCard from '../components/BasketCard';

const { width } = Dimensions.get('window');

export default class Friendship extends React.Component {
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
							onCall={() => this.props.navigation.navigate('CallMe')}/>
						<Text
							style={{
								fontSize: 20,
								color: '#1E264E',
								fontWeight: '600',
								alignSelf: 'flex-start',
								marginLeft: 12,
								marginRight: 12,
								marginTop: 24,
							}}
						>
							Партнерство и сотрудничество
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
									fontSize: 16,
									color: '#1E264E',
									fontWeight: 'bold',
									alignSelf: 'flex-start',
								}}
							>
								Подзаголовок
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: '#1E264E',
									fontWeight: '500',
									alignSelf: 'flex-start',
								}}
							>
								Amet velit eiusmod velit commodo laborum eu. Proident adipisicing laboris incididunt
								amet velit amet duis labore voluptate sunt consequat in. Ad minim culpa sunt irure eu
								ullamco nulla Lorem. Duis mollit exercitation deserunt aliqua minim veniam nostrud minim
								sit Lorem magna voluptate nostrud consequat. Ipsum laboris qui sunt amet eiusmod quis
								incididunt nisi irure minim est. Do sunt cillum dolor aliquip exercitation. Id aliqua
								mollit nisi aliqua eiusmod. Veniam irure sint irure Lorem officia do ea. Ex cupidatat id
								adipisicing qui anim dolore irure est dolore nisi. Anim sit aliquip ex nulla velit
								pariatur ad aute. Enim voluptate sunt anim duis elit laboris incididunt cupidatat in. Ut
								id dolore eu laborum et. Pariatur qui voluptate esse aliquip irure velit dolor. Ipsum
								eiusmod dolore eu sunt ea fugiat est commodo irure Lorem deserunt enim. Ea ea id Lorem
								aliquip amet do eu id do dolore est esse occaecat. In ex occaecat consequat minim id
								exercitation in id amet veniam pariatur cillum in. Minim consequat cillum dolor dolor
								consequat officia qui esse dolore deserunt laboris cupidatat enim magna. Ad enim elit
								est Lorem ullamco aliqua sunt sit officia aliqua. Reprehenderit consequat excepteur
								exercitation tempor irure. Eiusmod aliquip ut consectetur qui deserunt cupidatat
								occaecat do. Qui duis laborum sit minim quis duis.
							</Text>
						</View>
						<Footer phone="8 800 112 02 99" up="11:00" to="20:00" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
