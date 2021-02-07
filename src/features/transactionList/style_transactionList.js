import {StyleSheet} from 'react-native';
import {AppStyle, wp, fp, hp} from '../../shared/style';

const {color, font, fontSize} = AppStyle;

export const styles = StyleSheet.create({
	container: {
		padding: wp(3),
	},
	scroll: {
		marginBottom: hp(8),
	},
	card: {
		marginVertical: hp(1),
		backgroundColor: color.light,
		borderRadius: 10,
		padding: wp(4),
		borderLeftColor: color.green,
		borderLeftWidth: 8,
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
	flexCard: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	loading: {
		top: hp(30),
	},
	search: {
		flexDirection: 'row',
		paddingVertical: wp(2),
		borderRadius: 10,
		backgroundColor: color.light,
		justifyContent: 'space-between',
	},
	formInput: {
		fontSize: fontSize.font12,
		marginLeft: wp(-10),
	},
	filterText: {
		fontFamily: font.bold,
		color: color.red, 
		height: wp(5), 
		alignSelf: 'center'
	},
});
