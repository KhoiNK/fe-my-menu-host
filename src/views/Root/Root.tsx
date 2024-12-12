import React, { ChangeEvent } from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import i18n from "../../util/i18n";
import AppStyle from "../../styles/globalStyle";
import { BodyStyled } from "./styles";
import routes from "../../routes";
import { BrowserRouter, Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { getTheme, setTheme } from "./store/slice";
import { useAppDispatch } from "../../store";

const App: React.FC = () => {
  const appTheme = useSelector(getTheme);
  const dispatch = useAppDispatch();

  const onChangeTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch(setTheme(value));
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[appTheme]}>
        <I18nextProvider i18n={i18n}>
          <AppStyle />
          <select onChange={onChangeTheme}>
            <option value="main">Default</option>
            <option value="priority">Priority</option>
          </select>
          <BodyStyled>
            <Routes>
              {routes.map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Routes>
            {/*<RemoteComponent*/}
            {/*  remoteName="main"*/}
            {/*  remoteUrl="http://localhost:3001/remoteEntry.js"*/}
            {/*  module="Main"*/}
            {/*/>*/}
          </BodyStyled>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
