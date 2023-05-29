import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props{
    lol:GameQuery
}

const GameHeading = ({lol}:Props) => {
//Games
//Action Games
// Xbox Games
// Xbox Action Games
const heading=`${lol.platform?.name||''} ${lol.genre?.name||''} Games`;
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading