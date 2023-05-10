import { Button, ButtonGroup, Grid, GridItem,Show } from '@chakra-ui/react'

function App() {
  return <Grid templateAreas={{
    base:`"nav" "main"`,  //for mobile device
    lg:`"nav nav" "aside main"`  //large devices, wider than 1024px
    }}>
    <GridItem area='nav' bg='coral'>Nav</GridItem>
    <Show above="lg">
      <GridItem area='aside' bg='gold'>Aside</GridItem>
    </Show>
    <GridItem area='main' bg='dodgerblue'>Main</GridItem>
  </Grid>
}

export default App
