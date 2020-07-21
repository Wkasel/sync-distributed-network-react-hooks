import React from "react";
import Typography from "@material-ui/core/Typography";
import { SyncApp } from "../components/Sync/Sync";

export const DemoPage = () => {
  return (
    <>
      <Typography variant="body1">Test</Typography>
      <SyncApp>
        <div></div>
      </SyncApp>
    </>
  );
};
