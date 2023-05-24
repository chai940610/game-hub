import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props{
    onSelectPlatform:(platform:Platform)=>void;
    selectedPlatform:Platform|null;
}

const PlatformSelector = ({onSelectPlatform,selectedPlatform}:Props) => {
    //get the data from API with usePlatforms.ts
    const{data,error}=usePlatforms();
    if (error) return;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>{selectedPlatform?.name||'Platforms'}</MenuButton>
        <MenuList>
            {data.map(cat=><MenuItem onClick={()=>onSelectPlatform(cat)} key={cat.id}>{cat.name}</MenuItem>)} 
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector