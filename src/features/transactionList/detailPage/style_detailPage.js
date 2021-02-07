import React from 'react'
import {StyleSheet} from 'react-native'

import {AppStyle, wp, fp, hp} from '../../../shared/style';

const {color, font, fontSize} = AppStyle;

export const styles = StyleSheet.create({
    container: {
		padding: wp(3),
    },
    card: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ddd'
    },
    flex: {
		flexDirection: 'row',
    },
    txtBank: {
		fontSize: fontSize.font16,
		fontFamily: font.bold,
	},
	txtName: {
		fontSize: fontSize.font16,
		fontFamily: font.regular,
	},
	txtAmount: {
		fontSize: fontSize.font14,
		fontFamily: font.regular,
    },
    txtId: {
        fontSize: fontSize.font16,
		fontFamily: font.bold,
    }
})