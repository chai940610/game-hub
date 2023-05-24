import React from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
    //get the data from API with usePlatforms.ts
    const{data,error}=usePlatforms();
    if (error) return;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Platforms</MenuButton>
        <MenuList>
            {data.map(cat=><MenuItem key={cat.id}>{cat.name}</MenuItem>)} 
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector