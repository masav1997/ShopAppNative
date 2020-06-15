import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import MainPage from './screens/MainPage';
import Catalog from './screens/Catalog';
import About from './screens/About';
import Basket from './screens/Basket';
import Profile from './screens/Profile';
import Friendship from './screens/Friendship';
import Filters from './screens/Filters';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import CallMe from './screens/CallMe';
import Age from './screens/Age';
import ChangePhone from './screens/ChangePhone';
import FinishPage from './screens/FinishPage';

const Stack = createStackNavigator();

const images = [
	require('./assets/icons/callme_button.png'),
	require('./assets/icons/copy_button.png'),
	require('./assets/icons/pay_button.png'),
	require('./assets/icons/exit_button.png'),
	require('./assets/icons/basket_button1.png'),
	require('./assets/icons/basket_button.png'),
	require('./assets/icons/basket.png'),
	require('./assets/icons/age_button.png'),
	require('./assets/icons/signup_button.png'),
	require('./assets/icons/signin_button.png'),
	require('./assets/icons/savenum_button.png'),
	require('./assets/icons/save_button.png'),
	require('./assets/icons/search.png'),
	require('./assets/icons/jim.jpeg'),
	require('./assets/icons/pilsner.jpeg'),
	require('./assets/icons/plus.png'),
	require('./assets/icons/profile.png'),
	require('./assets/icons/catalog.png'),
	require('./assets/icons/beer.png'),
	require('./assets/icons/burger.png'),
	require('./assets/icons/champagne.png'),
	require('./assets/icons/close.png'),
	require('./assets/icons/cognac.png'),
	require('./assets/icons/del.png'),
	require('./assets/icons/done.png'),
	require('./assets/icons/down.png'),
	require('./assets/icons/facebook.png'),
	require('./assets/icons/filter.png'),
	require('./assets/icons/instagram.png'),
	require('./assets/icons/liquor.png'),
	require('./assets/icons/logo.png'),
	require('./assets/icons/min.png'),
	require('./assets/icons/phone.png'),
	require('./assets/icons/rum.png'),
	require('./assets/icons/sale.png'),
	require('./assets/icons/slide.png'),
	require('./assets/icons/snack.png'),
	require('./assets/icons/telegram.png'),
	require('./assets/icons/twitter.png'),
	require('./assets/icons/up.png'),
	require('./assets/icons/vodka.png'),
	require('./assets/icons/whiskey.png'),
	require('./assets/icons/wine.png'),
];

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this.handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			);
		}
		return (
			<NavigationContainer>
				<StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="MainPage" component={MainPage} />
					<Stack.Screen name="Catalog" component={Catalog} />
					<Stack.Screen name="About" component={About} />
					<Stack.Screen name="Basket" component={Basket} />
					<Stack.Screen name="Profile" component={Profile} />
					<Stack.Screen name="Friendship" component={Friendship} />
					<Stack.Screen name="Filters" component={Filters} />
					<Stack.Screen name="SignIn" component={SignIn} />
					<Stack.Screen name="SignUp" component={SignUp} />
					<Stack.Screen name="CallMe" component={CallMe} />
					<Stack.Screen name="Age" component={Age} />
					<Stack.Screen name="ChangePhone" component={ChangePhone} />
					<Stack.Screen name="FinishPage" component={FinishPage} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
