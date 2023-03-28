import React, {useEffect} from 'react'
import {Stack, Grid, Typography, Divider} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {Circles} from 'react-loader-spinner'
import {getBaseSlice, fetchAsyncMovies, fetchAsyncShows} from '../../features/base/baseSlice'

import MediaCard from './MediaCard'


const MediaListing = () => {
	const baseSlice = useSelector(getBaseSlice)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchAsyncMovies('All'))
		dispatch(fetchAsyncShows('All'))
	}, [])

	
	return (
		<Stack px={2}>
			{baseSlice.pending ? (
				<Stack direction="row" justifyContent="center">
					<Circles
					  height="80"
					  width="80"
					  color="#0091E6"
					  ariaLabel="circles-loading"
					  wrapperStyle={{}}
					  wrapperClass=""
					  visible={true}
					/>
				</Stack>
			) : (
				baseSlice.rejected ? (
					<Stack direction="row" justifyContent="center">
						<Typography variant="h5" color="red">Oops, something went wrong while fetching the movies. Please try again later or contact support if the issue persists.</Typography>
					</Stack>
				) : (
					<Stack direction="column" justifyContent="flex-start">
						<Typography variant="h6" my={4} color="#fff">Movies results</Typography>
						<Grid container spacing={3} mb={2}>
							{baseSlice.movies.Search?.map(movie => {
								return (
									<Grid item xs={2}>
										<MediaCard key={movie.imdbID} media={movie} />
									</Grid>
								)
							})}
						</Grid>
						<Typography variant="h6" my={4} color="#fff">Shows results</Typography>
						<Grid container spacing={3}>
							{baseSlice.shows.Search?.map(show => {
								return (
									<Grid item xs={2}>
										<MediaCard key={show.imdbID} media={show} />
									</Grid>
								)
							})}
						</Grid>
					</Stack>
				)
			)}
		</Stack>
	)
}

export default MediaListing