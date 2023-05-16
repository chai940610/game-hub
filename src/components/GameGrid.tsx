import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames(); //the useGames from useGames.ts go to this GameGrid, and isLoading also taken from useGames.ts
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {" "}
        {/* remember that sm is small, md is medium, lg is large, xl is extra large, which mean if big devices they will go for large one */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
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
