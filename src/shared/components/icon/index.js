import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {arrowIcon, downArrow, dot, search} from '../../../assets/icons';
import {AppStyle, wp, fp, hp} from '../../style';

const {color} = AppStyle;

const Icon = ({name}) => {
	return (
		<Image
			source={
				name === 'arrowIcon'
					? arrowIcon
					: name === 'dot'
					? dot
					: name === 'search'
					? search
					: downArrow
			}
			style={name === 'dot' ? styles.dotStyle : styles.iconStyle}
		/>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		width: wp(5),
		height: wp(5),
		alignSelf: 'center',
		resizeMode: 'contain',
		marginHorizontal: wp(3),
	},
	dotStyle: {
		width: wp(1.5),
		height: wp(1.5),
		alignSelf: 'center',
		resizeMode: 'contain',
		marginHorizontal: wp(1),
	},
});

export default Icon;
