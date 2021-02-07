const initialState = {
	isLoading: false,
	data: [],
};
const dataFlip = (state = initialState, action) => {
	switch (action.type) {
		case 'flip': {
			return {
				...state,
				isLoading: true,
			};
		}
		case 'flip_done': {
			return {
				...state,
				isLoading: false,
				data: Object.values(action.payload)
			};
		}
		case 'flip_failed': {
			return {
				...state,
				isLoading: false,
			};
		}
		default:
			return state;
	}
};

export default dataFlip;
 