import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props{
    //onSelectPlatform takes one argument, which is Platform object, that contains the name and ID of the platform.
    onSelectPlatform:(platform1:Platform)=>void; //onSelectPlatform is a property within the Props, also specific the onSelectPlatform property should be a function
    selectedPlatform:Platform|null; //the selectedPlatform prop is the platform that is currently selected
}

const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
    //get the data from API with usePlatforms.ts
    const{data,error}=usePlatforms();
    if (error) return;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>{selectedPlatform?.name||'Platforms'}</MenuButton>
        <MenuList>
            {data.map(cat=><MenuItem onClick={()=>onSelectPlatform(cat)} key={cat.id}>{cat.name}</MenuItem>)} {/*the key must be unique,in this case, the key is the cat.id*/ }
                                            {/*the onSelectPlatform function will be called with the value of the cat object, the cat object contains the name and ID of the platform.*/}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector;