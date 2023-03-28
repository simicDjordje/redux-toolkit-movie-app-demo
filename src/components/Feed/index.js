import React from 'react'
import {Stack} from '@mui/material'
import {Routes, Route} from 'react-router-dom'

import Home from '../Home'
import MediaDetails from '../MediaDetails'
import PageNotFound from '../PageNotFound'

const Feed = () => {
	return (
		<Stack>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/media/:imdbId" element={<MediaDetails />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Stack>
	)
}

export default Feed