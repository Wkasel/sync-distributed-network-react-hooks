import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: "absolute",
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerHeader: { ...theme.mixins.toolbar },
  content: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64,
    },
  },
}));
