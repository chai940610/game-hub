import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";
// import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props{
  lampu:GameQuery
  // selectedGenre:Genre|null;
  // selectedPlatform:Platform|null;
}

const GameGrid = ({lampu}:Props) => {
  const { data, error, isLoading } = useGames(lampu); //the useGames from useGames.ts go to this GameGrid, and isLoading also taken from useGames.ts
  const skeletons = [34,34100,11,13,1314,26]; //it can be any number, since there is 6 number in array, it will take 6 skeletons to display
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={6}
      >
        {" "}
        {/* remember that sm is small, md is medium, lg is large, xl is extra large, which mean if big devices they will go for large one */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}{/*after loading equal to false */}
        {data.map((cuci) => (
        <GameCardContainer key={cuci.id}>
          <GameCard game={cuci} />
        </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
