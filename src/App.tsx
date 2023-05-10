import { Button, ButtonGroup, Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return <Grid templateAreas={{ //templateAreas is property that defines two different grid layouts,one for mobile and one for larger screen
    base:`"nav" "main"`,  //for mobile device,two rows one column
    lg:`"nav nav" "aside main"`  //large devices, wider than 1024px, nav nav mean two nav column, aside main mean one aside one main
    }}>
    <GridItem area='nav'> {/* the nav, when you are using laptop or pc, this nav will be top left and right, if mobile, it will be on top only */}
      <NavBar />
    </GridItem>
    <Show above="lg"> {/* show below means the aside will occur below 1024px, if above will show above 1024px */}
      <GridItem area='aside'>Aside</GridItem>
    </Show>
    <GridItem area='main'>
      <GameGrid />
    </GridItem>
  </Grid>
}

export default App
