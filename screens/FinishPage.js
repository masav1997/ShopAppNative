import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
} from 'react-native';

export default class FinishPage extends React.Component {
	render() {
		return (
			<View style={{ backgroundColor: 'rgba(30, 38, 78, 0.7)', height: '100%', padding: 12 }}>
				<View
					style={{
						alignSelf: 'center',
						marginTop: 150,
						backgroundColor: '#FFFFFF',
						borderRadius: 16,
						paddingRight: 15,
						paddingLeft: 15,
						paddingTop: 32,
						width: '100%',
						height: 200,
					}}
				>
					<Text style={{ textAlign: 'center', fontSize: 22, color: '#0275d8' }}>Спасибо за покупку!</Text>
					<View style={{ flexDirection: 'row' }}>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontSize: 16,
									color: '#7285A4',
									marginTop: 32,
									fontWeight: '600',
								}}
							>
								Итоговый чек:
							</Text>
						</View>
						<Text
							style={{
								fontSize: 16,
								color: '#1E264E',
								marginTop: 32,
								fontWeight: '600',
							}}
						>
							1000 рублей
						</Text>
					</View>
					<TouchableOpacity
						style={{ flex: 1, alignSelf: 'center', alignItems: 'flex-start' }}
						onPress={() => this.props.navigation.navigate('MainPage')}
					>
						<Text
							style={{
								fontSize: 16,
								color: '#043E85',
								marginTop: 24,
								marginLeft: 10,
								fontWeight: '600',
							}}
						>
							OK
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
