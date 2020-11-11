import styled, { createGlobalStyle } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#0fb9b1" : "#8854d0")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#8854d0" : "#0fb9b1")};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8854d0",
    },
    secondary: {
      main: "#0fb9b1",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "Roboto", "sans-serif"].join(", "),
  },
  sub: {},
});

export default GlobalStyle;
