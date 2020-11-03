import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import stateReducer from '../features/stateSlice';

export default configureStore({
	reducer: {
		user: userReducer,
		states: stateReducer,
	},
});
