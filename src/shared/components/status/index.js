import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppStyle, wp, fp, hp} from '../../style';

const {color, font, fontSize} = AppStyle;

const Status = ({type}) => {
	return (
		<View style={styles.checkContainer}>
			<Text
				style={
					type === 'SUCCESS'
						? styles.txtStatus
						: {...styles.txtStatus, ...styles.txtCheck}
				}>
				{type === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	txtStatus: {
		fontSize: fontSize.font14,
		fontFamily: font.bold,
		color: color.light,
		paddingHorizontal: wp(2),
		paddingVertical: wp(1),
		backgroundColor: color.green,
		borderRadius: 5,
	},
	txtCheck: {
		color: color.dark,
		backgroundColor: color.light,
		borderWidth: 2,
		borderColor: color.red,
	},
	checkContainer: {
		justifyContent: 'center',
	},
});

export default Status;
