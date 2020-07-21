import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./HeaderStyles";

export const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap={isMobile}>
          Create-React-App with Material-UI, Typescript, Redux and Routing
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
