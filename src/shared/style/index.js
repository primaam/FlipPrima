import {moderateScale} from 'react-native-size-matters';
import {Dimensions, PixelRatio, StatusBar, Platform} from 'react-native';

const AppStyle = {
	color: {
		primary: '#f2f2f2',
		green: '#5aaf85',
		red: '#ea6f51',
		dark: '#000',
		light: '#fff',
	},
	font: {
		regular: 'OpenSans-Regular',
		light: 'OpenSans-Light',
		semiBold: 'OpenSans-SemiBold',
		bold: 'OpenSans-Bold',
		extraBold: 'OpenSans-ExtraBold',
	},
	fontSize: {
		font24: moderateScale(24),
		font22: moderateScale(22),
		font20: moderateScale(20),
		font18: moderateScale(18),
		font16: moderateScale(16),
		font14: moderateScale(14),	
		font12: moderateScale(12),
	},
};

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const widthPercentageToDP = (widthPercent) => {
	const elemWidth =
		typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
	return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const heightPercentageToDP = (heightPercent) => {
	const elemHeight =
		typeof heightPercent === 'number'
			? heightPercent
			: parseFloat(heightPercent);
	return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

const standardLength =
	screenWidth > screenHeight
		? screenWidth
		: screenHeight > 750
		? screenHeight - screenHeight * 0.15
		: screenHeight;
const offset =
	screenWidth > screenHeight
		? 0
		: Platform.OS === 'ios'
		? 78
		: StatusBar.currentHeight;

const deviceHeight =
	Platform.OS === 'android' ? standardLength - offset : standardLength;

function RFPercentage(percent) {
	const heightPercent = (percent * deviceHeight) / 100;
	return Math.round(heightPercent);
}

export {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
	RFPercentage as fp,
	AppStyle,
};
