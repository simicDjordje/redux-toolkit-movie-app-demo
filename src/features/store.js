import {configureStore} from '@reduxjs/toolkit'
import baseReducer from './base/baseSlice'

export const store = configureStore({
	reducer: {
		base_slice: baseReducer
	}
})