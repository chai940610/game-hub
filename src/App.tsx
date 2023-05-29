import { Box, Button, ButtonGroup, Grid, GridItem,HStack,Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres'
import { useState } from "react";
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
import SortSelector from './components/SortSelector'
import { Flex } from '@chakra-ui/react'
import GameHeading from './components/GameHeading'

export interface GameQuery{
  genre:Genre|null;
  platform:Platform|null;
  abc:string;     //this is sortOrder
  kambing:string; //this is search text
}

function App() {
  // const[selectedGenre,setSelectedGenre]=useState<Genre|null>(null);
  // const [selectedPlatform1,setSelectedPlatform]=useState<Platform|null>(null);
  const[jarum,cinta]=useState<GameQuery>({}as GameQuery)  //initial state is {} as GameQuery mean initial value is null

  return <Grid templateAreas={{ //templateAreas is property that defines two different grid layouts,one for mobile and one for larger screen
    base:`"nav" "main"`,  //for mobile device,two rows one column
    lg:`"nav nav" "aside main"`  //large devices, wider than 1024px, nav nav mean two nav column, aside main mean one aside one main
    }}
    templateColumns={{
      base: '1fr',
      lg:'200px 1fr'
    }}
    >
      
    <GridItem area='nav'> {/* the nav, when you are using laptop or pc, this nav will be top left and right, if mobile, it will be on top only */}
    <NavBar onSearch={(searchText) => cinta({ ...jarum, kambing: searchText })} />  {/*once you search anything in the searchinput, then you go to components find App, you will saw the useState hook*/ }
    </GridItem>
    <Show above="lg"> {/* show below means the aside will occur below 1024px, if above will show above 1024px */}
      <GridItem area='aside' paddingX={5}><GenreList kukubird={jarum.genre} onSelectGenre={(babi)=>cinta({...jarum,genre:babi})} /></GridItem>
    </Show>
    <GridItem area='main'>
      <Box paddingLeft={2}>
        <GameHeading lol={jarum}/>
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector selectedPlatform={jarum.platform} onSelectPlatform={(pc) => cinta({ ...jarum, platform: pc })} />
          </Box>
          <SortSelector sortOrder={jarum.abc} onSelectSortOrder={(abc)=>cinta({...jarum,abc})} />
        </Flex>
      </Box>
      <GameGrid  lampu={jarum} /> {/*selectedPlatform={jarum.platform} selectedGenre={jarum.genre} */}
    </GridItem>
  </Grid>
}

export default App
