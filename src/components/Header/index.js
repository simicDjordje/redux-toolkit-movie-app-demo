import React from 'react'
import {Stack, AppBar, Toolbar, Typography, InputBase} from '@mui/material'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/base/baseSlice'

const Header = () => {
	const dispatch = useDispatch()

	const fetchResults = (e) => {
		dispatch(fetchAsyncMovies(e.target.value === '' ? 'all' : e.target.value))
		dispatch(fetchAsyncShows(e.target.value === '' ? 'all' : e.target.value))
	}

	return (
		<Stack>
			<AppBar position="static">
				<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Link to="/">
						<Typography variant="h5">Movie/Shows App</Typography>
						<Typography variant="body2">Redux Toolkit</Typography>
					</Link>
					<InputBase onChange={e => fetchResults(e)} placeholder="Search..." sx={{backgroundColor: '#3e3e42', color: '#fff', padding: '5px 30px'}} />
				</Toolbar>
			</AppBar>
		</Stack>
	)
}

export default Header