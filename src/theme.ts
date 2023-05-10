import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode:'dark' //the page initially will be dark, so we need toggle the switch made it become light
};
 const theme=extendTheme({config});  //The extendTheme function is used to extend the default Chakra UI theme

export default theme;