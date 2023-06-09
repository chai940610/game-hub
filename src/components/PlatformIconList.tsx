import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa';
import { Platform } from '../hooks/useGames'
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import {IconType} from "react-icons";

interface Props {
    platforms:Platform[]
}

const PlatformIconList = ({platforms}:Props) => {
  const iconMap:{[key:string]:IconType} = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox:FaXbox,
  nintendo:SiNintendo,
  mac:FaApple,
  linux:FaLinux,
  ios:MdPhoneIphone,
  web:BsGlobe,
  andriod:FaAndroid,
  };
  
  return (
  <HStack marginY={1}>
  {platforms.map((platform) => (
  <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500' />   //The as prop specifies the type of element that the icon will be rendered as
  ))} {/*which mean each structure has platform */}
  </HStack>
  )
  }
  
  export default PlatformIconList