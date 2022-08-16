import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

body{
    font-family: Helvetica, Arial, sans-serif;
    width:100%;
    height: 100%;
}

html{
    --primary:#4d8581;
    width: 100%;
    height: calc(100% - 4rem);
}

#root{
    width: 100%;
    height: 100%;
}
`;
