import React from 'react';
import { View, Dimensions, SafeAreaView, TextInput, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

const { width } = Dimensions.get('window');

export default class Filters extends React.Component {
	state = {
		isDrop: false,
		isDone1: false,
		isDone2: false,
		isDone3: false,
		isDone4: false,
		isDrop1: false,
		isDone11: false,
		isDone12: false,
		isDone13: false,
		isDone14: false,
		isDrop2: false,
		isDone21: false,
		isDone22: false,
		isDone23: false,
		isDone24: false,
	};
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
						<View style={{ flexDirection: 'row', marginBottom: 16 }}>
							<TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.goBack()}>
								<Text
									style={{
										fontSize: 14,
										color: '#5E697F',
										fontWeight: '600',
										alignSelf: 'flex-start',
										marginLeft: 12,
										marginRight: 12,
										marginTop: 24,
									}}
								>
									Назад
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
								<Image
									source={require('../assets/icons/close.png')}
									style={{ width: 20, height: 20, marginRight: 5, alignSelf: 'flex-end' }}
								/>
								<Text
									style={{
										fontSize: 14,
										color: '#5E697F',
										fontWeight: '600',
										marginRight: 12,
										marginTop: 24,
									}}
								>
									Очистить фильтры
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={{
								width: width - 24,
								height: 'auto',
								padding: 12,
								paddingVertical: 24,
								backgroundColor: '#FFF',
								borderRadius: 8,
								marginTop: 10,
							}}
						>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() => this.setState({ isDrop: !this.state.isDrop })}
							>
								<View style={{ flex: 2 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#1E264E',
											fontWeight: '500',
											alignSelf: 'flex-start',
										}}
									>
										Типы вина
									</Text>
								</View>
								<View style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-end' }}>
									<Image
										source={
											this.state.isDrop
												? require('../assets/icons/up.png')
												: require('../assets/icons/down.png')
										}
										style={{ width: 16, height: 13, marginRight: 20 }}
									/>
								</View>
							</TouchableOpacity>
							{this.state.isDrop && (
								<View>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 28 }}
										onPress={() => this.setState({ isDone1: !this.state.isDone1 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone1 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone1 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone1 ? 'bold' : 'normal',
											}}
										>
											Белое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone2: !this.state.isDone2 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone2 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone2 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone2 ? 'bold' : 'normal',
											}}
										>
											Красное
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone3: !this.state.isDone3 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone3 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone3 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone3 ? 'bold' : 'normal',
											}}
										>
											Розовое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone4: !this.state.isDone4 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone4 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone4 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone4 ? 'bold' : 'normal',
											}}
										>
											Десертное
										</Text>
									</TouchableOpacity>
								</View>
							)}
						</View>
						<View
							style={{
								width: width - 24,
								height: 'auto',
								padding: 12,
								paddingVertical: 24,
								backgroundColor: '#FFF',
								borderRadius: 8,
								marginTop: 10,
							}}
						>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() => this.setState({ isDrop1: !this.state.isDrop1 })}
							>
								<View style={{ flex: 2 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#1E264E',
											fontWeight: '500',
											alignSelf: 'flex-start',
										}}
									>
										Торговая марка
									</Text>
								</View>
								<View style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-end' }}>
									<Image
										source={
											this.state.isDrop1
												? require('../assets/icons/up.png')
												: require('../assets/icons/down.png')
										}
										style={{ width: 16, height: 13, marginRight: 20 }}
									/>
								</View>
							</TouchableOpacity>
							{this.state.isDrop1 && (
								<View>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 28 }}
										onPress={() => this.setState({ isDone11: !this.state.isDone11 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone11 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone11 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone11 ? 'bold' : 'normal',
											}}
										>
											Белое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone12: !this.state.isDone12 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone12 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone12 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone12 ? 'bold' : 'normal',
											}}
										>
											Красное
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone13: !this.state.isDone13 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone13 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone13 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone13 ? 'bold' : 'normal',
											}}
										>
											Розовое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone14: !this.state.isDone14 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone14 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone14 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone14 ? 'bold' : 'normal',
											}}
										>
											Десертное
										</Text>
									</TouchableOpacity>
								</View>
							)}
						</View>
						<View
							style={{
								width: width - 24,
								height: 'auto',
								padding: 12,
								paddingVertical: 24,
								backgroundColor: '#FFF',
								borderRadius: 8,
								marginTop: 10,
							}}
						>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() => this.setState({ isDrop2: !this.state.isDrop2 })}
							>
								<View style={{ flex: 2 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#1E264E',
											fontWeight: '500',
											alignSelf: 'flex-start',
										}}
									>
										Сочетание
									</Text>
								</View>
								<View style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-end' }}>
									<Image
										source={
											this.state.isDrop2
												? require('../assets/icons/up.png')
												: require('../assets/icons/down.png')
										}
										style={{ width: 16, height: 13, marginRight: 20 }}
									/>
								</View>
							</TouchableOpacity>
							{this.state.isDrop2 && (
								<View>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 28 }}
										onPress={() => this.setState({ isDone21: !this.state.isDone21 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone21 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone21 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone21 ? 'bold' : 'normal',
											}}
										>
											Белое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone22: !this.state.isDone22 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone22 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone22 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone22 ? 'bold' : 'normal',
											}}
										>
											Красное
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone23: !this.state.isDone23 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone23 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone23 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone23 ? 'bold' : 'normal',
											}}
										>
											Розовое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone24: !this.state.isDone24 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone24 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone24 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone24 ? 'bold' : 'normal',
											}}
										>
											Десертное
										</Text>
									</TouchableOpacity>
								</View>
							)}
						</View>
						<View
							style={{
								width: width - 24,
								height: 'auto',
								padding: 12,
								paddingVertical: 24,
								backgroundColor: '#FFF',
								borderRadius: 8,
								marginTop: 10,
							}}
						>
							<TouchableOpacity
								style={{ flexDirection: 'row' }}
								onPress={() => this.setState({ isDrop3: !this.state.isDrop3 })}
							>
								<View style={{ flex: 2 }}>
									<Text
										style={{
											fontSize: 16,
											color: '#1E264E',
											fontWeight: '500',
											alignSelf: 'flex-start',
										}}
									>
										Вкус
									</Text>
								</View>
								<View style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-end' }}>
									<Image
										source={
											this.state.isDrop3
												? require('../assets/icons/up.png')
												: require('../assets/icons/down.png')
										}
										style={{ width: 16, height: 13, marginRight: 20 }}
									/>
								</View>
							</TouchableOpacity>
							{this.state.isDrop3 && (
								<View>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 28 }}
										onPress={() => this.setState({ isDone31: !this.state.isDone31 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone31 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone31 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone31 ? 'bold' : 'normal',
											}}
										>
											Белое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone32: !this.state.isDone22 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone32 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone32 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone32 ? 'bold' : 'normal',
											}}
										>
											Красное
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone33: !this.state.isDone33 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone33 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone33 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone33 ? 'bold' : 'normal',
											}}
										>
											Розовое
										</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 16, marginTop: 10 }}
										onPress={() => this.setState({ isDone34: !this.state.isDone34 })}
									>
										<View
											style={{
												width: 16,
												height: 16,
												borderWidth: 1,
												borderRadius: 2,
												borderColor: '#C0D0EA',
												backgroundColor: this.state.isDone34 ? '#054086' : '#FFFFFF',
											}}
										>
											{this.state.isDone34 && (
												<Image
													source={require('../assets/icons/done.png')}
													style={{ width: 16, height: 16, bottom: 1, right: 1 }}
												/>
											)}
										</View>
										<Text
											style={{
												fontSize: 13,
												color: '#1E264E',
												marginLeft: 8,
												fontWeight: this.state.isDone34 ? 'bold' : 'normal',
											}}
										>
											Десертное
										</Text>
									</TouchableOpacity>
								</View>
							)}
						</View>
						<Footer phone="8 800 112 02 99" up="11:00" to="20:00" />
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
