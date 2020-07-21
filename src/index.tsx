import React from "react";
import { Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { HomePage, CreditsPage, DemoPage } from "./pages";
import theme from "./styles/theme";

const history = createBrowserHistory();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={history}>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/demo" component={DemoPage} />
      <Route exact={true} path="/todo" component={CreditsPage} />
    </Router>
  </ThemeProvider>,
  document.querySelector("#root")
);
