export const Rupiah = (price) => {
	let priceString = `${price}`,
		rest = priceString.length % 3,
		rp = priceString.substr(0, rest),
		thousand = priceString.substr(rest).match(/\d{3}/g);

	if (thousand) {
		let separator = rest ? '.' : '';
		rp += separator + thousand.join('.');
	}
	return rp;
};

export const checkCapital = (string) => {
	if (string.length <= 4) {
		return string.toUpperCase();
	} else {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
};

var months = [
	'Januari',
	'Februari',
	'Maret',
	'April',
	'Mei',
	'Juni',
	'Juli',
	'Agustus',
	'September',
	'Oktober',
	'November',
	'Desember',
];

export const convertDateToString = (selectedDate) => {
	const convert = selectedDate.split(' ');
	selectedDate = new Date(convert[0]);
	const currDate = selectedDate.getDate() + 1;
	const currMonth = selectedDate.getMonth();
	const currYear = selectedDate.getFullYear();
	return `${currDate} ${months[currMonth]} ${currYear}`;
};
