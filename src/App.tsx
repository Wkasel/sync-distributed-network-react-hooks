import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { ProTip } from "./components/ProTip";

//
export const AppComponent: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <h1>Test</h1>
      </Box>
    </Container>
  );
};
