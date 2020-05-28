import React from 'react';
import { View, Text, TextInput } from 'react-native';

const titleTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	fontWeight: '500',

	marginTop: 12,
};

const inputStyle = {
	height: 32,
	borderWidth: 0,
	width: '100%',
	backgroundColor: '#F3F6F7',
	fontSize: 13,
	borderRadius: 8,
	marginRight: 3,
	marginTop: 4,
};

export default class InputForm extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<View>
				<Text style={titleTextStyle}>{title}</Text>
				<TextInput style={inputStyle} />
			</View>
		);
	}
}
