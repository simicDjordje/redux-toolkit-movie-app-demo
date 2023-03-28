import React from 'react'
import {CssBaseline, Stack} from '@mui/material'
import './main.css'

import Header from './components/Header'
import Feed from './components/Feed'
import Footer from './components/Footer'


const App = () => {
	return (
			<Stack sx={{minHeight: '100vh'}} display="column" justifyContent="space-between">
				{/*<CssBaseline />*/}
				<Header />
				<Feed />
				<Footer />
			</Stack>
	)
}

export default App