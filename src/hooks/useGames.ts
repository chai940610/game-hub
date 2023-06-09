// import { useState,useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  //all these attribute is taken from the API
  id: number;
  name: string;
  background_image: string; //background_image is a string because it is an website URL, so we called it as string
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number;  //whole number
  rating:number;  //float, have decimal
}

// interface kuku{ //remember that count and number is taken from this website: https://api.rawg.io/docs/#operation/games_list
//     count:number;
//     results:Game[]  //because the results at this website, https://api.rawg.io/docs/#operation/games_additions_list, you see the results, is array of games, you click it, then it show the properties of games, we just want the ID and the name of the games enough
// }

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  cacing:GameQuery
) =>
  useData<Game>(
    "/games",
    { params: { genres: cacing.genre?.id, platforms: cacing.platform?.id,ordering:cacing.abc,search:cacing.kambing } }, //this one is take all our thing to search IN API
    [cacing] /*selectedGenre?.id, selectedPlatform?.id*/ //since I comment it, everytime the gameQuery change, it will refresh the data
  ); //the params is a query parameter, example, https://example.com/search?query=apple&type=fruit, the word query and word type are query parameter, search for the term apple in the category of fruit
//games=endpoint, { params: { genres: selectedGenre?.id } }=requestConfig,[selectedGenre?.id]=deps, okay [selectedGenre?.id] when change, which mean if equal to 1, 2 or whatever, the useEffect hook will run in the useData
//     const[games,setGames]=useState<Game[]>([]);  //so set the Game[]
//     const[error,setError]=useState('');
//     const[isLoading,setLoading]=useState(false);

//     useEffect(()=>{
//         const controller= new AbortController();
//         //before call API
//         setLoading(true);
//         apiClient.get<kuku>('/games',{signal:controller.signal})
//         .then(res=>{
//             setGames(res.data.results);
//             //when it back set the loading to false
//             setLoading(false);
//         })  //there a compilation error here, due we didn't assign game with properties
//         .catch(err=>{
//             if (err instanceof CanceledError) return;
//             setError(err.message)
//             setLoading(false);
//         });

//         //cleanup function
//         return ()=>controller.abort();  //this is important, know what is cleanup function? when the component unmounted, it means when user go to other tab, mean navigate away from the page
//     },[]);
//     return{games,error,isLoading};    //this two will go to the GameGrid.tsx function
// }
export default useGames;
