import React from 'react'
import {Stack} from '@mui/material'
import MediaListing from '../MediaListing'

const Home = () => {
	return (
		<Stack sx={{height: '100%'}} my={2}>
			<MediaListing />
		</Stack>
	)
}

export default Home