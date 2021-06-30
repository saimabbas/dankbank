import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  :root 
  {
    font-size: 10px;
    --mainblue: #1022dc;
  --purplishblue: #5c52e9;
  --mainpink: #e553ec;
  --mainferozi: #37BAEB;
  transition: 0.35s;
  }
  * 
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button
{
  cursor: pointer;
}
button:focus,
input:focus,
select:focus
{
  transition: 0.35s;
  outline: 0;
  box-shadow: 0 0 0 0 white;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: var(--mainferozi);
}
button:hover,
input:hover,
select:hover
{
  outline: 0;
}
a 
{
  text-decoration: none;
  &:hover 
  {
      text-decoration: none;
      color: #000;
  }
  h1 {
    font-family: "Teko", "Prompt", sans-serif;
  }
}
`;

export default GlobalStyle;
