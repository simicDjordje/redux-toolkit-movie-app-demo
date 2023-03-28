import React, {useState} from 'react'
import {Typography, Stack, styled, Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'

const CustomCardStack = styled(Stack)(({media})=>({
  height: '300px',
  backgroundImage: `url(${media.Poster})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}))

const MediaCard = ({media}) => {
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <CustomCardStack
     onMouseEnter={() => setIsHovered(true)} 
     onMouseLeave={() => setIsHovered(false)} 
     onClick={() => navigate(`/media/${media.imdbID}`)}
     direction="column" 
     justifyContent="space-between" 
     media={media}>
     {isHovered && 
      <>
        <Stack bgcolor="#000">
            <Button size="small">See more</Button>
        </Stack>
        <Stack bgcolor="#000">
            <Typography color="#fff" variant="h6">{media.Title}</Typography>
        </Stack>
      </>
      }
    </CustomCardStack>
  )
}

export default MediaCard