import React,{useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';


const GameGrid = () => {
    const{games,error}=useGames();
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
        {games.map(cuci=><li key={cuci.id}>{cuci.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid