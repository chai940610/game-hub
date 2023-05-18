import { Box } from '@chakra-ui/react'
import {ReactNode} from 'react'

interface Props {
    children:ReactNode
}

const GameCardContainer = ({children}:Props) => {
  return (
    <Box borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}
//for my understanding, the children just like nothing, in this case <GameCardSkeleton key={skeleton} /> will cover by Box

export default GameCardContainer