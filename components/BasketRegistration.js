import React from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import AboutRow from '../components/AboutRow';
import InputForm from './InputForm';

const { width } = Dimensions.get('window');

const titleTextStyle = {
	fontSize: 20,
	color: '#1E264E',
	fontWeight: '600',
	alignSelf: 'flex-start',
	marginLeft: 12,
	marginTop: 24,
};

const viewStyle = {
	width: width - 24,
	height: 'auto',
	padding: 12,
	backgroundColor: '#FFF',
	borderRadius: 8,
	marginTop: 10,
};

const viewStyle1 = {
	width: '100%',
	height: 1,
	backgroundColor: '#E4E8ED',
	marginTop: 12,
};

const labelTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	fontWeight: '500',
	marginTop: 12,
};

const viewStyle2 = {
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
};

const viewStyle3 = {
	width: '100%',
	height: 1,
	backgroundColor: '#E4E8ED',
	marginTop: 12,
	marginBottom: 12,
};

const imgStyle = { width: 277, height: 40, alignSelf: 'center' };

const newPriceTextStyle = {
	fontSize: 24,
	color: '#FF4C4B',
	fontWeight: 'bold',
	alignSelf: 'flex-start',
	marginTop: 5,
	marginLeft: 12,
};

export default class BasketRegistration extends React.Component {
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
		const { title, label, onPress } = this.props;
		return (
			<View>
				<Text style={titleTextStyle}>{title}</Text>
				<View style={viewStyle}>
					<View style={{ marginHorizontal: -12 }}>
						<AboutRow title="Товаров:" description="8" />
						<AboutRow title="Итоговая цена:" description="9653.04 ₽" />
					</View>
					<View style={viewStyle1} />
					<InputForm title="ФИО" />
					<InputForm title="Почта" />
					<InputForm title="Номер телефона" />
					<Text style={labelTextStyle}>{label}</Text>
					<View style={viewStyle2}>
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
					<View style={viewStyle3} />
					<TouchableOpacity onPress={onPress}>
						<Image source={require('../assets/icons/pay_button.png')} style={imgStyle} />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
