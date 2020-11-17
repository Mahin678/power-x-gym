import dataReducer from '../Reducers/dataReducer';

const { createStore } = require('redux');

export const stores = createStore(dataReducer);
