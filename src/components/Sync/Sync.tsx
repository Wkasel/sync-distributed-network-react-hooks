import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
// import { ProTip } from "../ProTip";
import { useProfileContext } from "../../context/AppProvider";

import { ProfileContextProvider } from "../../context/AppProvider";
import { SyncGeoModule } from "./modules/SyncGeo";

const defaults = { username: "Anonymous User" };

export const SyncApp: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { profile } = useProfileContext();
  return (
    <ProfileContextProvider defaults={defaults}>
      <Container maxWidth="sm">
        <Box my={4}> {JSON.stringify(profile)}</Box>
        <Box my={4}>
          <SyncGeoModule />
        </Box>
      </Container>
    </ProfileContextProvider>
  );
};
