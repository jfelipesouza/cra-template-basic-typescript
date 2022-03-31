import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes } from "./screens/routes";
import { light } from "./styles/theme";
import GlobalStyle from "./styles/global";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
