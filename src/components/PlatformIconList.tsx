import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import { Platform } from '../hooks/useGames'
import { Text } from '@chakra-ui/react'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
interface Props {
    platforms:Platform[]
}

const PlatformIconList = ({platforms}:Props) => {
  const iconMap:{[key:string]:IconType}={
    //name:playstation
    //slug:playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox:FaXbox,
    nintendo:SiNintendo,
    mac:FaApple,
    linux:FaLinux,
    ios:MdPhoneIphone,
    web:BsGlobe,
    andriod:FaAndroid,
  }
  return (
    <HStack marginY={1}>
    {platforms.map((platform)=>(
      <Icon as={iconMap[platform.slug]} color='gray.500' />
    ))} {/*which mean each structure has platform */}
    </HStack>
  )
}

export default PlatformIconList