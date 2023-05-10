import { Button, ButtonGroup, Grid, GridItem,Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return <Grid templateAreas={{ //templateAreas is property that defines two different grid layouts,one for mobile and one for larger screen
    base:`"nav" "main"`,  //for mobile device
    lg:`"nav nav" "aside main"`  //large devices, wider than 1024px, nav nav mean two nav column, aside main mean one aside one main
    }}>
    <GridItem area='nav'>
      <NavBar />
    </GridItem>
    <Show above="lg"> {/* show below means the aside will occur below 1024px, if above will show above 1024px */}
      <GridItem area='aside' bg='gold'>Aside</GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue'>Main</GridItem>
  </Grid>
}

export default App
