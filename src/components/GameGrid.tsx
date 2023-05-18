import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames(); //the useGames from useGames.ts go to this GameGrid, and isLoading also taken from useGames.ts
  const skeletons = [34,34100,11,13,1314,26]; //it can be any number, since there is 6 number in array, it will take 6 skeletons to display
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {" "}
        {/* remember that sm is small, md is medium, lg is large, xl is extra large, which mean if big devices they will go for large one */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}{/*after loading equal to false */}
        {data.map((cuci) => (
        <GameCardContainer>
          <GameCard key={cuci.id} game={cuci} />
        </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
