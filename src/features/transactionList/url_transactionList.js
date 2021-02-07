import axios from 'axios';

const baseUrl = 'https://nextar.flip.id/frontend-test';

export const getFlip = () => {
	return axios({
		method: 'GET',
		url: baseUrl,
	});
};
