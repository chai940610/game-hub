import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config:ThemeConfig={
    initialColorMode:'dark' //the page initially will be dark, so we need toggle the switch made it become light
};
 const theme=extendTheme({  //extendTheme is used to merge the config and colors object into new theme
    config,
    colors:{
        gray:{
          50:'#f9f9f9',
          100:'#ededed', 
          200:'#d3d3d3',
          300:'#b3b3b3',
          400:'#a0a0a0',
          500:'#898989',
          600:'#6c6c6c', 
          700:'#202020',
          800:'#121212',
          900:'#111',
        }
    }
});  //The extendTheme function is used to extend the default Chakra UI theme

export default theme;