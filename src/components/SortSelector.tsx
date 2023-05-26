import { Menu,MenuButton,MenuList,MenuItem,Button } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"

interface Props{
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string;
}

const SortSelector = ({onSelectSortOrder,sortOrder}:Props) => {
    const sortOrders=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},    //because we want to show the newest games first, so we use -added, to show the oldest game, we use added only
        {value:'name',label:'Name'},
        {value:'-released',label:'Release date'},
        {value:'metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'},
    ];
    const currentSortOrder=sortOrders.find(order=>order.value===sortOrder);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Order by:{currentSortOrder?.label||'Relevance'}</MenuButton>
            <MenuList>
                {sortOrders.map(hehe=><MenuItem onClick={()=>onSelectSortOrder(hehe.value)} key={hehe.value} value={hehe.value}>{hehe.label}</MenuItem>)}
            </MenuList>
        </Menu>
      )
}

export default SortSelector