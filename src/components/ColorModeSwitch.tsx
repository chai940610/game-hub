import { HStack, Switch, Text,useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const {toggleColorMode,colorMode}=useColorMode();
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode==='dark'} onChange={toggleColorMode} /> {/* understand how this work? which mean the color scheme is green when the page is dark */}
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch