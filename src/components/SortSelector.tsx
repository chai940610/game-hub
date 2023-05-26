import { Menu,MenuButton,MenuList,MenuItem,Button } from "@chakra-ui/react"
import { BsChevronBarDown } from "react-icons/bs"

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Order by:Relevance</MenuButton>
            <MenuList>
                <MenuItem>hello</MenuItem>
                <MenuItem>name</MenuItem>
                <MenuItem>age</MenuItem>
            </MenuList>
        </Menu>
      )
}

export default SortSelector