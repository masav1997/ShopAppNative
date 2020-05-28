import React from 'react';
import { View, Text } from 'react-native';

const titleTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	fontWeight: '500',
};

const descTextStyle = {
	fontSize: 13,
	color: '#1E264E',
};

const viewStyle = {
	flexDirection: 'row',
	justifyContent: 'center',
	paddingHorizontal: 12,
	marginTop: 12,
};

export default class AboutRow extends React.Component {
	render() {
		const { title, description } = this.props;
		return (
			<View style={viewStyle}>
				<View style={{ flex: 1 }}>
					<Text style={titleTextStyle}>{title}</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end' }}>
					<Text style={descTextStyle}>{description}</Text>
				</View>
			</View>
		);
	}
}
