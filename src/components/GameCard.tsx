import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'

interface Props{
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
     <Card >  {/* why need overflow, because these image is too large, borderRadius is to let the corner not too sharp, when I set to 10, only the bottom change to not sharp, but upside left and right didn't, so need overflow */}
        <Image src={getCroppedImageUrl(game.background_image)} />  {/*we are downloading smaller images, game.background_image exaple link, https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg */} 
        <CardBody>
            <Heading fontSize='2xl'>
                {game.name} {/*this is game name, we can customize the name by using some features */}
            </Heading>
            <HStack justifyContent='space-between'>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
                <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard