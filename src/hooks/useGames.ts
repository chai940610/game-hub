import { useState,useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game{
    id:number;
    name:string;
}

interface kuku{ //remember that count and number is taken from this website: https://api.rawg.io/docs/#operation/games_list
    count:number;
    results:Game[]  //because the results at this website, https://api.rawg.io/docs/#operation/games_additions_list, you see the results, is array of games, you click it, then it show the properties of games, we just want the ID and the name of the games enough
}

const useGames=()=>{    
    const[games,setGames]=useState<Game[]>([]);  //so set the Game[]
    const[error,setError]=useState('');
    
    useEffect(()=>{
        const controller= new AbortController();
        apiClient.get<kuku>('/games',{signal:controller.signal})
        .then(res=>setGames(res.data.results))  //there a compilation error here, due we didn't assign game with properties
        .catch(err=>{
            if (err instanceof CanceledError) return;
            setError(err.message)});
        //cleanup function
        return ()=>controller.abort();
    },[]);
    return{games,error};
}
export default useGames;