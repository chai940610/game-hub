import React,{useState, useEffect} from 'react'
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game{
    id:number;
    name:string;
}

interface kuku{
    count:number;
    results:Game[]  //because the results at this website, https://api.rawg.io/docs/#operation/games_additions_list, you see the results, is array of games, you click it, then it show the properties of games, we just want the ID and the name of the games enough
}

const GameGrid = () => {
    const[games,setGames]=useState<Game[]>([]);  //so set the Game[]
    const[error,setError]=useState('');

    useEffect(()=>{
        apiClient.get<kuku>('/dsdsgames')
        .then(res=>setGames(res.data.results))  //there a compilation error here, due we didn't assign game with properties
        .catch(err=>setError(err.message));
    })
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