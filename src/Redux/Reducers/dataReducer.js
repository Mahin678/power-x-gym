const {
	PURCHASE_PACKAGE,
	PERSONAL_INFO,
	FIND_PACKAGE,
} = require('../actions/dataActions');

const initialState = {
	data: [],
	package: [],
};
const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case PURCHASE_PACKAGE:
			const newId = action.data;
			return { data: newId };
		case FIND_PACKAGE:
			const id = action.id;
			const newDataInfo = state.data.filter((item) => item.id === id);
			return { data: newDataInfo };
		default:
			return state;
	}
};
export default dataReducer;
