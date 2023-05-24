import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Text } from "@chakra-ui/react";

interface Props{
  onSelectGenre:(genre:Genre)=>void;  //this function run when a genre is selected, and remember this function is require handlefunctionclick something like this to handle at front page.
  kukubird:Genre|null;
} //this whole props need bring to front handlecick something like this

const GenreList = ({kukubird,onSelectGenre}:Props) => {  //{onSelectGenre}:Props} this function will be called when genre is selected
  const { data,isLoading,error } = useGenres();
  if (error) return null; //if there is an error,return null
  if (isLoading) return <Spinner />;  //if there is loading, return a spinner
  //once the data is loaded and no error occurs, the component renders below

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Button fontWeight={genre.id===kukubird?.id?'bold':'normal'} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
