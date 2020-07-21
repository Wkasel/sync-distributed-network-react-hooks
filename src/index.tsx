import React from "react";
import { Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppComponent } from "./App";
import { HomePage, CreditsPage } from "./pages";
import theme from "./theme";

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppComponent>
      <Router history={history}>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/home" component={HomePage} />
        <Route exact={true} path="/todo" component={CreditsPage} />
      </Router>
    </AppComponent>
  </ThemeProvider>,
  document.querySelector("#root")
);
