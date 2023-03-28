import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import baseApi from '../../common/api/baseApi'
import {OMDb_API_key} from '../../common/api/ApiKeys'


export const fetchAsyncMovies = createAsyncThunk('media/fetchAsyncMovies', async (searchTerm) => {
	const response = await baseApi.get(`?apiKey=${OMDb_API_key}&s=${searchTerm}&type=movie`)
	return response.data
})

export const fetchAsyncShows = createAsyncThunk('media/fetchAsyncShows', async (searchTerm) => {
	const response = await baseApi.get(`?apiKey=${OMDb_API_key}&s=${searchTerm}&type=series`)
	return response.data
})

const initialState = {
	movies: {},
	shows: {},
	pending: false,
	rejected: false
}


export const baseSlice = createSlice({
	name: 'program',
	initialState,
	// reducers: {
	// 	addMovies: (state, {payload}) => {
	// 		state.movies = payload
	// 	}
	// },
	extraReducers: {
		[fetchAsyncMovies.pending] : (state) => {
			return {...state, pending: true}
		},
		[fetchAsyncMovies.fulfilled] : (state, {payload}) => {

			return {...state, movies: payload, pending: payload.Response === 'False' ? true : false, rejected: false}
		},
		[fetchAsyncMovies.rejected] : (state) => {
			return {...state, movies: {}, pending: false, rejected: true}
		},
		[fetchAsyncShows.fulfilled] : (state, {payload}) => {
			return {...state, shows: payload, pending: payload.Response === 'False' ? true : false, rejected: false}
		},
	}
})


//export const {addMovies} = movieSlice.actions
export const getBaseSlice = state => state.base_slice
export default baseSlice.reducer